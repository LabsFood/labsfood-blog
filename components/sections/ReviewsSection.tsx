'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { REVIEWS } from '@/lib/content'

export function ReviewsSection() {
  return (
    <section className="section bg-navy text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 size-[500px] bg-terra/10 blur-3xl rounded-full" />

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

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="break-inside-avoid rounded-2xl bg-cream/5 backdrop-blur-sm border border-cream/10 p-6 hover:bg-cream/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="size-5 text-terra-soft" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="size-3 fill-terra text-terra"
                    />
                  ))}
                </div>
              </div>
              <p className="text-cream/90 leading-relaxed text-[0.95rem]">{r.text}</p>
              <div className="mt-5 pt-4 border-t border-cream/10 flex items-center gap-3">
                <div className="size-8 rounded-full bg-terra/20 text-terra-soft grid place-items-center font-display text-sm">
                  {r.author[0]}
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/70">
                  {r.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
