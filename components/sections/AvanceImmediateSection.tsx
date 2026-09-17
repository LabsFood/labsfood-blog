'use client'

import { motion } from 'framer-motion'
import { AVANCE_IMMEDIATE } from '@/lib/batch-cooking'

/**
 * AvanceImmediateSection — le crédit d'impôt de 50 % et l'avance immédiate
 * URSSAF, expliqués sans jargon.
 *
 * L'argument est chiffré : plutôt que de le répéter en prose, on montre le
 * décompte réel d'une prestation, en chiffres tabulaires, comme un reçu.
 * La mention CESU ferme la section (demande cliente, septembre 2026).
 */
export function AvanceImmediateSection() {
  const { title, body, points, exemple, cesu } = AVANCE_IMMEDIATE

  return (
    <section
      id="credit-impot"
      className="relative bg-navy text-cream py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />

      <div className="relative container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ── L'explication ───────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-orange">
              Services à la personne
            </p>
            <h2
              className="mt-5 font-display text-cream leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              {title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/80 max-w-[62ch]">
              {body}
            </p>
          </motion.div>

          {/* ── Le décompte ─────────────────────────────────────────────── */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl bg-cream text-navy p-8 md:p-10 shadow-[0_24px_48px_-24px_rgba(0,12,26,0.85)]"
          >
            <figcaption className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink/70">
              Exemple — formule {exemple.formule}
            </figcaption>

            <dl className="mt-7 font-mono text-sm tabular-nums">
              <div className="flex items-baseline justify-between gap-4 py-3.5 border-b border-navy/12">
                <dt className="text-ink/70">Prix de la prestation</dt>
                <dd className="text-navy">{exemple.reel},00 €</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3.5 border-b border-navy/12">
                <dt className="text-ink/70">
                  Crédit d&apos;impôt immédiat
                </dt>
                <dd className="text-navy-mid font-medium">
                  − {exemple.reel - exemple.paye},00 €
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 pt-6">
                <dt className="font-sans text-sm font-medium text-navy">
                  Vous payez
                </dt>
                <dd className="font-display text-5xl leading-none text-navy">
                  {exemple.paye}€
                </dd>
              </div>
            </dl>

            <p className="mt-7 pt-5 border-t border-navy/12 text-xs leading-relaxed text-ink/75">
              Les 50&nbsp;% ne transitent jamais par votre compte : ils sont
              déduits au moment du paiement, pas remboursés un an plus tard.
            </p>
          </motion.figure>
        </div>

        {/* ── Les trois conséquences concrètes ──────────────────────────── */}
        <div className="mt-20 md:mt-24 grid gap-10 md:grid-cols-3 md:gap-8 border-t border-cream/15 pt-12">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="md:pr-8"
            >
              <h3 className="font-display text-2xl text-cream leading-tight">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── CESU ──────────────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-14 flex items-center gap-4 font-display italic text-xl md:text-2xl text-cream/85"
        >
          <span aria-hidden className="h-px w-10 shrink-0 bg-orange" />
          {cesu}
        </motion.p>
      </div>
    </section>
  )
}
