/**
 * API Route — Envoi du formulaire de contact via Brevo SMTP (Nodemailer).
 *
 * Variables d'environnement (.env) :
 *   - BREVO_SMTP_USER   : login SMTP Brevo (ex: ad29fd001@smtp-brevo.com)
 *   - BREVO_SMTP_PASS   : clé SMTP Brevo
 *   - BREVO_FROM_EMAIL  : adresse "from" (domaine vérifié dans Brevo)
 *   - CONTACT_TO_EMAIL  : destinataire (par défaut = BREVO_FROM_EMAIL)
 */

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ─── Subject mapping ──────────────────────────────────────────────────────
const SUBJECT_LABELS: Record<string, string> = {
  'batch-cooking': 'Batch cooking',
  'assistance-culinaire': 'Assistance culinaire',
  'atelier-culinaire': 'Atelier culinaire',
  kossam: 'Kossam (produit)',
  'devenir-chef': 'Devenir chef partenaire',
  autre: 'Autre demande',
}

function labelForSubject(subject: string) {
  return SUBJECT_LABELS[subject] ?? subject
}

// ─── Validation ───────────────────────────────────────────────────────────
type ContactPayload = {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

function validate(data: ContactPayload): string[] {
  const errors: string[] = []
  if (!data.name?.trim() || data.name.trim().length < 2) {
    errors.push('Le nom est requis (2 caractères minimum).')
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email?.trim() || !emailRegex.test(data.email)) {
    errors.push("L'email est invalide.")
  }
  if (!data.message?.trim() || data.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères.')
  }
  return errors
}

// ─── Transporteur Nodemailer (Brevo SMTP — STARTTLS 587) ──────────────────
function buildTransporter() {
  const user = process.env.BREVO_SMTP_USER
  const pass = process.env.BREVO_SMTP_PASS

  if (!user || !pass) {
    throw new Error('BREVO_SMTP_USER / BREVO_SMTP_PASS manquants dans .env')
  }

  return nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: { user, pass },
    tls: { rejectUnauthorized: false, minVersion: 'TLSv1.2' },
    connectionTimeout: 30_000,
    greetingTimeout: 20_000,
    socketTimeout: 30_000,
    logger: process.env.NODE_ENV !== 'production',
    debug: process.env.NODE_ENV !== 'production',
  })
}

// ─── Anti-XSS ─────────────────────────────────────────────────────────────
function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\n/g, '<br>')
}

// ─── POST handler ────────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const data: ContactPayload = {
      name: body.name?.trim() ?? '',
      email: body.email?.trim() ?? '',
      phone: body.phone?.trim() ?? '',
      subject: body.subject?.trim() ?? '',
      message: body.message?.trim() ?? '',
    }

    const errors = validate(data)
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: errors[0], details: errors },
        { status: 400 },
      )
    }

    const from = process.env.BREVO_FROM_EMAIL!
    const to = process.env.CONTACT_TO_EMAIL ?? from

    let transporter
    try {
      transporter = buildTransporter()
      await transporter.verify()
      console.log('[contact] ✅ Brevo SMTP connecté')
    } catch (err) {
      const msg = (err as Error)?.message ?? String(err)
      console.error('[contact] ❌ Brevo SMTP verify failed:', err)
      return NextResponse.json(
        {
          success: false,
          error: 'Serveur mail indisponible. Réessayez plus tard.',
          ...(process.env.NODE_ENV !== 'production' ? { debug: msg } : {}),
        },
        { status: 502 },
      )
    }

    // ─── Couleurs brand ───
    const navy = '#00234B'
    const orange = '#E67E22'
    const cream = '#F4F6F7'
    const ink = '#0F1F2E'

    const subjectLabel = data.subject ? labelForSubject(data.subject) : 'Demande générale'

    const mailHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;background:${cream};font-family:'Segoe UI',Tahoma,Geneva,sans-serif;color:${ink};line-height:1.6;padding:24px;">
  <table cellpadding="0" cellspacing="0" border="0" align="center"
    style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(0,35,75,0.08);">
    <tr>
      <td style="background:${navy};padding:36px 32px;text-align:center;color:#ffffff;">
        <p style="margin:0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:${orange};">— Lab's Food</p>
        <h1 style="margin:14px 0 0;font-size:24px;font-weight:600;letter-spacing:-0.01em;">
          Nouvelle demande de contact
        </h1>
        <p style="margin:8px 0 0;opacity:0.7;font-size:14px;font-style:italic;">We create what you love!</p>
      </td>
    </tr>

    <tr>
      <td style="padding:32px;">
        <p style="margin:0 0 24px;color:${ink};opacity:0.7;font-size:14px;">
          Demande reçue le ${new Date().toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })}
        </p>

        <div style="display:inline-block;padding:6px 14px;border-radius:999px;background:${orange};color:#ffffff;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:24px;">
          ${escapeHtml(subjectLabel)}
        </div>

        <table cellpadding="0" cellspacing="0" border="0" width="100%"
          style="border-collapse:collapse;background:${cream};border-radius:12px;padding:8px;">
          <tr>
            <td style="padding:14px 18px;border-bottom:1px solid rgba(0,35,75,0.08);">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${navy};opacity:0.5;">Nom complet</p>
              <p style="margin:4px 0 0;font-size:15px;color:${ink};font-weight:500;">${escapeHtml(data.name)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 18px;border-bottom:1px solid rgba(0,35,75,0.08);">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${navy};opacity:0.5;">Email</p>
              <p style="margin:4px 0 0;font-size:15px;">
                <a href="mailto:${escapeHtml(data.email)}" style="color:${orange};text-decoration:none;font-weight:500;">${escapeHtml(data.email)}</a>
              </p>
            </td>
          </tr>
          ${data.phone
      ? `<tr>
            <td style="padding:14px 18px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${navy};opacity:0.5;">Téléphone</p>
              <p style="margin:4px 0 0;font-size:15px;color:${ink};font-weight:500;">${escapeHtml(data.phone)}</p>
            </td>
          </tr>`
      : ''
    }
        </table>

        <div style="margin-top:28px;">
          <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${navy};opacity:0.5;">Message</p>
          <div style="padding:18px 20px;border-left:3px solid ${orange};background:${cream};border-radius:0 12px 12px 0;color:${ink};font-size:14px;line-height:1.7;">
            ${escapeHtml(data.message)}
          </div>
        </div>

        <div style="margin-top:32px;text-align:center;">
          <a href="mailto:${escapeHtml(data.email)}?subject=Re%3A%20${encodeURIComponent(subjectLabel)}"
            style="display:inline-block;padding:12px 28px;background:${navy};color:#ffffff;text-decoration:none;border-radius:999px;font-size:13px;font-weight:500;letter-spacing:0.05em;">
            ↩ Répondre à ${escapeHtml(data.name.split(' ')[0])}
          </a>
        </div>
      </td>
    </tr>

    <tr>
      <td style="padding:20px 32px;background:${cream};text-align:center;font-size:12px;color:${ink};opacity:0.6;">
        Reçu via le formulaire de <a href="https://labsfood.fr" style="color:${navy};text-decoration:none;font-weight:500;">labsfood.fr</a>
      </td>
    </tr>
  </table>
</body>
</html>`

    const mailText = `Nouvelle demande de contact — Lab's Food

Sujet : ${subjectLabel}

Nom    : ${data.name}
Email  : ${data.email}${data.phone ? `\nTéléphone : ${data.phone}` : ''}

Message :
${data.message}

— Reçu le ${new Date().toLocaleString('fr-FR')}`

    let lastError: unknown = null
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        await transporter.sendMail({
          from: `"Lab's Food — Site" <${from}>`,
          to,
          replyTo: data.email,
          subject: `[Lab's Food] ${subjectLabel} — ${data.name}`,
          html: mailHtml,
          text: mailText,
        })
        return NextResponse.json({ success: true })
      } catch (err) {
        lastError = err
        if (attempt < 2) await new Promise((r) => setTimeout(r, 1500))
      }
    }

    console.error('Mail send failed:', lastError)
    return NextResponse.json(
      { success: false, error: "Impossible d'envoyer le message. Réessayez plus tard." },
      { status: 502 },
    )
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur. Réessayez plus tard.' },
      { status: 500 },
    )
  }
}
