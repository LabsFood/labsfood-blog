import type { Metadata } from 'next'
import { ShieldCheck, MessageCircle, Compass, Heart } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { ChefForm } from '@/components/forms/ChefForm'

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
    title: 'On gère la mise en relation',
    body: 'Bouton de réservation direct vers votre WhatsApp ou site web.',
  },
] as const

export default function DevenirChefPage() {
  return (
    <>
      <PageHero
        eyebrow="Acquisition chefs"
        title={
          <>
            Donnez des cours de cuisine{' '}
            <span className="italic gradient-text-terra">à domicile</span>.
          </>
        }
        lede="Lab's Food est une plateforme qui permet aux passionnés de cuisine de proposer leurs propres ateliers, gratuitement pour le moment. Voici comment ça marche."
      />

      {/* Perks */}
      <section className="section bg-cream">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERKS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-cream-soft border border-navy/5 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="size-10 rounded-full bg-terra/15 text-terra grid place-items-center mb-5">
                  <p.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <span className="eyebrow">Une plateforme bienveillante</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Une accréditation pour les chefs{' '}
              <span className="italic gradient-text-terra">formés et certifiés</span>.
            </h2>
            <p className="mt-6 lede text-pretty">
              Pour vous démarquer, une accréditation visible est attribuée aux chefs ayant
              suivi une formation reconnue ou obtenu la certification HACCP. Le client sait
              à qui il confie sa cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="formulaire" className="section bg-cream-soft scroll-mt-20">
        <div className="container-narrow">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Formulaire d&apos;intégration</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Rejoignez l&apos;aventure.
            </h2>
            <p className="mt-4 text-ink/70">
              Tous les champs marqués d&apos;une étoile{' '}
              <span className="text-terra">*</span> sont obligatoires. Les justificatifs
              peuvent être complétés a posteriori si besoin.
            </p>
          </div>
          <ChefForm />
        </div>
      </section>
    </>
  )
}
