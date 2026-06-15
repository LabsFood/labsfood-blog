'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  User,
  Phone,
  MessageSquare,
  Tag,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * FORMULAIRE DE CONTACT — design épuré navy/orange.
 *
 * Poste vers /api/contact (nodemailer + OVH SMTP).
 * Champs : nom, email, téléphone (optionnel), sujet, message (≥ 10 car.).
 */

const SUBJECTS = [
  { value: 'batch-cooking', label: 'Batch cooking' },
  { value: 'assistance-culinaire', label: 'Assistance culinaire' },
  { value: 'atelier-culinaire', label: 'Atelier culinaire' },
  { value: 'kossam', label: 'Kossam (produit)' },
  { value: 'nous-rejoindre', label: 'Nous rejoindre' },
  { value: 'autre', label: 'Autre demande' },
] as const

type FieldState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type Status =
  | { type: 'idle' }
  | { type: 'submitting' }
  | { type: 'success' }
  | { type: 'error'; message: string }

const INITIAL: FieldState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const [fields, setFields] = useState<FieldState>(INITIAL)
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  function update<K extends keyof FieldState>(key: K, value: FieldState[K]) {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (fields.message.trim().length < 10) {
      setStatus({
        type: 'error',
        message: 'Votre message doit contenir au moins 10 caractères.',
      })
      return
    }

    setStatus({ type: 'submitting' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const json = await res.json()

      if (res.ok && json.success) {
        setStatus({ type: 'success' })
        setFields(INITIAL)
      } else {
        setStatus({
          type: 'error',
          message: json.error ?? 'Une erreur est survenue. Réessayez.',
        })
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Connexion impossible. Vérifiez votre réseau.',
      })
    }
  }

  const isSubmitting = status.type === 'submitting'
  const messageRemaining = Math.max(10 - fields.message.trim().length, 0)

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      {/* ─── Status banner ─── */}
      <AnimatePresence mode="wait">
        {status.type === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-3 p-4 rounded-2xl bg-whatsapp/10 border border-whatsapp/30 text-whatsapp-deep"
          >
            <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">Message envoyé !</p>
              <p className="opacity-80 mt-1">
                Merci, nous revenons vers vous très vite — généralement sous 24 h.
              </p>
            </div>
          </motion.div>
        )}

        {status.type === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-3 p-4 rounded-2xl bg-orange/10 border border-orange/30 text-orange-deep"
          >
            <AlertCircle className="size-5 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">Oups…</p>
              <p className="opacity-80 mt-1">{status.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Nom + Email ─── */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Nom complet"
          icon={User}
          value={fields.name}
          onChange={(v) => update('name', v)}
          required
          placeholder="Ex. Marie Dupont"
        />
        <Field
          id="email"
          label="E-mail"
          icon={Mail}
          type="email"
          value={fields.email}
          onChange={(v) => update('email', v)}
          required
          placeholder="marie@exemple.fr"
        />
      </div>

      {/* ─── Téléphone + Sujet ─── */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          id="phone"
          label="Téléphone"
          icon={Phone}
          type="tel"
          value={fields.phone}
          onChange={(v) => update('phone', v)}
          placeholder="+33 6 00 00 00 00"
          hint="Optionnel"
        />
        <SelectField
          id="subject"
          label="Sujet de la demande"
          icon={Tag}
          value={fields.subject}
          onChange={(v) => update('subject', v)}
          options={SUBJECTS}
          placeholder="— Sélectionner —"
        />
      </div>

      {/* ─── Message ─── */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-navy-mid">
            <MessageSquare className="size-3.5" />
            Votre message <span className="text-orange">*</span>
          </span>
          <span
            className={cn(
              'font-mono text-[0.65rem] tabular-nums',
              fields.message.trim().length === 0
                ? 'text-ink/40'
                : messageRemaining > 0
                  ? 'text-orange-deep'
                  : 'text-whatsapp-deep',
            )}
          >
            {messageRemaining > 0
              ? `${messageRemaining} caractère${messageRemaining > 1 ? 's' : ''} min.`
              : '✓ Longueur OK'}
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={fields.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Décrivez votre demande : nombre de personnes, date, lieu, contraintes alimentaires… plus c'est précis, mieux on vous répond."
          className="w-full px-4 py-3.5 rounded-xl bg-cream-soft border border-navy/15 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-orange focus:bg-cream transition-all resize-none"
        />
      </div>

      {/* ─── Submit ─── */}
      <div className="pt-2 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-ink/55 italic max-w-[60%]">
          En envoyant ce formulaire, vous acceptez d&apos;être recontacté·e par
          Lab&apos;s Food.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'group inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full text-sm font-medium transition-all',
            isSubmitting
              ? 'bg-navy/40 text-cream/70 cursor-wait'
              : 'bg-orange text-cream hover:bg-orange-deep shadow-lg shadow-orange/30',
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Envoi en cours…
            </>
          ) : (
            <>
              Envoyer le message
              <span className="size-9 rounded-full bg-cream/20 grid place-items-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   Composants champ — design épuré uniforme
   ═══════════════════════════════════════════════════════════════════════ */

function Field({
  id,
  label,
  icon: Icon,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
  hint,
}: {
  id: string
  label: string
  icon: React.ElementType
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  placeholder?: string
  hint?: string
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-navy-mid">
        <Icon className="size-3.5" />
        {label}
        {required && <span className="text-orange">*</span>}
        {hint && (
          <span className="ml-auto normal-case tracking-normal italic text-ink/40 text-[0.65rem]">
            {hint}
          </span>
        )}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-4 py-3 rounded-xl bg-cream-soft border border-navy/15 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-orange focus:bg-cream transition-all"
      />
    </label>
  )
}

function SelectField({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string
  label: string
  icon: React.ElementType
  value: string
  onChange: (v: string) => void
  options: readonly { value: string; label: string }[]
  placeholder: string
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-navy-mid">
        <Icon className="size-3.5" />
        {label}
      </span>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-cream-soft border border-navy/15 text-navy text-sm outline-none focus:border-orange focus:bg-cream transition-all cursor-pointer"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/40">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </label>
  )
}
