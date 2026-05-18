import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check, Gift, MapPin, Users, Clock, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Atelier culinaire à domicile',
  description:
    "Apprenez à cuisiner une spécialité du monde lors d'un atelier privé chez vous. Forfait 80€ jusqu'à 4 personnes.",
}

const STEPS = [
  {
    n: '01',
    title: 'Vous choisissez la cuisine',
    body: 'Cuisine du monde, recette exclusive ou demande sur-mesure : on cale le menu ensemble.',
  },
  {
    n: '02',
    title: 'On vient chez vous',
    body: "La cheffe arrive avec son matériel et vous guide pas à pas, dans votre cuisine.",
  },
  {
    n: '03',
    title: 'Vous repartez équipé',
    body: 'Fiche recette professionnelle remise à chacun + un cadeau surprise selon disponibilité.',
  },
] as const

const FEATURES = [
  { icon: Users, label: 'Jusqu’à 10 personnes' },
  { icon: Clock, label: '~2h d’atelier' },
  { icon: Gift, label: 'Cadeau surprise' },
  { icon: MapPin, label: 'À domicile' },
] as const

export default function AtelierPage() {
  return (
    <>
      <PageHero
        eyebrow="Service · Atelier culinaire"
        title={
          <>
            Une cuisine du monde,{' '}
            <span className="italic gradient-text-terra">apprise pas à pas</span>{' '}
            chez vous.
          </>
        }
        lede="Passionnés de saveurs, amis ou collègues : un atelier interactif et intime pour apprendre une spécialité choisie, animé par une cheffe à domicile."
      />

      {/* Pricing card flottante */}
      <section className="bg-cream">
        <div className="container-wide -mt-16 md:-mt-20 relative z-10">
          <div className="rounded-3xl bg-cream-soft border border-navy/10 shadow-2xl p-8 md:p-10 grid md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra">
                Forfait privé
              </div>
              <div className="font-display text-5xl text-navy mt-2">80€</div>
              <div className="text-xs text-ink/60 mt-1">jusqu’à 4 personnes</div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-sm">
                  <f.icon className="size-4 text-terra shrink-0" />
                  <span className="text-ink/80">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="md:col-span-1">
              <Button asChild size="lg" className="w-full">
                <a
                  href={whatsappLink(
                    "Bonjour Lab's Food, je souhaite réserver un atelier culinaire.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Réserver
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <p className="text-[0.7rem] text-ink/55 mt-2 text-center">
                Via WhatsApp · réponse 7j/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="section bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow">Comment ça marche</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Trois étapes, et c&apos;est l&apos;embarquement{' '}
              <span className="italic gradient-text-terra">gustatif</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl bg-cream-soft border border-navy/5 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-terra">
                  Étape {s.n}
                </div>
                <h3 className="font-display text-2xl text-navy mt-4">{s.title}</h3>
                <p className="mt-3 text-ink/75 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs détaillés */}
      <section className="section bg-teal text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow text-terra-soft">Tarifs</span>
            <h2 className="display-md text-cream mt-4 text-balance">
              Simple, transparent,{' '}
              <span className="italic gradient-text-terra">tout compris</span>.
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed">
              Hors coût des ingrédients. Option : on s&apos;occupe des courses pour
              vous (+20€) pour vraiment ne penser à rien.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              { label: 'Atelier privé · 1 à 4 personnes', price: '80€', note: 'forfait' },
              { label: '+1 personne (au-delà de 4)', price: '+20€', note: 'par personne' },
              { label: 'Groupe max', price: '10 pers.', note: 'capacité maximale' },
              { label: 'Gestion des courses', price: '+20€', note: 'optionnel' },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-6 px-6 py-5 rounded-2xl bg-cream/5 border border-cream/10"
              >
                <div>
                  <div className="font-display text-lg text-cream">{row.label}</div>
                  <div className="text-xs text-cream/55 mt-0.5">{row.note}</div>
                </div>
                <div className="font-display text-2xl text-terra-soft">{row.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclus dans l'atelier */}
      <section className="section bg-cream">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-navy">
              <Image
                src="/assets/info-atelier.jpeg"
                alt="Atelier culinaire Lab's Food"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">Inclus dans l’atelier</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Tout pour que vous repartiez{' '}
              <span className="italic gradient-text-terra">avec votre recette</span>.
            </h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                'Apprentissage pas à pas par une cheffe passionnée',
                'Fiche recette professionnelle pour chaque participant',
                'Cadeau surprise selon disponibilité',
                'Choix d’une cuisine du monde ou recette exclusive',
                'Adapté aux passionnés, amis et collègues',
                'Expérience interactive et conviviale',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 size-5 rounded-full bg-terra/15 text-terra grid place-items-center shrink-0">
                    <Check className="size-3" />
                  </span>
                  <span className="text-ink/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA devenir chef */}
      <section className="section bg-cream-soft">
        <div className="container-wide">
          <div className="rounded-3xl bg-navy text-cream relative overflow-hidden p-10 md:p-16 grid lg:grid-cols-12 gap-8 items-center">
            <div className="absolute -top-10 -right-10 size-72 rounded-full bg-terra/20 blur-3xl" />
            <div className="lg:col-span-8 relative">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="size-4 text-terra-soft" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-terra-soft">
                  Vous êtes passionné de cuisine ?
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-cream text-balance">
                Rejoignez nos chefs partenaires
              </h2>
              <p className="mt-4 text-cream/75 max-w-xl">
                Si l&apos;idée de donner des cours vous anime, remplissez le formulaire
                d&apos;inscription pour devenir l&apos;un de nos chefs partenaires.
                Gratuit pour le moment.
              </p>
            </div>
            <div className="lg:col-span-4 relative">
              <Button asChild size="lg" className="w-full">
                <Link href="/devenir-chef">
                  Devenir chef partenaire
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
