import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar"; // <-- Importamos aquí

export const metadata: Metadata = {
  title: "DICyT - Universidad Amazónica de Pando",
  description: "Portal de Revistas, Libros Científicos y Convocatorias de la UAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-uap-gray min-h-screen flex flex-col">
        <Navbar/> 
        {children}
      </body>
    </html>
  );
}