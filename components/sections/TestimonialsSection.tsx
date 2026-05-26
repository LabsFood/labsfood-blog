'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { REVIEWS } from '@/lib/content'

/**
 * TÉMOIGNAGES — Style éditorial Benchland
 * Citations grandes, navigation manuelle + auto-scroll
 */

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]

  const prev = () =>
    setIndex((i) => (i === 0 ? REVIEWS.length - 1 : i - 1))
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length)

  return (
    <section className="relative bg-cream-soft py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Quote géant en filigrane */}
      <Quote
        aria-hidden
        className="absolute -top-12 -left-12 md:-top-16 md:-left-16 size-[28rem] md:size-[40rem] text-navy/[0.04] pointer-events-none"
      />

      <div className="relative container-wide">
        {/* En-tête */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
              <span className="size-6 h-px bg-navy-mid" />
              Ils ont vécu Lab&apos;s Food
            </p>
            <h2
              className="font-display text-navy leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Des mots,{' '}
              <em className="not-italic">
                <span className="font-display italic gradient-text-navy-mid">
                  des sourires
                </span>
              </em>
              , des assiettes vidées.
            </h2>
          </div>

          {/* Compteur + nav */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-navy/10 flex flex-col justify-between gap-6">
            <p className="text-ink/70 text-base leading-relaxed text-pretty">
              Ces messages, on les a reçus de vous — sur WhatsApp, en
              face-à-face, par message. C&apos;est tout ce qu&apos;on cherche :
              que ça vous plaise vraiment.
            </p>
            <div className="flex items-center justify-between">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink/40 tabular-nums">
                {String(index + 1).padStart(2, '0')}
                <span className="mx-2 text-ink/20">/</span>
                {String(REVIEWS.length).padStart(2, '0')}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Témoignage précédent"
                  className="size-12 rounded-full border border-navy/15 text-navy hover:bg-navy hover:text-cream hover:border-navy transition-colors grid place-items-center"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Témoignage suivant"
                  className="size-12 rounded-full border border-navy/15 text-navy hover:bg-navy hover:text-cream hover:border-navy transition-colors grid place-items-center"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Carte témoignage principale ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto bg-cream rounded-3xl p-10 md:p-16 shadow-2xl border border-navy/8"
          >
            {/* Quote icon */}
            <div className="absolute -top-6 left-10 md:left-14 size-12 rounded-full bg-navy-mid text-cream grid place-items-center shadow-xl">
              <Quote className="size-5" />
            </div>

            <p
              className="font-display italic text-navy leading-[1.2] text-balance"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
            >
              « {review.text} »
            </p>

            <div className="mt-10 pt-8 border-t border-navy/10 flex items-center gap-4">
              <div className="size-12 rounded-full bg-navy text-cream grid place-items-center font-display text-lg">
                {review.author[0]}
              </div>
              <div>
                <div className="font-display text-xl text-navy">
                  {review.author}
                </div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50 mt-0.5">
                  Client maison
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mini dots indicateurs */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Aller au témoignage ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? 'w-8 bg-navy-mid'
                  : 'w-1.5 bg-navy/20 hover:bg-navy/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
