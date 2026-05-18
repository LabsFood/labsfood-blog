'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { REVIEWS } from '@/lib/content'

export function KossamReviewsCarousel() {
  // Carousel auto-défilant via animation marquee Tailwind (cf. tailwind.config)
  const doubled = [...REVIEWS, ...REVIEWS]

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-cream-soft to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-cream-soft to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((r, i) => (
          <div
            key={i}
            className="w-[340px] shrink-0 rounded-2xl bg-cream-soft border border-navy/10 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <Quote className="size-4 text-terra" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-3 fill-terra text-terra" />
                ))}
              </div>
            </div>
            <p className="text-ink/85 leading-relaxed text-[0.95rem]">{r.text}</p>
            <div className="mt-5 pt-4 border-t border-navy/10 flex items-center gap-3">
              <div className="size-7 rounded-full bg-terra/15 text-terra grid place-items-center font-display text-xs">
                {r.author[0]}
              </div>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/65">
                {r.author}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
