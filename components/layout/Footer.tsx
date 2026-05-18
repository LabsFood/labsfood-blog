import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Music2, Mail, ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/content'
import { WHATSAPP_NUMBER_DISPLAY, whatsappLink } from '@/lib/utils'

const EXPLORE = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Atelier culinaire', href: '/services/atelier-culinaire' },
  { label: 'Batch cooking', href: '/services/batch-cooking' },
  { label: 'Produits', href: '/produits' },
  { label: 'Kossam', href: '/produits/kossam' },
  { label: 'Devenir chef', href: '/devenir-chef' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-cream text-navy border-t border-navy/10">
      <div className="container-wide py-16 md:py-20">
        {/* ─── Bloc principal ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Identité */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="size-10 rounded-full bg-navy grid place-items-center">
                <Image src="/logo.png" alt="" width={26} height={26} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-tight">
                  Lab&apos;s Food
                </span>
                <span className="font-display italic text-xs text-terra mt-0.5">
                  maison culinaire
                </span>
              </span>
            </Link>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-ink/70">
              {SITE.description}
            </p>

            {/* Réseaux */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/labs_food"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="size-10 rounded-full border border-navy/15 grid place-items-center text-navy hover:bg-navy hover:text-cream hover:border-navy transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@labs_food"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="size-10 rounded-full border border-navy/15 grid place-items-center text-navy hover:bg-navy hover:text-cream hover:border-navy transition-colors"
              >
                <Music2 className="size-4" />
              </a>
            </div>
          </div>

          {/* Explorer */}
          <nav className="lg:col-span-3" aria-label="Navigation pied de page">
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra mb-6">
              Explorer
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-4 text-sm">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink/75 hover:text-terra transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra mb-6">
              Nous contacter
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={whatsappLink("Bonjour Lab's Food, ")}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-ink/85 hover:text-whatsapp-deep transition-colors"
                >
                  <span className="size-1.5 rounded-full bg-whatsapp" />
                  WhatsApp · {WHATSAPP_NUMBER_DISPLAY}
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-2 text-ink/85 hover:text-terra transition-colors"
                >
                  <Mail className="size-3.5 text-terra" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink/55">
              Service client 7j/7 — 24h/24 sur WhatsApp.
              <br />
              Messages écrits uniquement, pas de notes vocales.
            </p>
          </div>
        </div>

        {/* ─── Filet de bas de page ─── */}
        <div className="mt-16 pt-6 border-t border-navy/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-ink/55">
          <p>© {new Date().getFullYear()} Lab&apos;s Food — Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-terra" />
            Maison certifiée HACCP
          </p>
          <p className="flex items-center gap-3 text-ink/45">
            <Link href="/contact" className="hover:text-navy transition-colors">
              Mentions légales
            </Link>
            <span className="size-1 rounded-full bg-ink/20" />
            <Link href="/contact" className="hover:text-navy transition-colors">
              Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
