'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'

/**
 * HERO A — "Cinematic / Editorial"
 * Vidéo plein écran du Kossam en arrière-plan, overlay navy profond,
 * typographie display géante, accent navy-mid.
 */
export function HeroA() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/photo-1.jpeg"
      >
        <source src="/assets/kossam-main.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy/40" />
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grain opacity-[0.06]" />

      <div className="container-wide relative z-10 min-h-[100svh] flex flex-col justify-end pb-20 pt-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-navy-soft mb-8"
        >
          Maison culinaire — Fondée par Ivy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display-xl text-cream max-w-5xl text-balance"
        >
          Le plus beau{' '}
          <span className="italic font-light text-navy-mid">des voyages</span>
          <br />
          se passe autour d&apos;une assiette.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lede text-cream/75 max-w-xl mt-8"
        >
          Ateliers de cuisine du monde, batch cooking à domicile, et produits artisanaux
          inspirés des saveurs de 21 pays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <Button asChild size="lg">
            <Link href="/services">
              Découvrir les services
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/produits/kossam">
              <Play className="size-4 fill-current" />
              Le Kossam en vidéo
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-cream/15 grid grid-cols-3 max-w-2xl gap-8"
        >
          {[
            { value: '21', label: 'pays explorés' },
            { value: '+200', label: 'recettes' },
            { value: 'HACCP', label: 'certifiée' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl text-cream">
                {stat.value}
              </div>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream/55 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
