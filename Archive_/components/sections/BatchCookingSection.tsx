'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ETAPES, ZONE } from '@/lib/batch-cooking'

/**
 * BatchCookingSection — le cœur du site depuis la refonte de septembre 2026.
 *
 * Deux temps :
 *   1. la définition, parce que « batch cooking » ne parle pas à tout le monde ;
 *   2. le déroulé d'une prestation, sur un rail horizontal (vertical en mobile).
 *
 * Remplace ShowcaseSection, qui présentait les trois anciens services.
 */
export function BatchCookingSection() {
  return (
    <section
      id="batch-cooking"
      className="relative bg-navy text-cream py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />

      <div className="relative container-wide">
        {/* ── La définition ─────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2
              className="font-display text-cream leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
            >
              Une cheffe vient cuisiner votre semaine,{' '}
              <span className="font-display italic text-orange">
                chez vous, en une fois.
              </span>
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-relaxed text-cream/80 max-w-[62ch]">
              C&apos;est ça, le batch cooking : une seule session de cuisine
              pour plusieurs jours de repas. Vous ouvrez votre porte, la cheffe
              arrive avec les courses si vous le souhaitez, cuisine tout d&apos;un
              coup dans votre cuisine, range les plats prêts à déguster et
              repart en laissant les lieux nickel.
            </p>

            <p className="mt-6 text-cream/65 leading-relaxed max-w-[62ch]">
              Le soir, vous réchauffez. La question « on mange quoi ce soir ? »
              ne se pose plus, et vous n&apos;avez ni fait les courses, ni
              cuisiné, ni fait la vaisselle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-navy-deep">
              <Image
                src="/assets/gallerie/batch.jpeg"
                alt="Plats préparés lors d'une session de batch cooking à domicile"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display italic text-xl text-cream leading-snug">
                Intervention de 2 heures minimum, sur {ZONE.label}.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Le déroulé ────────────────────────────────────────────────── */}
        <div className="mt-24 md:mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-4xl text-cream"
          >
            Comment ça se passe
          </motion.h3>

          <ol className="relative mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-8">
            {/* Rail : vertical en mobile, horizontal à partir de lg */}
            <span
              aria-hidden
              className="absolute left-[23px] top-3 bottom-3 w-px bg-cream/15 md:hidden"
            />
            <span
              aria-hidden
              className="absolute hidden lg:block left-0 right-0 top-[23px] h-px bg-cream/15"
            />

            {ETAPES.map((etape, i) => (
              <motion.li
                key={etape.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex gap-5 md:block"
              >
                <span className="relative z-10 shrink-0 size-12 rounded-full bg-navy border border-cream/20 grid place-items-center font-mono text-xs tabular-nums text-orange">
                  {etape.n}
                </span>
                <div className="md:mt-6 lg:pr-6">
                  <h4 className="font-display text-2xl text-cream leading-tight">
                    {etape.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {etape.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* ── Sortie de section ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-24 pt-10 border-t border-cream/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <p className="font-display italic text-2xl md:text-3xl text-cream/80 max-w-xl text-balance">
            Un plat du menu ne vous fait pas envie ?{' '}
            <span className="text-orange">Proposez le vôtre.</span>
          </p>
          <Link
            href="/services/batch-cooking"
            className="group shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream hover:text-navy hover:border-cream text-sm font-medium transition-all duration-300 ease-expo"
          >
            Tout savoir sur le batch cooking
            <ArrowUpRight className="size-4 transition-transform duration-300 ease-expo group-hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
