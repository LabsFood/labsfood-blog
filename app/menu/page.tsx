import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { MENU, NB_PLATS, TOUTES_FAMILLES, type FamilleMenu } from '@/lib/menu-data'
import { ZONE } from '@/lib/batch-cooking'
import { BATCH_COOKING_URL, whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: `Menu de ${MENU.month.toLowerCase()} ${MENU.year}`,
  description: `Le menu du mois de ${MENU.month.toLowerCase()} de Lab's Food : ${NB_PLATS} plats — poissons, viandes, végétarien et desserts — à composer librement pour votre semaine de batch cooking.`,
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Le menu de{' '}
            <span className="font-display italic text-orange">
              {MENU.month.toLowerCase()}.
            </span>
          </>
        }
        lede={MENU.intro}
        image="/assets/table.jpeg"
        imagePosition="center 55%"
        size="lg"
      />

      {/* ── Le menu ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <div className="flex flex-wrap items-baseline justify-between gap-6 pb-10 border-b border-navy/15">
            <h2 className="font-display text-3xl md:text-4xl text-navy">
              {MENU.month} {MENU.year}
            </h2>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 tabular-nums">
              {NB_PLATS} plats · {TOUTES_FAMILLES.length} familles
            </p>
          </div>

          <div className="divide-y divide-navy/10">
            {TOUTES_FAMILLES.map((famille, i) => (
              <FamilleBloc key={famille.slug} famille={famille} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment on s'en sert ──────────────────────────────────────── */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div>
              <h2
                className="font-display text-navy leading-[0.98] tracking-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                Ce menu est un point de départ,{' '}
                <span className="font-display italic text-orange-deep">
                  pas une contrainte.
                </span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-ink/80 max-w-[62ch]">
                Vous piochez les plats qui vous font envie, vous écartez ceux
                qui ne vous parlent pas, et vous pouvez tout à fait proposer vos
                propres recettes. On en discute avec plaisir — un ajustement
                tarifaire est possible selon la recette.
              </p>
              <p className="mt-5 leading-relaxed text-ink/70 max-w-[62ch]">
                Vos allergies, vos régimes et les goûts de chacun à table sont
                pris en compte avant la session. Le menu du mois est renouvelé
                à chaque nouvelle carte de saison.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={BATCH_COOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-navy text-cream font-medium text-sm hover:bg-navy-mid transition-colors duration-300 ease-expo"
                >
                  Composer mon menu
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={whatsappLink(
                    `Bonjour Lab's Food, j'ai vu le menu de ${MENU.month.toLowerCase()} et j'aimerais en discuter — `,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-navy/20 text-navy font-medium text-sm hover:bg-navy hover:text-cream hover:border-navy transition-colors duration-300 ease-expo"
                >
                  <WhatsAppIcon className="size-4" />
                  En discuter sur WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal axis="x" delay={0.1} className="lg:col-span-6">
            <div className="rounded-3xl bg-navy text-cream p-8 md:p-10">
              <h3 className="font-display text-2xl text-cream">
                Où nous intervenons
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Le batch cooking à domicile est disponible sur toute la{' '}
                {ZONE.label}.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
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

              <div className="mt-10 pt-8 border-t border-cream/15">
                <p className="font-display italic text-xl text-cream/85">
                  Une question sur un plat, un allergène, un régime ?
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-orange hover:text-cream transition-colors link-underline"
                >
                  Écrivez-nous
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

function FamilleBloc({
  famille,
  index,
}: {
  famille: FamilleMenu
  index: number
}) {
  return (
    <Reveal className="py-14 md:py-16">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Visuel + nom */}
        <div className="lg:col-span-4">
          <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-cream-deep">
            <Image
              src={famille.image}
              alt={famille.name}
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
          <h3 className="mt-6 font-display text-3xl md:text-4xl text-navy leading-tight">
            {famille.name}
          </h3>
          <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-navy-mid">
            {famille.summary}
          </p>
        </div>

        {/* Les plats */}
        <ul className="lg:col-span-8 lg:pt-2">
          {famille.plats.map((plat) => (
            <li
              key={plat.name}
              className="grid grid-cols-[auto_1fr] items-baseline gap-4 py-5 border-b border-navy/10 last:border-b-0"
            >
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-orange translate-y-[-0.2em]"
              />
              <div>
                <p className="font-display text-xl md:text-2xl text-navy leading-snug">
                  {plat.name}
                  {plat.origin && (
                    <span className="ml-3 align-middle font-mono text-[0.6rem] uppercase tracking-[0.18em] text-navy-mid">
                      {plat.origin}
                    </span>
                  )}
                </p>
                {plat.detail && (
                  <p className="mt-1.5 text-sm text-ink/65">{plat.detail}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
