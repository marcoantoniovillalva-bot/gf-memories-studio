import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    qualities: [75, 85, 88, 90, 92, 95],
  },
}

export default nextConfig
