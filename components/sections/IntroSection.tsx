'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * INTRO — Bienvenue chez Lab's Food
 * Style éditorial : ancre + photo gauche + texte droite + 4 valeurs en pastilles
 */

/**
 * Ce que la maison tient à chaque prestation.
 *
 * Quatre engagements concrets et vérifiables, pas quatre qualités abstraites :
 * chacun se lit comme une promesse que la cliente peut réclamer.
 */
const ENGAGEMENTS = [
  {
    title: 'Les cuisines du monde',
    text: "Ivy a cuisiné dans 21 pays. Le menu du mois passe par la Thaïlande, le Cameroun, l'Inde et le Brésil, et il change à chaque nouvelle carte.",
  },
  {
    title: 'Votre menu, pas le nôtre',
    text: "Rien n'est imposé. On compose la carte ensemble à partir de vos goûts, de vos allergies et du nombre de personnes à table. Un plat vous manque ? Proposez-le.",
  },
  {
    title: 'Une cuisine laissée nette',
    text: "Le rangement et le nettoyage font partie de la prestation. Vous retrouvez vos plats prêts à réchauffer et votre cuisine dans l'état où vous l'avez laissée.",
  },
  {
    title: 'Maison certifiée HACCP',
    text: "Les règles d'hygiène alimentaire professionnelle s'appliquent chez vous exactement comme dans une cuisine de restaurant.",
  },
] as const

export function IntroSection() {
  return (
    <section id="bienvenue" className="bg-cream relative">
      {/* ─── Bloc Bienvenue ──────────────────────────────────────────── */}
      <div className="container-wide py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* ── Slogan SVG (remplace la photo d'Ivy — demande client) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >

            <Image
              src="/assets/slogan.svg"
              alt="Lab's Food, We create what you love!"
              width={600}
              height={600}
              className="relative z-10 w-full h-auto max-w-lg object-contain"
              priority
            />
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
              Une aventure culinaire née d’une passion : sublimer votre quotidien
            </h2>

            <div className="mt-10 space-y-5 text-ink/75 leading-relaxed max-w-xl text-pretty">
              {/* <p>
                Ingénieure de formation, mais avant tout passionnée de
                gastronomie et d&apos;évasion. Ivy a fondé Lab&apos;s Food avec
                une conviction simple : <em>le plus beau des voyages se passe
                  souvent autour d&apos;une assiette</em>.
              </p> */}
              <p>
                Déléguez, respirez, savourez. Une cheffe vient cuisiner votre semaine entière à votre domicile : vous choisissez les plats, nous nous occupons de tout le reste. Laissez-vous également surprendre par nos créations artisanales : le “Kossam” signature et la marinade Köni.
              </p>
            </div>

            {/* Signature manuscrite */}
            <div className="mt-10 pt-8 border-t border-navy/10 flex items-center gap-4">
              <div className="font-display italic text-2xl text-navy">
                Ivy
              </div>
              <span className="size-1 rounded-full bg-navy/30" />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink/70">
                Fondatrice
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Les engagements de la maison ───────────────────────────── */}
      <div className="border-t border-navy/8 bg-cream-soft">
        <div className="container-wide py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 font-display text-navy leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Ce qui est compris,{' '}
              <span className="font-display italic text-orange-deep">
                à chaque fois.
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-navy/10 text-ink/75 leading-relaxed max-w-[52ch]"
            >
              Quatre engagements que vous pouvez nous réclamer, pas quatre
              qualités que nous nous attribuons.
            </motion.p>
          </div>

          <dl className="mt-14 md:mt-16 border-t border-navy/15">
            {ENGAGEMENTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid md:grid-cols-12 gap-3 md:gap-10 py-8 md:py-9 border-b border-navy/15"
              >
                <dt className="md:col-span-5 font-display text-2xl md:text-3xl text-navy leading-tight text-balance">
                  {item.title}
                </dt>
                <dd className="md:col-span-7 text-ink/75 leading-relaxed max-w-[62ch]">
                  {item.text}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
