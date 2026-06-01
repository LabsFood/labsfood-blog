import type { Metadata } from 'next'
import {
  Mail,
  Instagram,
  Music2,
  Linkedin,
  Clock,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import {
  WHATSAPP_NUMBER_DISPLAY,
  whatsappLink,
  SOCIAL_LINKS,
} from '@/lib/utils'
import { SITE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Une envie, une question, une commande ? Lab's Food vous répond 7j/7 sur WhatsApp ou via formulaire.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Restons en contact"
        title={
          <>
            Une envie,{' '}
            <em className="not-italic">
              <span className="font-display italic">
                un événement
              </span>
            </em>
            ,
            <br />
            une simple curiosité ?
          </>
        }
        lede="Service client 7j/7 — 24h/24 sur WhatsApp. Messages écrits uniquement pour une réponse rapide et précise."
        image="/assets/photo-3.jpeg"
        imagePosition="center 80%"
      />

      {/* ── 3 moyens de contact en cartes ─────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            <ContactCard
              icon={WhatsAppIcon}
              kicker="Canal privilégié"
              title="WhatsApp"
              body={WHATSAPP_NUMBER_DISPLAY}
              note="Réponse 7j/7 — messages uniquement"
              href={whatsappLink("Bonjour Lab's Food, ")}
              ctaLabel="Discuter sur WhatsApp"
              variant="whatsapp"
            />
            <ContactCard
              icon={Mail}
              kicker="E-mail professionnel"
              title="Par e-mail"
              body={SITE.email}
              note="Réponse sous 24h ouvrées"
              href={`mailto:${SITE.email}`}
              ctaLabel="Envoyer un e-mail"
              variant="default"
            />
            {/* <ContactCard
              icon={MapPin}
              kicker="Zones d'intervention"
              title="Sur place"
              body="Côte d'Azur · Île-de-France"
              note="Europe via partenaires"
              href="#formulaire"
              ctaLabel="Voir le formulaire"
              variant="default"
            /> */}
          </div>
        </div>
      </section>

      {/* ── Formulaire + carte info ────────────────────────────────── */}
      <section
        id="formulaire"
        className="bg-cream-soft py-24 md:py-32 border-y border-navy/8"
      >
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Texte gauche */}
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
              <span className="size-6 h-px bg-navy-mid" />
              Formulaire de contact
            </p>
            <h2
              className="font-display text-navy leading-[0.98] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Écrivez-nous,{' '}
              <em className="not-italic">
                <span className="font-display italic text-navy-mid">
                  on revient vite.
                </span>
              </em>
            </h2>
            {/* <p className="mt-6 text-ink/75 leading-relaxed max-w-md text-pretty">
              Décrivez votre demande : type d&apos;événement, dates, nombre de
              personnes, attentes particulières. Plus c&apos;est précis, mieux
              on peut vous orienter.
            </p> */}

            {/* Infos pratiques */}
            <div className="mt-10 pt-8 border-t border-navy/10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="size-10 rounded-full bg-navy/5 grid place-items-center shrink-0">
                  <Clock className="size-4 text-navy-mid" />
                </span>
                <div>
                  <div className="font-display text-base text-navy">
                    Disponibilité
                  </div>
                  <div className="text-sm text-ink/65 mt-0.5">
                    Service client 7j/7 — 24h/24 sur WhatsApp
                  </div>
                </div>
              </div>
              {/* <div className="flex items-start gap-4">
                <span className="size-10 rounded-full bg-navy/5 grid place-items-center shrink-0">
                  <MapPin className="size-4 text-navy-mid" />
                </span>
                <div>
                  <div className="font-display text-base text-navy">
                    Zones couvertes
                  </div>
                  <div className="text-sm text-ink/65 mt-0.5">
                    Côte d&apos;Azur · Île-de-France (77) · Europe via La Poste
                  </div>
                </div>
              </div> */}
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-10">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink/45 mb-4">
                — Suivez-nous
              </p>
              <div className="flex items-center gap-3">
                <SocialChip
                  Icon={Instagram}
                  label="Instagram"
                  href={SOCIAL_LINKS.instagram}
                />
                <SocialChip
                  Icon={Music2}
                  label="TikTok"
                  href={SOCIAL_LINKS.tiktok}
                />
                <SocialChip
                  Icon={Linkedin}
                  label="LinkedIn"
                  href={SOCIAL_LINKS.linkedin}
                />
              </div>
            </div>
          </div>

          {/* Formulaire droite */}
          <div className="lg:col-span-7">
            <div className="bg-cream rounded-3xl border border-navy/10 p-8 md:p-10 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Bandeau brand bas ───────────────────────────────────────── */}
      {/* <section className="bg-navy text-cream py-16 md:py-20">
        <div className="container-wide text-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid mb-4">
            — Maison certifiée HACCP
          </p>
          <p
            className="font-display italic text-cream/85 max-w-3xl mx-auto text-balance"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
          >
            « Chez Lab&apos;s Food, chaque message est lu, chaque demande
            écoutée. La cuisine, comme un voyage — sans tracasserie de visa. »
          </p>
        </div>
      </section> */}
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

function ContactCard({
  icon: Icon,
  kicker,
  title,
  body,
  note,
  href,
  ctaLabel,
  variant,
}: {
  icon: React.ElementType
  kicker: string
  title: string
  body: string
  note: string
  href: string
  ctaLabel: string
  variant: 'whatsapp' | 'default'
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group relative block bg-cream-soft border border-navy/8 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      <div
        className={`size-12 rounded-xl grid place-items-center mb-5 transition-colors ${variant === 'whatsapp'
          ? 'bg-whatsapp text-white'
          : 'bg-navy text-cream'
          }`}
      >
        <Icon className="size-5" />
      </div>
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid mb-2">
        {kicker}
      </div>
      <h3 className="font-display text-2xl text-navy mb-3">{title}</h3>
      <div className="font-display text-lg text-navy/85 tabular-nums">
        {body}
      </div>
      <div className="text-xs text-ink/55 mt-1">{note}</div>

      <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between text-sm font-medium text-navy">
        {ctaLabel}
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5" />
      </div>
    </a>
  )
}

function SocialChip({
  Icon,
  label,
  href,
}: {
  Icon: React.ElementType
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="size-11 rounded-full bg-navy/5 border border-navy/15 grid place-items-center text-navy hover:bg-navy hover:text-cream hover:border-navy transition-all duration-300 hover:-translate-y-1"
    >
      <Icon className="size-4" />
    </a>
  )
}
