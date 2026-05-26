import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = '+33749755684'
export const WHATSAPP_NUMBER_DISPLAY = '+33 7 49 75 56 84'

// ── Réseaux sociaux Lab's Food ────────────────────────────────────────────
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/labs_food',
  tiktok: 'https://www.tiktok.com/@labs_food',
  linkedin: 'https://www.linkedin.com/company/labs-food',
} as const

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encoded}`
}

export const BATCH_COOKING_URL = 'https://batch-cooking-web.vercel.app/'
