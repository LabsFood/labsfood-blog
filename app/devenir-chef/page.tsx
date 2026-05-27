import type { Metadata } from 'next'
import {
  ShieldCheck,
  MessageCircle,
  Compass,
  Heart,
  Sparkles,
} from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { ChefForm } from '@/components/forms/ChefForm'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Devenir chef partenaire',
  description:
    "Vous êtes passionné(e) de cuisine ? Rejoignez Lab's Food et proposez vos propres ateliers culinaires à domicile. Inscription gratuite.",
}

const PERKS = [
  {
    icon: Heart,
    title: 'Partagez votre passion',
    body: "Transmettez votre savoir-faire à une communauté de gourmands curieux.",
  },
  {
    icon: Compass,
    title: 'Liberté totale',
    body: 'Vous fixez vos tarifs, vos disponibilités, votre zone de déplacement.',
  },
  {
    icon: ShieldCheck,
    title: 'Encadré & sécurisé',
    body: 'Charte qualité, accréditation HACCP visible, profil professionnel.',
  },
  {
    icon: MessageCircle,
    title: 'Mise en relation',
    body: 'Bouton de réservation direct vers votre WhatsApp ou site web.',
  },
] as const

export default function DevenirChefPage() {
  return (
    <>
      <PageHero
        eyebrow="Rejoignez la maison"
        title={
          <>
            Donnez des cours de cuisine{' '}
            <em className="not-italic">
              <span className="font-display italic gradient-text-navy-mid">
                à domicile.
              </span>
            </em>
          </>
        }
        lede="Lab's Food est une plateforme qui permet aux passionnés de cuisine de proposer leurs propres ateliers, gratuitement pour le moment. Voici comment ça marche."
        image="/assets/photo-8.jpeg"
        imagePosition="center 35%"
      />

      {/* ── 4 perks en cards ───────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                Pourquoi nous rejoindre
              </p>
              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Quatre raisons de devenir{' '}
                <em className="not-italic">
                  <span className="font-display italic gradient-text-navy-mid">
                    chef partenaire.
                  </span>
                </em>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-cream-soft border border-navy/8 p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="size-12 rounded-full bg-navy-mid text-cream grid place-items-center mb-5 shadow-md">
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bloc accréditation ─────────────────────────────────────── */}
      <section className="bg-navy text-cream py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="relative container-wide grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
              <span className="size-6 h-px bg-navy-mid" />
              Une plateforme bienveillante
            </p>
            <h2
              className="font-display text-cream leading-tight text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Une accréditation pour les chefs{' '}
              <em className="not-italic">
                <span className="font-display italic gradient-text-navy-mid">
                  formés et certifiés.
                </span>
              </em>
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed text-pretty max-w-xl">
              Pour vous démarquer, une accréditation visible est attribuée aux
              chefs ayant suivi une formation reconnue ou obtenu la
              certification HACCP. Le client sait à qui il confie sa cuisine.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-cream/[0.06] border border-cream/15 p-8 md:p-10 text-center">
              <Sparkles className="size-8 text-navy-mid mx-auto mb-4" />
              <div className="font-display text-3xl text-cream leading-tight">
                Gratuit
              </div>
              <p className="text-cream/65 text-sm mt-3">
                L&apos;inscription chef partenaire est entièrement gratuite pour
                le moment. Seules les commissions à venir seront communiquées
                publiquement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formulaire ─────────────────────────────────────────────── */}
      <section
        id="formulaire"
        className="bg-cream-soft py-24 md:py-32 scroll-mt-20"
      >
        <div className="container-narrow">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
              <span className="size-6 h-px bg-navy-mid" />
              Formulaire d&apos;intégration
            </p>
            <h2
              className="font-display text-navy leading-tight text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Rejoignez{' '}
              <em className="not-italic">
                <span className="font-display italic gradient-text-navy-mid">
                  l&apos;aventure.
                </span>
              </em>
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Tous les champs marqués d&apos;une étoile{' '}
              <span className="text-navy-mid">*</span> sont obligatoires. Les
              justificatifs peuvent être complétés a posteriori si besoin.
            </p>
          </div>
          <div className="bg-cream rounded-3xl border border-navy/10 p-8 md:p-10 shadow-xl">
            <ChefForm />
          </div>
        </div>
      </section>
    </>
  )
}
