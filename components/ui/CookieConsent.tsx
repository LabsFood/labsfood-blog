'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import Link from 'next/link'

const STORAGE_KEY = 'labsfood-cookie-consent'

type Consent = 'accepted' | 'refused'

/**
 * Bandeau de consentement aux cookies (RGPD).
 * Le choix est mémorisé dans le localStorage — le bandeau ne réapparaît
 * pas une fois une décision prise.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  // Affiche le bandeau seulement si aucun choix n'a encore été fait.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored !== 'accepted' && stored !== 'refused') setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function decide(consent: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, consent)
      localStorage.setItem(`${STORAGE_KEY}-date`, new Date().toISOString())
    } catch {
      /* localStorage indisponible — on ferme quand même */
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Voile léger pour attirer l'attention sans bloquer la lecture */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-navy/30 backdrop-blur-[2px]"
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            aria-describedby="cookie-desc"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-2xl rounded-3xl border border-navy/10 bg-cream p-6 shadow-2xl shadow-navy/25 md:inset-x-auto md:left-1/2 md:bottom-6 md:-translate-x-1/2 md:p-8"
          >
            <button
              type="button"
              onClick={() => decide('refused')}
              aria-label="Refuser et fermer"
              className="absolute right-4 top-4 size-8 grid place-items-center rounded-full text-ink/40 hover:bg-navy/5 hover:text-navy transition-colors"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-start gap-4">
              <span className="size-11 shrink-0 rounded-2xl bg-orange/12 grid place-items-center">
                <Cookie className="size-5 text-orange" />
              </span>
              <div className="min-w-0">
                <h2
                  id="cookie-title"
                  className="font-display text-xl text-navy leading-tight"
                >
                  On respecte votre vie privée
                </h2>
                <p
                  id="cookie-desc"
                  className="mt-2 text-sm text-ink/70 leading-relaxed"
                >
                  Nous utilisons des cookies pour améliorer votre navigation et
                  mesurer l&apos;audience du site. Vous pouvez les accepter ou les
                  refuser. Pour en savoir plus, consultez notre{' '}
                  <Link
                    href="/confidentialite"
                    className="underline text-orange hover:text-orange-deep"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
              <button
                type="button"
                onClick={() => decide('refused')}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-navy/20 text-navy text-sm font-medium hover:bg-navy hover:text-cream hover:border-navy transition-all"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => decide('accepted')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange text-cream text-sm font-medium hover:bg-orange-deep transition-all shadow-sm hover:shadow-md hover:shadow-orange/30"
              >
                Accepter
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
