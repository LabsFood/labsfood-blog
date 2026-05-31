'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, ShieldCheck } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { whatsappLink, WHATSAPP_NUMBER_DISPLAY } from '@/lib/utils'

/**
 * CTA FINAL — Image immersive full-bleed + dialogue WhatsApp éditorial
 */
export function CtaFinalSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center text-cream overflow-hidden bg-navy">
      {/* Image de fond */}
      <Image
        src="/assets/photo-13.jpeg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy/95" />
      <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

      {/* Filets décoratifs */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-mid/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-mid/50 to-transparent" />

      <div className="relative container-wide py-24 md:py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* ── Colonne texte ── */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6"
            >
              <span className="size-6 h-px bg-navy-mid" />
              On reste en contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-cream leading-[0.95] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              Une envie,
              <br />
              <em className="not-italic">
                <span className="font-display italic text-orange">
                  une table à dresser
                </span>
              </em>
              {' '}?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-10 max-w-xl text-cream/80 text-lg leading-relaxed text-pretty"
            >
              Notre service client est disponible 7j/7 — 24h/24 sur WhatsApp.
              Messages écrits uniquement, pour une réponse rapide et précise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href={whatsappLink("Bonjour Lab's Food, ")}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 pl-7 pr-3 py-3 rounded-full bg-whatsapp text-white font-medium text-sm transition-all hover:scale-[1.02] shadow-2xl"
              >
                <WhatsAppIcon className="size-4" />
                Discuter sur WhatsApp
                <span className="size-10 rounded-full bg-white/15 grid place-items-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream hover:text-navy hover:border-cream text-sm font-medium transition-all"
              >
                Formulaire de contact
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>

            {/* Bandeau de réassurance */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-cream/15 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            >
              <Reassure icon={Clock} title="7j/7 · 24h/24" sub="Réponse rapide" />
              <Reassure
                icon={WhatsAppIcon}
                title="WhatsApp"
                sub="Canal privilégié"
              />
              <Reassure
                icon={ShieldCheck}
                title="HACCP"
                sub="Maison certifiée"
              />
            </motion.div>
          </div>

          {/* ── Colonne carte téléphone ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-cream text-navy p-8 md:p-10 shadow-2xl">
              {/* Pastille WhatsApp */}
              <div className="absolute -top-5 -right-5 size-14 rounded-full bg-whatsapp grid place-items-center shadow-xl ring-4 ring-cream">
                <WhatsAppIcon className="size-6 text-white" />
              </div>

              <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
                — Numéro Lab&apos;s Food
              </div>
              <div className="font-display text-3xl md:text-4xl text-navy mt-3 tabular-nums">
                {WHATSAPP_NUMBER_DISPLAY}
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Réservation d\'un atelier',
                  'Coup de main en cuisine',
                  'Commande Kossam',
                  'Devenir chef partenaire',
                  'Autres',
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 text-sm text-ink/85"
                  >
                    <span className="size-1.5 rounded-full bg-navy-mid shrink-0" />
                    {t}
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink("Bonjour Lab's Food, ")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-whatsapp text-white text-sm font-medium hover:bg-whatsapp-deep transition-colors"
              >
                <WhatsAppIcon className="size-4" />
                Démarrer la conversation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Reassure({
  icon: Icon,
  title,
  sub,
}: {
  icon: React.ElementType
  title: string
  sub: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="size-10 rounded-full bg-cream/10 border border-cream/20 grid place-items-center shrink-0">
        <Icon className="size-4 text-white" />
      </div>
      <div>
        <div className="font-display text-base text-cream leading-none">
          {title}
        </div>
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream mt-1">
          {sub}
        </div>
      </div>
    </div>
  )
}
