import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { FormulesSection } from '@/components/sections/FormulesSection'
import { AvanceImmediateSection } from '@/components/sections/AvanceImmediateSection'
import { ETAPES, ZONE } from '@/lib/batch-cooking'
import { MENU, NB_PLATS } from '@/lib/menu-data'
import { BATCH_COOKING_URL, whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Batch cooking à domicile',
  description:
    "Une cheffe vient cuisiner une semaine entière de repas chez vous, en 2h minimum, sur la Côte d'Azur. À partir de 25€, crédit d'impôt de 50 % déjà déduit grâce à l'avance immédiate.",
}

const POUR_QUI = [
  "Les familles qui ne veulent plus arbitrer le dîner à 19h",
  "Les jeunes parents, avant ou après une naissance",
  "Les personnes seules qui cuisinent peu pour elles-mêmes",
  "Les sportifs et les régimes qui demandent de la constance",
  "Les semaines chargées où la cuisine passe en dernier",
] as const

export default function BatchCookingPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Une semaine de repas,{' '}
            <span className="font-display italic text-orange">
              cuisinée chez vous en une fois.
            </span>
          </>
        }
        lede="Une cheffe professionnelle vient cuisiner à votre domicile. En deux heures minimum, votre semaine est prête, rangée et étiquetée. Vous n'avez plus qu'à réchauffer."
        image="/assets/gallerie/batch.jpeg"
        imagePosition="center 60%"
        size="lg"
      />

      {/* ── Ce que c'est, concrètement ────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <div>
              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Cuisiner une fois,{' '}
                <span className="font-display italic text-orange-deep">
                  manger toute la semaine.
                </span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-ink/80 max-w-[62ch]">
                Le batch cooking, c&apos;est le principe de préparer en une
                seule session tous les repas de plusieurs jours. La différence
                ici : ce n&apos;est pas vous qui cuisinez. Une cheffe se
                déplace chez vous, avec les courses si vous le souhaitez, et
                enchaîne toutes les préparations dans votre cuisine.
              </p>
              <p className="mt-5 leading-relaxed text-ink/75 max-w-[62ch]">
                Elle repart en laissant des plats prêts, conservés
                correctement, avec les consignes de réchauffage — et une
                cuisine propre. Vous récupérez vos soirées sans rien changer à
                vos habitudes alimentaires : le menu est construit avec vous,
                à partir de vos goûts, de vos allergies et du nombre de
                personnes à table.
              </p>

              <ul className="mt-10 space-y-4">
                {POUR_QUI.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 size-5 rounded-full bg-orange/15 text-orange-deep grid place-items-center shrink-0">
                      <Check className="size-3" />
                    </span>
                    <span className="text-ink/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal axis="x" delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden bg-navy text-cream">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/gallerie/img4.jpeg"
                  alt="Plats préparés et conditionnés après une session de batch cooking"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl text-cream">
                  Où nous intervenons
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  Le service est disponible sur toute la {ZONE.label}.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {ZONE.cities.map((city) => (
                    <li
                      key={city}
                      className="px-3.5 py-1.5 rounded-full border border-cream/20 text-cream/85 text-xs"
                    >
                      {city}
                    </li>
                  ))}
                  <li className="px-3.5 py-1.5 text-cream/55 text-xs italic">
                    {ZONE.note}
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Le déroulé ────────────────────────────────────────────────── */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <h2
              className="font-display text-navy leading-[0.98] tracking-tight text-balance max-w-3xl"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Comment ça se passe,{' '}
              <span className="font-display italic text-orange-deep">
                de votre premier message au dernier plat rangé.
              </span>
            </h2>
          </Reveal>

          <ol className="mt-14 md:mt-16 border-t border-navy/15">
            {ETAPES.map((etape, i) => (
              <Reveal key={etape.n} delay={i * 0.08}>
                <li className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 md:py-10 border-b border-navy/15">
                  <div className="md:col-span-1 font-mono text-sm tabular-nums text-navy-mid">
                    {etape.n}
                  </div>
                  <h3 className="md:col-span-4 font-display text-2xl md:text-3xl text-navy leading-tight">
                    {etape.title}
                  </h3>
                  <p className="md:col-span-7 text-ink/75 leading-relaxed max-w-[62ch]">
                    {etape.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Le menu du mois ───────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-navy-mid">
                Menu du mois
              </p>
              <h2
                className="mt-5 font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                {NB_PLATS} plats pour composer{' '}
                <span className="font-display italic text-orange-deep">
                  le vôtre.
                </span>
              </h2>
              <p className="mt-7 leading-relaxed text-ink/80 max-w-[62ch]">
                Chaque mois, une nouvelle carte : poissons, viandes,
                végétarien, desserts. Vous y piochez ce qui vous plaît — et si
                un plat vous manque, proposez-le, on en discute.
              </p>
              <Link
                href="/menu"
                className="group mt-9 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-navy text-cream hover:bg-navy-mid text-sm font-medium transition-colors duration-300 ease-expo"
              >
                Voir le menu de {MENU.month.toLowerCase()}
                <ArrowUpRight className="size-4 transition-transform duration-300 ease-expo group-hover:rotate-45" />
              </Link>
            </div>
          </Reveal>

          <Reveal axis="x" delay={0.1} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {MENU.familles.slice(0, 2).map((famille) => (
                <div key={famille.slug}>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-deep">
                    <Image
                      src={famille.image}
                      alt={famille.name}
                      fill
                      sizes="(min-width: 1024px) 22vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 font-display text-lg text-navy leading-tight">
                    {famille.name}
                  </p>
                  <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-navy-mid">
                    {famille.summary}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Tarifs et fiscalité ───────────────────────────────────────── */}
      <FormulesSection className="bg-cream-deep" />
      <AvanceImmediateSection />

      {/* ── Réserver ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy-mid text-cream py-24 md:py-32 overflow-hidden">
        <Image
          src="/assets/gallerie/img3.jpeg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-mid/75" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

        <div className="relative container-wide max-w-3xl mx-auto text-center">
          <h2
            className="font-display text-cream leading-[0.95] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Votre créneau vous attend,{' '}
            <span className="font-display italic text-orange-soft">
              votre semaine aussi.
            </span>
          </h2>
          <p className="mt-8 text-cream/80 max-w-xl mx-auto leading-relaxed">
            Détaillez-nous vos envies, vos contraintes et le nombre de
            gourmands à table. On revient vers vous avec un menu et une date.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BATCH_COOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream text-navy font-medium text-sm hover:bg-orange hover:text-cream transition-colors duration-300 ease-expo"
            >
              Réserver ma session
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={whatsappLink(
                "Bonjour Lab's Food, je m'intéresse au batch cooking — ",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-whatsapp text-white font-medium text-sm hover:bg-whatsapp-deep transition-colors duration-300 ease-expo"
            >
              <WhatsAppIcon className="size-4" />
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
