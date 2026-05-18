import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check, Clock, Leaf, MapPin, UtensilsCrossed } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { BATCH_COOKING_URL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Batch cooking à domicile',
  description:
    "Une cheffe vient préparer une semaine entière de repas variés et équilibrés chez vous, en 2h minimum. Disponible sur la Côte d'Azur.",
}

const FEATURES = [
  { icon: Clock, label: '2h minimum d’intervention' },
  { icon: UtensilsCrossed, label: 'Une semaine de repas' },
  { icon: Leaf, label: 'Ingrédients frais & locaux' },
  { icon: MapPin, label: "Côte d'Azur" },
] as const

export default function BatchCookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Service · Batch cooking"
        title={
          <>
            Une semaine de repas,{' '}
            <span className="italic gradient-text-terra">préparée chez vous</span>.
          </>
        }
        lede="Une cheffe professionnelle vient cuisiner directement à votre domicile. En 2 heures minimum, votre semaine est prête."
      />

      <section className="bg-cream">
        <div className="container-wide -mt-16 md:-mt-20 relative z-10">
          <div className="rounded-3xl bg-cream-soft border border-navy/10 shadow-2xl p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 grid grid-cols-2 gap-5">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-sm">
                  <f.icon className="size-4 text-terra shrink-0" />
                  <span className="text-ink/80">{f.label}</span>
                </div>
              ))}
            </div>
            <div>
              <Button asChild size="lg" className="w-full">
                <a href={BATCH_COOKING_URL} target="_blank" rel="noreferrer">
                  Découvrir & réserver
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <p className="text-[0.7rem] text-ink/55 mt-2 text-center">
                Site dédié Lab&apos;s Food — Batch
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="eyebrow">Pourquoi le batch ?</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Bien manger toute la semaine,{' '}
              <span className="italic gradient-text-terra">sans la charge mentale</span>.
            </h2>
            <p className="mt-6 lede text-pretty">
              Le batch cooking, c&apos;est cuisiner une fois pour toute la semaine — sauf
              que cette fois, c&apos;est nous qui le faisons. Chez vous, avec votre matériel,
              et adapté à ce que vous aimez.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Plannings de menus variés et équilibrés',
                'Adapté à vos contraintes alimentaires',
                'Conservation et conseils de réchauffage inclus',
                'Idéal pour familles, couples actifs, sportifs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 size-5 rounded-full bg-terra/15 text-terra grid place-items-center shrink-0">
                    <Check className="size-3" />
                  </span>
                  <span className="text-ink/85">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-10">
              <a href={BATCH_COOKING_URL} target="_blank" rel="noreferrer">
                Voir l’offre complète
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative h-[480px] md:h-[600px]">
            <div className="absolute top-0 right-0 w-[70%] h-[60%] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/assets/photo-9.jpeg" alt="" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-xl border-4 border-cream">
              <Image src="/assets/photo-11.jpeg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-teal text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="container-wide relative text-center max-w-2xl mx-auto">
          <h2 className="display-md text-cream text-balance">
            Le site complet du{' '}
            <span className="italic gradient-text-terra">batch cooking</span> Lab&apos;s Food
          </h2>
          <p className="mt-6 text-cream/75">
            Toutes les formules, la prise de rendez-vous et le détail des menus se trouvent
            sur notre site dédié au service batch cooking.
          </p>
          <Button asChild size="lg" className="mt-10">
            <a href={BATCH_COOKING_URL} target="_blank" rel="noreferrer">
              Accéder au site batch cooking
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
