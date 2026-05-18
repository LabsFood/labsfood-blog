'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Loader2,
  AlertCircle,
  User,
  IdCard,
  ChefHat,
  FileText,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// ── Types ───────────────────────────────────────────────────────────────────
type FieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  textarea?: boolean
  hint?: string
  className?: string
}

// ── Champ atomique ──────────────────────────────────────────────────────────
function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  textarea,
  hint,
  className,
}: FieldProps) {
  return (
    <label className={cn('flex flex-col gap-2', className)}>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy/80">
        {label} {required && <span className="text-terra">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-xl border border-navy/15 bg-cream-soft px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-terra/40 focus:border-terra transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-xl border border-navy/15 bg-cream-soft px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-terra/40 focus:border-terra transition-all"
        />
      )}
      {hint && <span className="text-[0.7rem] text-ink/55">{hint}</span>}
    </label>
  )
}

// ── Définition des étapes ───────────────────────────────────────────────────
const STEPS = [
  {
    id: 'contact',
    title: 'Vos coordonnées',
    description: 'Pour vous contacter et configurer votre bouton de réservation.',
    icon: User,
  },
  {
    id: 'profile',
    title: 'Votre profil',
    description: 'Pour créer un lien de confiance avec les visiteurs.',
    icon: IdCard,
  },
  {
    id: 'workshop',
    title: 'Votre atelier',
    description: 'Le cœur de votre offre — ce qui donnera faim aux clients.',
    icon: ChefHat,
  },
  {
    id: 'documents',
    title: 'Documents',
    description: 'Justificatifs requis pour valider votre profil.',
    icon: FileText,
  },
  {
    id: 'commitments',
    title: 'Engagements',
    description: 'Validation finale et envoi de votre candidature.',
    icon: ShieldCheck,
  },
] as const

type StepStatus = 'idle' | 'submitting' | 'success' | 'error'

// ── Composant principal ─────────────────────────────────────────────────────
export function ChefForm() {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<StepStatus>('idle')
  const [direction, setDirection] = useState<1 | -1>(1)

  const total = STEPS.length
  const current = STEPS[step]
  const progress = ((step + 1) / total) * 100
  const isLast = step === total - 1

  function next() {
    if (step < total - 1) {
      setDirection(1)
      setStep((s) => s + 1)
      window.scrollTo({ top: document.getElementById('chef-form-top')?.offsetTop ?? 0, behavior: 'smooth' })
    }
  }
  function prev() {
    if (step > 0) {
      setDirection(-1)
      setStep((s) => s - 1)
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isLast) {
      next()
      return
    }
    setStatus('submitting')
    // TODO: brancher l'endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  // ── Écran de succès ──
  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-navy text-cream p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="absolute -top-20 -right-20 size-72 bg-terra/25 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -left-20 size-72 bg-teal/30 blur-3xl rounded-full" />
        <div className="relative">
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto size-20 rounded-full bg-whatsapp grid place-items-center mb-8 shadow-2xl"
          >
            <Check className="size-10 text-white" strokeWidth={3} />
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl text-cream">
            Merci, votre candidature est <span className="italic gradient-text-terra">partie</span> !
          </h2>
          <p className="mt-6 text-cream/75 max-w-xl mx-auto leading-relaxed">
            Nous revenons vers vous très rapidement sur WhatsApp ou par email pour
            finaliser votre intégration et planifier l&apos;envoi des pièces
            administratives.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="chef-form-top" className="rounded-3xl bg-cream-soft border border-navy/8 overflow-hidden shadow-sm">
      {/* ─── En-tête stepper ─── */}
      <div className="px-6 md:px-10 pt-8 pb-6 bg-gradient-to-br from-cream-soft via-cream-soft to-cream-deep/30 border-b border-navy/8">
        {/* Indicateurs d'étapes desktop */}
        <ol className="hidden md:flex items-center gap-2 mb-6">
          {STEPS.map((s, i) => {
            const done = i < step
            const active = i === step
            const Icon = s.icon
            return (
              <li key={s.id} className="flex-1 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (i < step) {
                      setDirection(-1)
                      setStep(i)
                    }
                  }}
                  disabled={i > step}
                  className={cn(
                    'relative shrink-0 size-10 rounded-full grid place-items-center transition-all duration-500 border',
                    done && 'bg-terra text-cream border-terra cursor-pointer hover:scale-105',
                    active &&
                      'bg-navy text-cream border-navy ring-4 ring-terra/20 scale-110',
                    !done && !active && 'bg-cream border-navy/15 text-navy/40',
                  )}
                >
                  {done ? <Check className="size-4" /> : <Icon className="size-4" />}
                  {active && (
                    <span className="absolute -bottom-1 -right-1 size-2.5 rounded-full bg-terra animate-pulse" />
                  )}
                </button>
                {i < total - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-px transition-colors duration-500',
                      i < step ? 'bg-terra' : 'bg-navy/15',
                    )}
                  />
                )}
              </li>
            )
          })}
        </ol>

        {/* Mobile : barre de progression simple */}
        <div className="md:hidden mb-5">
          <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.25em] mb-2">
            <span className="text-terra">
              Étape {step + 1} sur {total}
            </span>
            <span className="text-ink/55 tabular-nums">{Math.round(progress)}%</span>
          </div>
          <div className="h-1 rounded-full bg-navy/10 overflow-hidden">
            <motion.div
              className="h-full bg-terra rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        {/* Titre étape */}
        <div className="flex items-start gap-4">
          <div className="hidden md:grid size-12 rounded-2xl bg-navy text-cream place-items-center shrink-0">
            <current.icon className="size-5" />
          </div>
          <div className="min-w-0">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra hidden md:block">
              Étape {step + 1} sur {total} — {Math.round(progress)}%
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-navy mt-1">
              {current.title}
            </h3>
            <p className="text-sm text-ink/65 mt-1">{current.description}</p>
          </div>
        </div>
      </div>

      {/* ─── Formulaire ─── */}
      <form onSubmit={onSubmit}>
        <div className="px-6 md:px-10 py-10 min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {step === 0 && <StepContact />}
              {step === 1 && <StepProfile />}
              {step === 2 && <StepWorkshop />}
              {step === 3 && <StepDocuments />}
              {step === 4 && <StepCommitments />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer navigation */}
        <div className="px-6 md:px-10 py-6 bg-cream border-t border-navy/8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {step > 0 ? (
            <Button
              type="button"
              variant="ghost"
              size="md"
              onClick={prev}
              disabled={status === 'submitting'}
            >
              <ArrowLeft className="size-4" />
              Précédent
            </Button>
          ) : (
            <p className="text-xs text-ink/55 max-w-xs">
              En envoyant ce formulaire, vous acceptez d&apos;être contacté par
              l&apos;équipe Lab&apos;s Food.
            </p>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-xs text-terra-deep">
              <AlertCircle className="size-4" />
              Une erreur est survenue.
            </div>
          )}

          <Button
            type="submit"
            size="md"
            variant={isLast ? 'whatsapp' : 'primary'}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Envoi en cours...
              </>
            ) : isLast ? (
              <>
                Envoyer ma candidature
                <ArrowUpRight className="size-4" />
              </>
            ) : (
              <>
                Étape suivante
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

// ─── Étapes ──────────────────────────────────────────────────────────────────

function StepContact() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="Nom" name="lastname" required />
      <Field label="Prénom" name="firstname" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Téléphone" name="phone" required />
      <Field
        label="Numéro WhatsApp"
        name="whatsapp"
        hint="Laissez vide si identique au téléphone"
      />
      <Field
        label="Rayon de déplacement"
        name="radius"
        placeholder="10 km, 20 km, 50 km..."
        required
      />
      <Field label="Adresse" name="address" required className="md:col-span-2" />
    </div>
  )
}

function StepProfile() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Field
        label="Langues parlées"
        name="languages"
        placeholder="Français, Anglais, Portugais..."
        required
      />
      <Field
        label="Photo de profil"
        name="photo"
        type="file"
        required
        hint="JPG ou PNG, 5 Mo max"
      />
      <Field
        label="Courte biographie"
        name="bio"
        textarea
        required
        hint="2-3 lignes pour vous présenter aux visiteurs"
        className="md:col-span-2"
      />
    </div>
  )
}

function StepWorkshop() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Field
        label="Type de cuisine"
        name="cuisine"
        placeholder="Asiatique, Africaine, Pâtisserie..."
        required
      />
      <Field
        label="Durée de l’atelier"
        name="duration"
        placeholder="2 heures"
        required
      />
      <Field
        label="Taille du groupe"
        name="group"
        placeholder="De 2 à 6 personnes"
        required
      />
      <Field
        label="Prix"
        name="price"
        placeholder="80€ / groupe ou 25€ / pers."
        required
      />
      <Field
        label="Description de l’atelier"
        name="description"
        textarea
        required
        hint="Ce que les clients vont apprendre, le déroulé, les éventuels cadeaux"
        className="md:col-span-2"
      />
      <Field
        label="Consignes spéciales / matériel requis"
        name="requirements"
        textarea
        className="md:col-span-2"
      />
      <Field
        label="Photos de l’atelier"
        name="atelierPhotos"
        type="file"
        hint="Plusieurs photos possibles, 10 Mo max au total"
        className="md:col-span-2"
      />
    </div>
  )
}

function StepDocuments() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Field label="CNI ou titre de séjour" name="id" type="file" required />
      <Field label="Kbis" name="kbis" type="file" />
      <Field
        label="Certificat HACCP"
        name="haccp"
        type="file"
        hint="Si obtenu — donne droit à une accréditation visible"
      />
      <Field
        label="Attestations de formations"
        name="trainings"
        type="file"
        hint="Optionnel"
      />
    </div>
  )
}

function StepCommitments() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-ink/75 leading-relaxed">
        Dernière étape ! Acceptez les engagements ci-dessous pour finaliser votre
        candidature.
      </p>

      <label className="flex items-start gap-4 p-5 rounded-2xl bg-cream border border-navy/10 hover:border-terra/40 cursor-pointer transition-colors">
        <input
          type="checkbox"
          name="quality"
          required
          className="mt-1 size-4 rounded border-navy/30 text-terra focus:ring-terra shrink-0"
        />
        <div>
          <div className="font-display text-base text-navy">
            Charte qualité Lab&apos;s Food
          </div>
          <p className="text-sm text-ink/70 mt-1 leading-relaxed">
            Je m&apos;engage à respecter la charte qualité Lab&apos;s Food et la véracité
            des informations transmises. <span className="text-terra">*</span>
          </p>
        </div>
      </label>

      <label className="flex items-start gap-4 p-5 rounded-2xl bg-cream border border-navy/10 hover:border-terra/40 cursor-pointer transition-colors">
        <input
          type="checkbox"
          name="rights"
          required
          className="mt-1 size-4 rounded border-navy/30 text-terra focus:ring-terra shrink-0"
        />
        <div>
          <div className="font-display text-base text-navy">Droit à l&apos;image</div>
          <p className="text-sm text-ink/70 mt-1 leading-relaxed">
            J&apos;accepte le droit à l&apos;image pour la publication de photos de mes
            ateliers sur les supports Lab&apos;s Food. <span className="text-terra">*</span>
          </p>
        </div>
      </label>

      <div className="p-5 rounded-2xl bg-whatsapp/10 border border-whatsapp/30 flex items-start gap-3">
        <Check className="size-5 text-whatsapp-deep shrink-0 mt-0.5" />
        <p className="text-sm text-ink/85 leading-relaxed">
          Tout est prêt. Cliquez sur <span className="font-semibold">Envoyer ma candidature</span> pour finaliser. Nous vous recontactons rapidement sur WhatsApp.
        </p>
      </div>
    </div>
  )
}
