'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  /** axe d'entrée — y par défaut */
  axis?: 'y' | 'x'
  amount?: number
}

/**
 * Reveal au scroll : fade + déplacement doux quand l'élément entre dans le viewport.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  axis = 'y',
  amount = 30,
}: Props) {
  const from = axis === 'y' ? { y: amount } : { x: amount }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
