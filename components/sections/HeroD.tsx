'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/**
 * HERO D — Style éditorial pleine page (inspiré Benchland)
 * Image full-bleed + scrim navy + crown logo + h1 avec <em> italic + scroll cue
 */
export function HeroD() {
  return (
    <section
      id="top"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-navy"
    >
      {/* ─── Image de fond full-bleed + zoom infini lent ─── */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/assets/photo-1.jpeg"
          alt="Lab's Food — We create what you love!"
          fill
          priority
          quality={100}
          className="object-cover animate-zoom-slow"
          sizes="100vw"
        />
      </div>

      {/* ─── Scrim multi-couches ─── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />

      {/* ─── Filets décoratifs ─── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-mid/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-mid/40 to-transparent" />

      {/* ─── Contenu centré ─── */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-6">
        {/* Crown logo (whiteLogo sur fond sombre) */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative size-24 md:size-28 mx-auto">
            <Image
              src="/whiteLogo.png"
              alt="Lab's Food"
              fill
              priority
              sizes="112px"
              className="object-contain"
            />
          </div>
        </motion.div> */}

        {/* Kicker */}
        {/* <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-mono text-[0.7rem] md:text-xs uppercase tracking-[0.4em] text-cream/80 mb-5 inline-flex items-center gap-3"
        >
          <span className="size-8 h-px bg-cream/40" />
          Lab&apos;s Food — par Siyaptze
          <span className="size-8 h-px bg-cream/40" />
        </motion.p> */}

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="font-display text-cream leading-[0.95] font-bold tracking-tight text-balance max-w-5xl"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
        >
          We create{' '}
          <em className="not-italic">
            <span className="font-display italic text-navy-official">
              what you love!
            </span>
          </em>
        </motion.h1>

        {/* Lede */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 max-w-2xl text-cream/85 text-lg md:text-xl leading-relaxed text-pretty"
        >
          Fondée par Ivy, Lab&apos;s Food vous invite à voyager autour
          d&apos;une assiette — sans tracasserie de visa.
        </motion.p>

        {/* Stats inline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {/* <Stat value="+150" label="gourmands régalés" /> */}
          {/* <span className="hidden sm:block size-1 rounded-full bg-cream/30" /> */}
          <Stat value="+05" label="Produits d'exception" />
          <span className="hidden sm:block size-1 rounded-full bg-cream/30" />
          <Stat value="HACCP" label="certifiée" />
        </motion.div>
      </div>

      {/* ─── Scroll cue ─── */}
      <motion.a
        href="#bienvenue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/65 hover:text-cream transition-colors group"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em]">
          Découvrir
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="size-9 rounded-full border border-cream/30 grid place-items-center group-hover:border-cream/60 transition-colors"
        >
          <ChevronDown className="size-3.5" />
        </motion.span>
      </motion.a>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display text-2xl md:text-3xl text-cream tabular-nums leading-none">
        {value}
      </span>
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream/55">
        {label}
      </span>
    </div>
  )
}
