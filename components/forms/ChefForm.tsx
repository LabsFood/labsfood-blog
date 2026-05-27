'use client'

import { useState, type FormEvent } from 'react'
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
  ShieldCheck,
  Eye,
  Upload,
  Link as LinkIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Formulaire chef partenaire — refonte selon doc client
 * "Updates LabsFood Main" onglet 6
 *
 * 5 sections :
 *   1. Coordonnées (confidentiel)
 *   2. Profil public (vitrine)
 *   3. Expérience & compétences
 *   4. Pièce d'identité (CNI / titre de séjour)
 *   5. Consentements légaux
 */

// ─── Données fixes des sections ──────────────────────────────────────────
const STEPS = [
  { n: '01', title: 'Coordonnées', icon: User, sub: 'Strictement confidentiel' },
  { n: '02', title: 'Profil public', icon: Eye, sub: 'Votre vitrine' },
  { n: '03', title: 'Expérience', icon: ChefHat, sub: 'Compétences & missions' },
  { n: '04', title: 'Pièce d\'identité', icon: IdCard, sub: 'CNI ou titre de séjour' },
  { n: '05', title: 'Consentements', icon: ShieldCheck, sub: 'Validation finale' },
] as const

const PROFILE_TYPES = [
  { value: 'etudiant', label: 'Étudiant(e) à la recherche d\'un job / d\'extras' },
  { value: 'pro', label: 'Professionnel(le) de la restauration' },
  { value: 'reconversion', label: 'Passionné(e) en reconversion' },
  { value: 'autre', label: 'Autre (préciser)' },
] as const

const STATUS_OPTIONS = [
  {
    value: 'extras',
    label: 'Contrats courts / Extras',
    note: 'CDD d\'usage ou job étudiant',
  },
  {
    value: 'auto',
    label: 'Auto-entrepreneur',
    note: 'Je facture mes prestations',
  },
] as const

const EXPERIENCE_LEVELS = [
  { value: 'debutant', label: 'Débutant(e)', note: 'Aucune exp. pro, mais motivé(e)' },
  { value: 'quelques', label: 'Quelques expériences', note: 'Jobs d\'été, petits extras' },
  { value: 'expert', label: 'Expérimenté(e)', note: '1 à 3 ans' },
  { value: 'confirme', label: 'Confirmé(e)', note: '+ de 3 ans' },
] as const

const MISSION_TYPES = [
  { value: 'plonge', label: 'Plonge et nettoyage' },
  { value: 'preparations', label: 'Préparations de base (épluchage, découpe)' },
  { value: 'commis', label: 'Aide-cuisinier / Commis' },
  { value: 'service', label: 'Service en salle / Runner' },
] as const

// ─── Composant principal ──────────────────────────────────────────────────

export function ChefForm() {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const goNext = () => setStep((s) => Math.min(STEPS.length - 1, s + 1))
  const goPrev = () => setStep((s) => Math.max(0, s - 1))

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      // TODO: brancher l'envoi (API route, email, etc.)
      await new Promise((r) => setTimeout(r, 1000))
      setSubmitted(true)
    } catch {
      setError("Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return <SubmittedConfirmation />
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      {/* ─── Stepper ─── */}
      <Stepper currentStep={step} />

      {/* ─── Contenu de l'étape ─── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35 }}
          className="min-h-[400px]"
        >
          {step === 0 && <SectionCoordonnees />}
          {step === 1 && <SectionProfilPublic />}
          {step === 2 && <SectionExperience />}
          {step === 3 && <SectionIdentite />}
          {step === 4 && <SectionConsentements />}
        </motion.div>
      </AnimatePresence>

      {/* ─── Erreur éventuelle ─── */}
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-navy-mid/10 border border-navy-mid/20 text-navy-mid text-sm">
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      {/* ─── Navigation ─── */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-navy/10">
        <button
          type="button"
          onClick={goPrev}
          disabled={step === 0}
          className={cn(
            'inline-flex items-center gap-2 px-5 py-3 rounded-full border border-navy/20 text-navy text-sm font-medium transition-all',
            step === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-navy hover:text-cream hover:border-navy',
          )}
        >
          <ArrowLeft className="size-4" />
          Précédent
        </button>

        <div className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink/40 tabular-nums">
          {String(step + 1).padStart(2, '0')}
          <span className="mx-1 text-ink/20">/</span>
          {String(STEPS.length).padStart(2, '0')}
        </div>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-cream text-sm font-medium hover:bg-navy-mid transition-all"
          >
            Suivant
            <ArrowRight className="size-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-mid text-cream text-sm font-medium hover:bg-navy-deep transition-all disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Envoi…
              </>
            ) : (
              <>
                Envoyer ma candidature
                <ArrowUpRight className="size-4" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   STEPPER (entête de progression)
   ═══════════════════════════════════════════════════════════════════════ */

function Stepper({ currentStep }: { currentStep: number }) {
  const step = STEPS[currentStep]
  return (
    <div>
      <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-hide">
        {STEPS.map((s, i) => (
          <div key={s.n} className="flex items-center gap-2 shrink-0">
            <div
              className={cn(
                'size-9 rounded-full grid place-items-center font-mono text-xs transition-all',
                i < currentStep
                  ? 'bg-navy-mid text-cream'
                  : i === currentStep
                    ? 'bg-navy text-cream ring-4 ring-navy/15'
                    : 'bg-cream-soft text-ink/40 border border-navy/10',
              )}
            >
              {i < currentStep ? <Check className="size-4" /> : s.n}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  'w-6 md:w-12 h-px',
                  i < currentStep ? 'bg-navy-mid' : 'bg-navy/15',
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-2">
        <span className="size-10 rounded-xl bg-navy-mid/10 text-navy-mid grid place-items-center">
          <step.icon className="size-5" />
        </span>
        <div>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
            Section {step.n}
          </div>
          <h3 className="font-display text-2xl text-navy leading-tight">
            {step.title}
          </h3>
        </div>
      </div>
      <p className="text-sm text-ink/60 italic">{step.sub}</p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 01 — Coordonnées (Strictement confidentiel)
   ═══════════════════════════════════════════════════════════════════════ */

function SectionCoordonnees() {
  return (
    <div className="flex flex-col gap-5">
      <Notice tone="confidential">
        Ces informations ne seront <strong>jamais affichées</strong> sur le site.
        Elles servent uniquement à l&apos;administration de Lab&apos;s Food.
      </Notice>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Nom et prénom"
          name="fullName"
          required
          placeholder="ex. Siyaptze Doe"
        />
        <Field
          label="Numéro de téléphone"
          name="phone"
          type="tel"
          required
          placeholder="+33 6 12 34 56 78"
        />
      </div>

      <Field
        label="Adresse e-mail"
        name="email"
        type="email"
        required
        placeholder="vous@exemple.fr"
      />
      <Field
        label="Adresse complète"
        name="address"
        required
        placeholder="ex. 2 Avenue du Pont, 77127 Lieusaint, France"
        hint="Numéro, rue, code postal, ville, pays"
      />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 02 — Profil public (Vitrine)
   ═══════════════════════════════════════════════════════════════════════ */

function SectionProfilPublic() {
  return (
    <div className="flex flex-col gap-5">
      <Notice tone="public">
        Ces informations <strong>apparaîtront sur la plateforme</strong> pour
        permettre aux restaurateurs et particuliers de vous découvrir.
      </Notice>

      <div className="grid sm:grid-cols-3 gap-5">
        <Field label="Prénom" name="firstName" required placeholder="ex. Siyaptze" />
        <Field
          label="Département"
          name="department"
          required
          placeholder="75, 93, 77…"
          hint="Code département"
        />
        <Field
          label="Ville principale"
          name="city"
          required
          placeholder="Lieusaint, Paris…"
        />
      </div>

      <FileField
        label="Photo de profil"
        name="photo"
        required
        accept="image/jpeg,image/png,image/webp"
        hint="Photo claire, lumineuse et souriante qui donne envie de travailler avec vous"
      />

      <RadioGroup
        label="Quel est votre profil principal ?"
        name="profileType"
        required
        options={PROFILE_TYPES}
      />

      <RadioGroup
        label="Quel est votre statut ?"
        name="status"
        required
        options={STATUS_OPTIONS}
      />

      <Field
        label="Votre petit pitch"
        name="pitch"
        textarea
        required
        placeholder="En 2 ou 3 phrases, dites-nous ce qui fait votre force !"
        hint="Texte court — c'est ce qui s'affichera sur votre carte publique."
      />

      <CalendlyField />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 03 — Expérience et compétences
   ═══════════════════════════════════════════════════════════════════════ */

function SectionExperience() {
  return (
    <div className="flex flex-col gap-5">
      <RadioGroup
        label="Votre niveau d'expérience en restauration"
        name="experience"
        required
        options={EXPERIENCE_LEVELS}
      />

      <CheckboxGroup
        label="Pour quel(s) type(s) de mission(s) postulez-vous ?"
        name="missions"
        required
        hint="Plusieurs choix possibles"
        options={MISSION_TYPES}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 04 — Pièce d'identité
   ═══════════════════════════════════════════════════════════════════════ */

function SectionIdentite() {
  return (
    <div className="flex flex-col gap-5">
      <Notice tone="confidential">
        Ces documents sont <strong>strictement confidentiels</strong> et ne
        servent qu&apos;à valider votre identité auprès de Lab&apos;s Food.
      </Notice>

      <FileField
        label="CNI ou Titre de séjour"
        name="idDocument"
        required
        accept="image/*,application/pdf"
        hint="Recto-verso ou PDF. Formats acceptés : JPG, PNG, PDF."
      />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 05 — Consentements légaux
   ═══════════════════════════════════════════════════════════════════════ */

function SectionConsentements() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-ink/70">
        Pour finaliser votre inscription, veuillez valider les éléments
        suivants :
      </p>

      <ConsentCheckbox
        name="acceptCgu"
        required
        title="Conditions Générales d'Utilisation"
      >
        Je reconnais avoir pris connaissance et j&apos;accepte les{' '}
        <a
          href="/cgu"
          target="_blank"
          className="underline text-navy-mid hover:text-navy-deep"
        >
          Conditions Générales d&apos;Utilisation
        </a>{' '}
        et la{' '}
        <a
          href="/confidentialite"
          target="_blank"
          className="underline text-navy-mid hover:text-navy-deep"
        >
          Politique de confidentialité
        </a>{' '}
        de Lab&apos;s Food. Je comprends que la plateforme agit uniquement comme
        un outil de mise en relation.
      </ConsentCheckbox>

      <ConsentCheckbox name="acceptImage" required title="Droit à l'image">
        J&apos;autorise expressément et à titre gratuit Lab&apos;s Food à
        diffuser la photographie fournie, mon prénom et mon département
        d&apos;intervention sur sa plateforme publique, dans le seul but de me
        mettre en relation avec des professionnels de la restauration et des
        particuliers.
      </ConsentCheckbox>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   COMPOSANTS RÉUTILISABLES
   ═══════════════════════════════════════════════════════════════════════ */

type FieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  textarea?: boolean
  hint?: string
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  textarea,
  hint,
}: FieldProps) {
  const id = `field-${name}`
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
        {label} {required && <span className="text-navy-mid">*</span>}
      </span>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={3}
          className="px-4 py-3 rounded-xl bg-cream-soft border border-navy/15 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-navy-mid focus:bg-cream transition-all resize-none"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="px-4 py-3 rounded-xl bg-cream-soft border border-navy/15 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-navy-mid focus:bg-cream transition-all"
        />
      )}
      {hint && <span className="text-xs text-ink/55 italic">{hint}</span>}
    </label>
  )
}

function FileField({
  label,
  name,
  required,
  accept,
  hint,
}: {
  label: string
  name: string
  required?: boolean
  accept?: string
  hint?: string
}) {
  const [fileName, setFileName] = useState<string | null>(null)
  const id = `file-${name}`
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
        {label} {required && <span className="text-navy-mid">*</span>}
      </span>
      <label
        htmlFor={id}
        className="group flex items-center gap-4 px-4 py-4 rounded-xl bg-cream-soft border-2 border-dashed border-navy/20 hover:border-navy-mid hover:bg-cream transition-all cursor-pointer"
      >
        <span className="size-11 rounded-full bg-navy-mid/10 grid place-items-center shrink-0 group-hover:bg-navy-mid group-hover:text-cream transition-colors">
          <Upload className="size-4 text-navy-mid group-hover:text-cream transition-colors" />
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-navy truncate">
            {fileName || 'Cliquer pour téléverser un fichier'}
          </div>
          <div className="text-xs text-ink/55 mt-0.5">
            {accept?.includes('image') && !accept.includes('pdf') && 'JPG, PNG, WebP'}
            {accept?.includes('pdf') && 'JPG, PNG, PDF'}
          </div>
        </div>
        <input
          id={id}
          type="file"
          name={name}
          accept={accept}
          required={required}
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          className="sr-only"
        />
      </label>
      {hint && <span className="text-xs text-ink/55 italic">{hint}</span>}
    </div>
  )
}

function CalendlyField() {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
        Lien de prise de rendez-vous <span className="text-navy-mid">*</span>
      </span>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-mid">
          <LinkIcon className="size-4" />
        </span>
        <input
          type="url"
          name="calendlyLink"
          required
          placeholder="https://calendly.com/votre-pseudo"
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-cream-soft border border-navy/15 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-navy-mid focus:bg-cream transition-all"
        />
      </div>
      <div className="text-xs text-ink/55 italic bg-cream-soft border border-navy/8 rounded-lg p-3 mt-1">
        <strong className="text-navy not-italic">Important :</strong>{' '}
        Insérez ici votre lien Calendly (ou équivalent : YouCanBookMe…). C&apos;est
        via ce lien que les professionnels réserveront un appel de présentation
        avec vous — votre numéro personnel ne sera{' '}
        <strong className="not-italic">jamais affiché</strong> publiquement.
      </div>
    </div>
  )
}

type RadioOption = { value: string; label: string; note?: string }

function RadioGroup({
  label,
  name,
  options,
  required,
}: {
  label: string
  name: string
  options: readonly RadioOption[]
  required?: boolean
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid mb-1">
        {label} {required && <span className="text-navy-mid">*</span>}
      </legend>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="group relative flex items-start gap-3 p-4 rounded-xl bg-cream-soft border border-navy/10 cursor-pointer hover:border-navy-mid hover:bg-cream transition-all has-[:checked]:border-navy-mid has-[:checked]:bg-cream"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              required={required}
              className="mt-1 size-4 accent-navy-mid shrink-0"
            />
            <div className="min-w-0">
              <div className="font-medium text-navy text-sm leading-tight">
                {opt.label}
              </div>
              {opt.note && (
                <div className="text-xs text-ink/55 mt-1 italic">
                  {opt.note}
                </div>
              )}
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function CheckboxGroup({
  label,
  name,
  options,
  hint,
  required,
}: {
  label: string
  name: string
  options: readonly { value: string; label: string }[]
  hint?: string
  required?: boolean
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid mb-1">
        {label} {required && <span className="text-navy-mid">*</span>}
        {hint && (
          <span className="ml-2 normal-case tracking-normal text-ink/55 italic font-sans">
            ({hint})
          </span>
        )}
      </legend>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 p-4 rounded-xl bg-cream-soft border border-navy/10 cursor-pointer hover:border-navy-mid hover:bg-cream transition-all has-[:checked]:border-navy-mid has-[:checked]:bg-cream"
          >
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              className="size-4 accent-navy-mid shrink-0 rounded"
            />
            <span className="font-medium text-navy text-sm">{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function ConsentCheckbox({
  name,
  title,
  required,
  children,
}: {
  name: string
  title: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="group flex items-start gap-4 p-5 rounded-2xl bg-cream-soft border border-navy/10 cursor-pointer hover:border-navy-mid hover:bg-cream transition-all has-[:checked]:border-navy-mid has-[:checked]:bg-cream">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="mt-1 size-5 accent-navy-mid shrink-0 rounded"
      />
      <div>
        <div className="font-display text-base text-navy mb-1">
          {title} {required && <span className="text-navy-mid">*</span>}
        </div>
        <div className="text-xs text-ink/70 leading-relaxed">{children}</div>
      </div>
    </label>
  )
}

function Notice({
  tone,
  children,
}: {
  tone: 'confidential' | 'public'
  children: React.ReactNode
}) {
  const isConfidential = tone === 'confidential'
  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-2xl border text-sm',
        isConfidential
          ? 'bg-navy/5 border-navy/15 text-navy/85'
          : 'bg-navy-mid/10 border-navy-mid/20 text-navy/85',
      )}
    >
      <span className="shrink-0 size-8 rounded-full bg-cream grid place-items-center mt-0.5">
        {isConfidential ? (
          <ShieldCheck className="size-4 text-navy" />
        ) : (
          <Eye className="size-4 text-navy-mid" />
        )}
      </span>
      <p className="leading-relaxed">{children}</p>
    </div>
  )
}

function SubmittedConfirmation() {
  return (
    <div className="text-center py-20">
      <div className="inline-flex size-20 rounded-full bg-navy-mid text-cream items-center justify-center mb-6 shadow-xl">
        <Check className="size-8" />
      </div>
      <h3
        className="font-display text-navy leading-tight text-balance"
        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
      >
        Candidature{' '}
        <em className="not-italic">
          <span className="font-display italic gradient-text-navy-mid">
            bien reçue !
          </span>
        </em>
      </h3>
      <p className="mt-6 text-ink/70 max-w-md mx-auto leading-relaxed">
        Merci pour votre candidature. Notre équipe va examiner votre profil et
        revient vers vous très vite — sous 48 à 72h ouvrées maximum.
      </p>
    </div>
  )
}
