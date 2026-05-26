'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Leaf, Heart, Compass, ShieldCheck } from 'lucide-react'

/**
 * INTRO — Bienvenue chez Lab's Food
 * Style éditorial : ancre + photo gauche + texte droite + 4 valeurs en pastilles
 */

const VALUES = [
  {
    icon: Leaf,
    title: 'Cuisine du voyage',
    text: "Inspirations puisées dans 21 pays — chaque assiette raconte une culture.",
  },
  {
    icon: Heart,
    title: 'Accueil attentionné',
    text: "Un service sincère, une présence discrète — proche de vous, à votre rythme.",
  },
  {
    icon: Compass,
    title: 'Sur-mesure',
    text: "Chaque prestation est adaptée à votre événement, votre cuisine, votre besoin.",
  },
  {
    icon: ShieldCheck,
    title: 'Maison certifiée',
    text: "HACCP — hygiène irréprochable, ingrédients frais et sourcing maîtrisé.",
  },
] as const

export function IntroSection() {
  return (
    <section id="bienvenue" className="bg-cream relative">
      {/* ─── Bloc Bienvenue ──────────────────────────────────────────── */}
      <div className="container-wide py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* ── Photo gauche ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy">
              <Image
                src="/IvyOfficielle.png"
                alt="Ivy — Fondatrice & cheffe"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {/* Voile doux bas */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" />
              {/* Plaque signature */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream/75">
                    La fondatrice
                  </div>
                  <div className="font-display text-3xl text-cream mt-1 leading-none">
                    Ivy
                    <span className="italic-fraunces text-navy-mid">.</span>
                  </div>
                </div>
                <div className="font-display text-5xl text-cream/30 tabular-nums leading-none">
                  01
                </div>
              </div>
            </div>

            {/* Pastille flottante */}
            <div className="absolute -top-6 -right-6 size-24 rounded-full bg-cream border-4 border-cream-deep shadow-xl grid place-items-center rotate-[-8deg]">
              <div className="text-center">
                <div className="font-display text-2xl text-navy leading-none">
                  21
                </div>
                <div className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-navy-mid mt-1">
                  pays
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Texte droite ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
              <span className="size-6 h-px bg-navy-mid" />
              Bienvenue chez Lab&apos;s Food
            </p>

            <h2
              className="font-display text-navy leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
            >
              Une maison culinaire née d&apos;
              <em className="not-italic">
                <span className="font-display italic gradient-text-navy-mid">
                  une conviction
                </span>
              </em>
              {' '}: voyager autour d&apos;une assiette.
            </h2>

            <div className="mt-10 space-y-5 text-ink/75 leading-relaxed max-w-xl text-pretty">
              <p>
                Ingénieure de formation, mais avant tout passionnée de
                gastronomie et d&apos;évasion. Après avoir exploré les cultures
                et les saveurs de 21 pays, Ivy a fondé Lab&apos;s Food avec une
                conviction simple : <em>le plus beau des voyages se passe
                souvent autour d&apos;une assiette</em>.
              </p>
              <p>
                Trois services pensés pour trois moments de vie : un atelier
                pour apprendre, un batch pour bien manger, une assistance pour
                les grands événements. Et bientôt, des créations signature à
                déguster.
              </p>
            </div>

            {/* Signature manuscrite */}
            <div className="mt-10 pt-8 border-t border-navy/10 flex items-center gap-4">
              <div className="font-display italic text-2xl text-navy">
                Ivy
              </div>
              <span className="size-1 rounded-full bg-navy/30" />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink/50">
                Fondatrice &amp; cheffe
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Bloc Valeurs (4 cards icônes) ──────────────────────────── */}
      <div className="border-t border-navy/8 bg-cream-soft">
        <div className="container-wide py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-5">
              <span className="size-6 h-px bg-navy-mid" />
              Notre signature
              <span className="size-6 h-px bg-navy-mid" />
            </p>
            <h3
              className="font-display text-navy leading-tight text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Ce qui fait de Lab&apos;s Food
              <br />
              <em className="not-italic">
                <span className="font-display italic gradient-text-navy-mid">
                  une maison à part.
                </span>
              </em>
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex size-16 md:size-20 rounded-full bg-navy-mid text-cream items-center justify-center mb-5 shadow-lg">
                  <v.icon className="size-6 md:size-7" />
                </div>
                <h4 className="font-display text-lg md:text-xl text-navy mb-3">
                  {v.title}
                </h4>
                <p className="text-sm text-ink/70 leading-relaxed text-pretty">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
