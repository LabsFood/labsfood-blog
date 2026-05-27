'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Splash de premier chargement.
 * S'affiche uniquement à la toute première visite de la session puis se dissout.
 * Ne se redéclenche pas entre les navigations (pour ça → app/loading.tsx).
 */
export function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('lf:splash-shown')) {
      setShow(false)
      return
    }
    const t = setTimeout(() => {
      sessionStorage.setItem('lf:splash-shown', '1')
      setShow(false)
    }, 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[80] bg-navy grid place-items-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-hero-radial" />
          <div className="absolute inset-0 bg-grain opacity-[0.06]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.4 } }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative size-20">
              <motion.div
                className="absolute inset-0 rounded-full border border-navy-mid/30"
                animate={{ scale: [1, 1.3, 1.6], opacity: [0.8, 0.3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-navy-mid/30"
                animate={{ scale: [1, 1.3, 1.6], opacity: [0.8, 0.3, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.6,
                }}
              />
              <div className="absolute inset-0 rounded-full bg-navy-mid grid place-items-center">
                <Image
                  src="/logo.png"
                  alt=""
                  width={42}
                  height={42}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="font-display text-3xl text-cream">Lab&apos;s Food</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-soft mt-2">
                We create what you love!
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
