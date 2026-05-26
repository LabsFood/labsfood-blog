'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Globe2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'

/**
 * HERO B — "Split asymétrique"
 * Met Lab's Food en avant : la maison, l'histoire, la cheffe.
 * Les services ne sont qu'évoqués en second plan.
 */
export function HeroB() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-cream">
      {/* Halos décoratifs très doux */}
      <div className="absolute top-32 right-0 size-[500px] bg-navy-mid/8 blur-3xl rounded-full -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-[400px] bg-teal/8 blur-3xl rounded-full -z-0 pointer-events-none" />

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ─── Colonne texte ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          {/* Eyebrow + ligne décorative */}
          <div className="flex items-center gap-3 mb-6">
            <span className="size-6 h-px bg-navy-mid" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-navy-mid">
              Lab&apos;s Food
            </span>
          </div>

          {/* Titre — la marque d'abord */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-navy leading-[0.95] tracking-tight">
            Lab&apos;s Food,
            <br />
            <span className="gradient-text-navy-mid">la maison qui</span>
            <br />
            <span className="gradient-text-navy-mid">vous fait voyager.</span>
          </h1>

          {/* Tagline brand-first */}
          <p className="lede mt-10 max-w-xl text-pretty">
            Fondée par <span className="font-medium text-navy">Ivy</span> après
            l&apos;exploration de 21 pays, Lab&apos;s Food est une maison culinaire
            qui invite à voyager autour d&apos;une assiette — sans tracasserie de visa.
          </p>

          {/* Mini-stats inline — l'âme de la maison */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-baseline gap-2">
              <Globe2 className="size-4 text-navy-mid self-center" />
              <span className="font-display text-2xl text-navy tabular-nums">21</span>
              <span className="text-xs text-ink/60">pays explorés</span>
            </div>
            <span className="hidden sm:block size-1 rounded-full bg-navy/20" />
            <div className="flex items-baseline gap-2">
              <ShieldCheck className="size-4 text-navy-mid self-center" />
              <span className="font-display text-2xl text-navy">HACCP</span>
              <span className="text-xs text-ink/60">maison certifiée</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-12">
            <Button asChild size="lg">
              <Link href="/services">
                Nos Produits
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/services">Nos services</Link>
            </Button>
          </div>
        </motion.div>

        {/* ─── Colonne visuels ─── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative h-[520px] md:h-[640px]"
        >
          {/* Photo principale — atelier en haut à droite */}
          <div className="absolute top-0 right-0 w-[62%] h-[58%] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/photo-7.jpeg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Vidéo Kossam — secondaire en bas à gauche */}
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

          {/* Badge "Cheffe Ivy" — élément humain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-[18%] left-[6%] bg-cream rounded-2xl px-5 py-4 shadow-2xl border border-navy/8 rotate-[-4deg] z-10 flex items-center gap-3"
          >
            <div className="size-10 rounded-full overflow-hidden bg-navy shrink-0">
              <Image
                src="/IvyOfficielle.png"
                alt="Ivy"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-navy-mid">
                La cheffe
              </div>
              <div className="font-display text-lg text-navy leading-none mt-1">
                Ivy
              </div>
            </div>
          </motion.div>

          {/* Badge tampon "Maison culinaire" — circulaire éditorial */}
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-[28%] right-[5%] z-10"
          >
            <div className="relative size-28 grid place-items-center bg-navy-mid text-cream rounded-full shadow-2xl">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full animate-spin-slow"
              >
                <defs>
                  <path
                    id="circle-text"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text className="text-[10.5px] fill-cream font-mono tracking-[0.2em] uppercase">
                  <textPath href="#circle-text">
                    Lab&apos;s Food · Maison culinaire ·{' '}
                  </textPath>
                </text>
              </svg>
              <div className="size-14 rounded-full bg-cream/15 backdrop-blur-sm border border-cream/30 grid place-items-center">
                <span className="font-display italic text-2xl">LF</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
