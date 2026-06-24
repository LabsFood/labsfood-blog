'use client'

import { useMemo } from 'react'
import { Quote } from 'lucide-react'
import { REVIEWS } from '@/lib/content'

/**
 * TÉMOIGNAGES — Mega carousel 3 colonnes scroll vertical
 *
 * - 3 colonnes côte à côte, chacune scroll verticalement vers le haut
 * - Vitesses désynchronisées (40s / 55s / 32s) pour un effet "flottant"
 * - Fades top + bottom (cream-soft → transparent) pour effet "infinite"
 * - Cards pastel rotatives (5 teintes) avec avatar coloré + quote + @author
 * - Hover : pause la colonne (group-hover:[animation-play-state:paused])
 */

// Palette de teintes pastel rotatives pour les cards
const TINTS = [
  { bg: 'bg-[#E8F4FF]', avatar: 'bg-[#7BB3E8]' }, // bleu doux
  { bg: 'bg-[#FFF1E8]', avatar: 'bg-[#E89B6F]' }, // pêche
  { bg: 'bg-[#E8F8F0]', avatar: 'bg-[#6FBF8E]' }, // mint
  { bg: 'bg-[#FFE8E8]', avatar: 'bg-[#E87B7B]' }, // rose corail
  { bg: 'bg-[#F0EAFF]', avatar: 'bg-[#9B7BE8]' }, // lavande
  { bg: 'bg-[#FFF8D6]', avatar: 'bg-[#D4B14C]' }, // jaune chaud
] as const

const SOURCE_LABEL: Record<string, string> = {
  kossam: 'Kossam',
  batch: 'Batch cooking',
  atelier: 'Atelier',
  service: 'Batch cooking',
}

// Distribue les avis sur 3 colonnes en alternant pour équilibrer
function splitInColumns<T>(arr: readonly T[], cols: number): T[][] {
  const out: T[][] = Array.from({ length: cols }, () => [])
  arr.forEach((item, i) => out[i % cols].push(item))
  return out
}

type Source = 'kossam' | 'batch' | 'service' | 'atelier'

type Props = {
  /** Si défini, n'affiche que les avis de cette source. */
  filterSource?: Source
  /** Titre alternatif (sinon "Ce qu'ils en disent.") */
  eyebrow?: string
  title?: React.ReactNode
  subtitle?: string
}

export function TestimonialsSection({
  filterSource,
  eyebrow,
  title,
  subtitle,
}: Props = {}) {
  const reviews = useMemo(
    () => (filterSource ? REVIEWS.filter((r) => r.source === filterSource) : REVIEWS),
    [filterSource],
  )
  const columns = useMemo(() => splitInColumns(reviews, 3), [reviews])
  return (
    <section
      id="avis"
      className="relative bg-cream-soft py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Halos déco diffus */}
      {/* <div
        aria-hidden
        className="absolute -top-40 -left-40 size-[500px] bg-navy-mid/8 blur-3xl rounded-full pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 size-[500px] bg-orange/10 blur-3xl rounded-full pointer-events-none"
      /> */}

      <div className="relative container-wide">
        {/* ── En-tête (paramétrable via props) ── */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14 md:mb-20">
          <div className="max-w-2xl">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-5">
              <span className="size-6 h-px bg-navy-mid" />
              {eyebrow ?? '+150 gourmands régalés'}
            </p>
            <h2
              className="font-display text-navy leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              {title ?? (
                <>
                  Ce qu&apos;
                  <em className="not-italic">
                    <span className="font-display italic text-navy-mid">
                      ils en disent.
                    </span>
                  </em>
                </>
              )}
            </h2>
          </div>
          <p className="text-ink/65 text-sm md:text-base max-w-sm leading-relaxed">
            {subtitle ??
              'Avis recueillis les services les produits'}
          </p>
        </div>

        {/* ── 3 colonnes marquee vertical + fades intégrés au stage ── */}
        <div
          className="relative"
          style={{ height: 'clamp(560px, 70vh, 720px)' }}
        >
          {/* Stage scrollant */}
          <div className="grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {columns.map((col, idx) => (
              <Column
                key={idx}
                reviews={col}
                speed={
                  idx === 0
                    ? 'animate-marquee-up-slow'
                    : idx === 1
                      ? 'animate-marquee-up'
                      : 'animate-marquee-up-fast'
                }
                offsetStart={idx * 4}
                hideOnMobileIf={idx === 2 ? 'sm' : idx === 1 ? null : null}
              />
            ))}
          </div>

          {/* Fades — absolus AU stage, donc toujours alignés sur ses bords */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-28 lg:h-32 bg-gradient-to-b from-cream-soft via-cream-soft/90 to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 lg:h-40 bg-gradient-to-t from-cream-soft via-cream-soft/90 to-transparent z-10"
          />
        </div>

        {/* ── Compteur bas ── */}
        {/* <div className="relative mt-12 text-center">
          <p className="inline-flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink/45">
            <span className="size-1.5 rounded-full bg-orange animate-pulse" />
            {REVIEWS.length} avis affichés · +150 recueillis au total
          </p>
        </div> */}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

type Review = (typeof REVIEWS)[number]

function Column({
  reviews,
  speed,
  offsetStart,
  hideOnMobileIf,
}: {
  reviews: Review[]
  speed: string
  offsetStart: number
  hideOnMobileIf: 'sm' | null
}) {
  // Duplique la liste 2x : boucle seamless car animation translateY 0 → -50%
  // = exactement 1 copie de la liste, donc la fin du cycle aligne visuellement
  // avec le début (pas de jump).
  const doubled = [...reviews, ...reviews]

  return (
    <div
      className={`relative overflow-hidden group ${hideOnMobileIf === 'sm' ? 'hidden lg:block' : ''
        }`}
    >
      <div
        className={`flex flex-col gap-4 md:gap-5 ${speed} group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((review, i) => {
          const tint = TINTS[(i + offsetStart) % TINTS.length]
          return <ReviewCard key={`${review.author}-${i}`} review={review} tint={tint} />
        })}
      </div>
    </div>
  )
}

function ReviewCard({
  review,
  tint,
}: {
  review: Review
  tint: (typeof TINTS)[number]
}) {
  const initial = review.author.charAt(0).toUpperCase()
  const sourceLabel = SOURCE_LABEL[review.source] ?? 'Avis'
  const isLong = review.text.length > 110

  return (
    <article
      className={`group/card relative ${tint.bg} rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500 border border-navy/[0.04]`}
    >
      {/* Quote icon + source tag */}
      <div className="flex items-start justify-between mb-3">
        <Quote className="size-4 text-navy/30" />
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full bg-cream/60 text-navy/60">
          {sourceLabel}
        </span>
      </div>

      {/* Texte avis */}
      <p
        className={`text-navy/85 leading-relaxed text-pretty ${isLong ? 'text-sm' : 'text-[0.95rem]'
          }`}
        style={
          isLong
            ? {
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }
            : undefined
        }
      >
        {review.text}
      </p>

      {/* Auteur */}
      <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-navy/[0.06]">
        <div
          className={`size-8 rounded-full ${tint.avatar} text-white grid place-items-center font-display text-xs font-bold shadow-sm`}
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-medium text-navy truncate">
            @{review.author.toLowerCase().replace(/[^a-z0-9]/g, '')}
          </div>
          {'city' in review && review.city && (
            <div className="text-[0.6rem] text-navy/45 truncate">
              {review.city}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
