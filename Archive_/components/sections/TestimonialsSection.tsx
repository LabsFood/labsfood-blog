'use client'

import { useMemo } from 'react'
import { REVIEWS } from '@/lib/content'
import { FOUNDER } from '@/lib/content'
import { cn } from '@/lib/utils'

/**
 * AVIS CLIENTS — mur de messages en défilement vertical.
 *
 * Les avis arrivent par WhatsApp et sont publiés tels quels : le bloc est donc
 * traité comme un mur de messages, pas comme des cartes marketing. Pas
 * d'icône de citation, pas d'avatar coloré, pas de texte tronqué. Le seul
 * accent de couleur est le nom du produit concerné, dans la teinte que la
 * charte lui réserve déjà.
 *
 * Trois colonnes défilent vers le haut à des vitesses désynchronisées. Le
 * survol ou le focus clavier met la colonne en pause ; si le visiteur a
 * demandé moins d'animations, le mur se fige et se déplie en hauteur normale.
 */

/** Teinte d'accent par famille d'avis, prise dans la charte. */
const SOURCE = {
  kossam: { label: 'Kossam', tone: 'text-mint-ink' },
  batch: { label: 'Batch cooking', tone: 'text-navy-mid' },
  service: { label: 'Nos plats', tone: 'text-navy-mid' },
} as const

type Source = keyof typeof SOURCE

/** Répartit les avis en colonnes en alternant, pour équilibrer les hauteurs. */
function splitInColumns<T>(arr: readonly T[], cols: number): T[][] {
  const out: T[][] = Array.from({ length: cols }, () => [])
  arr.forEach((item, i) => out[i % cols].push(item))
  return out
}

type Props = {
  /** Si défini, n'affiche que les avis de cette source. */
  filterSource?: Source
  title?: React.ReactNode
  subtitle?: string
}

export function TestimonialsSection({ filterSource, title, subtitle }: Props = {}) {
  const reviews = useMemo(
    () => (filterSource ? REVIEWS.filter((r) => r.source === filterSource) : REVIEWS),
    [filterSource],
  )
  const columns = useMemo(() => splitInColumns(reviews, 3), [reviews])

  return (
    <section id="avis" className="bg-cream-deep py-24 md:py-32 lg:py-36">
      <div className="container-wide">
        {/* ── Titre ─────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-14 md:mb-16">
          <h2
            className="lg:col-span-7 font-display text-navy leading-[0.98] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            {title ?? (
              <>
                Ils ont ouvert leur cuisine,{' '}
                <span className="font-display italic text-orange-deep">
                  ils racontent.
                </span>
              </>
            )}
          </h2>

          <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-navy/10">
            <p className="text-ink/75 leading-relaxed max-w-[52ch]">
              {subtitle ??
                'Des messages reçus sur WhatsApp, publiés tels quels : leurs mots, leur ponctuation, leur enthousiasme.'}
            </p>
            <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/70 tabular-nums">
              {reviews.length} avis publiés sur plus de{' '}
              {FOUNDER.gourmandsServed} gourmands servis
            </p>
          </div>
        </div>

        {/* ── Le mur ────────────────────────────────────────────────────── */}
        <div className="relative h-[clamp(580px,72vh,760px)] motion-reduce:h-auto">
          <div className="grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {columns.map((col, idx) => (
              <Colonne
                key={idx}
                reviews={col}
                speed={
                  idx === 0
                    ? 'animate-marquee-up-slow'
                    : idx === 1
                      ? 'animate-marquee-up'
                      : 'animate-marquee-up-fast'
                }
                /* Une seule colonne sur téléphone, deux en tablette, trois au
                   delà : sinon les colonnes se partagent la hauteur du mur et
                   chacune ne montre plus qu'un demi-avis. */
                visibility={
                  idx === 0 ? '' : idx === 1 ? 'hidden sm:block' : 'hidden lg:block'
                }
              />
            ))}
          </div>

          {/* Fondus haut et bas, alignés sur les bords du mur */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-cream-deep to-transparent motion-reduce:hidden"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28 bg-gradient-to-t from-cream-deep to-transparent motion-reduce:hidden"
          />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

type Review = (typeof REVIEWS)[number]

function Colonne({
  reviews,
  speed,
  visibility,
}: {
  reviews: Review[]
  speed: string
  visibility: string
}) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden motion-reduce:overflow-visible',
        visibility,
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-4 md:gap-5',
          speed,
          'group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]',
          'motion-reduce:animate-none',
        )}
      >
        {reviews.map((review, i) => (
          <Slip key={`a-${review.author}-${i}`} review={review} />
        ))}
        {/* Second jeu : referme la boucle sans saut. Masqué aux lecteurs
            d'écran pour ne pas leur lire deux fois les mêmes avis. */}
        <div
          aria-hidden
          className="flex flex-col gap-4 md:gap-5 motion-reduce:hidden"
        >
          {reviews.map((review, i) => (
            <Slip key={`b-${review.author}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Slip({ review }: { review: Review }) {
  const source = SOURCE[review.source as Source] ?? SOURCE.service
  /* Les avis courts sont des exclamations : ils respirent mieux en plus grand.
     La taille suit la longueur du message, jamais sa provenance. */
  const court = review.text.length < 90

  return (
    <figure className="rounded-2xl border border-navy/12 bg-cream-soft p-6 md:p-7 transition-colors duration-500 ease-expo hover:border-navy/30">
      <blockquote
        className={cn(
          'text-navy/90 text-pretty',
          court ? 'text-lg leading-snug' : 'text-[0.95rem] leading-relaxed',
        )}
      >
        {review.text}
      </blockquote>

      <figcaption className="mt-5 pt-4 border-t border-navy/10 flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          <span className="block font-display text-base text-navy leading-tight truncate">
            {review.author}
          </span>
          <span className="block font-mono text-[0.65rem] text-ink/75 mt-1 truncate">
            @{review.author.toLowerCase().replace(/[^a-z0-9]/g, '')}
            {'city' in review && review.city && (
              <span className="text-ink/70"> · {review.city}</span>
            )}
          </span>
        </div>
        <span
          className={cn(
            'shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.18em]',
            source.tone,
          )}
        >
          {source.label}
        </span>
      </figcaption>
    </figure>
  )
}
