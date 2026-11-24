'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Props = {
  fullscreen?: boolean
  label?: string
  className?: string
}

/**
 * LOADER — le nom de la maison qui se remplit.
 *
 * « Lab's Food » est posé en Fraunces à grande échelle, en creux dans le
 * navy. Un niveau de crème monte à l'intérieur des lettres, avec sa ligne de
 * surface ambrée, comme on verse un Kossam dans un verre. C'est la marque
 * elle-même qui sert d'indicateur : pas de barre, pas de roue, pas de points
 * qui clignotent.
 *
 * Une seule animation orchestrée, en boucle propre : le niveau monte, marque
 * un temps plein, puis s'efface avant de repartir. Sous
 * prefers-reduced-motion, le nom s'affiche simplement plein.
 */
export function Loader({
  fullscreen = false,
  label = 'On met le couvert',
  className,
}: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'relative overflow-hidden bg-navy text-cream grid place-items-center',
        fullscreen ? 'fixed inset-0 z-[60]' : 'min-h-[60vh] rounded-3xl',
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-hero-radial" />
      <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.07]" />

      <div className="relative flex flex-col items-center gap-8 px-6">
        <FillingWordmark />

        <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-cream/70">
          {label}
        </span>
      </div>

      <span className="sr-only">Chargement en cours</span>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

const WORDMARK = 'Lab’s Food'

/** Échelle du nom, commune au loader et à l'entrée du site. */
const TYPE = {
  fontSize: 'clamp(2.6rem, 9vw, 7rem)',
  letterSpacing: '-0.03em',
}

/**
 * Le nom en creux, et le même nom rempli par un niveau qui monte.
 *
 * `loop` fait repartir le remplissage indéfiniment (loader de navigation) ;
 * sans lui, le niveau monte une fois et reste plein (entrée du site).
 */
export function FillingWordmark({ loop = true }: { loop?: boolean }) {
  const montee = loop
    ? {
        height: ['0%', '100%', '100%'],
        transition: {
          duration: 2.4,
          times: [0, 0.62, 1],
          ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
          repeat: Infinity,
        },
      }
    : {
        height: '100%',
        transition: { duration: 1.25, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] },
      }

  const effacement = loop
    ? {
        opacity: [1, 1, 0],
        transition: {
          duration: 2.4,
          times: [0, 0.82, 1],
          ease: 'linear' as const,
          repeat: Infinity,
        },
      }
    : { opacity: 1 }

  return (
    <div aria-hidden className="relative">
      {/* Le nom en creux : le contenant */}
      <span
        className="block font-display font-bold leading-none whitespace-nowrap text-cream/[0.18]"
        style={TYPE}
      >
        {WORDMARK}
      </span>

      {/* Le niveau qui monte, clippé sur la même ligne de base */}
      <motion.div
        className="absolute inset-x-0 bottom-0 overflow-hidden motion-reduce:!h-full motion-reduce:!opacity-100"
        initial={{ height: '0%' }}
        animate={{ ...montee, ...effacement }}
      >
        {/* Pas de ligne de surface : un filet posé sur toute la largeur de la
            boîte traverse aussi les blancs entre les lettres et se lit comme
            un texte barré. Le contraste entre le creux et le plein suffit à
            faire lire le niveau. */}
        <span
          className="absolute inset-x-0 bottom-0 block font-display font-bold leading-none whitespace-nowrap text-cream"
          style={TYPE}
        >
          {WORDMARK}
        </span>
      </motion.div>
    </div>
  )
}
