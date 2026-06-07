'use client'

import { useState, useRef } from 'react'
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
  Utensils,
  HandHelping,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Role = 'animateur' | 'assistant'

// ─── Données fixes ────────────────────────────────────────────────────────────

const STEPS = [
  { n: '01', title: 'Coordonnées', icon: User, sub: 'Strictement confidentiel' },
  { n: '02', title: 'Profil public', icon: Eye, sub: 'Votre vitrine' },
  { n: '03', title: 'Expérience', icon: ChefHat, sub: 'Compétences et missions' },
  { n: '04', title: "Pièce d'identité", icon: IdCard, sub: 'Carte nationale ou titre de séjour' },
  { n: '05', title: 'Consentements', icon: ShieldCheck, sub: 'Validation finale' },
] as const

const PROFILE_TYPES = [
  { value: 'etudiant', label: "Étudiant(e) à la recherche d'un emploi ou d'extras" },
  { value: 'pro', label: 'Professionnel(le) de la restauration' },
  { value: 'reconversion', label: 'Passionné(e) en reconversion' },
  { value: 'autre', label: 'Autre (préciser)' },
] as const

const STATUS_OPTIONS = [
  { value: 'etudiant', label: 'Étudiant(e)', note: 'Contrat étudiant ou extras' },
  { value: 'auto', label: 'Auto-entrepreneur(e)', note: 'Je facture mes prestations' },
  { value: 'autre', label: 'Autre (préciser)', note: '' },
] as const

const EXPERIENCE_LEVELS = [
  { value: 'debutant', label: 'Débutant(e)', note: 'Aucune expérience professionnelle, mais motivé(e)' },
  { value: 'quelques', label: 'Quelques expériences', note: "Jobs d'été, petits extras" },
  { value: 'expert', label: 'Expérimenté(e)', note: '1 à 3 ans' },
  { value: 'confirme', label: 'Confirmé(e)', note: 'Plus de 3 ans' },
] as const

const MISSION_TYPES = [
  { value: 'plonge', label: 'Plonge et nettoyage' },
  { value: 'preparations', label: 'Préparations de base (épluchage, découpe)' },
  { value: 'commis', label: 'Aide-cuisinier / Commis' },
  { value: 'service', label: 'Service en salle / Runner' },
] as const

const LANGUAGES = [
  { value: 'francais', label: 'Français' },
  { value: 'anglais', label: 'Anglais' },
  { value: 'arabe', label: 'Arabe' },
  { value: 'espagnol', label: 'Espagnol' },
  { value: 'portugais', label: 'Portugais' },
  { value: 'italien', label: 'Italien' },
  { value: 'allemand', label: 'Allemand' },
  { value: 'mandarin', label: 'Mandarin' },
] as const

// ─── Composant principal ──────────────────────────────────────────────────────

export function ChefForm() {
  const [role, setRole] = useState<Role | null>(null)
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [stepError, setStepError] = useState<string | null>(null)

  // Persiste les sélections conditionnelles entre les étapes
  const [selectedProfileType, setSelectedProfileType] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')

  // Accumule les données de chaque étape au fil de la navigation
  const formRef = useRef<HTMLFormElement>(null)
  const collectedData = useRef(new Map<string, FormDataEntryValue[]>())

  function captureCurrentStep() {
    if (!formRef.current) return
    const fd = new FormData(formRef.current)
    for (const key of new Set(fd.keys())) {
      collectedData.current.set(key, fd.getAll(key))
    }
  }

  function validateCurrentStep(): string | null {
    const form = formRef.current
    if (!form) return null
    const fd = new FormData(form)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    switch (step) {
      case 0: {
        const fullName = (fd.get('fullName') as string)?.trim()
        const phone = (fd.get('phone') as string)?.trim()
        const email = (fd.get('email') as string)?.trim()
        const address = (fd.get('address') as string)?.trim()
        if (!fullName || fullName.length < 2) return 'Veuillez renseigner votre nom et prénom (2 caractères minimum).'
        if (!email || !emailRegex.test(email)) return 'Veuillez renseigner une adresse e-mail valide.'
        if (!phone) return 'Veuillez renseigner votre numéro de téléphone.'
        if (!address) return 'Veuillez renseigner votre adresse complète.'
        return null
      }
      case 1: {
        const firstName = (fd.get('firstName') as string)?.trim()
        const department = (fd.get('department') as string)?.trim()
        const photo = fd.get('photo') as File
        const profileType = (fd.get('profileType') as string)?.trim()
        const profileTypeAutre = (fd.get('profileTypeAutre') as string)?.trim()
        const status = (fd.get('status') as string)?.trim()
        const statusAutre = (fd.get('statusAutre') as string)?.trim()
        const languages = fd.getAll('languages')
        const pitch = (fd.get('pitch') as string)?.trim()
        if (!firstName) return 'Veuillez renseigner votre prénom.'
        if (!department) return 'Veuillez renseigner votre département.'
        if (!photo || photo.size === 0) return 'Veuillez téléverser une photo de profil.'
        if (!profileType) return 'Veuillez sélectionner votre profil principal.'
        if (profileType === 'autre' && !profileTypeAutre) return 'Veuillez préciser votre profil.'
        if (!status) return 'Veuillez sélectionner votre statut.'
        if (status === 'autre' && !statusAutre) return 'Veuillez préciser votre statut.'
        if (languages.length === 0) return 'Veuillez sélectionner au moins une langue parlée.'
        if (!pitch) return 'Veuillez rédiger votre pitch de présentation.'
        return null
      }
      case 2: {
        const experience = (fd.get('experience') as string)?.trim()
        const missions = fd.getAll('missions')
        if (!experience) return "Veuillez sélectionner votre niveau d'expérience."
        if (role === 'assistant' && missions.length === 0) return 'Veuillez sélectionner au moins un type de mission.'
        return null
      }
      case 3: {
        const idDoc = fd.get('idDocument') as File
        if (!idDoc || idDoc.size === 0) return "Veuillez téléverser votre pièce d'identité."
        return null
      }
      case 4: {
        if (!fd.get('acceptCgu')) return "Veuillez accepter les Conditions Générales d'Utilisation."
        if (!fd.get('acceptImage')) return "Veuillez donner votre accord sur le droit à l'image."
        return null
      }
    }
    return null
  }

  const goNext = () => {
    const err = validateCurrentStep()
    if (err) { setStepError(err); return }
    setStepError(null)
    captureCurrentStep()
    setStep((s) => Math.min(STEPS.length - 1, s + 1))
  }

  const goPrev = () => {
    setStepError(null)
    captureCurrentStep()
    if (step === 0) {
      setRole(null)
    } else {
      setStep((s) => Math.max(0, s - 1))
    }
  }

  async function onSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault()
    const err = validateCurrentStep()
    if (err) { setStepError(err); return }
    setStepError(null)
    captureCurrentStep()
    setError(null)
    setSubmitting(true)

    try {
      const fd = new FormData()
      fd.append('role', role!)
      for (const [key, values] of collectedData.current.entries()) {
        for (const v of values) fd.append(key, v)
      }

      const res = await fetch('/api/chef', { method: 'POST', body: fd })
      const result = await res.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.error ?? 'Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.')
      }
    } catch {
      setError('Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) return <SubmittedConfirmation />
  if (!role) return <RoleSelector onSelect={setRole} />

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
          e.preventDefault()
        }
      }}
      className="flex flex-col gap-10"
    >
      <Stepper currentStep={step} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-[400px]"
        >
          {step === 0 && <SectionCoordonnees />}
          {step === 1 && (
            <SectionProfilPublic
              defaultProfileType={selectedProfileType}
              onProfileTypeChange={setSelectedProfileType}
              defaultStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
            />
          )}
          {step === 2 && <SectionExperience role={role} />}
          {step === 3 && <SectionIdentite />}
          {step === 4 && <SectionConsentements />}
        </motion.div>
      </AnimatePresence>

      {stepError && (
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-orange-pale border border-orange/30 text-orange-deep text-sm">
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          {stepError}
        </div>
      )}
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-6 border-t border-navy/10">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-navy/20 text-navy text-sm font-medium transition-all hover:bg-navy hover:text-cream hover:border-navy"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-cream text-sm font-medium hover:bg-orange-deep transition-all shadow-sm hover:shadow-orange/30 hover:shadow-md"
          >
            Suivant
            <ArrowRight className="size-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-cream text-sm font-medium hover:bg-orange-deep transition-all shadow-sm hover:shadow-orange/30 hover:shadow-md disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Envoi en cours…
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

/* ═══════════════════════════════════════════════════════════════════════════════
   SÉLECTION DU RÔLE (pré-étape)
   ═══════════════════════════════════════════════════════════════════════════════ */

const ROLE_OPTIONS = [
  {
    role: 'animateur' as const,
    icon: Utensils,
    badge: 'Atelier culinaire',
    title: 'Devenir animateur',
    desc: 'Concevez et animez des ateliers culinaires pour des particuliers et des professionnels.',
    perks: [
      'Cours de cuisine',
      'Planifiez vos créneaux en toute liberté',
      'Contact direct avec vos clients',
    ],
  },
  {
    role: 'assistant' as const,
    icon: HandHelping,
    badge: 'Assistance culinaire',
    title: 'Devenir assistant',
    desc: 'Prêtez main forte en cuisine lors de missions ponctuelles ou régulières.',
    perks: [
      'Missions ponctuelles ou régulières',
      'Plusieurs types de postes disponibles',
      'Rejoignez une communauté active',
    ],
  },
] as const

function RoleSelector({ onSelect }: { onSelect: (role: Role) => void }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="text-center">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-orange mb-3">
          Rejoignez l&apos;équipe Lab&apos;s Food
        </p>
        <h2 className="font-display leading-tight text-navy mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
          Comment souhaitez-vous{' '}
          <em className="italic text-orange not-italic font-display">contribuer ?</em>
        </h2>

      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {ROLE_OPTIONS.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.role}
              type="button"
              onClick={() => onSelect(item.role)}
              className="group relative overflow-hidden rounded-2xl bg-navy text-left transition-all duration-300 hover:ring-2 hover:ring-orange hover:ring-offset-2 hover:ring-offset-cream hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/20"
            >
              {/* Decorative blob */}
              {/* <div className="pointer-events-none absolute -top-10 -right-10 size-48 rounded-full bg-orange/10 group-hover:bg-orange/18 transition-colors duration-300" /> */}
              {/* <div className="pointer-events-none absolute -bottom-6 -left-6 size-28 rounded-full bg-cream/4 group-hover:bg-cream/8 transition-colors duration-300" /> */}

              <div className="relative z-10 flex flex-col gap-5 p-7">
                {/* Icon */}
                {/* <div className="size-13 rounded-2xl bg-orange/15 grid place-items-center self-start group-hover:bg-orange transition-colors duration-300">
                  <Icon className="size-6 text-orange group-hover:text-cream transition-colors duration-300" />
                </div> */}

                {/* Text */}
                <div>
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-orange/80 mb-2">
                    {item.badge}
                  </p>
                  <h3 className="font-display text-[1.35rem] text-cream leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] text-cream/55 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Perks */}
                <ul className="flex flex-col gap-2.5">
                  {item.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5 text-[0.75rem] text-cream/70">
                      <span className="size-4 rounded-full bg-orange/20 grid place-items-center shrink-0 group-hover:bg-orange/30 transition-colors">
                        <Check className="size-2.5 text-orange" />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 mt-1 border-t border-cream/10">
                  <span className="text-[0.8rem] font-medium text-cream/70 group-hover:text-cream transition-colors">
                    Choisir ce rôle
                  </span>
                  <span className="size-8 rounded-full bg-orange/20 grid place-items-center group-hover:bg-orange transition-colors duration-300">
                    <ArrowRight className="size-3.5 text-orange group-hover:text-cream transition-colors duration-300" />
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   STEPPER
   ═══════════════════════════════════════════════════════════════════════════════ */

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
                  ? 'bg-orange text-cream'
                  : i === currentStep
                    ? 'bg-orange text-cream ring-4 ring-orange/20'
                    : 'bg-cream-soft text-ink/40 border border-navy/10',
              )}
            >
              {i < currentStep ? <Check className="size-4" /> : s.n}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  'w-6 md:w-12 h-px transition-colors',
                  i < currentStep ? 'bg-orange' : 'bg-navy/15',
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-2">
        <span className="size-10 rounded-xl bg-orange/10 text-orange grid place-items-center">
          <step.icon className="size-5" />
        </span>
        <div>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-orange">
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

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 01 — Coordonnées
   ═══════════════════════════════════════════════════════════════════════════════ */

function SectionCoordonnees() {
  return (
    <div className="flex flex-col gap-5">
      <Notice tone="confidential">
        Ces informations ne seront <strong>jamais affichées</strong> sur le site.
        Elles servent uniquement à l&apos;administration de Lab&apos;s Food.
      </Notice>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nom et prénom" name="fullName" required placeholder="ex. Siyaptze Doe" />
        <Field label="Numéro de téléphone" name="phone" type="tel" required placeholder="+33 6 12 34 56 78" />
      </div>
      <Field label="Adresse e-mail" name="email" type="email" required placeholder="vous@exemple.fr" />
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

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 02 — Profil public
   ═══════════════════════════════════════════════════════════════════════════════ */

function SectionProfilPublic({
  defaultProfileType,
  onProfileTypeChange,
  defaultStatus,
  onStatusChange,
}: {
  defaultProfileType: string
  onProfileTypeChange: (v: string) => void
  defaultStatus: string
  onStatusChange: (v: string) => void
}) {
  const [selectedProfileType, setSelectedProfileType] = useState(defaultProfileType)
  const [selectedStatus, setSelectedStatus] = useState(defaultStatus)

  const handleProfileType = (v: string) => {
    setSelectedProfileType(v)
    onProfileTypeChange(v)
  }
  const handleStatus = (v: string) => {
    setSelectedStatus(v)
    onStatusChange(v)
  }

  return (
    <div className="flex flex-col gap-5">
      <Notice tone="public">
        Ces informations <strong>apparaîtront sur la plateforme</strong> pour permettre
        aux restaurateurs et particuliers de vous découvrir.
      </Notice>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Prénom" name="firstName" required placeholder="ex. Siyaptze" />
        <Field label="Département" name="department" required placeholder="75, 93, 77…" hint="Code du département" />
      </div>

      <FileField
        label="Photo de profil"
        name="photo"
        required
        accept="image/jpeg,image/png,image/webp"
        hint="Photo claire, lumineuse et souriante qui donne envie de travailler avec vous"
      />

      {/* Profil principal */}
      <fieldset className="flex flex-col gap-3">
        <legend className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid mb-1">
          Quel est votre profil principal ? <span className="text-orange">*</span>
        </legend>
        <div className="grid sm:grid-cols-2 gap-3">
          {PROFILE_TYPES.map((opt) => (
            <label
              key={opt.value}
              className="group relative flex items-start gap-3 p-4 rounded-xl bg-cream-soft border border-navy/10 cursor-pointer hover:border-orange transition-all has-[:checked]:border-orange has-[:checked]:bg-orange-pale"
            >
              <input
                type="radio"
                name="profileType"
                value={opt.value}
                required
                defaultChecked={opt.value === selectedProfileType}
                onChange={() => handleProfileType(opt.value)}
                className="mt-1 size-4 accent-orange shrink-0"
              />
              <span className="font-medium text-navy text-sm leading-tight">{opt.label}</span>
            </label>
          ))}
        </div>
        {selectedProfileType === 'autre' && (
          <input
            type="text"
            name="profileTypeAutre"
            required
            autoFocus
            placeholder="Précisez votre profil…"
            className="px-4 py-3 rounded-xl bg-cream-soft border border-orange/40 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-orange focus:bg-orange-pale/30 transition-all"
          />
        )}
      </fieldset>

      {/* Statut */}
      <fieldset className="flex flex-col gap-3">
        <legend className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid mb-1">
          Quel est votre statut ? <span className="text-orange">*</span>
        </legend>
        <div className="grid sm:grid-cols-2 gap-3">
          {STATUS_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="group relative flex items-start gap-3 p-4 rounded-xl bg-cream-soft border border-navy/10 cursor-pointer hover:border-orange transition-all has-[:checked]:border-orange has-[:checked]:bg-orange-pale"
            >
              <input
                type="radio"
                name="status"
                value={opt.value}
                required
                defaultChecked={opt.value === selectedStatus}
                onChange={() => handleStatus(opt.value)}
                className="mt-1 size-4 accent-orange shrink-0"
              />
              <div className="min-w-0">
                <div className="font-medium text-navy text-sm leading-tight">{opt.label}</div>
                {opt.note && <div className="text-xs text-ink/55 mt-1 italic">{opt.note}</div>}
              </div>
            </label>
          ))}
        </div>
        {selectedStatus === 'autre' && (
          <input
            type="text"
            name="statusAutre"
            required
            autoFocus
            placeholder="Précisez votre statut…"
            className="px-4 py-3 rounded-xl bg-cream-soft border border-orange/40 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-orange focus:bg-orange-pale/30 transition-all"
          />
        )}
      </fieldset>

      {/* Langues */}
      <CheckboxGroup
        label="Langues parlées"
        name="languages"
        required
        hint="Plusieurs choix possibles"
        options={LANGUAGES}
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

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 03 — Expérience
   ═══════════════════════════════════════════════════════════════════════════════ */

function SectionExperience({ role }: { role: Role }) {
  return (
    <div className="flex flex-col gap-5">
      <RadioGroup
        label="Votre niveau d'expérience en restauration"
        name="experience"
        required
        options={EXPERIENCE_LEVELS}
      />
      {role === 'assistant' && (
        <CheckboxGroup
          label="Pour quel(s) type(s) de mission(s) postulez-vous ?"
          name="missions"
          required
          hint="Plusieurs choix possibles"
          options={MISSION_TYPES}
        />
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 04 — Pièce d'identité
   ═══════════════════════════════════════════════════════════════════════════════ */

function SectionIdentite() {
  return (
    <div className="flex flex-col gap-5">
      <Notice tone="confidential">
        Ces documents sont <strong>strictement confidentiels</strong> et ne servent
        qu&apos;à valider votre identité auprès de Lab&apos;s Food.
      </Notice>
      <FileField
        label="Carte nationale d'identité ou Titre de séjour"
        name="idDocument"
        required
        accept="image/*,application/pdf"
        hint="Recto-verso ou PDF. Formats acceptés : JPG, PNG, PDF."
      />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SECTION 05 — Consentements
   ═══════════════════════════════════════════════════════════════════════════════ */

function SectionConsentements() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-ink/70">
        Pour finaliser votre inscription, veuillez valider les éléments suivants :
      </p>
      <ConsentCheckbox name="acceptCgu" required title="Conditions Générales d'Utilisation">
        Je reconnais avoir pris connaissance et j&apos;accepte les{' '}
        <a href="/cgu" target="_blank" className="underline text-orange hover:text-orange-deep">
          Conditions Générales d&apos;Utilisation
        </a>{' '}
        et la{' '}
        <a href="/confidentialite" target="_blank" className="underline text-orange hover:text-orange-deep">
          Politique de confidentialité
        </a>{' '}
        de Lab&apos;s Food. Je comprends que la plateforme agit uniquement comme un outil de mise en relation.
      </ConsentCheckbox>
      <ConsentCheckbox name="acceptImage" required title="Droit à l'image">
        J&apos;autorise expressément et à titre gratuit Lab&apos;s Food à diffuser la photographie fournie,
        mon prénom et mon département d&apos;intervention sur sa plateforme publique, dans le seul but de me
        mettre en relation avec des professionnels de la restauration et des particuliers.
      </ConsentCheckbox>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════════
   COMPOSANTS RÉUTILISABLES
   ═══════════════════════════════════════════════════════════════════════════════ */

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  textarea,
  hint,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  textarea?: boolean
  hint?: string
}) {
  const id = `field-${name}`
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
        {label} {required && <span className="text-orange">*</span>}
      </span>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={3}
          className="px-4 py-3 rounded-xl bg-cream-soft border border-navy/15 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-orange focus:bg-orange-pale/20 transition-all resize-none"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="px-4 py-3 rounded-xl bg-cream-soft border border-navy/15 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-orange focus:bg-orange-pale/20 transition-all"
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
        {label} {required && <span className="text-orange">*</span>}
      </span>
      <label
        htmlFor={id}
        className="group flex items-center gap-4 px-4 py-4 rounded-xl bg-cream-soft border-2 border-dashed border-navy/20 hover:border-orange hover:bg-orange-pale/30 transition-all cursor-pointer"
      >
        <span className="size-11 rounded-full bg-orange/10 grid place-items-center shrink-0 group-hover:bg-orange transition-colors">
          <Upload className="size-4 text-orange group-hover:text-cream transition-colors" />
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
        Lien de prise de rendez-vous{' '}
        <span className="normal-case tracking-normal font-sans text-ink/45 italic">(optionnel)</span>
      </span>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange">
          <LinkIcon className="size-4" />
        </span>
        <input
          type="url"
          name="calendlyLink"
          placeholder="https://calendly.com/votre-pseudo"
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-cream-soft border border-navy/15 text-navy placeholder:text-ink/35 text-sm outline-none focus:border-orange focus:bg-orange-pale/20 transition-all"
        />
      </div>
      <div className="text-xs text-ink/55 italic bg-orange-pale/40 border border-orange/15 rounded-lg p-3 mt-1">
        <strong className="text-orange not-italic">Important :</strong>{' '}
        Renseignez ici votre moyen de contact (lien Calendly, lien WhatsApp ou numéro de téléphone
        direct). C&apos;est via ce canal que les particuliers et professionnels vous joindront.
      </div>
    </div>
  )
}

function RadioGroup({
  label,
  name,
  options,
  required,
}: {
  label: string
  name: string
  options: readonly { value: string; label: string; note?: string }[]
  required?: boolean
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid mb-1">
        {label} {required && <span className="text-orange">*</span>}
      </legend>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="group relative flex items-start gap-3 p-4 rounded-xl bg-cream-soft border border-navy/10 cursor-pointer hover:border-orange transition-all has-[:checked]:border-orange has-[:checked]:bg-orange-pale"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              required={required}
              className="mt-1 size-4 accent-orange shrink-0"
            />
            <div className="min-w-0">
              <div className="font-medium text-navy text-sm leading-tight">{opt.label}</div>
              {opt.note && <div className="text-xs text-ink/55 mt-1 italic">{opt.note}</div>}
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
        {label} {required && <span className="text-orange">*</span>}
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
            className="flex items-center gap-3 p-4 rounded-xl bg-cream-soft border border-navy/10 cursor-pointer hover:border-orange transition-all has-[:checked]:border-orange has-[:checked]:bg-orange-pale"
          >
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              className="size-4 accent-orange shrink-0 rounded"
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
    <label className="group flex items-start gap-4 p-5 rounded-2xl bg-cream-soft border border-navy/10 cursor-pointer hover:border-orange transition-all has-[:checked]:border-orange has-[:checked]:bg-orange-pale">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="mt-1 size-5 accent-orange shrink-0 rounded"
      />
      <div>
        <div className="font-display text-base text-navy mb-1">
          {title} {required && <span className="text-orange">*</span>}
        </div>
        <div className="text-xs text-ink/70 leading-relaxed">{children}</div>
      </div>
    </label>
  )
}

function Notice({ tone, children }: { tone: 'confidential' | 'public'; children: React.ReactNode }) {
  const isConfidential = tone === 'confidential'
  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-2xl border text-sm',
        isConfidential
          ? 'bg-navy/5 border-navy/15 text-navy/85'
          : 'bg-orange/8 border-orange/25 text-navy/85',
      )}
    >
      <span className="shrink-0 size-8 rounded-full bg-cream grid place-items-center mt-0.5">
        {isConfidential ? (
          <ShieldCheck className="size-4 text-navy" />
        ) : (
          <Eye className="size-4 text-orange" />
        )}
      </span>
      <p className="leading-relaxed">{children}</p>
    </div>
  )
}

function SubmittedConfirmation() {
  return (
    <div className="text-center py-20">
      <div className="inline-flex size-20 rounded-full bg-orange text-cream items-center justify-center mb-6 shadow-xl shadow-orange/30">
        <Check className="size-8" />
      </div>
      <h3
        className="font-display text-navy leading-tight text-balance"
        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
      >
        Candidature{' '}
        <em className="not-italic">
          <span className="font-display italic text-orange">bien reçue !</span>
        </em>
      </h3>
      <p className="mt-6 text-ink/70 max-w-md mx-auto leading-relaxed">
        Merci pour votre candidature. Notre équipe va examiner votre profil et revient
        vers vous très vite — sous 48 à 72 heures ouvrées maximum.
      </p>
    </div>
  )
}
