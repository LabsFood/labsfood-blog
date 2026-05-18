'use client'

import { useState } from 'react'
import { Check, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type FieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  textarea?: boolean
  hint?: string
  className?: string
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  textarea,
  hint,
  className,
}: FieldProps) {
  return (
    <label className={cn('flex flex-col gap-2', className)}>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy/80">
        {label} {required && <span className="text-terra">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-xl border border-navy/15 bg-cream-soft px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-terra/40 focus:border-terra transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-xl border border-navy/15 bg-cream-soft px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-terra/40 focus:border-terra transition-all"
        />
      )}
      {hint && <span className="text-[0.7rem] text-ink/55">{hint}</span>}
    </label>
  )
}

function FieldSet({ legend, eyebrow, children }: { legend: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-2xl bg-cream-soft border border-navy/10 p-6 md:p-8">
      <div className="mb-6">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-terra">
          {eyebrow}
        </span>
        <legend className="block font-display text-2xl text-navy mt-2">{legend}</legend>
      </div>
      <div className="grid md:grid-cols-2 gap-5">{children}</div>
    </fieldset>
  )
}

export function ChefForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // TODO: brancher sur l'endpoint d'envoi (à définir).
    // Pour l'instant on simule un envoi.
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-navy text-cream p-10 md:p-16 text-center">
        <div className="mx-auto size-16 rounded-full bg-terra grid place-items-center mb-6">
          <Check className="size-8 text-cream" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-cream">
          Merci, votre candidature est partie !
        </h2>
        <p className="mt-4 text-cream/75 max-w-xl mx-auto">
          Nous revenons vers vous très rapidement sur WhatsApp ou par email pour finaliser
          votre intégration et planifier l&apos;envoi des pièces administratives.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FieldSet legend="Vos informations" eyebrow="01 · Contact">
        <Field label="Nom" name="lastname" required />
        <Field label="Prénom" name="firstname" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Téléphone" name="phone" required />
        <Field
          label="Numéro WhatsApp"
          name="whatsapp"
          hint="Laissez vide si identique au téléphone"
        />
        <Field
          label="Rayon de déplacement"
          name="radius"
          placeholder="10 km, 20 km, 50 km..."
          required
        />
        <Field label="Adresse" name="address" required className="md:col-span-2" />
      </FieldSet>

      <FieldSet legend="Votre profil" eyebrow="02 · Profil">
        <Field
          label="Langues parlées"
          name="languages"
          placeholder="Français, Anglais, Portugais..."
          required
        />
        <Field
          label="Photo de profil"
          name="photo"
          type="file"
          required
          hint="JPG ou PNG, 5 Mo max"
        />
        <Field
          label="Courte biographie"
          name="bio"
          textarea
          required
          hint="2-3 lignes pour vous présenter aux visiteurs"
          className="md:col-span-2"
        />
      </FieldSet>

      <FieldSet legend="Votre atelier" eyebrow="03 · Offre">
        <Field
          label="Type de cuisine"
          name="cuisine"
          placeholder="Asiatique, Africaine, Pâtisserie..."
          required
        />
        <Field
          label="Durée de l’atelier"
          name="duration"
          placeholder="2 heures"
          required
        />
        <Field
          label="Taille du groupe"
          name="group"
          placeholder="De 2 à 6 personnes"
          required
        />
        <Field
          label="Prix"
          name="price"
          placeholder="80€ / groupe ou 25€ / pers."
          required
        />
        <Field
          label="Description de l’atelier"
          name="description"
          textarea
          required
          hint="Ce que les clients vont apprendre, le déroulé, les éventuels cadeaux"
          className="md:col-span-2"
        />
        <Field
          label="Consignes spéciales / matériel requis"
          name="requirements"
          textarea
          className="md:col-span-2"
        />
        <Field
          label="Photos de l’atelier"
          name="atelierPhotos"
          type="file"
          hint="Plusieurs photos possibles, 10 Mo max au total"
          className="md:col-span-2"
        />
      </FieldSet>

      <FieldSet legend="Documents administratifs" eyebrow="04 · Justificatifs">
        <Field label="CNI ou titre de séjour" name="id" type="file" required />
        <Field label="Kbis" name="kbis" type="file" />
        <Field label="Certificat HACCP" name="haccp" type="file" hint="Si obtenu" />
        <Field
          label="Attestations de formations"
          name="trainings"
          type="file"
          hint="Optionnel"
        />
      </FieldSet>

      <FieldSet legend="Engagements" eyebrow="05 · Validation">
        <label className="flex items-start gap-3 md:col-span-2 cursor-pointer">
          <input
            type="checkbox"
            name="quality"
            required
            className="mt-1 size-4 rounded border-navy/30 text-terra focus:ring-terra"
          />
          <span className="text-sm text-ink/85">
            Je m&apos;engage à respecter la charte qualité Lab&apos;s Food et la véracité des
            informations transmises.{' '}
            <span className="text-terra">*</span>
          </span>
        </label>
        <label className="flex items-start gap-3 md:col-span-2 cursor-pointer">
          <input
            type="checkbox"
            name="rights"
            required
            className="mt-1 size-4 rounded border-navy/30 text-terra focus:ring-terra"
          />
          <span className="text-sm text-ink/85">
            J&apos;accepte le droit à l&apos;image pour la publication de photos de mes
            ateliers sur les supports Lab&apos;s Food. <span className="text-terra">*</span>
          </span>
        </label>
      </FieldSet>

      {status === 'error' && (
        <div className="rounded-xl bg-terra/10 border border-terra/30 text-terra-deep p-4 flex items-start gap-3 text-sm">
          <AlertCircle className="size-4 mt-0.5 shrink-0" />
          Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pt-4">
        <p className="text-xs text-ink/55">
          En envoyant ce formulaire, vous acceptez d&apos;être contacté par l&apos;équipe
          Lab&apos;s Food pour finaliser votre intégration.
        </p>
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>Envoyer ma candidature</>
          )}
        </Button>
      </div>
    </form>
  )
}
