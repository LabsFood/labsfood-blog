'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { REVIEWS } from '@/lib/content'

export function ReviewsSection() {
  const row1 = REVIEWS.slice(0, 5)
  const row2 = REVIEWS.slice(5)

  return (
    <section className="section bg-navy text-cream relative overflow-hidden">
      {/* Grain subtil — pas de blur */}
      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
      {/* Filets éditoriaux haut/bas */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-mid/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-mid/20 to-transparent" />

      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Avis clients — Kossam"
          title={
            <>
              Ce que les premiers gourmands{' '}
              <span className="italic gradient-text-navy-mid">en disent</span>.
            </>
          }
          lede="10 témoignages reçus de la part de notre communauté autour de la première signature de la maison."
          align="center"
          invert
        />

        {/* Mini stats */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-10 mb-16">
            <Stat value="10+" label="avis recueillis" />
            <Stat value="5.0" label="note moyenne" stars />
            <Stat value="100%" label="recommandé" />
          </div>
        </Reveal>
      </div>

      {/* Marquees en double sens */}
      <div className="relative space-y-6 md:space-y-8">
        <MarqueeRow items={row1} duration={55} />
        <MarqueeRow items={row2} duration={65} reverse />
      </div>
    </section>
  )
}

function Stat({
  value,
  label,
  stars = false,
}: {
  value: string
  label: string
  stars?: boolean
}) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl text-cream tabular-nums">
        {value}
      </div>
      {stars && (
        <div className="flex justify-center gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3 fill-navy-mid text-navy-mid" />
          ))}
        </div>
      )}
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/55 mt-2">
        {label}
      </div>
    </div>
  )
}

function MarqueeRow({
  items,
  duration,
  reverse = false,
}: {
  items: readonly { author: string; text: string }[]
  duration: number
  reverse?: boolean
}) {
  const doubled = [...items, ...items]
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fades latéraux */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-navy to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}
      </motion.div>
    </div>
  )
}

function ReviewCard({ r }: { r: { author: string; text: string } }) {
  return (
    <article className="w-[340px] md:w-[400px] shrink-0 rounded-3xl bg-cream text-navy border border-navy-mid/0 p-7 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] hover:border-navy-mid/60 hover:-translate-y-1 transition-all duration-500 ease-expo">
      {/* En-tête : quote + étoiles */}
      <div className="flex items-center justify-between mb-4">
        <Quote className="size-5 text-navy-mid" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3 fill-navy-mid text-navy-mid" />
          ))}
        </div>
      </div>

      {/* Citation */}
      <p className="text-ink leading-relaxed text-[0.95rem]">{r.text}</p>

      {/* Footer : auteur */}
      <div className="mt-6 pt-4 border-t border-navy/10 flex items-center gap-3">
        <div className="size-9 rounded-full bg-navy-mid text-cream grid place-items-center font-display text-base shrink-0">
          {r.author[0]}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-navy">
            {r.author}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/50 mt-0.5">
            Client vérifié
          </span>
        </div>
      </div>
    </article>
  )
}
