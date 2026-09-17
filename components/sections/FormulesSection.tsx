'use client'

import { motion } from 'framer-motion'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import {
  FORMULES,
  OPTIONS,
  PORTION_NOTE,
  PRIX_NOTE,
  type Formule,
} from '@/lib/batch-cooking'
import { BATCH_COOKING_URL, whatsappLink, cn } from '@/lib/utils'

/**
 * FormulesSection — la grille tarifaire complète.
 *
 * Présentée comme une carte de tarifs, pas comme quatre cartes identiques :
 * des lignes séparées par des filets, le prix aligné à droite en chiffres
 * tabulaires, et la formule la plus demandée posée sur un fond légèrement
 * plus profond plutôt que couverte de badges.
 *
 * Utilisée par la page d'accueil et par /services/batch-cooking.
 */
export function FormulesSection({ className }: { className?: string }) {
  return (
    <section
      id="formules"
      className={cn('bg-cream-deep py-24 md:py-32', className)}
    >
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
            <h2
              className="font-display text-navy leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Quatre formules,{' '}
              <span className="font-display italic text-orange-deep">
                une seule intervention.
              </span>
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
              Vous choisissez le nombre de repas que vous voulez pour la
              semaine. {PORTION_NOTE} Les prix ci-dessous sont ceux que vous
              payez réellement : la réduction de 50&nbsp;% du crédit
              d&apos;impôt est déjà déduite.
            </p>
          </motion.div>
        </div>

        {/* ── La grille ─────────────────────────────────────────────────── */}
        <div className="mt-14 md:mt-16 border-t border-navy/15">
          {FORMULES.map((formule, i) => (
            <LigneFormule key={formule.slug} formule={formule} index={i} />
          ))}
        </div>

        {/* ── Les options ───────────────────────────────────────────────── */}
        <div className="mt-16 md:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h3 className="font-display text-2xl md:text-3xl text-navy">
              À ajouter si vous voulez
            </h3>
            <dl className="mt-7 border-t border-navy/10">
              {OPTIONS.map((option) => (
                <div
                  key={option.label}
                  className="py-5 border-b border-navy/10 flex items-baseline justify-between gap-6"
                >
                  <div className="min-w-0">
                    <dt className="font-display text-lg text-navy leading-snug">
                      {option.label}
                    </dt>
                    <dd className="mt-1 text-sm text-ink/65 leading-relaxed">
                      {option.detail}
                    </dd>
                  </div>
                  <span className="shrink-0 font-display text-xl text-navy tabular-nums">
                    +{option.price}€
                  </span>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-navy/10 flex flex-col justify-between gap-8"
          >
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-navy">
                Bon à savoir
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink/75">
                <li className="pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-orange">
                  {PORTION_NOTE} Au-delà, comptez une personne supplémentaire.
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-orange">
                  {PRIX_NOTE}
                </li>
                <li className="pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-orange">
                  Un plat du menu ne vous tente pas ? Proposez le vôtre. Un
                  ajustement tarifaire est possible selon la recette.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={BATCH_COOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-navy text-cream font-medium text-sm hover:bg-navy-mid transition-colors duration-300 ease-expo"
              >
                Réserver ma session
              </a>
              <a
                href={whatsappLink(
                  "Bonjour Lab's Food, j'aimerais des précisions sur les formules de batch cooking : ",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-navy/20 text-navy font-medium text-sm hover:bg-navy hover:text-cream hover:border-navy transition-colors duration-300 ease-expo"
              >
                <WhatsAppIcon className="size-4" />
                Poser une question
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

function LigneFormule({
  formule,
  index,
}: {
  formule: Formule
  index: number
}) {
  return (
    <motion.a
      href={BATCH_COOKING_URL}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        'group grid grid-cols-[1fr_auto] md:grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-x-6 gap-y-2 border-b border-navy/15 px-4 md:px-6 py-7 md:py-8 -mx-4 md:-mx-6 transition-colors duration-300 ease-expo hover:bg-navy/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-mid/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-deep',
        formule.featured && 'bg-navy/[0.05]',
      )}
    >
      {/* Nom + résumé */}
      <div className="min-w-0 row-start-1">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="font-display text-3xl md:text-4xl text-navy leading-none">
            {formule.name}
          </h3>
          {formule.featured && (
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-navy-mid">
              La plus demandée
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-ink/65">{formule.summary}</p>
      </div>

      {/* Nombre de repas */}
      <p className="row-start-2 md:row-start-1 col-span-2 md:col-span-1 md:text-right font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink/75 tabular-nums md:px-8">
        {formule.repas} repas
        {formule.highlight && (
          <span className="block mt-1 text-navy-mid normal-case tracking-[0.1em]">
            {formule.highlight}
          </span>
        )}
      </p>

      {/* Prix */}
      <div className="row-start-1 col-start-2 md:col-start-3 text-right">
        <span className="font-display text-4xl md:text-5xl text-navy leading-none tabular-nums">
          {formule.price}€
        </span>
        <span className="block mt-2 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-ink/70 transition-colors duration-300 group-hover:text-navy">
          Réserver
        </span>
      </div>
    </motion.a>
  )
}
