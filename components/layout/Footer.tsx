import Link from 'next/link'
import Image from 'next/image'
import {
  Instagram,
  Linkedin,
  Music2,
  Mail,
  MessageCircle,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react'
import { SITE } from '@/lib/content'
import {
  WHATSAPP_NUMBER_DISPLAY,
  whatsappLink,
  SOCIAL_LINKS,
} from '@/lib/utils'

const LINKS = {
  maison: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Notre histoire', href: '/a-propos#histoire' },
    { label: 'La cheffe Ivy', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Atelier culinaire', href: '/services/atelier-culinaire' },
    { label: 'Batch cooking', href: '/services/batch-cooking' },
    { label: 'Assistance culinaire', href: '/services/assistance-culinaire' },
    { label: 'Tous les services', href: '/services' },
  ],
  produits: [
    { label: 'Kossam', href: '/produits/kossam' },
    { label: 'Tous les produits', href: '/produits' },
    { label: 'Bientôt — Bissap', href: '/produits' },
    { label: 'Bientôt — Luxury Kossam', href: '/produits' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/contact' },
    { label: 'CGV', href: '/contact' },
    { label: 'Confidentialité', href: '/contact' },
    { label: 'Cookies', href: '/contact' },
  ],
}

const SOCIAL = [
  { Icon: Instagram, label: 'Instagram', href: SOCIAL_LINKS.instagram },
  { Icon: Music2, label: 'TikTok', href: SOCIAL_LINKS.tiktok },
  { Icon: Linkedin, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
]

export function Footer() {
  return (
    <footer className="relative bg-navy text-cream/85 overflow-hidden">
      {/* ─── Wordmark XXL en arrière-plan (décor) ─────────────────────── */}
      <div
        aria-hidden
        className="absolute -bottom-8 inset-x-0 pointer-events-none select-none text-center"
      >
        <span
          className="font-display font-bold leading-none tracking-[-0.04em] block"
          style={{
            fontSize: 'clamp(5rem, 22vw, 22rem)',
            background:
              'linear-gradient(180deg, rgba(247,241,232,0.12) 0%, rgba(247,241,232,0.02) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Lab&apos;s Food
        </span>
      </div>

      {/* ─── Contenu principal ────────────────────────────────────────── */}
      <div className="relative container-wide pt-24 md:pt-28 pb-44 md:pb-56">
        {/* ── Bloc déclaration + newsletter ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
          {/* Déclaration */}
          <div className="lg:col-span-7">
            <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
              <span className="size-12 rounded-full bg-cream grid place-items-center transition-transform group-hover:rotate-[8deg]">
                <Image
                  src="/logoLab.png"
                  alt=""
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl text-cream tracking-tight">
                  Lab&apos;s Food
                </span>
                <span className="font-display italic text-xs text-navy-mid mt-1">
                  maison culinaire
                </span>
              </span>
            </Link>

            <h2
              className="font-display font-bold text-cream leading-[0.95] text-balance"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
                letterSpacing: '-0.025em',
              }}
            >
              La cuisine,
              <br />
              <em className="not-italic">
                <span className="font-display italic gradient-text-navy-mid">
                  comme un voyage.
                </span>
              </em>
            </h2>
            <p className="mt-8 text-cream/65 max-w-md text-base leading-relaxed">
              Fondée par Ivy après 21 pays explorés — Lab&apos;s Food vous fait
              voyager culinairement parlant, sans tracasserie de visa.
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-cream/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-navy-mid mb-4">
              — Newsletter du labo
            </p>
            <h4 className="font-display text-2xl md:text-3xl text-cream mb-4 leading-tight">
              Recevez les nouveautés en avant-première
            </h4>
            <p className="text-sm text-cream/65 mb-6 leading-relaxed">
              Sorties produits, ateliers, coulisses — directement dans votre
              boîte.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="votre@email.fr"
                className="flex-1 px-5 py-3.5 bg-cream/[0.06] border border-cream/15 rounded-full text-cream placeholder:text-cream/35 text-sm outline-none focus:border-cream/40 focus:bg-cream/[0.1] transition-all"
              />
              <button
                type="submit"
                className="bg-cream hover:bg-navy-mid hover:text-cream text-navy font-medium text-xs uppercase tracking-[0.1em] rounded-full px-6 py-3.5 transition-all flex items-center justify-center gap-2 group"
              >
                S&apos;inscrire
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
            <p className="text-xs text-cream/45 mt-3">
              Pas de spam. Désabonnement en 1 clic.
            </p>
          </div>
        </div>

        {/* ── Contact + liens ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-cream/10">
          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-navy-mid mb-6">
              — Nous contacter
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappLink("Bonjour Lab's Food, ")}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-cream/85 hover:text-cream transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center group-hover:bg-whatsapp group-hover:border-whatsapp group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-3 text-cream/85 hover:text-cream transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center group-hover:bg-cream group-hover:text-navy transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="text-sm">{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-cream/85">
                <span className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="text-sm">
                  Côte d&apos;Azur · Île-de-France · Europe
                </span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-10">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-cream/45 mb-4">
                — Suivez-nous
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group w-11 h-11 rounded-full bg-cream/[0.06] border border-cream/15 flex items-center justify-center text-cream/85 hover:bg-cream hover:text-navy hover:border-cream transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Colonnes liens */}
          <FooterColumn title="Maison" className="lg:col-span-3">
            {LINKS.maison.map((l) => (
              <FooterLink key={l.href + l.label} {...l} />
            ))}
          </FooterColumn>

          <FooterColumn title="Services" className="lg:col-span-3">
            {LINKS.services.map((l) => (
              <FooterLink key={l.href + l.label} {...l} />
            ))}
          </FooterColumn>

          <FooterColumn title="Produits" className="lg:col-span-2">
            {LINKS.produits.map((l) => (
              <FooterLink key={l.href + l.label} {...l} />
            ))}
          </FooterColumn>
        </div>

        {/* ── Bas : copyright + légal ── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-cream/55">
            <p>© {new Date().getFullYear()} Lab&apos;s Food</p>
            <span className="hidden md:inline opacity-30">·</span>
            <p className="flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-navy-mid" />
              Maison certifiée HACCP
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-cream/55">
            {LINKS.legal.map((l, i) => (
              <span key={l.label} className="flex items-center gap-3">
                <Link
                  href={l.href}
                  className="hover:text-cream transition-colors"
                >
                  {l.label}
                </Link>
                {i < LINKS.legal.length - 1 && (
                  <span className="opacity-30">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────────────── */

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-navy-mid mb-6">
        — {title}
      </p>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-cream/65 hover:text-cream transition-colors"
      >
        <span>{label}</span>
        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>
  )
}
