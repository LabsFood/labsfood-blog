import type { Metadata } from 'next'
import { Mail, MessageCircle, Instagram, Music2, Clock, MapPin } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { WHATSAPP_NUMBER_DISPLAY, whatsappLink } from '@/lib/utils'
import { SITE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Une envie, une question, une commande ? Lab's Food vous répond 7j/7 sur WhatsApp ou via formulaire.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            On vous répond{' '}
            <span className="italic gradient-text-terra">7j/7, 24h/24</span>.
          </>
        }
        lede="Service client disponible toute la semaine sur WhatsApp — messages écrits uniquement, pas de notes vocales. Préférable pour une réponse rapide."
      />

      <section className="section bg-cream">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 rounded-3xl bg-cream-soft border border-navy/10 p-8 md:p-10">
            <span className="eyebrow">Formulaire</span>
            <h2 className="display-md text-navy mt-4 mb-8 text-balance">
              Écrivez-nous.
            </h2>
            <ContactForm />
          </div>

          {/* Infos */}
          <div className="lg:col-span-5 space-y-5">
            <a
              href={whatsappLink("Bonjour Lab's Food, ")}
              target="_blank"
              rel="noreferrer"
              className="block rounded-3xl bg-terra text-cream p-8 hover:bg-terra-deep transition-colors group"
            >
              <MessageCircle className="size-6 mb-5" />
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-cream/80">
                WhatsApp · privilégié
              </div>
              <div className="font-display text-2xl mt-1">{WHATSAPP_NUMBER_DISPLAY}</div>
              <div className="mt-4 text-sm text-cream/85">
                Réponse rapide en messages écrits, 7j/7.
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="block rounded-3xl bg-cream-soft border border-navy/10 p-8 hover:shadow-lg transition-shadow"
            >
              <Mail className="size-6 text-terra mb-5" />
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink/65">
                Email
              </div>
              <div className="font-display text-2xl text-navy mt-1">{SITE.email}</div>
            </a>

            <div className="rounded-3xl bg-navy text-cream p-8">
              <div className="grid grid-cols-1 gap-5">
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-terra-soft mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/55">
                      Horaires
                    </div>
                    <div className="text-sm mt-1 text-cream/90">
                      WhatsApp : 7j/7 · 24h/24
                    </div>
                    <div className="text-sm text-cream/65">
                      Email : réponse sous 48h
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-terra-soft mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/55">
                      Zone d&apos;intervention
                    </div>
                    <div className="text-sm mt-1 text-cream/90">
                      Kossam : Côte d&apos;Azur
                    </div>
                    <div className="text-sm text-cream/65">
                      Autres produits : toute l&apos;Europe (La Poste)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/labs_food"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-2xl bg-cream-soft border border-navy/10 p-5 flex items-center gap-3 hover:bg-navy hover:text-cream hover:border-navy transition-all group"
              >
                <Instagram className="size-5 text-terra group-hover:text-terra-soft" />
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] opacity-65">
                    Instagram
                  </div>
                  <div className="text-sm font-medium">@labs_food</div>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@labs_food"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-2xl bg-cream-soft border border-navy/10 p-5 flex items-center gap-3 hover:bg-navy hover:text-cream hover:border-navy transition-all group"
              >
                <Music2 className="size-5 text-terra group-hover:text-terra-soft" />
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] opacity-65">
                    TikTok
                  </div>
                  <div className="text-sm font-medium">@labs_food</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
