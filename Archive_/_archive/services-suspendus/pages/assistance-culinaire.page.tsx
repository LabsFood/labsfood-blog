import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  ChefHat,
  CalendarCheck,
  Building2,

  Utensils,
  Users,
  ClipboardList,
  MapPin,
  Navigation,
  Languages,
  BadgeCheck,
  Star,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { whatsappLink } from '@/lib/utils'
import { CHEFS } from '@/lib/content'
import { ChefsFilterable } from '@/components/sections/ChefsFilterable'

export const metadata: Metadata = {
  title: "Assistance culinaire · Lab's Food",
  description:
    "Lab's Food intervient en renfort dans votre cuisine pour vos grands dîners, fêtes de famille ou événements professionnels. Rôle défini selon vos besoins.",
}

const USECASES = [
  {
    icon: Utensils,
    title: 'Restaurants & cuisine collective',
    body: "Besoin de bras supplémentaires en cuisine sur une ou plusieurs journées ? Accédez à une communauté variée partout en France (étudiants, passionnés ou pros) pour combler vos besoins ponctuels en toute flexibilité.",
  },
  {
    icon: Users,
    title: 'Grands dîners & fêtes de famille',
    body: "Vous organisez un repas pour 10, 20, 30 personnes ou plus ? Trouvez le profil idéal sur notre plateforme pour vous seconder en cuisine et profitez enfin pleinement de vos invités.",
  },
  {
    icon: Building2,
    title: 'Traiteurs & chefs en renfort',
    body: "Volume trop important, équipe incomplète ou événement de dernière minute ? Connectez-vous rapidement à notre réseau pour dénicher le renfort sérieux et efficace dont vous avez besoin.",
  },
  {
    icon: CalendarCheck,
    title: 'Événements & réceptions',
    body: "Anniversaires, mariages, séminaires d'entreprise... Dénichez facilement l'assistant culinaire qui s'adaptera parfaitement à votre format, votre organisation et votre menu.",
  },
] as const

const MISSIONS = [
  {
    title: 'Prestations à la carte',
    body: "Chaque profil détaille les missions qu'il accepte de réaliser (préparation, dressage, plonge...).",
  },
  {
    title: 'Tarifs 100 % transparents',
    body: "Les prix sont fixés librement par les assistants, ce qui permet de s'adapter à tous les budgets.",
  },
  {
    title: "Choix du niveau d'expertise",
    body: "Filtrez les profils selon vos exigences : de l'étudiant motivé au professionnel expérimenté.",
  },
  {
    title: 'Flexibilité des horaires',
    body: "Trouvez le bon renfort, que ce soit pour un coup de feu de 2h ou pour une journée complète.",
  },
  {
    title: 'Échange en direct',
    body: "Discutez des spécificités de votre événement directement avec le profil sélectionné.",
  },
  {
    title: 'Accord sur-mesure',
    body: "Le rôle, les tâches et les modalités sont validés ensemble avant le début de la mission.",
  },
] as const

const STEPS = [
  {
    n: '01',
    title: 'Recherchez le profil idéal',
    body: "Filtrez les profils disponibles selon votre zone géographique ou vos mots-clés pour trouver l'assistant culinaire qu'il vous faut.",
  },
  {
    n: '02',
    title: 'Prenez contact en direct',
    body: "Accédez au numéro de téléphone ou au lien de contact renseigné sur le profil pour échanger immédiatement, sans intermédiaire.",
  },
  {
    n: '03',
    title: 'Accordez-vous pour le jour J',
    body: "Définissez ensemble les missions, les horaires et les tarifs. Tout est calé entre vous, il ne reste plus qu'à profiter de votre événement.",
  },
] as const

export default function AssistanceCulinaireePage() {
  return (
    <>
      <PageHero
        eyebrow="Service · Assistance culinaire"
        title={
          <>
            Un coup de main{' '}
            <span className="italic text-orange">sur-mesure</span>
            <br />
            dans votre cuisine.
          </>
        }
        lede="Que vous cherchiez du renfort pour votre établissement, que vous organisiez un événement, notre plate-forme vous connecte avec le profil idéal. Étudiant, passionné ou expérimenté : trouvez l’assistant qui s’adapte à vos besoins, partout en France."
        image="/assets/assistance.jpeg"
      />

      {/* ── Bandeau teal ── */}
      <section className="bg-orange text-cream">
        <div className="container-wide py-12 grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-cream/10 border border-cream/20 grid place-items-center shrink-0">
              <ChefHat className="size-5 text-white" />
            </div>
            <div>
              <div className="font-display text-lg text-cream leading-tight">Assistant sur-mesure</div>
              <div className="text-sm text-cream/65 mt-0.5">Défini selon votre besoin</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-cream/10 border border-cream/20 grid place-items-center shrink-0">
              <Building2 className="size-5 text-white" />
            </div>
            <div>
              <div className="font-display text-lg text-cream leading-tight">Pour les professionnels et particuliers</div>
              <div className="text-sm text-cream/65 mt-0.5">Traiteurs, restaurants, événements</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pour qui ? ── */}
      {/* <section className="section bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow">Pour qui ?</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Dès que la cuisine{' '}
              <span className="italic text-navy-mid">dépasse vos bras</span>.
            </h2>
            <p className="mt-6 lede max-w-2xl text-pretty">
              L&apos;assistance culinaire est pensée pour toutes les situations où vous avez
              besoin d&apos;un profil professionnel, fiable et adaptable — pas une armée, juste
              le bon renfort au bon moment.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {USECASES.map((u) => (
              <div
                key={u.title}
                className="rounded-2xl bg-cream-soft border border-navy/8 p-8 hover:shadow-lg transition-shadow duration-500"
              >
                <div className="size-12 rounded-xl bg-teal/10 grid place-items-center mb-5">
                  <u.icon className="size-5 text-teal" />
                </div>
                <h3 className="font-display text-xl text-navy">{u.title}</h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Nos missions ── */}
      {/* <section className="section bg-cream-soft">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-navy">
              <Image
                src="/assets/smile.jpeg"
                alt="Assistance culinaire Lab's Food"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-teal text-cream rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/65">Certifiée</div>
              <div className="font-display text-2xl mt-0.5">HACCP</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">Nos missions</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Vos règles, vos besoins, notre réseau
            </h2>
            <p className="mt-6 text-ink/75 leading-relaxed text-justify">
              Définissez vos besoins précis en quelques clic, Lab's Food vous met en realtion avec le profil adequat (amateur éclairé ou pro) pour executer vos missions avec rigueur, de la simple préparation à la gestion du service.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {MISSIONS.map((m) => (
                <li key={m.title} className="flex items-start gap-3">
                  <span className="mt-1 size-5 rounded-full bg-teal/15 text-teal grid place-items-center shrink-0">
                    <Check className="size-3" />
                  </span>
                  <div>
                    <div className="text-ink font-medium text-sm leading-snug">{m.title}</div>
                    <div className="text-ink/60 text-sm leading-relaxed mt-0.5 text-justify">{m.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      {/* ── Comment ça marche ── */}
      <section className="section bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow">Comment ça marche ?</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Trouver du renfort ? C’est du gâteau !
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl bg-cream-soft border border-navy/8 p-8 hover:shadow-md transition-shadow"
              >
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
                  Étape {s.n}
                </div>
                <h3 className="font-display text-2xl text-navy mt-4">{s.title}</h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHEFS DISPONIBLES — version filtrable (région + ville)
          ══════════════════════════════════════════════════════════════ */}
      <ChefsFilterable
        variant="full"
        service="assistance"
        eyebrow="Choisissez votre assistant(e) culinaire"
        title={
          <>
            Des profils vérifiés,{' '}
            <em className="not-italic">
              <span className="font-display italic text-orange">
                près de chez vous.
              </span>
            </em>
          </>
        }
        subtitle="Filtrez par région puis affinez par ville pour trouver le profil qui couvre votre zone d'intervention."
      />

      {/* ── Bandeau Devenir chef (déplacé hors de la grille filtrable) ── */}
      <section className="bg-cream-deep pb-20 md:pb-28">
        <div className="container-wide">
          <div className="rounded-3xl bg-navy text-cream p-8 md:p-10 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            {/* Halo deco */}
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-orange/20 blur-3xl pointer-events-none" />

            <div className="lg:col-span-8 relative">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white inline-flex items-center gap-3 mb-4">
                <span className="size-5 h-px bg-white" />
                Souhaitez-vous être assistant(e) culinaire?
              </p>
              <h3
                className="font-display text-cream leading-tight text-balance"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}
              >
                Devenez le{' '}
                <em className="not-italic">
                  <span className="font-display italic text-orange">
                    renfort idéal
                  </span>
                </em>{' '}
                pour nos clients.
              </h3>
              <p className="mt-4 text-cream/70 max-w-xl text-pretty leading-relaxed text-sm md:text-base">
                Que vous soyez amateur éclairé, en école hôtelière ou cuisinier
                aguerri, proposez vos services ! C&apos;est vous qui fixez vos
                règles avec les clients&nbsp;: missions, horaires et prix.
                L&apos;inscription est 100&nbsp;% gratuite.
              </p>
            </div>

            <div className="lg:col-span-4 relative flex lg:justify-end">
              <Link
                href="/devenir-chef"
                className="group inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full bg-orange text-cream font-medium text-sm hover:bg-orange-deep transition-all shadow-lg shadow-orange/40"
              >
                Proposer mes services
                <span className="size-9 rounded-full bg-cream/15 grid place-items-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center font-mono text-sm uppercase tracking-[0.25em] text-ink">
            La communauté Lab&apos;s Food s&apos;agrandit partout en France.
          </p>
        </div>
      </section>

      {/* ── Ancienne grille manuelle supprimée — remplacée par ChefsFilterable ── */}
      {false && (
        <section className="hidden">
          <div>
            <div>
              {CHEFS.map((chef) => (
                <div
                  key={chef.id}
                  className="grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-navy/8 shadow-lg bg-cream"
                >
                  {/* ── Photo ── */}
                  <div className="lg:col-span-4 relative h-72 lg:h-auto min-h-[360px]">
                    <Image
                      src={chef.photo}
                      alt={chef.name}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    {/* Overlay dégradé bas */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                    {/* Badge numéro */}
                    <div className="absolute top-5 left-5 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-cream bg-navy/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Chef {chef.n}
                    </div>

                    {/* Disponibilité */}
                    {chef.available && (
                      <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-cream/95 rounded-full px-3 py-1.5">
                        {/* <span className="size-2 rounded-full bg-whatsapp animate-pulse" /> */}
                        <span className=" text-[0.6rem] uppercase tracking-[0.2em] text-ink">
                          Disponible
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ── Détails ── */}
                  <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-between gap-8">
                    <div>
                      {/* Titre & nom */}
                      <div className="font-montserrat text-[0.65rem] uppercase tracking-[0.3em] text-teal">
                        {chef.title}
                      </div>
                      <h3 className="font-display text-5xl md:text-6xl text-navy mt-2 leading-none">
                        {chef.name}
                        <span className="italic-fraunces text-navy-mid">.</span>
                      </h3>

                      {/* Tags spécialités */}
                      {/* <div className="flex flex-wrap gap-2 mt-5">
                        {chef.specialties.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 text-teal font-mono text-[0.6rem] uppercase tracking-[0.2em]"
                          >
                            <Star className="size-2.5" />
                            {s}
                          </span>
                        ))}
                      </div> */}

                      {/* Bio */}
                      <p className="mt-6 text-ink/70 leading-relaxed max-w-xl text-pretty">
                        {chef.bio}
                      </p>

                      {/* Grille d'infos */}
                      <div className="mt-8 pt-6 border-t border-navy/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <InfoBlock
                          icon={MapPin}
                          label="Région"
                          value={chef.region}
                        />
                        <InfoBlock
                          icon={Navigation}
                          label="Zone"
                          value={chef.zone}
                        />
                        <InfoBlock
                          icon={Languages}
                          label="Langues"
                          value={chef.languages.join(' · ')}
                        />
                        <InfoBlock
                          icon={BadgeCheck}
                          label="Expérience"
                          value={chef.badges.join(' · ')}
                        />
                      </div>
                    </div>

                    {/* CTA — Lien de prise de RDV (Calendly/YouCanBookMe).
                      Cf. onglet 5 du doc : pas de numéro affiché en public,
                      le restaurateur choisit un créneau et laisse son numéro. */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Button asChild variant="primary" size="lg">
                        <a
                          href={chef.bookingLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CalendarCheck className="size-4" />
                          Entrer en contact avec {chef.name}
                          <ArrowUpRight className="size-4" />
                        </a>
                      </Button>
                      {/* <div className="text-xs text-ink/55 italic max-w-[18rem]">
                      Vous choisissez un créneau, on échange par téléphone — sans
                      diffusion publique des numéros.
                    </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Bandeau "Devenir chef partenaire" ────────────────────── */}
            <div className="mt-12 rounded-3xl bg-navy text-cream p-8 md:p-10 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
              {/* Halo deco */}
              <div className="absolute -top-20 -right-20 size-64 rounded-full bg-orange/20 blur-3xl pointer-events-none" />

              <div className="lg:col-span-8 relative">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white inline-flex items-center gap-3 mb-4">
                  <span className="size-5 h-px bg-white" />
                  Souhaitez-vous être assistant(e) culinaire? ?
                </p>
                <h3
                  className="font-display text-cream leading-tight text-balance"
                  style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}
                >
                  Devenez le{' '}
                  <em className="not-italic">
                    <span className="font-display italic text-orange">
                      renfort idéal
                    </span>
                  </em>{' '}
                  pour nos clients.
                </h3>
                <p className="mt-4 text-cream/70 max-w-xl text-pretty leading-relaxed text-sm md:text-base">
                  Que vous soyez amateur éclairé, en école hôtelière ou cuisinier
                  aguerri, proposez vos services ! C&apos;est vous qui fixez vos
                  règles avec les clients&nbsp;: missions, horaires et prix.
                  L&apos;inscription est 100&nbsp;% gratuite.
                </p>
              </div>

              <div className="lg:col-span-4 relative flex lg:justify-end">
                <Link
                  href="/devenir-chef"
                  className="group inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full bg-orange text-cream font-medium text-sm hover:bg-orange-deep transition-all shadow-lg shadow-orange/40"
                >
                  Proposer mes services
                  <span className="size-9 rounded-full bg-cream/15 grid place-items-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Note bas de section */}
            <p className="mt-8 text-center font-mono text-sm uppercase tracking-[0.25em] text-ink">
              La communauté Lab&apos;s Food s&apos;agrandit partout en France.
            </p>
          </div>
        </section>
      )}

      {/* ── CTA final ── */}
      {/* <section className="section bg-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.04]" />
        <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="eyebrow text-cream">Pas encore décidé ?</span>
            <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 text-balance leading-[0.95]">
              Décrivez-nous votre événement,
              <br />
              <span className="italic text-cream">on revient vite.</span>
            </h2>
            <p className="mt-6 text-cream/70 max-w-xl leading-relaxed">
              Dîner de 30 couverts, renfort traiteur, événement d&apos;entreprise — chaque
              situation est différente. Contactez-nous sur WhatsApp, on oriente votre demande
              vers le bon profil.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-cream/55">
              <ClipboardList className="size-4 text-cream" />
              Le client est responsable des ingrédients et du matériel de base.
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <Button asChild variant="whatsapp" size="lg" className="w-full justify-center">
              <a
                href={whatsappLink(
                  "Bonjour Lab's Food, je souhaite un devis pour une assistance culinaire — voici mon événement : ",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                Demander un devis
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full justify-center">
              <Link href="/contact">
                Formulaire de contact
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <p className="text-center text-xs text-cream/45">
              Réponse 7j/7 · Messages écrits uniquement
            </p>
          </div>
        </div>
      </section> */}
    </>
  )
}

/* ── Sous-composant : bloc d'info chef ──────────────────────────── */
function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="size-3 text-teal" />
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink/40">
          {label}
        </span>
      </div>
      <div className="font-display text-base text-navy leading-tight">{value}</div>
    </div>
  )
}
