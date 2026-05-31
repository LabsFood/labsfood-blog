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
} from 'lucide-react'
import { CHEFS, getAvailableRegions, getAvailableCities } from '@/lib/content'
import { cn } from '@/lib/utils'

/**
 * SECTION CHEFS FILTRABLES
 *
 * Variantes :
 *   - 'full'    : version riche (assistance culinaire) → bio + badges + tags
 *   - 'compact' : version simple (atelier culinaire) → photo + nom + région + CTA
 *
 * Filtres en cascade :
 *   - Sélection région  → filtre les chefs ET met à jour les villes
 *   - Sélection ville   → filtre encore plus
 *   - "Tout afficher"   → reset
 */

type Variant = 'full' | 'compact'

type Props = {
  variant?: Variant
  eyebrow?: string
  title?: React.ReactNode
  subtitle?: string
}

export function ChefsFilterable({
  variant = 'compact',
  eyebrow = 'Nos chefs partenaires',
  title,
  subtitle = 'Filtrez par région puis par ville pour trouver le profil le plus proche de chez vous.',
}: Props) {
  const [regionId, setRegionId] = useState<string>('')
  const [city, setCity] = useState<string>('')

  const regions = useMemo(() => getAvailableRegions(), [])
  const cities = useMemo(() => getAvailableCities(regionId || undefined), [regionId])

  // Liste filtrée
  const filtered = useMemo(() => {
    return CHEFS.filter((c) => {
      if (regionId && c.regionId !== regionId) return false
      if (city && !(c.cities as readonly string[]).includes(city)) return false
      return true
    })
  }, [regionId, city])

  const hasActiveFilter = Boolean(regionId || city)

  function resetFilters() {
    setRegionId('')
    setCity('')
  }

  function onRegionChange(value: string) {
    setRegionId(value)
    // Reset ville si elle n'existe plus dans la nouvelle région
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
            [ {String(filtered.length).padStart(2, '0')} / {String(CHEFS.length).padStart(2, '0')} disponibles ]
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
            {/* Région */}
            <FilterSelect
              icon={MapPin}
              label="Région"
              value={regionId}
              onChange={onRegionChange}
              placeholder="Toutes les régions"
              options={regions.map((r) => ({ value: r.id, label: r.label }))}
            />

            {/* Ville */}
            <FilterSelect
              icon={Navigation}
              label={regionId ? 'Ville' : 'Ville (choisir une région)'}
              value={city}
              onChange={setCity}
              placeholder={regionId ? 'Toutes les villes' : '—'}
              disabled={!regionId}
              options={cities.map((c) => ({ value: c, label: c }))}
            />

            {/* Reset */}
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

        {/* ── Grille des chefs filtrés ── */}
        {filtered.length === 0 ? (
          <EmptyState onReset={resetFilters} />
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
                  <ChefCardCompact chef={chef} />
                ) : (
                  <ChefCardFull chef={chef} />
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
   FilterSelect — input natif <select> avec icône + labels mono
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
   CARDS — compact (atelier) / full (assistance)
   ═══════════════════════════════════════════════════════════════════════ */

type Chef = (typeof CHEFS)[number]

function ChefCardCompact({ chef }: { chef: Chef }) {
  return (
    <article className="group rounded-3xl overflow-hidden bg-cream border border-navy/8 hover:border-orange/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      {/* Photo carrée */}
      <div className="relative aspect-square bg-navy overflow-hidden">
        <Image
          src={chef.photo}
          alt={chef.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-expo"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/80 to-transparent" />

        {chef.available && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream/95 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-whatsapp animate-pulse" />
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink">
              Dispo
            </span>
          </div>
        )}

        {/* Nom en bas de la photo */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="font-display text-2xl text-cream leading-none">
            {chef.name}
          </div>
          <div className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-cream/75 mt-1.5">
            {chef.title}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-5 flex flex-col">
        <div className="flex items-center gap-2 text-sm text-ink/70 mb-3">
          <MapPin className="size-3.5 text-orange shrink-0" />
          <span className="truncate">
            {chef.region} <span className="text-ink/40">·</span> {chef.zone}
          </span>
        </div>

        {/* Description courte (line-clamp 3 lignes) */}
        <p
          className="text-sm text-ink/65 leading-relaxed text-pretty mb-5"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {chef.bio}
        </p>

        <a
          href={chef.bookingLink}
          target="_blank"
          rel="noreferrer"
          className="group/btn inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full bg-orange text-cream text-sm font-medium hover:bg-orange-deep transition-all mt-auto"
        >
          <CalendarCheck className="size-4" />
          Réserver un appel
          <ArrowUpRight className="size-4 transition-transform group-hover/btn:rotate-45" />
        </a>
      </div>
    </article>
  )
}

function ChefCardFull({ chef }: { chef: Chef }) {
  return (
    <article className="group grid sm:grid-cols-12 rounded-3xl overflow-hidden bg-cream border border-navy/8 hover:border-orange/30 hover:shadow-xl transition-all duration-500">
      {/* Photo */}
      <div className="relative sm:col-span-5 aspect-square sm:aspect-auto min-h-[320px] bg-navy overflow-hidden">
        <Image
          src={chef.photo}
          alt={chef.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 40vw, 90vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-expo"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/70 to-transparent" />
        {chef.available && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream/95 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-whatsapp animate-pulse" />
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink">
              Disponible
            </span>
          </div>
        )}
      </div>

      {/* Détails complets */}
      <div className="sm:col-span-7 p-6 md:p-8 flex flex-col">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-orange mb-1">
          {chef.title}
        </div>
        <h3 className="font-display text-3xl md:text-4xl text-navy leading-none">
          {chef.name}
          <span className="italic-fraunces text-orange">.</span>
        </h3>

        {/* Tags spécialités */}
        <div className="flex flex-wrap gap-2 mt-4">
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

        {/* Bio */}
        <p className="mt-5 text-sm text-ink/70 leading-relaxed text-pretty">
          {chef.bio}
        </p>

        {/* Grille d'infos : Région · Zone · Langues · Expérience */}
        <div className="mt-6 pt-5 border-t border-navy/8 grid grid-cols-2 gap-x-5 gap-y-4">
          <InfoBlock icon={MapPin} label="Région" value={chef.region} />
          <InfoBlock icon={Navigation} label="Zone" value={chef.zone} />
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

        <a
          href={chef.bookingLink}
          target="_blank"
          rel="noreferrer"
          className="group/btn mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-orange text-cream text-sm font-medium hover:bg-orange-deep transition-all"
        >
          <CalendarCheck className="size-4" />
          Réserver un appel avec {chef.name}
          <ArrowUpRight className="size-4 transition-transform group-hover/btn:rotate-45" />
        </a>
      </div>
    </article>
  )
}

/* InfoBlock — utilisé dans la card full */
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
      <div className="font-display text-sm text-navy leading-tight">
        {value}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   Empty state — aucun chef ne matche
   ═══════════════════════════════════════════════════════════════════════ */

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-navy/15 bg-cream/50 p-12 md:p-16 text-center">
      <Sparkles className="size-8 text-navy-mid/50 mx-auto mb-4" />
      <h3 className="font-display text-2xl text-navy">
        Aucun chef ne correspond pour le moment
      </h3>
      <p className="mt-3 text-ink/65 max-w-md mx-auto text-sm">
        Nous recrutons activement dans toute la France. Essayez d&apos;élargir
        votre recherche ou réinitialisez les filtres.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-navy text-cream text-sm font-medium hover:bg-navy-mid transition-colors"
      >
        <X className="size-4" />
        Réinitialiser les filtres
      </button>
    </div>
  )
}
