'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // TODO: brancher l'envoi (Resend / API route / Formspree)
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-navy text-cream p-10 text-center">
        <div className="mx-auto size-14 rounded-full bg-navy-mid grid place-items-center mb-5">
          <Check className="size-7 text-cream" />
        </div>
        <h3 className="font-display text-2xl text-cream">Message bien reçu !</h3>
        <p className="mt-3 text-cream/70 max-w-md mx-auto">
          On revient vers vous très vite. En attendant, vous pouvez aussi nous écrire
          directement sur WhatsApp pour une réponse plus rapide.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy/80">
            Nom & prénom <span className="text-navy-mid">*</span>
          </span>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-navy/15 bg-cream-soft px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-mid/40 focus:border-navy-mid transition-all"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy/80">
            Email <span className="text-navy-mid">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-navy/15 bg-cream-soft px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-mid/40 focus:border-navy-mid transition-all"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy/80">
          Sujet
        </span>
        <select
          name="subject"
          className="w-full rounded-xl border border-navy/15 bg-cream-soft px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-mid/40 focus:border-navy-mid transition-all"
        >
          <option>Réserver un atelier</option>
          <option>Batch cooking</option>
          <option>Commander du Kossam</option>
          <option>Devenir chef partenaire</option>
          <option>Question générale</option>
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy/80">
          Votre message <span className="text-navy-mid">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-navy/15 bg-cream-soft px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-mid/40 focus:border-navy-mid transition-all resize-none"
        />
      </label>
      <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>Envoyer le message</>
        )}
      </Button>
    </form>
  )
}
