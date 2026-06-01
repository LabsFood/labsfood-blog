/**
 * API Route — Envoi du formulaire "Devenir chef partenaire" via Brevo SMTP.
 *
 * Variables d'environnement (.env) :
 *   - BREVO_SMTP_USER   : login SMTP Brevo
 *   - BREVO_SMTP_PASS   : clé SMTP Brevo
 *   - BREVO_FROM_EMAIL  : adresse "from" (domaine vérifié dans Brevo)
 *   - CONTACT_TO_EMAIL  : destinataire (par défaut = BREVO_FROM_EMAIL)
 */

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ─── Label maps ───────────────────────────────────────────────────────────────

const PROFILE_TYPE_LABELS: Record<string, string> = {
  etudiant: "Étudiant(e)",
  pro: "Professionnel(le) de la restauration",
  reconversion: "Passionné(e) en reconversion",
  autre: "Autre",
}

const STATUS_LABELS: Record<string, string> = {
  etudiant: "Étudiant(e)",
  auto: "Auto-entrepreneur(e)",
  autre: "Autre",
}

const EXPERIENCE_LABELS: Record<string, string> = {
  debutant: "Débutant(e) — aucune expérience professionnelle",
  quelques: "Quelques expériences",
  expert: "Expérimenté(e) — 1 à 3 ans",
  confirme: "Confirmé(e) — plus de 3 ans",
}

const MISSION_LABELS: Record<string, string> = {
  plonge: "Plonge et nettoyage",
  preparations: "Préparations de base",
  commis: "Aide-cuisinier / Commis",
  service: "Service en salle / Runner",
}

const LANGUAGE_LABELS: Record<string, string> = {
  francais: "Français",
  anglais: "Anglais",
  arabe: "Arabe",
  espagnol: "Espagnol",
  portugais: "Portugais",
  italien: "Italien",
  allemand: "Allemand",
  mandarin: "Mandarin",
}

// ─── Anti-XSS ─────────────────────────────────────────────────────────────────

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\n/g, '<br>')
}

// ─── SMTP ─────────────────────────────────────────────────────────────────────

function buildTransporter() {
  const user = process.env.BREVO_SMTP_USER
  const pass = process.env.BREVO_SMTP_PASS
  if (!user || !pass) throw new Error('BREVO_SMTP_USER / BREVO_SMTP_PASS manquants dans .env')
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

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const role = (formData.get('role') as string)?.trim() ?? ''
    const fullName = (formData.get('fullName') as string)?.trim() ?? ''
    const phone = (formData.get('phone') as string)?.trim() ?? ''
    const email = (formData.get('email') as string)?.trim() ?? ''
    const address = (formData.get('address') as string)?.trim() ?? ''

    const firstName = (formData.get('firstName') as string)?.trim() ?? ''
    const department = (formData.get('department') as string)?.trim() ?? ''
    const photo = formData.get('photo') as File | null
    const profileType = (formData.get('profileType') as string)?.trim() ?? ''
    const profileTypeAutre = (formData.get('profileTypeAutre') as string)?.trim() ?? ''
    const status = (formData.get('status') as string)?.trim() ?? ''
    const statusAutre = (formData.get('statusAutre') as string)?.trim() ?? ''
    const languages = formData.getAll('languages').map((v) => v.toString())
    const pitch = (formData.get('pitch') as string)?.trim() ?? ''
    const calendlyLink = (formData.get('calendlyLink') as string)?.trim() ?? ''

    const experience = (formData.get('experience') as string)?.trim() ?? ''
    const missions = formData.getAll('missions').map((v) => v.toString())

    const idDocument = formData.get('idDocument') as File | null

    // Validate
    if (!fullName || fullName.length < 2) {
      return NextResponse.json({ success: false, error: 'Le nom complet est requis.' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "L'adresse e-mail est invalide." }, { status: 400 })
    }
    if (!role) {
      return NextResponse.json({ success: false, error: 'Le rôle est requis.' }, { status: 400 })
    }

    // Build file attachments
    const attachments: { filename: string; content: Buffer; contentType: string }[] = []
    if (photo && photo.size > 0) {
      attachments.push({
        filename: `photo_${photo.name}`,
        content: Buffer.from(await photo.arrayBuffer()),
        contentType: photo.type,
      })
    }
    if (idDocument && idDocument.size > 0) {
      attachments.push({
        filename: `identite_${idDocument.name}`,
        content: Buffer.from(await idDocument.arrayBuffer()),
        contentType: idDocument.type,
      })
    }

    // SMTP
    const from = process.env.BREVO_FROM_EMAIL!
    const to = process.env.CONTACT_TO_EMAIL ?? from

    let transporter
    try {
      transporter = buildTransporter()
      await transporter.verify()
      console.log('[chef] ✅ Brevo SMTP connecté')
    } catch (err) {
      console.error('[chef] ❌ SMTP verify failed:', err)
      return NextResponse.json(
        { success: false, error: 'Serveur mail indisponible. Réessayez plus tard.' },
        { status: 502 },
      )
    }

    // ─── Couleurs brand ───
    const navy = '#00234B'
    const orange = '#E67E22'
    const orangeDeep = '#C56812'
    const orangePale = '#FDEBD8'
    const cream = '#F4F6F7'
    const ink = '#0F1F2E'

    const roleLabel = role === 'animateur' ? 'Animateur' : 'Assistant'
    const roleSub = role === 'animateur' ? 'Atelier culinaire' : 'Assistance culinaire'
    const displayName = firstName || fullName.split(' ')[0]

    const profileTypeDisplay =
      profileType === 'autre' && profileTypeAutre
        ? `Autre — ${profileTypeAutre}`
        : (PROFILE_TYPE_LABELS[profileType] ?? profileType)

    const statusDisplay =
      status === 'autre' && statusAutre
        ? `Autre — ${statusAutre}`
        : (STATUS_LABELS[status] ?? status)

    const experienceLabel = EXPERIENCE_LABELS[experience] ?? experience
    const languagesList = languages.map((l) => LANGUAGE_LABELS[l] ?? l).join(', ')
    const missionsList = missions.map((m) => MISSION_LABELS[m] ?? m).join(', ')

    const dateStr = new Date().toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    // ─── Helpers HTML ───
    function infoRow(label: string, value: string, isLast = false): string {
      if (!value) return ''
      return `<tr>
        <td style="padding:12px 18px;${isLast ? '' : 'border-bottom:1px solid rgba(0,35,75,0.07);'}">
          <p style="margin:0;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${navy};opacity:0.45;font-weight:500;">${label}</p>
          <p style="margin:5px 0 0;font-size:14px;color:${ink};font-weight:500;line-height:1.5;">${escapeHtml(value)}</p>
        </td>
      </tr>`
    }

    function sectionBlock(title: string, icon: string, rows: string): string {
      if (!rows.trim()) return ''
      return `<div style="margin-bottom:24px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <span style="font-size:16px;">${icon}</span>
          <p style="margin:0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:${orange};font-weight:700;">${title}</p>
        </div>
        <table cellpadding="0" cellspacing="0" border="0" width="100%"
          style="border-collapse:collapse;background:#ffffff;border-radius:12px;border:1px solid rgba(0,35,75,0.09);overflow:hidden;">
          ${rows}
        </table>
      </div>`
    }

    const mailHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Candidature chef partenaire — Lab's Food</title>
</head>
<body style="margin:0;background:${cream};font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;color:${ink};line-height:1.6;padding:24px 12px;">

  <table cellpadding="0" cellspacing="0" border="0" align="center"
    style="max-width:620px;width:100%;margin:0 auto;border-radius:20px;overflow:hidden;box-shadow:0 10px 40px rgba(0,35,75,0.13);">

    <!-- ── HEADER ── -->
    <tr>
      <td style="background:linear-gradient(140deg,#00234B 0%,#001530 100%);padding:48px 36px 40px;text-align:center;">
        <p style="margin:0;font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:${orange};font-weight:700;">
          Lab&apos;s Food — Nouvelle candidature
        </p>
        <h1 style="margin:10px 0 4px;font-size:30px;font-weight:700;color:#00234B;letter-spacing:-0.02em;line-height:1.2;">
          ${escapeHtml(displayName)} souhaite rejoindre
        </h1>
        <p style="margin:0 0 22px;font-size:18px;color:rgba(255,255,255,0.7);font-style:italic;font-weight:300;">
          l&apos;équipe Lab&apos;s Food
        </p>
        <!-- Role badge -->
        <div style="display:inline-block;background:${orange};border-radius:999px;padding:0 4px;">
          <table cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="padding:9px 22px;color:#ffffff;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;white-space:nowrap;">
                ${roleSub}
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>

    <!-- ── META DATE ── -->
    <tr>
      <td style="background:#ffffff;padding:18px 36px 4px;text-align:right;">
        <p style="margin:0;font-size:11px;color:${ink};opacity:0.4;font-style:italic;">
          Reçu le ${dateStr}
        </p>
      </td>
    </tr>

    <!-- ── BODY ── -->
    <tr>
      <td style="background:#ffffff;padding:16px 36px 36px;">

        ${sectionBlock('Coordonnées', '📋', `
          ${infoRow('Nom complet', fullName)}
          ${infoRow('Prénom affiché', firstName)}
          ${infoRow('Adresse e-mail', email)}
          ${infoRow('Téléphone', phone)}
          ${infoRow('Adresse', address, true)}
        `)}

        ${sectionBlock('Profil public', '🌟', `
          ${infoRow('Département', department)}
          ${infoRow('Profil principal', profileTypeDisplay)}
          ${infoRow('Statut', statusDisplay)}
          ${infoRow('Langues parlées', languagesList, true)}
        `)}

        ${pitch ? `
        <div style="margin-bottom:24px;padding:18px 20px;border-left:4px solid ${orange};background:${orangePale};border-radius:0 12px 12px 0;">
          <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${orangeDeep};font-weight:700;">Pitch du candidat</p>
          <p style="margin:0;font-size:14px;color:${ink};line-height:1.75;font-style:italic;">&ldquo;${escapeHtml(pitch)}&rdquo;</p>
        </div>` : ''}

        ${calendlyLink ? `
        <div style="margin-bottom:24px;padding:14px 18px;background:${cream};border-radius:12px;border:1px solid rgba(0,35,75,0.09);">
          <p style="margin:0 0 5px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${navy};opacity:0.5;">Lien de contact</p>
          <a href="${encodeURI(calendlyLink)}" style="color:${orange};text-decoration:none;font-weight:500;font-size:14px;word-break:break-all;">${escapeHtml(calendlyLink)}</a>
        </div>` : ''}

        ${sectionBlock('Expérience', '⭐', `
          ${infoRow('Niveau', experienceLabel)}
          ${role === 'assistant' && missionsList
        ? infoRow('Missions souhaitées', missionsList, true)
        : infoRow('Type de mission', 'Animation d\'ateliers culinaires', true)
      }
        `)}

        <!-- Consentements -->
        <div style="margin-bottom:24px;padding:16px 20px;background:rgba(230,126,34,0.07);border-radius:12px;border:1px solid rgba(230,126,34,0.22);">
          <p style="margin:0 0 10px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${orange};font-weight:700;">✅ Consentements validés</p>
          <p style="margin:0 0 4px;font-size:13px;color:${ink};">✔ Conditions Générales d&apos;Utilisation &amp; Politique de confidentialité</p>
          <p style="margin:0;font-size:13px;color:${ink};">✔ Droit à l&apos;image accordé</p>
        </div>

        ${attachments.length > 0 ? `
        <div style="margin-bottom:28px;padding:14px 18px;background:${cream};border-radius:12px;border:1px solid rgba(0,35,75,0.09);">
          <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${navy};opacity:0.5;">
            Pièces jointes (${attachments.length})
          </p>
          ${attachments.map((a) => `<p style="margin:3px 0;font-size:13px;color:${ink};">📎 ${escapeHtml(a.filename)}</p>`).join('')}
        </div>` : ''}

        <!-- CTA Reply -->
        <div style="text-align:center;padding-top:8px;">
          <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re : Candidature ${roleLabel} — ${displayName}`)}"
            style="display:inline-block;padding:14px 40px;background:${orange};color:#ffffff;text-decoration:none;border-radius:999px;font-size:14px;font-weight:700;letter-spacing:0.05em;box-shadow:0 6px 18px rgba(230,126,34,0.40);">
            ↩&nbsp; Répondre à ${escapeHtml(displayName)}
          </a>
        </div>

      </td>
    </tr>

    <!-- ── FOOTER ── -->
    <tr>
      <td style="padding:18px 36px;background:${cream};text-align:center;border-top:1px solid rgba(0,35,75,0.08);">
        <p style="margin:0;font-size:11px;color:${ink};opacity:0.45;line-height:1.6;">
          Reçu via le formulaire de candidature chef partenaire sur
          <a href="https://labsfood.fr" style="color:${navy};text-decoration:none;font-weight:600;">labsfood.fr</a>
        </p>
      </td>
    </tr>

  </table>

</body>
</html>`

    const mailText = `Nouvelle candidature chef partenaire — Lab's Food
Rôle : ${roleLabel} (${roleSub})

── COORDONNÉES ──
Nom    : ${fullName}
Prénom : ${firstName}
Email  : ${email}
Tél.   : ${phone}
Adresse: ${address}

── PROFIL PUBLIC ──
Département     : ${department}
Profil principal: ${profileTypeDisplay}
Statut          : ${statusDisplay}
Langues parlées : ${languagesList}
Pitch           : ${pitch}
Lien contact    : ${calendlyLink}

── EXPÉRIENCE ──
Niveau : ${experienceLabel}
${role === 'assistant' && missionsList ? `Missions : ${missionsList}` : 'Rôle : Animation d\'ateliers culinaires'}

── CONSENTEMENTS ──
✓ CGU et politique de confidentialité acceptées
✓ Droit à l'image accordé

${attachments.length > 0 ? `── PIÈCES JOINTES (${attachments.length}) ──\n${attachments.map((a) => `• ${a.filename}`).join('\n')}` : ''}

— Reçu le ${new Date().toLocaleString('fr-FR')}`

    let lastError: unknown = null
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        await transporter.sendMail({
          from: `"Lab's Food — Candidatures" <${from}>`,
          to,
          replyTo: email,
          subject: `[Candidature] ${roleLabel} — ${fullName}`,
          html: mailHtml,
          text: mailText,
          attachments,
        })
        return NextResponse.json({ success: true })
      } catch (err) {
        lastError = err
        if (attempt < 2) await new Promise((r) => setTimeout(r, 1500))
      }
    }

    console.error('[chef] Mail send failed:', lastError)
    return NextResponse.json(
      { success: false, error: "Impossible d'envoyer la candidature. Réessayez plus tard." },
      { status: 502 },
    )
  } catch (err) {
    console.error('[chef] Route error:', err)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur. Réessayez plus tard.' },
      { status: 500 },
    )
  }
}
