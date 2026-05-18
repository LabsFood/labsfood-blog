'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Clock, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { whatsappLink } from '@/lib/utils'

/**
 * CTA "On reste en contact" — section full-bleed avec image en background fixed
 * (effet parallax au scroll). Surimpression dégradée navy/terra pour la lisibilité.
 */
export function CtaSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center text-cream overflow-hidden"
      style={{
        backgroundImage: "url('/assets/photo-12.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Calques de surimpression */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-terra/40" />
      <div className="absolute inset-0 bg-grain opacity-[0.08]" />
      <div className="absolute -top-32 right-0 size-[500px] bg-terra/25 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 left-0 size-[500px] bg-teal/40 blur-3xl rounded-full" />

      {/* Filets d'ouverture */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-terra/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-terra/40 to-transparent" />

      <div className="container-wide relative py-24 md:py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Colonne texte */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-terra-soft inline-flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-terra animate-pulse" />
                On reste en contact
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mt-6 text-balance leading-[0.95]">
                Une envie,
                <br />
                <span className="italic gradient-text-terra">une table à dresser</span>&nbsp;?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="lede text-cream/85 mt-8 max-w-xl text-pretty">
                Notre service client est disponible 7j/7 — 24h/24 sur WhatsApp.
                Messages écrits uniquement, pour une réponse rapide.
              </p>
            </Reveal>

            {/* Boutons */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={whatsappLink("Bonjour Lab's Food, ")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Discuter sur WhatsApp
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Formulaire de contact
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            {/* Bandeau de réassurance */}
            <Reveal delay={0.4}>
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
                <Reassure icon={Clock} title="7j/7 · 24h/24" sub="Réponse rapide" />
                <Reassure
                  icon={MessageCircle}
                  title="WhatsApp"
                  sub="Canal privilégié"
                />
                <Reassure
                  icon={ShieldCheck}
                  title="HACCP"
                  sub="Maison certifiée"
                />
              </div>
            </Reveal>
          </div>

          {/* Colonne carte téléphone */}
          <div className="lg:col-span-5">
            <Reveal axis="x" amount={50} delay={0.2}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-3xl bg-cream/[0.08] backdrop-blur-xl border border-cream/20 p-8 md:p-10 shadow-2xl"
              >
                <div className="absolute -top-4 -right-4 size-12 rounded-full bg-whatsapp grid place-items-center shadow-xl ring-4 ring-navy">
                  <MessageCircle className="size-5 text-white" />
                </div>

                <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra-soft">
                  WhatsApp — service client
                </div>
                <div className="font-display text-3xl md:text-4xl text-cream mt-3">
                  +33 7 66 14 78 98
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    'Réservation d\'un atelier',
                    'Commande Kossam',
                    'Devenir chef partenaire',
                    'Question générale',
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-3 text-sm text-cream/85"
                    >
                      <span className="size-1.5 rounded-full bg-terra-soft shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-cream/15 text-xs text-cream/55">
                  Messages écrits uniquement.
                  <br />
                  Pas de notes vocales, merci.
                </div>
              </motion.div>
            </Reveal>
          </div>
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
      <div className="size-10 rounded-full bg-cream/[0.08] border border-cream/15 grid place-items-center">
        <Icon className="size-4 text-terra-soft" />
      </div>
      <div>
        <div className="font-display text-base text-cream leading-none">
          {title}
        </div>
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/55 mt-1">
          {sub}
        </div>
      </div>
    </div>
  )
}
