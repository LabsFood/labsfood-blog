'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Filter,
  X,
  CalendarCheck,
  Sparkles,
  Languages,
  BadgeCheck,
  Star,
  ShieldCheck,
} from 'lucide-react'
import { CHEFS, getAvailableRegions, getAvailableCities } from '@/lib/content'
import { cn } from '@/lib/utils'

/**
 * SECTION CHEFS FILTRABLES
 *
 * Variantes :
 *   - 'full'    : version riche (assistance culinaire) — pitch + tags +
 *                 langues + badges + CTA
 *   - 'compact' : version simple (atelier culinaire) — avatar + nom +
 *                 région + pitch court + CTA
 *
 * Filtre par service :
 *   La prop `service` ('assistance' | 'atelier') filtre les chefs visibles
 *   selon leur statut chef.services[service].
 *   Le pitch affiché vient de chef.pitches[service] (fallback sur chef.bio).
 *
 * Filtre par localisation (cascade) :
 *   Région → Ville → Reset
 */

type Variant = 'full' | 'compact'
type ServiceKey = 'assistance' | 'atelier'

type Props = {
  variant?: Variant
  /** Filtre les chefs par leur statut sur ce service. */
  service: ServiceKey
  eyebrow?: string
  title?: React.ReactNode
  subtitle?: string
}

export function ChefsFilterable({
  variant = 'compact',
  service,
  eyebrow = 'Nos chefs partenaires',
  title,
  subtitle = 'Filtrez par région puis par ville pour trouver le profil le plus proche de chez vous.',
}: Props) {
  const [regionId, setRegionId] = useState<string>('')
  const [city, setCity] = useState<string>('')

  // Chefs qui proposent ce service
  const chefsForService = useMemo(
    () => CHEFS.filter((c) => c.services?.[service] === true),
    [service],
  )

  // Régions & villes — déduites uniquement des chefs de ce service
  const regions = useMemo(() => {
    const map = new Map<string, string>()
    chefsForService.forEach((c) => map.set(c.regionId, c.region))
    return Array.from(map, ([id, label]) => ({ id, label }))
  }, [chefsForService])

  const cities = useMemo(() => {
    const set = new Set<string>()
    chefsForService
      .filter((c) => !regionId || c.regionId === regionId)
      .forEach((c) => c.cities.forEach((v) => set.add(v)))
    return Array.from(set).sort()
  }, [chefsForService, regionId])

  // Liste affichée
  const filtered = useMemo(() => {
    return chefsForService.filter((c) => {
      if (regionId && c.regionId !== regionId) return false
      if (city && !(c.cities as readonly string[]).includes(city)) return false
      return true
    })
  }, [chefsForService, regionId, city])

  const hasActiveFilter = Boolean(regionId || city)
  const totalForService = chefsForService.length

  function resetFilters() {
    setRegionId('')
    setCity('')
  }

  function onRegionChange(value: string) {
    setRegionId(value)
    if (value && city) {
      const newCities = getAvailableCities(value)
      if (!newCities.includes(city)) setCity('')
    } else if (!value) {
      setCity('')
    }
  }

  return (
    <section className="bg-cream-deep py-20 md:py-28 lg:py-32">
      <div className="container-wide">
        {/* ── En-tête ── */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-5">
              <span className="size-6 h-px bg-navy-mid" />
              {eyebrow}
            </p>
            <h2
              className="font-display text-navy leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {title ?? (
                <>
                  Trouvez le chef qui{' '}
                  <em className="not-italic">
                    <span className="font-display italic text-orange">
                      vous correspond.
                    </span>
                  </em>
                </>
              )}
            </h2>
            <p className="mt-4 text-ink/70 text-sm md:text-base max-w-xl leading-relaxed">
              {subtitle}
            </p>
          </div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink/45">
            [ {String(filtered.length).padStart(2, '0')} / {String(totalForService).padStart(2, '0')} disponibles ]
          </span>
        </div>

        {/* ── Barre de filtres ── */}
        <div className="rounded-2xl bg-cream border border-navy/10 p-4 md:p-5 mb-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="size-9 rounded-full bg-orange/15 grid place-items-center shrink-0">
              <Filter className="size-4 text-orange" />
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
              Affiner la recherche
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-3">
            <FilterSelect
              icon={MapPin}
              label="Région"
              value={regionId}
              onChange={onRegionChange}
              placeholder="Toutes les régions"
              options={regions.map((r) => ({ value: r.id, label: r.label }))}
            />
            <FilterSelect
              icon={Navigation}
              label={regionId ? 'Ville' : 'Ville (choisir une région)'}
              value={city}
              onChange={setCity}
              placeholder={regionId ? 'Toutes les villes' : '—'}
              disabled={!regionId}
              options={cities.map((c) => ({ value: c, label: c }))}
            />
            <button
              type="button"
              onClick={resetFilters}
              disabled={!hasActiveFilter}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all',
                hasActiveFilter
                  ? 'border-navy/20 text-navy hover:bg-navy hover:text-cream hover:border-navy'
                  : 'border-navy/10 text-ink/30 cursor-not-allowed',
              )}
            >
              <X className="size-4" />
              Réinitialiser
            </button>
          </div>
        </div>

        {/* ── Grille des chefs ── */}
        {filtered.length === 0 ? (
          <EmptyState onReset={resetFilters} hasFilter={hasActiveFilter} />
        ) : (
          <div
            className={cn(
              'grid gap-6',
              variant === 'compact'
                ? 'sm:grid-cols-2 lg:grid-cols-3'
                : 'lg:grid-cols-2',
            )}
          >
            {filtered.map((chef, i) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {variant === 'compact' ? (
                  <ChefCardCompact chef={chef} service={service} />
                ) : (
                  <ChefCardFull chef={chef} service={service} />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   FilterSelect — input natif <select> avec icône + label mono
   ═══════════════════════════════════════════════════════════════════════ */

function FilterSelect({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  options,
  disabled,
}: {
  icon: React.ElementType
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
  options: { value: string; label: string }[]
  disabled?: boolean
}) {
  return (
    <label
      className={cn(
        'group relative flex items-center gap-3 px-4 py-3 rounded-xl border bg-cream-soft transition-all',
        disabled
          ? 'border-navy/8 opacity-60 cursor-not-allowed'
          : 'border-navy/15 hover:border-navy-mid focus-within:border-navy-mid focus-within:bg-cream',
      )}
    >
      <Icon className="size-4 text-navy-mid shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink/45 mb-0.5">
          {label}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full bg-transparent outline-none text-sm font-medium text-navy disabled:cursor-not-allowed appearance-none pr-6"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23475569'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0 center',
            backgroundSize: '1rem',
          }}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </label>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CARDS — avatar rounded-full + pitch dynamique selon service
   ═══════════════════════════════════════════════════════════════════════ */

type Chef = (typeof CHEFS)[number]

/** Renvoie le pitch dédié au service, sinon retombe sur la bio générique. */
function getPitch(chef: Chef, service: ServiceKey): string {
  return chef.pitches?.[service] ?? chef.bio
}

/** Renvoie le lien Calendly dédié au service, sinon retombe sur le lien par défaut. */
function getBookingLink(chef: Chef, service: ServiceKey): string {
  return chef.bookingLinks?.[service] ?? chef.bookingLink
}

/* ── COMPACT (atelier) ── */
function ChefCardCompact({
  chef,
  service,
}: {
  chef: Chef
  service: ServiceKey
}) {
  const pitch = getPitch(chef, service)
  return (
    <article className="group relative flex flex-col h-full rounded-3xl bg-cream border border-navy/8 hover:border-orange/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-6">
      {/* Badge certifications en haut à droite (HACCP, etc.) */}
      {chef.certifications.length > 0 && (
        <div className="absolute top-4 right-4 flex flex-wrap gap-1.5 justify-end">
          {chef.certifications.map((cert) => (
            <CertificationBadge key={cert} label={cert} />
          ))}
        </div>
      )}

      {/* Header : avatar + nom + région */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative size-20 shrink-0">
          <Image
            src={chef.photo}
            alt={chef.name}
            fill
            sizes="80px"
            className="rounded-full object-cover object-top ring-4 ring-orange/10"
          />
          {chef.available && (
            <span className="absolute bottom-0.5 right-0.5 size-3.5 rounded-full bg-whatsapp border-2 border-cream" />
          )}
        </div>
        <div className="min-w-0 flex-1 pr-2">
          <h3 className="font-display text-xl text-navy leading-tight truncate">
            {chef.name}
          </h3>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-navy-mid mt-1 truncate">
            {chef.title}
          </p>
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-ink/65">
            <MapPin className="size-3 text-orange shrink-0" />
            <span className="truncate">{chef.region}</span>
          </div>
        </div>
      </div>

      {/* Pitch */}
      <p
        className="text-sm text-ink/70 leading-relaxed text-pretty mb-5 flex-1"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {pitch}
      </p>

      {/* Langues (chip avec icône) */}
      <div className="flex items-center gap-2 mb-5 text-xs text-ink/70">
        <Languages className="size-3.5 text-orange shrink-0" />
        <span className="font-mono uppercase tracking-[0.15em] text-[0.6rem]">
          Langues :
        </span>
        <div className="flex flex-wrap gap-1">
          {chef.languages.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center px-2 py-0.5 rounded-full bg-orange/10 text-orange-deep font-mono text-[0.55rem] font-medium tracking-wider"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={getBookingLink(chef, service)}
        target="_blank"
        rel="noreferrer"
        className="group/btn inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full bg-orange text-cream text-sm font-medium hover:bg-orange-deep transition-all mt-auto"
      >
        <CalendarCheck className="size-4" />
        Réserver un appel
        <ArrowUpRight className="size-4 transition-transform group-hover/btn:rotate-45" />
      </a>
    </article>
  )
}

/* ── FULL (assistance) ── */
function ChefCardFull({
  chef,
  service,
}: {
  chef: Chef
  service: ServiceKey
}) {
  const pitch = getPitch(chef, service)
  return (
    <article className="group relative flex flex-col h-full rounded-3xl bg-cream border border-navy/8 hover:border-orange/30 hover:shadow-xl transition-all duration-500 p-6 md:p-8">
      {/* Badge certifications en haut à droite (HACCP, etc.) */}
      {chef.certifications.length > 0 && (
        <div className="absolute top-5 right-5 flex flex-wrap gap-1.5 justify-end">
          {chef.certifications.map((cert) => (
            <CertificationBadge key={cert} label={cert} />
          ))}
        </div>
      )}

      {/* Header : avatar + nom + région + disponibilité */}
      <div className="flex items-start gap-5 mb-6">
        <div className="relative size-24 shrink-0">
          <Image
            src={chef.photo}
            alt={chef.name}
            fill
            sizes="96px"
            className="rounded-full object-cover object-top ring-4 ring-orange/10"
          />
          {chef.available && (
            <span className="absolute bottom-1 right-1 size-4 rounded-full bg-whatsapp border-2 border-cream" />
          )}
        </div>

        <div className="min-w-0 flex-1 pr-20">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-orange">
              {chef.title}
            </p>
            {chef.available && (
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-whatsapp-deep">
                · Disponible
              </span>
            )}
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-navy leading-none">
            {chef.name}
            <span className="italic-fraunces text-orange">.</span>
          </h3>
          <div className="flex items-center gap-1.5 mt-3 text-sm text-ink/75">
            <MapPin className="size-3.5 text-orange shrink-0" />
            <span className="truncate font-medium">{chef.region}</span>
          </div>
        </div>
      </div>

      {/* Pitch */}
      <p className="text-sm text-ink/75 leading-relaxed text-pretty mb-6">
        {pitch}
      </p>

      {/* Tags spécialités */}
      <div className="flex flex-wrap gap-2 mb-6">
        {chef.specialties.map((s) => (
          <span
            key={s}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange/10 text-orange-deep font-mono text-[0.55rem] uppercase tracking-[0.2em]"
          >
            <Star className="size-2.5" />
            {s}
          </span>
        ))}
      </div>

      {/* Infos : Langues + Expérience */}
      <div className="grid grid-cols-2 gap-5 pt-5 border-t border-navy/8 mb-6">
        <InfoBlock
          icon={Languages}
          label="Langues"
          value={chef.languages.join(' · ')}
        />
        <InfoBlock
          icon={BadgeCheck}
          label="Expérience"
          value={chef.badges.join(' · ')}
        />
      </div>

      {/* CTA */}
      <a
        href={getBookingLink(chef, service)}
        target="_blank"
        rel="noreferrer"
        className="group/btn mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-orange text-cream text-sm font-medium hover:bg-orange-deep transition-all"
      >
        <CalendarCheck className="size-4" />
        Réserver un appel avec {chef.name}
        <ArrowUpRight className="size-4 transition-transform group-hover/btn:rotate-45" />
      </a>
    </article>
  )
}

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="size-3 text-orange" />
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink/45">
          {label}
        </span>
      </div>
      <div className="font-display text-sm text-navy leading-tight">{value}</div>
    </div>
  )
}

/* ── Badge certification (sticker premium navy + bord doré) ── */
function CertificationBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy text-cream font-mono text-[0.55rem] font-semibold uppercase tracking-[0.15em] shadow-md ring-2 ring-orange/40"
      title={`Certification ${label}`}
    >
      <ShieldCheck className="size-3 text-orange" />
      {label}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   Empty state
   ═══════════════════════════════════════════════════════════════════════ */

function EmptyState({
  onReset,
  hasFilter,
}: {
  onReset: () => void
  hasFilter: boolean
}) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-navy/15 bg-cream/50 p-12 md:p-16 text-center">
      <Sparkles className="size-8 text-navy-mid/50 mx-auto mb-4" />
      <h3 className="font-display text-2xl text-navy">
        {hasFilter
          ? 'Aucun chef ne correspond pour le moment'
          : 'Aucun chef sur ce service pour l’instant'}
      </h3>
      <p className="mt-3 text-ink/65 max-w-md mx-auto text-sm">
        {hasFilter
          ? "Nous recrutons activement dans toute la France. Essayez d'élargir votre recherche ou réinitialisez les filtres."
          : 'La communauté Lab’s Food s’agrandit chaque semaine — revenez bientôt !'}
      </p>
      {hasFilter && (
        <button
          type="button"
          onClick={onReset}
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-navy text-cream text-sm font-medium hover:bg-navy-mid transition-colors"
        >
          <X className="size-4" />
          Réinitialiser les filtres
        </button>
      )}
    </div>
  )
}
