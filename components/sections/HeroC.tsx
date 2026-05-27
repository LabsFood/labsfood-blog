'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

/**
 * HERO C — "Triptyque éditorial"
 * 3 colonnes pleine hauteur, chacune représentant un pilier
 * (Atelier / Batch / Kossam). Très magazine, très clair.
 */
const PILLARS = [
  {
    label: '01',
    eyebrow: 'Atelier',
    title: 'Cuisine du monde, chez vous',
    href: '/services/atelier-culinaire',
    bg: '/assets/photo-3.jpeg',
    accent: 'bg-navy-mid',
  },
  {
    label: '02',
    eyebrow: 'Batch cooking',
    title: 'Une semaine de repas, en 2h',
    href: '/services/batch-cooking',
    bg: '/assets/photo-9.jpeg',
    accent: 'bg-teal',
  },
  {
    label: '03',
    eyebrow: 'Kossam',
    title: "L'art de la fermentation",
    href: '/produits/kossam',
    bg: '/assets/photo-1.jpeg',
    accent: 'bg-navy',
  },
] as const

export function HeroC() {
  return (
    <section className="relative bg-cream">
      <div className="container-wide pt-16 pb-10 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">Lab&apos;s Food — Signature</span>
          <h1 className="display-lg text-navy mt-6 text-balance">
            Trois manières de{' '}
            <span className="italic text-navy-mid">savourer</span> notre passion
            de la cuisine.
          </h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/10">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 * i }}
          >
            <Link
              href={p.href}
              className="group relative block h-[480px] md:h-[640px] overflow-hidden bg-navy"
            >
              <Image
                src={p.bg}
                alt={p.title}
                fill
                className="object-cover opacity-65 group-hover:opacity-75 group-hover:scale-105 transition-all duration-1000 ease-expo"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/50 to-navy/90" />

              <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cream/60">{p.label}</span>
                  <span
                    className={`inline-flex items-center justify-center size-10 rounded-full ${p.accent} text-cream group-hover:scale-110 transition-transform duration-500`}
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-soft">
                    {p.eyebrow}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-cream mt-3 text-balance">
                    {p.title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
