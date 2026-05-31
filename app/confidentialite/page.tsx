import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Eye, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Politique de Confidentialité — RGPD",
  description:
    "Comment Lab's Food collecte, traite et protège vos données personnelles dans le respect du RGPD.",
}

const SECTIONS = [
  {
    n: '01',
    title: 'Collecte et nature des données personnelles',
    body: [
      "Pour assurer le bon fonctionnement du service de mise en relation automatisée, Lab's Food collecte et traite les informations transmises volontairement par l'utilisateur lors de son inscription. Ces données sont strictement divisées en deux catégories de visibilité :",
    ],
    blocks: [
      {
        kind: 'public' as const,
        title: 'Données publiques — la « Vitrine »',
        text: "Prénom, photographie, département d'intervention, niveau d'expérience, statut, compétences professionnelles et lien de l'outil de planification de rendez-vous (type Calendly, Google Form…) ou contact.",
      },
      {
        kind: 'private' as const,
        title: 'Données confidentielles — Administration interne',
        text: "Nom de famille, numéro de téléphone personnel et adresse e-mail.",
      },
    ],
  },
  {
    n: '02',
    title: 'Finalité du traitement des données',
    body: [
      "Les données récoltées ont pour objectif exclusif la mise en œuvre du service Lab's Food.",
      "Les données publiques visent à constituer la vitrine de l'intervenant pour générer des opportunités professionnelles. Les données confidentielles permettent à l'administration de maintenir la sécurité de la plateforme, de vérifier la validité des profils et de communiquer des mises à jour importantes.",
      "Ces données confidentielles ne sont en aucun cas vendues, cédées, échangées ou louées à des tiers à des fins commerciales.",
    ],
  },
  {
    n: '03',
    title: 'Hébergement et sécurité',
    body: [
      "Lab's Food s'engage à mettre en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre toute altération, perte, destruction ou accès non autorisé.",
    ],
  },
  {
    n: '04',
    title: 'Durée de conservation',
    body: [
      "Les données personnelles sont conservées de manière active tant que l'utilisateur maintient son profil sur la plateforme pour proposer ses services.",
      "En cas d'inactivité prolongée du profil excédant une durée de deux ans, ou sur simple demande de l'utilisateur, l'ensemble des données publiques et confidentielles sera définitivement effacé de nos serveurs, à l'exception des données nécessaires au respect d'obligations légales.",
    ],
  },
  {
    n: '05',
    title: 'Exercice des droits des utilisateurs',
    body: [
      "Conformément à la réglementation européenne en vigueur (Règlement Général sur la Protection des Données — RGPD), tout utilisateur dispose d'un droit d'accès, de rectification, de portabilité, de limitation et d'effacement de ses données personnelles.",
      "L'utilisateur peut à tout moment demander la modification ou le retrait immédiat de son profil public et de sa photographie en contactant l'administration de la plateforme via les coordonnées fournies sur le site.",
    ],
  },
] as const

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Légal · RGPD"
        title={
          <>
            Politique de{' '}
            <em className="not-italic">
              <span className="font-display text-white">
                Confidentialité
              </span>
            </em>
          </>
        }
        image='/assets/placehold.jpeg'
        lede="Comment Lab's Food collecte, traite et protège vos données personnelles — dans le respect du RGPD européen."
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

                  {/* Blocs publics/privés (section 1) */}
                  {'blocks' in s && s.blocks && (
                    <div className="grid md:grid-cols-2 gap-5 mt-6">
                      {s.blocks.map((b) => (
                        <div
                          key={b.title}
                          className={`p-6 rounded-2xl border ${b.kind === 'public'
                            ? 'bg-navy-mid/10 border-navy-mid/20'
                            : 'bg-navy/5 border-navy/15'
                            }`}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            {b.kind === 'public' ? (
                              <Eye className="size-4 text-navy-mid" />
                            ) : (
                              <Lock className="size-4 text-navy" />
                            )}
                            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-navy-mid">
                              {b.kind === 'public' ? 'Public' : 'Privé'}
                            </span>
                          </div>
                          <h4 className="font-display text-lg text-navy mb-2">
                            {b.title}
                          </h4>
                          <p className="text-sm text-ink/75 leading-relaxed m-0">
                            {b.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-20 pt-10 border-t border-navy/10">
              <p className="text-sm text-ink/55 italic">
                Dernière mise à jour : mai 2026. Pour exercer vos droits ou
                toute question relative à vos données personnelles, contactez{' '}
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
