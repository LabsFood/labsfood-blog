import type { Metadata } from 'next'
import {
  ShieldCheck,

  Compass,
  Heart,
  Sparkles,
} from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { ChefForm } from '@/components/forms/ChefForm'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Devenir animateur',
  description:
    "Vous êtes passionné(e) de cuisine ? Rejoignez Lab's Food et proposez vos propres ateliers culinaires à domicile. Inscription gratuite.",
}

const PERKS = [
  {
    icon: Heart,
    title: 'Partagez votre passion',
    body: "Transmettez votre amour de la cuisine et vos meilleures recettes à une communauté de gourmands curieux d'apprendre.",
  },
  {
    icon: Compass,
    title: 'Liberté totale',
    body: "C'est vous qui décidez : fixez librement vos tarifs, vos disponibilités et votre zone de déplacement.",
  },
  {
    icon: ShieldCheck,
    title: 'Cadre de confiance',
    body: "Bénéficiez d'une vitrine soignée pour mettre en valeur votre profil, vos spécialités et rassurer vos futurs clients.",
  },
  {
    icon: Sparkles,
    title: 'Contact direct',
    body: 'Les clients vous contactent sans intermédiaire via votre numéro ou votre lien de réservation.',
  },
] as const

export default function DevenirChefPage() {
  return (
    <>
      <PageHero
        eyebrow="Rejoignez la maison"
        title={
          <>
            <span className="font-display italic text-orange">
              Nous rejoindre.
            </span>
          </>
        }
        lede="Lab's Food est une plateforme qui permet aux passionnés de cuisine de proposer leurs propres ateliers, gratuitement pour le moment. Voici comment ça marche."
        image="/assets/photo-8.jpeg"
        imagePosition="center 35%"
      />

      {/* ── Comment ça marche ─────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-navy-mid inline-flex items-center gap-3 mb-6">
                <span className="size-6 h-px bg-navy-mid" />
                Le processus
              </p>
              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Comment ça{' '}
                <em className="not-italic">
                  <span className="font-display italic text-orange">
                    marche ?
                  </span>
                </em>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-0 relative">
            {/* ligne de connexion visible sur desktop */}
            <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-navy/10" />

            {[
              {
                step: '01',
                title: 'Remplissez le formulaire',
                body: 'Décrivez votre profil, vos spécialités culinaires et vos disponibilités en quelques minutes.',
              },
              {
                step: '02',
                title: 'Nous validons votre profil',
                body: 'Notre équipe examine votre candidature et vous contacte pour finaliser votre intégration.',
              },
              {
                step: '03',
                title: 'Votre fiche est en ligne',
                body: 'Votre profil est publié sur la plateforme, visible par tous les clients de votre zone.',
              },
              {
                step: '04',
                title: 'Les clients vous contactent',
                body: 'Vous recevez les demandes directement et gérez vos interventions en totale autonomie.',
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="relative flex flex-col items-start md:items-center md:text-center px-6 py-4 md:py-0">
                  <div className="relative z-10 size-[4.5rem] rounded-full bg-navy text-cream grid place-items-center mb-6 shadow-lg shrink-0">
                    <span className="font-mono text-sm font-semibold tracking-widest text-orange">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/65 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 perks en cards ───────────────────────────────────────── */}
      {/* <section className="bg-cream py-24 md:py-32">
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
                  <span className="font-display italic text-navy-mid">
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
      </section> */}

      {/* ── Bloc accréditation ─────────────────────────────────────── */}


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
                <span className="font-display italic text-navy-mid">
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
      <section className="bg-navy text-cream py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="relative container-wide grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-orange inline-flex items-center gap-3 mb-6">
              <span className="size-6 h-px bg-orange" />
              Une plateforme bienveillante
            </p>
            <h2
              className="font-display text-cream leading-tight text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Un badge pour les personnes{' '}
              <em className="not-italic">
                <span className="font-display italic text-orange">
                  formées et certifiées.
                </span>
              </em>
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed text-pretty max-w-xl">
              Pour vous démarquer, une accréditation visible est attribuée aux
              chefs ayant suivi une formation reconnue ou obtenu la
              certification HACCP.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-cream/[0.06] border border-cream/15 p-8 md:p-10 text-center">
              <Sparkles className="size-8 text-orange-mid mx-auto mb-4" />
              <div className="font-display text-3xl text-cream leading-tight">
                Gratuit
              </div>
              <p className="text-cream/65 text-sm mt-3">
                L&apos;inscription est entièrement gratuite.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
