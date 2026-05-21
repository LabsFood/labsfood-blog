import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  ChefHat,
  CalendarCheck,
  Building2,
  MessageCircle,
  Utensils,
  Users,
  ClipboardList,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { whatsappLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Assistance culinaire · Lab\'s Food',
  description:
    "Lab's Food intervient en renfort dans votre cuisine pour vos grands dîners, fêtes de famille ou événements professionnels. Rôle défini selon vos besoins.",
}

const USECASES = [
  {
    icon: Users,
    title: 'Grands dîners & fêtes de famille',
    body: "Vous organisez un repas pour 10, 20, 30 personnes ou plus ? On vient en cuisine pour que vous puissiez profiter de vos invités.",
  },
  {
    icon: Building2,
    title: 'Traiteurs & chefs en renfort',
    body: "Volume trop important, équipe incomplète, événement de dernière minute ? Lab's Food assure le renfort avec sérieux et efficacité.",
  },
  {
    icon: CalendarCheck,
    title: 'Événements & réceptions',
    body: "Anniversaires, mariages, séminaires d'entreprise — on s'adapte à votre format, votre cuisine et votre organisation.",
  },
  {
    icon: Utensils,
    title: 'Restaurants & cuisine collective',
    body: "Besoin d'un profil polyvalent en cuisine sur une ou plusieurs journées ? On intervient ponctuellement selon les besoins.",
  },
] as const

const MISSIONS = [
  'Aide à la préparation et au découpage',
  'Cuisson et dressage des plats',
  'Coordination en cuisine pendant le service',
  'Gestion des timings et de la chaîne du froid',
  'Rangement et nettoyage en fin de service',
  'Rôle défini conjointement avant la mission',
] as const

const STEPS = [
  {
    n: '01',
    title: 'Vous nous contactez',
    body: 'Décrivez votre événement, le nombre de personnes et le type de soutien souhaité sur WhatsApp.',
  },
  {
    n: '02',
    title: 'On cale ensemble les détails',
    body: 'On définit le rôle, le volume, les horaires. Puis on vous envoie une proposition adaptée.',
  },
  {
    n: '03',
    title: 'On intervient le jour J',
    body: "La cheffe arrive prête à travailler. Vous vous occupez de vos invités ou de votre salle, on s'occupe de la cuisine.",
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
            <span className="italic gradient-text-terra">professionnel</span>
            <br />
            dans votre cuisine.
          </>
        }
        lede="Que vous organisiez un grand dîner, une fête de famille ou que vous ayez besoin de renfort dans votre équipe cuisine — Lab's Food intervient. Le rôle s'adapte entièrement à votre besoin."
        image="/assets/photo-5.jpeg"
      />

      {/* ── Bandeau d'accroche ── */}
      <section className="bg-teal text-cream">
        <div className="container-wide py-12 grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-cream/10 border border-cream/20 grid place-items-center shrink-0">
              <ChefHat className="size-5 text-terra-soft" />
            </div>
            <div>
              <div className="font-display text-lg text-cream leading-tight">Rôle sur-mesure</div>
              <div className="text-sm text-cream/65 mt-0.5">Défini selon votre besoin</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-cream/10 border border-cream/20 grid place-items-center shrink-0">
              <Building2 className="size-5 text-terra-soft" />
            </div>
            <div>
              <div className="font-display text-lg text-cream leading-tight">Particuliers & pros</div>
              <div className="text-sm text-cream/65 mt-0.5">Traiteurs, restaurants, événements</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-cream/10 border border-cream/20 grid place-items-center shrink-0">
              <MessageCircle className="size-5 text-terra-soft" />
            </div>
            <div>
              <div className="font-display text-lg text-cream leading-tight">Devis rapide</div>
              <div className="text-sm text-cream/65 mt-0.5">Réponse 7j/7 sur WhatsApp</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pour qui ? ── */}
      <section className="section bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow">Pour qui ?</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Dès que la cuisine{' '}
              <span className="italic gradient-text-terra">dépasse vos bras</span>.
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
      </section>

      {/* ── Ce qu'on fait ── */}
      <section className="section bg-cream-soft">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-navy">
              <Image
                src="/assets/photo-7.jpeg"
                alt="Assistance culinaire Lab's Food"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            {/* Badge teal flottant */}
            <div className="absolute -bottom-6 -right-4 bg-teal text-cream rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/65">
                Certifiée
              </div>
              <div className="font-display text-2xl mt-0.5">HACCP</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">Nos missions</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              On s&apos;adapte à votre cuisine,{' '}
              <span className="italic gradient-text-terra">pas l&apos;inverse</span>.
            </h2>
            <p className="mt-6 text-ink/75 leading-relaxed max-w-xl">
              Chaque mission est cadrée en amont : rôle, horaires, volume, spécificités.
              Lab&apos;s Food intervient avec le matériel nécessaire et une hygiène irréprochable
              — maison certifiée HACCP.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {MISSIONS.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="mt-1 size-5 rounded-full bg-teal/15 text-teal grid place-items-center shrink-0">
                    <Check className="size-3" />
                  </span>
                  <span className="text-ink/80 text-sm leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Comment ça marche ── */}
      <section className="section bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow">Comment ça marche</span>
            <h2 className="display-md text-navy mt-4 text-balance">
              Simple comme un{' '}
              <span className="italic gradient-text-terra">message WhatsApp</span>.
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

      {/* ── CTA WhatsApp ── */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.04]" />
        <div className="container-wide relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="eyebrow text-terra-soft">Demander un devis</span>
            <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 text-balance leading-[0.95]">
              Décrivez-nous votre événement,
              <br />
              <span className="italic text-terra-soft">on revient vite.</span>
            </h2>
            <p className="mt-6 text-cream/70 max-w-xl leading-relaxed">
              Dîner de 30 couverts, renfort traiteur, événement d&apos;entreprise — chaque
              situation est différente. Contactez-nous sur WhatsApp, on définit tout ensemble.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-cream/55">
              <ClipboardList className="size-4 text-terra-soft" />
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
                <MessageCircle className="size-4" />
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
      </section>
    </>
  )
}
