import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = '+33749755684'
export const WHATSAPP_NUMBER_DISPLAY = '+33 7 49 75 56 84'

// ── Slogan officiel Lab's Food (remplace "La cuisine, comme un voyage.") ──
export const SLOGAN = 'We create what you love!'

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

// Site dédié batch cooking (Taplink) — fourni par la cliente
//export const BATCH_COOKING_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScffmrlcL2ZhiP6dfRJkOHU1id3pvmxs-fcSLPXgkyCijqCtg/viewform'
//export const BATCH_COOKING_URL = process.env.NEXT_PUBLIC_BATCH_COOKING_URL 
export const BATCH_COOKING_URL = 'batchcooking-web.railway.internal'
