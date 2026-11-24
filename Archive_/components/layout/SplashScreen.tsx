'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FillingWordmark } from '@/components/ui/Loader'

/**
 * Entrée du site.
 *
 * Le nom de la maison se remplit de crème, puis le fond navy se lève et
 * découvre la page. Même grammaire que le loader de navigation
 * (components/ui/Loader), pour que l'attente et l'arrivée se ressemblent.
 *
 * Ne se joue qu'une fois par session, jamais entre deux navigations. Les
 * visiteurs qui ont demandé moins d'animations arrivent directement sur la
 * page.
 */

const REMPLISSAGE_MS = 1500
const LEVEE_S = 0.9

export function SplashScreen() {
  const reduceMotion = useReducedMotion()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (reduceMotion) return

    let dejaVu = true
    try {
      dejaVu = sessionStorage.getItem('lf:entree') === '1'
    } catch {
      // Navigation privée ou stockage bloqué : on n'insiste pas.
      dejaVu = true
    }
    if (dejaVu) return

    setShow(true)
    document.body.style.overflow = 'hidden'

    const t = setTimeout(() => {
      try {
        sessionStorage.setItem('lf:entree', '1')
      } catch {
        /* sans stockage, l'entrée se rejouera : ce n'est pas grave */
      }
      setShow(false)
      document.body.style.overflow = ''
    }, REMPLISSAGE_MS)

    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="entree"
          aria-hidden
          className="fixed inset-0 z-[90] bg-navy text-cream grid place-items-center pointer-events-none overflow-hidden"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: LEVEE_S, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="absolute inset-0 bg-hero-radial" />
          <div className="absolute inset-0 bg-grain opacity-[0.07]" />

          <motion.div
            className="relative flex flex-col items-center gap-8 px-6"
            exit={{
              y: -28,
              opacity: 0,
              transition: { duration: LEVEE_S * 0.7, ease: [0.4, 0, 1, 1] },
            }}
          >
            <FillingWordmark loop={false} />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="font-display italic text-lg md:text-xl text-cream/70"
            >
              We create what you love!
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
