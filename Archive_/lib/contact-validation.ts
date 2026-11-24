/**
 * Règles de validation du formulaire de contact.
 *
 * Un seul endroit, lu par le formulaire (pour dire tout de suite ce qui ne va
 * pas) et par la route serveur (parce qu'un navigateur ne fait foi de rien).
 * L'API applique les mêmes de son côté : `LF-BackEnd/.../contact.dto.ts`.
 */

export type ContactFields = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactFields, string>>

export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 255,
  emailMax: 320,
  phoneMax: 32,
  messageMin: 10,
  messageMax: 5000,
} as const

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
/** 8 à 15 chiffres, avec les séparateurs usuels et un + en tête facultatif. */
const PHONE = /^\+?(?:[\s().-]*\d){8,15}[\s().-]*$/
const HAS_A_LETTER = /\p{L}/u

/** Les champs en erreur et le message à afficher sous chacun. Vide si tout va bien. */
export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {}
  const name = fields.name.trim()
  const email = fields.email.trim()
  const phone = fields.phone.trim()
  const message = fields.message.trim()

  if (name.length < CONTACT_LIMITS.nameMin) {
    errors.name = 'Indiquez votre nom (2 caractères minimum).'
  } else if (name.length > CONTACT_LIMITS.nameMax) {
    errors.name = 'Ce nom est trop long.'
  } else if (!HAS_A_LETTER.test(name)) {
    errors.name = 'Ce nom ne semble pas valide.'
  }

  if (!email) {
    errors.email = 'Indiquez votre e-mail pour que nous puissions vous répondre.'
  } else if (email.length > CONTACT_LIMITS.emailMax || !EMAIL.test(email)) {
    errors.email = 'Cet e-mail ne semble pas valide (ex. marie@exemple.fr).'
  }

  // Facultatif, mais s'il est rempli il doit pouvoir être composé.
  if (phone && (phone.length > CONTACT_LIMITS.phoneMax || !PHONE.test(phone))) {
    errors.phone = 'Ce numéro ne semble pas valide (ex. 06 12 34 56 78).'
  }

  if (message.length < CONTACT_LIMITS.messageMin) {
    errors.message = `Votre message doit contenir au moins ${CONTACT_LIMITS.messageMin} caractères.`
  } else if (message.length > CONTACT_LIMITS.messageMax) {
    errors.message = `Votre message dépasse ${CONTACT_LIMITS.messageMax} caractères.`
  }

  return errors
}
