'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { REVIEWS } from '@/lib/content'

/**
 * TÉMOIGNAGES — Coverflow 3D (style iTunes/Apple Music)
 *
 * 5 cards visibles simultanément :
 *   - card centrale : focus net, scale 1, rotation 0
 *   - cards à distance 1 (±1) : scale 0.85, rotateY ±28°, léger blur, opacity 0.7
 *   - cards à distance 2 (±2) : scale 0.7, rotateY ±42°, fort blur, opacity 0.35
 *   - au-delà : masquées (opacity 0, pointer-events none)
 *
 * Navigation : flèches latérales, clic sur une card latérale, auto-rotate 6s.
 */

// Position visuelle d'une card par rapport au centre
type Geometry = {
  x: number          // translation horizontale (px)
  rotate: number     // rotateY (deg)
  scale: number      // échelle
  blur: number       // blur (px)
  opacity: number
  zIndex: number
  pointer: boolean
}

function getGeometry(offset: number): Geometry {
  // offset = distance signée à la card centrale (négatif = gauche, positif = droite)
  const abs = Math.abs(offset)
  if (abs > 2) {
    return { x: 0, rotate: 0, scale: 0.5, blur: 8, opacity: 0, zIndex: 0, pointer: false }
  }
  const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1
  // Décalage horizontal progressif (plus on s'éloigne, plus on s'écarte)
  const xMap = [0, 240, 410]
  const rotateMap = [0, 28, 42]
  const scaleMap = [1, 0.85, 0.7]
  const blurMap = [0, 1.5, 3.5]
  const opacityMap = [1, 0.7, 0.35]
  const zMap = [30, 20, 10]
  return {
    x: sign * xMap[abs],
    rotate: -sign * rotateMap[abs],
    scale: scaleMap[abs],
    blur: blurMap[abs],
    opacity: opacityMap[abs],
    zIndex: zMap[abs],
    pointer: abs <= 2,
  }
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = REVIEWS.length

  const goTo = useCallback(
    (i: number) => setIndex(((i % total) + total) % total),
    [total],
  )
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Auto-rotate (pause au survol)
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000)
    return () => clearInterval(id)
  }, [paused, total])

  // Clavier ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Calcul de l'offset signé le plus court (gère la boucle)
  function signedOffset(i: number): number {
    let off = i - index
    if (off > total / 2) off -= total
    if (off < -total / 2) off += total
    return off
  }

  return (
    <section
      id="avis"
      className="relative bg-cream-soft py-24 md:py-32 lg:py-40 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Halos décoratifs */}
      <div
        aria-hidden
        className="absolute -top-40 -left-32 size-[500px] bg-navy-mid/8 blur-3xl rounded-full pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 size-[500px] bg-orange/10 blur-3xl rounded-full pointer-events-none"
      />

      <div className="relative container-wide">
        {/* ── En-tête ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
            <span className="size-6 h-px bg-navy-mid" />
            +150 avis recueillis
            <span className="size-6 h-px bg-navy-mid" />
          </p>
          <h2
            className="font-display text-navy leading-[0.98] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Ce qu&apos;
            <em className="not-italic">
              <span className="font-display italic text-navy-mid">
                ils en disent.
              </span>
            </em>
          </h2>
        </div>

        {/* ── Stage 3D ── */}
        <div
          className="relative mx-auto"
          style={{
            perspective: '1600px',
            height: 'clamp(360px, 50vw, 480px)',
          }}
        >
          {/* Plateau */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {REVIEWS.map((review, i) => {
              const offset = signedOffset(i)
              const g = getGeometry(offset)
              const isCenter = offset === 0
              return (
                <motion.button
                  key={`${review.author}-${i}`}
                  type="button"
                  onClick={() => !isCenter && goTo(i)}
                  aria-label={`Voir l'avis de ${review.author}`}
                  className="absolute left-1/2 top-1/2 origin-center"
                  style={{
                    zIndex: g.zIndex,
                    pointerEvents: g.pointer ? 'auto' : 'none',
                    cursor: isCenter ? 'default' : 'pointer',
                  }}
                  animate={{
                    x: g.x - 175,        // -175 = compense -translate-x-1/2 (card de 350px)
                    y: -210,             // compense -translate-y-1/2 (card ~420px)
                    rotateY: g.rotate,
                    scale: g.scale,
                    opacity: g.opacity,
                    filter: `blur(${g.blur}px)`,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 110,
                    damping: 22,
                    mass: 0.9,
                  }}
                >
                  <ReviewCard review={review} isCenter={isCenter} />
                </motion.button>
              )
            })}
          </div>

          {/* Reflet sous le plateau (subtil) */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream-soft via-cream-soft/50 to-transparent pointer-events-none"
          />
        </div>

        {/* ── Navigation : flèches + dots ── */}
        <div className="mt-12 md:mt-16 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Avis précédent"
            className="size-12 rounded-full border border-navy/15 bg-cream hover:bg-navy hover:text-cream hover:border-navy text-navy grid place-items-center transition-all hover:-translate-x-0.5"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Dots compactes */}
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => {
              const isActive = i === index
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Aller à l'avis ${i + 1}`}
                  className={`transition-all rounded-full ${
                    isActive
                      ? 'w-8 h-2 bg-navy-mid'
                      : 'w-2 h-2 bg-navy/20 hover:bg-navy/40'
                  }`}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Avis suivant"
            className="size-12 rounded-full border border-navy/15 bg-cream hover:bg-navy hover:text-cream hover:border-navy text-navy grid place-items-center transition-all hover:translate-x-0.5"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Mention auto-pause */}
        <p className="text-center mt-8 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/35">
          {index + 1} / {total} · Survol pour mettre en pause
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

type Review = (typeof REVIEWS)[number]

function ReviewCard({
  review,
  isCenter,
}: {
  review: Review
  isCenter: boolean
}) {
  // Initiale pour l'avatar
  const initial = review.author.charAt(0).toUpperCase()

  return (
    <div
      className={`w-[350px] h-[420px] rounded-3xl bg-cream border shadow-2xl p-8 md:p-10 flex flex-col justify-between text-left transition-shadow ${
        isCenter
          ? 'border-navy-mid/30 shadow-navy/20'
          : 'border-navy/8 shadow-navy/10'
      }`}
    >
      {/* Haut : icône quote + 5 étoiles */}
      <div>
        <div className="flex items-start justify-between">
          <div className="size-12 rounded-2xl bg-navy-mid/10 grid place-items-center">
            <Quote className="size-5 text-navy-mid" />
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-3.5 text-orange fill-orange"
              />
            ))}
          </div>
        </div>

        <p
          className="font-display text-navy mt-7 leading-snug text-balance"
          style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)',
            display: '-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          « {review.text} »
        </p>
      </div>

      {/* Bas : auteur */}
      <div className="flex items-center gap-3 pt-6 border-t border-navy/10">
        <div className="size-11 rounded-full bg-gradient-to-br from-navy to-navy-mid grid place-items-center text-cream font-display text-lg shadow-md">
          {initial}
        </div>
        <div>
          <div className="font-display text-base text-navy leading-tight">
            {review.author}
          </div>
          <div className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-ink/45 mt-0.5">
            Client·e vérifié·e
          </div>
        </div>
      </div>
    </div>
  )
}
