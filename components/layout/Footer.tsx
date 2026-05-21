import Link from 'next/link'
import Image from 'next/image'
import {
  Instagram,
  Music2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react'
import { SITE } from '@/lib/content'
import { WHATSAPP_NUMBER_DISPLAY, whatsappLink } from '@/lib/utils'

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
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/labs_food' },
  { Icon: Music2, label: 'TikTok', href: 'https://www.tiktok.com/@labs_food' },
]

export function Footer() {
  return (
    <footer className="relative">
      {/* <section className="relative px-4 -mb-24 z-10">
        <div className="container-wide">
          <div className="relative bg-terra rounded-3xl overflow-hidden p-10 lg:p-14 text-cream shadow-[0_30px_70px_-30px_rgba(217,105,65,0.6)]">
            <div className="absolute right-8 bottom-8 grid grid-cols-6 gap-2 opacity-25 pointer-events-none">
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-cream" />
              ))}
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-6 -right-6 font-display font-bold text-cream/[0.08] leading-none select-none pointer-events-none"
              style={{ fontSize: 'clamp(8rem, 18vw, 18rem)' }}
            >
              Bon&nbsp;app.
            </span>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-cream/70 text-xs font-mono uppercase tracking-[0.2em] mb-4">
                  Et maintenant ?
                </p>
                <h3
                  className="font-display font-bold text-cream leading-[0.95]"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Embarquez avec nous,
                  <br />
                  <span className="italic font-medium">bon voyage gustatif.</span>
                </h3>
              </div>
              <div className="lg:justify-self-end">
                <a
                  href={whatsappLink("Bonjour Lab's Food, ")}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 bg-cream text-navy rounded-full pl-8 pr-3 py-3 font-semibold uppercase text-sm tracking-[0.08em] hover:bg-navy hover:text-cream transition-colors duration-300"
                >
                  Discuter sur WhatsApp
                  <span className="w-11 h-11 rounded-full bg-whatsapp text-white flex items-center justify-center group-hover:bg-cream group-hover:text-whatsapp-deep transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── FOOTER PRINCIPAL ────────────────────────────────────────── */}
      <div className="bg-navy text-cream/85 pt-40 pb-10 relative overflow-hidden">
        {/* Motif de points décoratif haut-gauche */}
        <div className="absolute top-44 left-8 grid grid-cols-6 gap-2 opacity-15 pointer-events-none hidden md:grid">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-terra" />
          ))}
        </div>

        <div className="container-wide relative">
          {/* Top : déclaration de marque + newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-cream/10">
            {/* Déclaration de marque */}
            <div className="lg:col-span-7">
              <Link href="/" className="inline-flex items-center gap-3 mb-7">
                <span className="size-11 rounded-full bg-cream grid place-items-center">
                  <Image src="/logo.png" alt="" width={28} height={28} />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-2xl text-cream tracking-tight">
                    Lab&apos;s Food
                  </span>
                  <span className="font-display italic text-xs text-terra mt-1">
                    maison culinaire
                  </span>
                </span>
              </Link>
              <p
                className="font-display font-bold text-cream leading-[0.95]"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  letterSpacing: '-0.025em',
                }}
              >
                La cuisine,
                <br />
                <span className="text-terra italic font-medium">
                  comme un voyage.
                </span>
              </p>
              <p className="mt-6 text-cream/65 max-w-md text-base leading-relaxed">
                Fondée par Ivy après 21 pays explorés — Lab&apos;s Food vous fait
                voyager culinairement parlant, sans tracasserie de visa.
              </p>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-cream/10">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-terra mb-4">
                Newsletter du labo
              </p>
              <h4 className="font-display text-2xl text-cream font-bold mb-3 leading-tight">
                Recevez les nouveautés en avant-première
              </h4>
              <p className="text-sm text-cream/65 mb-6">
                Sorties produits, ateliers et coulisses — directement dans votre
                boîte.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="email"
                  required
                  placeholder="votre@email.fr"
                  className="flex-1 px-5 py-3.5 bg-cream/[0.06] border border-cream/15 rounded-full text-cream placeholder:text-cream/35 text-sm outline-none focus:border-terra focus:bg-cream/[0.1] transition-all"
                />
                <button
                  type="submit"
                  className="bg-terra hover:bg-terra-deep text-cream font-semibold uppercase text-xs tracking-[0.08em] rounded-full px-6 py-3.5 transition-all hover:shadow-[0_10px_24px_-8px_rgba(217,105,65,0.6)] flex items-center justify-center gap-2"
                >
                  S&apos;inscrire
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              <p className="text-xs text-cream/45">
                Pas de spam. Désabonnement en 1 clic.
              </p>
            </div>
          </div>

          {/* Middle : contact + 3 colonnes de liens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-cream/10">
            {/* Contact */}
            <div className="lg:col-span-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-terra mb-5">
                Nous contacter
              </p>
              <ul className="space-y-4">
                <li>
                  <a
                    href={whatsappLink("Bonjour Lab's Food, ")}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-cream/85 hover:text-cream transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center group-hover:bg-whatsapp group-hover:border-whatsapp group-hover:text-white transition-colors shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </span>
                    <span className="text-sm">{WHATSAPP_NUMBER_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group flex items-center gap-3 text-cream/85 hover:text-cream transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center group-hover:bg-terra group-hover:border-terra transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="text-sm">{SITE.email}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-cream/85">
                  <span className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="text-sm">7j/7 · 24h/24 sur WhatsApp</span>
                </li>
                <li className="flex items-center gap-3 text-cream/85">
                  <span className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="text-sm">Côte d&apos;Azur · Europe (La Poste)</span>
                </li>
              </ul>

              {/* Réseaux */}
              <div className="mt-8">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-cream/45 mb-4">
                  Suivez-nous
                </p>
                <div className="flex items-center gap-3">
                  {SOCIAL.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="group w-11 h-11 rounded-full bg-cream/[0.06] border border-cream/15 flex items-center justify-center text-cream/85 hover:bg-terra hover:border-terra hover:text-cream transition-all duration-300 hover:-translate-y-1"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Maison */}
            <FooterColumn title="Maison">
              {LINKS.maison.map((l) => (
                <FooterLink key={l.href + l.label} {...l} />
              ))}
            </FooterColumn>

            {/* Services */}
            <FooterColumn title="Services">
              {LINKS.services.map((l) => (
                <FooterLink key={l.href + l.label} {...l} />
              ))}
            </FooterColumn>

            {/* Produits */}
            <FooterColumn title="Produits">
              {LINKS.produits.map((l) => (
                <FooterLink key={l.href + l.label} {...l} />
              ))}
            </FooterColumn>
          </div>

          {/* Wordmark géant */}
          <div className="py-12 text-center select-none pointer-events-none">
            <h2
              className="font-display font-bold leading-none tracking-[-0.04em] bg-clip-text text-transparent"
              style={{
                fontSize: 'clamp(4rem, 16vw, 14rem)',
                backgroundImage:
                  'linear-gradient(180deg, rgba(247,241,232,0.18) 0%, rgba(247,241,232,0.04) 100%)',
              }}
            >
              Lab&apos;s Food
            </h2>
          </div>

          {/* Bas — copyright + légal */}
          <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-cream/55">
              <p>© {new Date().getFullYear()} Lab&apos;s Food</p>
              <span className="hidden md:inline opacity-30">·</span>
              <p className="flex items-center gap-2">
                <span className="inline-block size-1.5 rounded-full bg-terra" />
                Maison certifiée HACCP
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-cream/55">
              {LINKS.legal.map((l, i) => (
                <span key={l.label} className="flex items-center gap-3">
                  <Link href={l.href} className="hover:text-cream transition-colors">
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
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="lg:col-span-2 lg:col-start-auto">
      <p className="text-cream font-display text-base font-bold mb-5">{title}</p>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-cream/65 hover:text-terra transition-colors"
      >
        <span>{label}</span>
        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>
  )
}
