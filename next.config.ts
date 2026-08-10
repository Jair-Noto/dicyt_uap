// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Agregamos la configuración de imágenes
  images: {
    qualities: [25, 50, 75, 100], // Autorizamos la calidad 100
  },
};

export default nextConfig;