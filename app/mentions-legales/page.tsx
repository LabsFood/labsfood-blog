import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales du site www.labsfood.fr — éditeur, hébergeur, propriété intellectuelle et informations légales de Lab's Food.",
}

type Field = { label: string; value: string; href?: string }

type Section = {
  n: string
  title: string
  intro?: string
  fields?: Field[]
  body?: string[]
  list?: string[]
}

const SECTIONS: Section[] = [
  {
    n: '01',
    title: 'Éditeur du site',
    fields: [
      { label: 'Raison sociale', value: "Lab's Food" },
      { label: 'Forme juridique', value: 'Entreprise Individuelle (EI)' },
      { label: 'Fondatrice et responsable de la publication', value: 'Ivy SIYAPTZE' },
      { label: 'Adresse du siège', value: '200 Rue de la Croix Nivert, 75015 Paris, France' },
      { label: 'Numéro SIRET', value: '100 715 036 00032' },
      { label: 'Téléphone', value: '+33 7 49 75 56 84 (WhatsApp uniquement — messages écrits)' },
      { label: 'Email', value: 'contact@labsfood.fr', href: 'mailto:contact@labsfood.fr' },
      { label: 'Site web', value: 'www.labsfood.fr', href: 'https://www.labsfood.fr' },
    ],
  },
  {
    n: '02',
    title: 'Hébergeur du site',
    fields: [
      { label: 'Société', value: 'OVH SAS' },
      { label: 'Forme juridique', value: 'Société par Actions Simplifiée (SAS) au capital de 50 000 000 €' },
      { label: 'Siège social', value: '2 rue Kellermann, 59100 Roubaix, France' },
      { label: 'RCS', value: 'Lille Métropole 424 761 419 00045' },
      { label: 'Téléphone', value: '+33 9 72 10 10 07' },
      { label: 'Site web', value: 'www.ovhcloud.com', href: 'https://www.ovhcloud.com' },
    ],
  },
  {
    n: '03',
    title: 'Propriété intellectuelle',
    body: [
      "L'ensemble des contenus présents sur le site www.labsfood.fr notamment les textes, photographies, illustrations, vidéos, logos, graphismes, et le nom commercial « Lab's Food » sont la propriété exclusive de Lab's Food et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.",
      "Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie de ces éléments, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l'accord préalable et écrit de Lab's Food.",
      "Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.",
    ],
  },
  {
    n: '04',
    title: "Description de l'activité",
    intro: "Lab's Food propose :",
    list: [
      'Des services culinaires à domicile et en ligne : batch cooking, assistance culinaire, ateliers culinaires.',
      "Des produits alimentaires artisanaux : le Kossam (boisson lactée fermentée d'inspiration camerounaise) et d'autres créations à venir.",
      "Une plateforme de mise en relation entre clients et animateurs/chefs partenaires pour les services d'assistance culinaire et d'ateliers culinaires.",
    ],
    body: [
      "Lab's Food est une maison certifiée HACCP (Hazard Analysis Critical Control Points), garantissant le respect des règles d'hygiène et de sécurité alimentaire.",
    ],
  },
  {
    n: '05',
    title: 'Limitation de responsabilité',
    body: [
      "Lab's Food s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, Lab's Food ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site.",
      "En conséquence, Lab's Food décline toute responsabilité pour :",
    ],
    list: [
      'Toute imprécision, inexactitude ou omission portant sur les informations disponibles sur le site.',
      "Tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.",
      "Et plus généralement, tout dommage direct ou indirect, quelle qu'en soit la cause, l'origine, la nature ou les conséquences.",
    ],
  },
  {
    n: '06',
    title: 'Liens hypertextes',
    body: [
      "Le site www.labsfood.fr peut contenir des liens hypertextes vers d'autres sites internet. Lab's Food n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.",
      "La création de liens hypertextes vers le site www.labsfood.fr est autorisée sans demande préalable, sous réserve que ces liens ne portent pas atteinte à l'image de Lab's Food et que le site source ne diffuse pas d'informations à caractère illicite.",
    ],
  },
  {
    n: '07',
    title: 'Données personnelles et cookies',
    body: [
      "Lab's Food est susceptible de collecter des données personnelles vous concernant lors de votre utilisation du site www.labsfood.fr, notamment via le formulaire de contact, les échanges par WhatsApp ou les commandes de produits et de services. Ces données sont collectées et traitées dans le strict respect de la réglementation en vigueur.",
      "Conformément au Règlement Général sur la Protection des Données (RGPD) n° 2016/679 et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.",
      'Pour exercer ces droits, vous pouvez contacter Lab\'s Food à l\'adresse : contact@labsfood.fr',
    ],
  },
  {
    n: '08',
    title: 'Droit applicable et juridiction',
    body: [
      "Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation du site www.labsfood.fr sera soumis à la compétence exclusive des tribunaux français compétents, et notamment du Tribunal de Commerce ou du Tribunal Judiciaire de Paris. La langue de référence, pour le règlement de contentieux éventuels, est le français.",
    ],
  },
  {
    n: '09',
    title: 'Médiation de la consommation',
    body: [
      "En cas de litige entre le Client et Lab's Food, ceux-ci s'efforceront de le résoudre à l'amiable (le Client adressera une réclamation écrite auprès de Lab's Food ou, le cas échéant, auprès du Service Relations Clientèle de Lab's Food).",
      "À défaut d'accord amiable ou en l'absence de réponse de Lab's Food dans un délai raisonnable d'un (1) mois, le Client consommateur au sens de l'article L.612-2 du Code de la consommation a la possibilité de saisir gratuitement, si un désaccord subsiste, le médiateur compétent inscrit sur la liste des médiateurs établie par la Commission d'évaluation et de contrôle de la médiation de la consommation en application de l'article L.615-1 du Code de la consommation, à savoir :",
      'La Société Médiation Professionnelle — Site web : http://www.mediateur-consommation-smp.fr',
      'Alteritae — 5 rue Salvaing, 12000 Rodez',
    ],
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Légal · Mentions légales"
        title={
          <>
            Mentions{' '}
            <em className="not-italic">
              <span className="font-display text-white">légales</span>
            </em>
          </>
        }
        image="/assets/placehold.jpeg"
        lede="Informations légales relatives au site www.labsfood.fr, conformément à la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN)."
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <article className="prose prose-lg max-w-none">
            <p className="text-ink/80 leading-relaxed mb-16 text-justify">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la
              Confiance dans l&apos;Économie Numérique (LCEN), les présentes mentions légales
              ont pour objet de définir les modalités de mise à disposition du site{' '}
              www.labsfood.fr et les conditions de son utilisation.
            </p>

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
                  {s.fields && (
                    <dl className="grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-3 rounded-2xl border border-navy/10 bg-cream-soft p-6">
                      {s.fields.map((f) => (
                        <div
                          key={f.label}
                          className="contents"
                        >
                          <dt className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-navy-mid sm:text-right sm:pt-0.5">
                            {f.label}
                          </dt>
                          <dd className="m-0 text-navy font-medium">
                            {f.href ? (
                              <a
                                href={f.href}
                                className="text-navy-mid hover:text-navy underline"
                              >
                                {f.value}
                              </a>
                            ) : (
                              f.value
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {s.intro && <p className="text-justify">{s.intro}</p>}

                  {s.body &&
                    s.body.map((p, i) => (
                      <p key={i} className="text-justify">
                        {p}
                      </p>
                    ))}

                  {s.list && (
                    <ul className="list-disc pl-5 space-y-2 marker:text-orange">
                      {s.list.map((item, i) => (
                        <li key={i} className="text-justify">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-20 pt-10 border-t border-navy/10">
              <p className="text-sm text-ink/55 italic">
                Mentions légales mises à jour le 15 juin 2026. © 2026 Lab&apos;s Food —
                Tous droits réservés. Toute question peut être adressée à{' '}
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
