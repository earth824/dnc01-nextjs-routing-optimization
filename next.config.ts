import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [25, 50, 75],
    remotePatterns: [{ protocol: 'https', hostname: 'images.pexels.com' }]
  }
};

export default nextConfig;
