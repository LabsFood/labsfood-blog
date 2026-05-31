import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: "CGU — Conditions Générales d'Utilisation",
  description:
    "Conditions Générales d'Utilisation de la plateforme Lab's Food.",
}

const SECTIONS = [
  {
    n: '01',
    title: 'Objet et présentation du service',
    body: [
      "La plateforme Lab's Food met à disposition un service numérique de mise en relation dédié au secteur de la restauration. Elle permet à des professionnels de la restauration (restaurateurs, traiteurs) et non professionnels d'entrer en contact de manière automatisée avec des intervenants indépendants, étudiants ou professionnels de la cuisine, proposant des prestations d'assistance culinaire.",
    ],
  },
  {
    n: '02',
    title: 'Accès au service et évolution tarifaire',
    body: [
      "L'accès à la plateforme et l'utilisation du service de mise en relation sont actuellement proposés à titre gratuit dans le cadre d'une phase de lancement.",
      "Lab's Food se réserve le droit de faire évoluer ce modèle vers des fonctionnalités, des accès ou des mises en relation payants à l'avenir. Toute modification des conditions tarifaires fera l'objet d'une communication préalable, claire et explicite auprès de tous les inscrits. Les utilisateurs auront alors la liberté d'accepter les nouvelles conditions ou de procéder à la suppression de leur compte sans le moindre frais ni pénalité.",
    ],
  },
  {
    n: '03',
    title: 'Rôle et limitation de responsabilité',
    body: [
      "Lab's Food agit strictement en qualité d'intermédiaire technique et d'hébergeur de profils. La plateforme n'exerce aucun lien de subordination, de contrôle ou de direction sur les utilisateurs inscrits et n'est en aucun cas une agence de travail temporaire ou un employeur.",
      "L'accord final, la forme contractuelle (CDD d'usage, facturation sous le statut de micro-entrepreneur), la rémunération et les conditions de sécurité sur le lieu de travail relèvent de la responsabilité exclusive du restaurateur et de l'intervenant.",
      "Lab's Food décline toute responsabilité en cas de litige, d'annulation de mission, de non-paiement, de dommages ou d'incidents survenant avant, pendant ou après une prestation issue d'une mise en relation via le site.",
    ],
  },
  {
    n: '04',
    title: "Engagements de l'utilisateur",
    body: [
      "Tout utilisateur s'inscrivant sur la plateforme certifie sur l'honneur l'exactitude des informations fournies (statut légal, expérience, identité).",
      "L'utilisateur s'engage à utiliser la plateforme de manière loyale, à maintenir ses disponibilités à jour via l'outil de planification de rendez-vous intégré, et à honorer les échanges planifiés avec les professionnels de la restauration.",
    ],
  },
  {
    n: '05',
    title: "Droit à l'image et publication publique",
    body: [
      "En soumettant son formulaire d'inscription, l'utilisateur accorde à Lab's Food le droit non exclusif, transférable et gratuit de diffuser sa photographie, son prénom, son département d'intervention et ses compétences sur la partie publique de la plateforme.",
      "Cette autorisation est accordée pour la durée d'inscription de l'utilisateur, à des fins exclusives de promotion de son profil et de mise en relation.",
    ],
  },
] as const

export default function CguPage() {
  return (
    <>
      <PageHero
        eyebrow="Légal · CGU"
        title={
          <>
            Conditions Générales d&apos;{" "}
            <em className="not-italic">
              <span className="font-display  text-white">
                Utilisation
              </span>
            </em>
          </>
        }
        image='/assets/placehold.jpeg'
        lede="Les règles d'usage de la plateforme Lab's Food — service de mise en relation entre professionnels et intervenants en cuisine."
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <article className="prose prose-lg max-w-none">
            {SECTIONS.map((s) => (
              <div key={s.n} className="mb-16">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-4xl text-navy-mid tabular-nums leading-none">
                    {s.n}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-navy leading-tight m-0">
                    {s.title}
                  </h2>
                </div>
                <div className="pl-0 md:pl-[3.5rem] space-y-4 text-ink/80 leading-relaxed">
                  {s.body.map((p, i) => (
                    <p key={i} className='text-justify'>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-20 pt-10 border-t border-navy/10">
              <p className="text-sm text-ink/55 italic">
                Dernière mise à jour : mai 2026. Toute question relative aux
                présentes CGU peut être adressée à{' '}
                <a
                  href="mailto:contact@labsfood.fr"
                  className="text-navy-mid hover:text-navy underline"
                >
                  contact@labsfood.fr
                </a>
                .
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
