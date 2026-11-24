/**
 * API Route — Formulaire de contact.
 *
 * Transmet le message à l'API Lab's Food (`POST /contact-messages`), qui
 * l'enregistre dans la boîte de réception de la console admin et prévient
 * l'équipe par email. Ce site n'envoie plus d'email lui-même : une seule source
 * de vérité, et un message qui n'est pas perdu si l'email échoue.
 *
 * Le navigateur parle à cette route, pas à l'API : même origine (pas de CORS,
 * que le visiteur arrive par labsfood.fr ou www.labsfood.fr), et l'adresse de
 * l'API se règle au démarrage du serveur, pas à la compilation.
 *
 * Variable d'environnement :
 *   - LF_API_URL : adresse de l'API (par défaut https://lf-api.labsfood.fr)
 */

import { NextResponse } from 'next/server'
import { validateContact } from '@/lib/contact-validation'

const API_URL = (process.env.LF_API_URL ?? 'https://lf-api.labsfood.fr').replace(/\/$/, '')

// Le formulaire envoie une clé ; la console affiche le libellé.
const SUBJECT_LABELS: Record<string, string> = {
  'batch-cooking': 'Batch cooking',
  kossam: 'Kossam (produit)',
  koni: 'Marinade Köni (produit)',
  autre: 'Autre demande',
}

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  /** Champ piège, invisible : seul un robot le remplit. */
  website?: string
}

const failure = (error: string, status: number) =>
  NextResponse.json({ success: false, error }, { status })

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return failure('Requête invalide.', 400)
  }

  const data = {
    name: body.name?.trim() ?? '',
    email: body.email?.trim() ?? '',
    phone: body.phone?.trim() ?? '',
    subject: body.subject?.trim() ?? '',
    message: body.message?.trim() ?? '',
  }
  // Les mêmes règles que le formulaire : un envoi qui le contourne reçoit la
  // même réponse, en français. L'API revalide tout de son côté.
  const invalid = Object.values(validateContact(data))[0]
  if (invalid) return failure(invalid, 400)

  // L'API limite les envois par adresse IP : on lui transmet celle du visiteur,
  // sinon tous les visiteurs partageraient le quota de ce serveur.
  const visitorIp = request.headers.get('x-forwarded-for')

  let res: Response
  try {
    res = await fetch(`${API_URL}/contact-messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(visitorIp ? { 'X-Forwarded-For': visitorIp } : {}),
      },
      body: JSON.stringify({
        source: 'labsfood',
        name: data.name,
        email: data.email,
        ...(data.phone ? { phone: data.phone } : {}),
        ...(data.subject ? { subject: SUBJECT_LABELS[data.subject] ?? data.subject } : {}),
        message: data.message,
        ...(body.website ? { website: body.website } : {}),
      }),
      signal: AbortSignal.timeout(15_000),
    })
  } catch (err) {
    console.error('[contact] API injoignable :', err)
    return failure('Le service est momentanément indisponible. Réessayez plus tard.', 502)
  }

  if (res.ok) return NextResponse.json({ success: true })

  if (res.status === 429) {
    return failure('Trop de messages envoyés. Réessayez dans une heure.', 429)
  }
  if (res.status === 400) {
    return failure('Certains champs ne sont pas valides. Vérifiez votre saisie.', 400)
  }
  console.error('[contact] API a répondu', res.status, await res.text().catch(() => ''))
  return failure("Impossible d'envoyer le message. Réessayez plus tard.", 502)
}
