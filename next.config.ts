import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    // Configuramos los patrones remotos permitidos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // El asterisco permite cualquier subruta de Unsplash
      },
    ],
  },
};

export default nextConfig;