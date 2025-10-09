import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // configuração para import de imagens externas
  images: {
    domains: ['github.com', 'images.unsplash.com'],
  },
}

export default nextConfig
