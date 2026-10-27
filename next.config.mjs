/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Refonte batch cooking — les pages assistance culinaire, atelier culinaire
  // et « Nous rejoindre » sont suspendues (voir _archive/services-suspendus).
  // Les anciennes URLs restent indexées : on les redirige plutôt que de servir
  // un 404.
  async redirects() {
    return [
      { source: '/services', destination: '/services/batch-cooking', permanent: true },
      { source: '/services/assistance-culinaire', destination: '/services/batch-cooking', permanent: true },
      { source: '/services/atelier-culinaire', destination: '/services/batch-cooking', permanent: true },
      { source: '/devenir-chef', destination: '/contact', permanent: true },
    ]
  },
}

export default nextConfig
