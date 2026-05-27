'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Props = {
  fullscreen?: boolean
  label?: string
  className?: string
}

/**
 * LOADER — Style éditorial signature Lab's Food
 *
 * Composition :
 *   - Logo central avec halo de glow pulsant (3 cercles concentriques)
 *   - Barre de progression segmentée (4 segments qui s'allument en boucle)
 *   - Marque "Lab's Food" + slogan "We create what you love!"
 *   - Petits points orbitaux qui tournent autour du logo
 */
export function Loader({
  fullscreen = false,
  label = 'Préparation en cours',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-10',
        fullscreen && 'fixed inset-0 z-[60] bg-cream',
        !fullscreen && 'py-24',
        className,
      )}
      role="status"
      aria-live="polite"
    >
      {/* ─── Stage central : logo + halos + orbites ─── */}
      <div className="relative size-44 flex items-center justify-center">
        {/* Halo extérieur — pulse lent */}
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full border border-navy-mid/40"
        />
        {/* Halo médian — pulse décalé */}
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.4,
          }}
          className="absolute inset-4 rounded-full border border-navy-mid/50"
        />
        {/* Halo intérieur — solide doux */}
        <div className="absolute inset-8 rounded-full bg-navy/[0.04]" />

        {/* Orbites : 3 points qui tournent autour */}
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 size-2 rounded-full bg-navy-mid shadow-md" />
          <span className="absolute bottom-1 right-3 size-1.5 rounded-full bg-orange" />
          <span className="absolute bottom-1 left-3 size-1.5 rounded-full bg-mint-deep" />
        </motion.div>

        {/* Logo central pulsant */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="relative size-20"
        >
          <Image
            src="/mainLogo.png"
            alt=""
            fill
            sizes="80px"
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* ─── Barre de progression segmentée ─── */}
      <div className="flex items-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.18,
            }}
            className="block w-10 h-[3px] rounded-full bg-navy-mid"
          />
        ))}
      </div>

      {/* ─── Wordmark + slogan + label ─── */}
      <div className="flex flex-col items-center gap-2">
        <span className="font-display text-xl text-navy tracking-tight">
          Lab&apos;s Food
        </span>
        <span className="font-display italic text-sm text-navy-mid">
          We create what you love!
        </span>
        <span className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.35em] text-ink/45">
          — {label} —
        </span>
      </div>
    </div>
  )
}
