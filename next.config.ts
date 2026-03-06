import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/gevs-devs-website',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
