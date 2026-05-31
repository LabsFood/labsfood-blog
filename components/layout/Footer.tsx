import Link from 'next/link'
import Image from 'next/image'
import {
  Instagram,
  Linkedin,
  Music2,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
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
    { label: 'Mentions légales', href: '/cgu' },
    { label: 'CGU', href: '/cgu' },
    { label: 'Confidentialité', href: '/confidentialite' },
    { label: 'Cookies', href: '/confidentialite' },
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
        {/* ── Bloc déclaration (sans newsletter, retiré sur demande client) ── */}
        <div className="pb-16 border-b border-cream/10 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-4 mb-10 group">
            <span className=" transition-transform group-hover:rotate-[6deg]">
              <Image
                src="/whiteLogo.png"
                alt=""
                width={200}
                height={200}
                className="object-contain"
              />
            </span>
          </Link>

          <h2
            className="font-display font-bold text-cream leading-[0.95] text-balance"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              letterSpacing: '-0.025em',
            }}
          >
            We create{' '}
            <em className="not-italic">
              <span className="font-display italic text-navy-official">
                what you love!
              </span>
            </em>
          </h2>
          <p className="mt-8 text-cream/65 max-w-xl text-base leading-relaxed">
            Lab&apos;s Food, c&apos;est une plateforme dédiée à votre bien-être
            gourmand. Entrer dans votre cuisine pour vous y faire respirer.
          </p>
        </div>

        {/* ── Contact + liens ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-cream/10">
          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-mint mb-6">
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
                    <WhatsAppIcon className="w-4 h-4" />
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
                  200 Rue de la Croix Nivert, 75015 Paris
                </span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-10">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-mint mb-4">
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
          ` {/* <FooterColumn title="Lab's Food" className="lg:col-span-3">
            {LINKS.maison.map((l) => (
              <FooterLink key={l.href + l.label} {...l} />
            ))}
          </FooterColumn>` */}
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
      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-mint mb-6">
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
