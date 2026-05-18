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
      {/* Décor en fond */}
      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
      <div className="absolute -top-40 left-1/3 size-[700px] bg-terra/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 right-0 size-[600px] bg-teal/30 blur-3xl rounded-full pointer-events-none" />

      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Avis clients — Kossam"
          title={
            <>
              Ce que les premiers gourmands{' '}
              <span className="italic gradient-text-terra">en disent</span>.
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
            <Star key={i} className="size-3 fill-terra text-terra" />
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
    <article className="w-[340px] md:w-[400px] shrink-0 rounded-3xl bg-cream/[0.04] backdrop-blur-sm border border-cream/15 p-7 hover:bg-cream/[0.07] hover:border-terra/40 transition-all duration-500">
      <div className="flex items-center justify-between mb-4">
        <Quote className="size-5 text-terra" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3 fill-terra text-terra" />
          ))}
        </div>
      </div>
      <p className="text-cream/95 leading-relaxed text-[0.95rem]">{r.text}</p>
      <div className="mt-6 pt-4 border-t border-cream/10 flex items-center gap-3">
        <div className="size-9 rounded-full bg-terra/20 text-terra-soft grid place-items-center font-display text-base">
          {r.author[0]}
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream/80">
            {r.author}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/45">
            Client vérifié
          </span>
        </div>
      </div>
    </article>
  )
}
