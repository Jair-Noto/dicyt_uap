import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer"; // 1. Importamos el Footer

export const metadata: Metadata = {
  title: "DICyT - Universidad Amazónica de Pando",
  description: "Portal de Investigación y Ciencia de la UAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-sans bg-white flex flex-col min-h-screen">
        
        {/* Header Global */}
        <Navbar />
        
        {/* Contenido Dinámico de las Páginas */}
        {children}

        {/* 2. Footer Global */}
        <Footer />
        
      </body>
    </html>
  );
}