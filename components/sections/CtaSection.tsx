'use client'

import Link from 'next/link'
import { ArrowUpRight, MessageCircle, Clock, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { whatsappLink, WHATSAPP_NUMBER_DISPLAY } from '@/lib/utils'

/**
 * CTA "On reste en contact" — section full-bleed avec image fixed (parallax).
 * Design épuré : pas de blur décoratif, pas de glassmorphism, surimpression
 * solide pour un rendu propre et lisible.
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
      {/* Surimpression solide — un seul calque dégradé sobre */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/80 to-black/60" />

      {/* Filets discrets en haut/bas */}
      <div className="absolute top-0 inset-x-0 h-px bg-terra/30" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-terra/30" />

      <div className="container-wide relative py-24 md:py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* ─── Colonne texte ─── */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-terra" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-terra-soft">
                  On reste en contact
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream text-balance leading-[0.95]">
                Une envie,
                <br />
                <span className="italic gradient-text-terra">
                  une table à dresser
                </span>{' '}
                ?
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

            {/* Bandeau de réassurance — clean */}
            <Reveal delay={0.4}>
              <div className="mt-16 pt-8 border-t border-cream/15 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
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

          {/* ─── Colonne carte téléphone — design solide ─── */}
          <div className="lg:col-span-5">
            <Reveal axis="x" amount={50} delay={0.2}>
              <div className="relative rounded-3xl bg-cream text-navy p-8 md:p-10 shadow-2xl">
                {/* Pastille WhatsApp en haut */}
                <div className="absolute -top-4 -right-4 size-12 rounded-full bg-whatsapp grid place-items-center shadow-xl ring-4 ring-cream">
                  <MessageCircle className="size-5 text-white" />
                </div>

                <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra">
                  WhatsApp — service client
                </div>
                <div className="font-display text-3xl md:text-4xl text-navy mt-3">
                  {WHATSAPP_NUMBER_DISPLAY}
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
                      className="flex items-center gap-3 text-sm text-ink/85"
                    >
                      <span className="size-1.5 rounded-full bg-terra shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-navy/10 text-xs text-ink/60">
                  Messages écrits uniquement.
                  <br />
                  Pas de notes vocales, merci.
                </div>

                <Button
                  asChild
                  variant="whatsapp"
                  size="md"
                  className="w-full mt-6 justify-center"
                >
                  <a
                    href={whatsappLink("Bonjour Lab's Food, ")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Démarrer la conversation
                  </a>
                </Button>
              </div>
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
      <div className="size-10 rounded-full bg-cream/10 border border-cream/20 grid place-items-center shrink-0">
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
