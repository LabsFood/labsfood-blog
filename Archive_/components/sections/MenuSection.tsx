'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { MENU, NB_PLATS, type FamilleMenu } from '@/lib/menu-data'

/**
 * MenuSection — le menu du mois sur la page d'accueil.
 *
 * Traité comme une carte de restaurant : les plats sont du texte, pas des
 * vignettes. Une photo par famille suffit à donner faim ; le reste est
 * typographique et donc lisible, indexable et modifiable en trente secondes
 * depuis lib/menu-data.ts.
 *
 * Les douceurs ne sont pas reprises ici : elles closent la page /menu.
 */
export function MenuSection() {
  return (
    <section id="menu" className="bg-cream py-24 md:py-32 lg:py-36">
      <div className="container-wide">
        {/* ── Titre ─────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-navy-mid">
              Menu du mois
            </p>
            <h2
              className="mt-5 font-display text-navy leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              {MENU.month}
              <span className="italic-fraunces text-orange-deep">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-navy/10"
          >
            <p className="text-ink/75 leading-relaxed max-w-[52ch]">
              {MENU.intro}
            </p>
            <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/70 tabular-nums">
              {NB_PLATS} plats au menu de {MENU.month.toLowerCase()}
            </p>
          </motion.div>
        </div>

        {/* ── Les trois familles salées ─────────────────────────────────── */}
        <div className="mt-16 md:mt-20 grid gap-14 md:gap-10 md:grid-cols-3">
          {MENU.familles.map((famille, i) => (
            <FamilleColonne key={famille.slug} famille={famille} index={i} />
          ))}
        </div>

        {/* ── Sortie ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20 pt-10 border-t border-navy/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <p className="font-display italic text-2xl md:text-3xl text-navy/85 max-w-xl text-balance">
            Et les desserts, <span className="text-orange-deep">bien sûr.</span>
          </p>
          <Link
            href="/menu"
            className="group shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-navy text-cream hover:bg-navy-mid text-sm font-medium transition-colors duration-300 ease-expo"
          >
            Voir le menu complet de {MENU.month.toLowerCase()}
            <ArrowUpRight className="size-4 transition-transform duration-300 ease-expo group-hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

function FamilleColonne({
  famille,
  index,
}: {
  famille: FamilleMenu
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-cream-deep">
        <Image
          src={famille.image}
          alt={famille.name}
          fill
          sizes="(min-width: 768px) 32vw, 100vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-7 font-display text-3xl text-navy leading-tight">
        {famille.name}
      </h3>
      <p className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-navy-mid">
        {famille.summary}
      </p>

      <ul className="mt-6">
        {famille.plats.map((plat) => (
          <li
            key={plat.name}
            className="py-3.5 border-t border-navy/10 first:border-t-0 first:pt-0"
          >
            <p className="font-display text-[1.0625rem] leading-snug text-navy">
              {plat.name}
              {plat.origin && (
                <span className="ml-2 align-middle font-mono text-[0.55rem] uppercase tracking-[0.18em] text-navy-mid">
                  {plat.origin}
                </span>
              )}
            </p>
            {plat.detail && (
              <p className="mt-1 text-sm text-ink/75">{plat.detail}</p>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
