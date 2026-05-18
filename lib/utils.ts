import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = '+33766147898'
export const WHATSAPP_NUMBER_DISPLAY = '+33 7 66 14 78 98'

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encoded}`
}

export const BATCH_COOKING_URL = 'https://batch-cooking-web.vercel.app/'
