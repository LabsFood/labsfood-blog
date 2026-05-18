'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

/**
 * HERO B — "Split asymétrique"
 * Texte à gauche sur fond cream, mosaïque de visuels à droite,
 * encarts colorés en superposition. Plus chaleureux, moins cinématique.
 */
export function HeroB() {
  return (
    <section className="relative pt-12 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-cream">
      <div className="absolute top-20 right-0 size-[600px] bg-terra/10 blur-3xl rounded-full -z-0" />
      <div className="absolute bottom-0 left-0 size-[500px] bg-teal/10 blur-3xl rounded-full -z-0" />

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <span className="eyebrow">Une maison culinaire — par Ivy</span>
          <h1 className="display-lg text-navy mt-6 text-balance">
            Ateliers, batch cooking,{' '}
            <span className="italic gradient-text-terra">et un grain de</span>{' '}
            créativité.
          </h1>
          <p className="lede mt-8 max-w-lg text-pretty">
            Lab&apos;s Food est une maison culinaire qui réunit ce qui fait l&apos;art de
            la table : transmettre, cuisiner, et créer des produits artisanaux qui ont
            une histoire.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Button asChild size="lg">
              <Link href="/services/atelier-culinaire">
                Réserver un atelier
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/produits/kossam">Le Kossam</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-10 rounded-full border-2 border-cream overflow-hidden bg-navy"
                >
                  <Image
                    src={`/assets/photo-${i + 4}.jpeg`}
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-ink/70">
              <span className="font-semibold text-navy">Des dizaines de clients comblés.</span>
              <br />
              Notre service est ouvert 7j/7 sur WhatsApp.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative h-[520px] md:h-[640px]"
        >
          <div className="absolute top-0 right-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/photo-1.jpeg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/photo-2.jpeg"
              className="w-full h-full object-cover"
            >
              <source src="/assets/kossam-flower.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute top-[20%] left-[8%] bg-terra text-cream rounded-2xl px-5 py-4 shadow-2xl rotate-[-6deg] z-10">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream/80">
              Kossam 1.5L
            </div>
            <div className="font-display text-3xl">19.99€</div>
          </div>
          <div className="absolute bottom-[25%] right-[5%] bg-navy text-cream rounded-2xl px-5 py-4 shadow-2xl rotate-[5deg] z-10">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-terra-soft">
              Atelier privé
            </div>
            <div className="font-display text-3xl">80€</div>
            <div className="text-[0.7rem] text-cream/60">jusqu&apos;à 4 pers.</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
