import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Palette officielle Lab's Food ──────────────────────────────────
        // Primaire   : #00234B  navy
        // Secondaire : #2C3E50  navy.mid (sert aussi d'accent visuel)
        // Fond       : #F4F6F7  cream (gris froid neutre)

        navy: {
          DEFAULT: '#00234B',   // primaire
          official: '#f4f7f8',   // primaire
          deep: '#001833',   // plus sombre (hover fort, ombres)
          mid: '#2C3E50',   // secondaire / accent (sections, italic, CTA)
          soft: '#3D5166',   // dérivé de #2C3E50, textes secondaires navy
        },
        teal: {
          DEFAULT: '#193C40',
          deep: '#0E2426',
          soft: '#2A5559',
          pale: '#D1DCDD',
        },
        // Accent chaleureux — services (boutons, highlights)
        orange: {
          DEFAULT: '#E67E22',
          soft: '#F0A763',
          deep: '#C56812',
          pale: '#FDEBD8',
        },
        // Accent mint frais — gamme produits (Kossam et co)
        mint: {
          DEFAULT: '#D1F2EB',
          deep: '#A8E5D8',
          soft: '#E8F8F3',
          ink: '#0F5A4A',
        },
        cream: {
          DEFAULT: '#F4F6F7',   // fond principal (gris froid neutre)
          soft: '#FAFBFC',   // fond alternatif clair (cards sur cream)
          deep: '#E5E8EC',   // fond de contraste léger (sections alternées)
        },
        ink: {
          DEFAULT: '#0F1F2E',
          mid: '#3A4A5A',
          soft: '#7B8794',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          deep: '#1DA851',
          dark: '#128C7E',
        },
        border: 'rgba(0,35,75,0.10)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', ...fontFamily.serif],
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '0.9' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        // Zoom infini lent (hero accueil)
        'zoom-slow': 'zoom-slow 18s ease-in-out infinite alternate',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'zoom-slow': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
      },
      backgroundImage: {
        'navy-gradient':
          'linear-gradient(180deg, #00234B 0%, #001833 100%)',
        'navy-mid-gradient':
          'linear-gradient(135deg, #2C3E50 0%, #3D5166 100%)',
        'teal-gradient':
          'linear-gradient(135deg, #193C40 0%, #2A5559 100%)',
        'hero-radial':
          'radial-gradient(circle at 20% 30%, rgba(44, 62, 80, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(25, 60, 64, 0.4) 0%, transparent 60%)',
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
