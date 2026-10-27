import type { Metadata } from 'next'
import Image from 'next/image'
import { Instagram, Mail, MessageCircle } from 'lucide-react'
import {
  SLOGAN,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER_DISPLAY,
  whatsappLink,
} from '@/lib/utils'
import { SITE } from '@/lib/content'

/* ─────────────────────────────────────────────────────────────────────────────
   La page d'attente, le temps des mises à jour.

   Elle ne dit pas de date : une date annoncée et manquée coûte plus cher que
   pas de date du tout. Elle dit ce qui se passe, et laisse trois portes
   ouvertes — WhatsApp, le mail, Instagram — parce qu'une maison qui cuisine
   pour des gens ne peut pas se contenter de fermer.

   Elle reprend l'univers du site : Fraunces en display sur le fond cream, le
   navy et la touche orange. Rien d'inventé pour l'occasion : quelqu'un qui
   revient dans trois semaines doit retrouver la même maison.

   Pour la retirer : `MAINTENANCE` à `false` dans `middleware.ts`.
   ───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Nous revenons très vite',
  description:
    "Lab's Food prépare du nouveau. Le site revient très bientôt — en attendant, écrivez-nous.",
  robots: { index: false, follow: false },
}

export default function BientotPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 py-20">
      {/* Deux halos très doux : la page respire sans se mettre en avant. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-orange/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-32 h-[36rem] w-[36rem] rounded-full bg-navy/5 blur-3xl"
      />

      <div className="relative flex w-full max-w-xl flex-col items-center text-center">
        <Image
          src="/mainLogo.png"
          alt="Lab's Food"
          width={132}
          height={132}
          priority
          className="h-auto w-28 sm:w-32"
        />

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-orange">
          {SLOGAN}
        </p>

        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl">
          Nous préparons
          <span className="block italic text-navy-mid">quelque chose.</span>
        </h1>

        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-mid">
          Le site se refait une beauté. Nous n’annonçons pas de date&nbsp;: nous
          préférons revenir quand ce sera prêt, plutôt que de vous faire
          attendre devant une promesse.
        </p>

        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-mid">
          En attendant, la cuisine ne s’arrête pas. Écrivez-nous&nbsp;: nous
          répondons comme d’habitude.
        </p>

        {/* ── Trois portes ───────────────────────────────────────────────── */}
        <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={whatsappLink(
              'Bonjour Lab’s Food ! J’ai vu que le site était en travaux — je voudrais vous parler.',
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-deep sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {WHATSAPP_NUMBER_DISPLAY}
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy/15 px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-navy/40 sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {SITE.email}
          </a>
        </div>

        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-navy"
        >
          <Instagram className="h-4 w-4" aria-hidden />
          Les nouvelles passent par Instagram
        </a>

        <p className="mt-14 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft/70">
          {SITE.name} · Côte d’Azur
        </p>
      </div>
    </main>
  )
}
