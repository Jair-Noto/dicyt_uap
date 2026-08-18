'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Revistas', href: '/revistas' },
  { label: 'Libros', href: '/libros' },
  { label: 'Convocatorias', href: '/convocatorias' },
  { label: 'Eventos', href: '/eventos' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Escuchador de eventos optimizado
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── VARIABLES DE ESTADO DINÁMICO ──
  // Si no hay scroll (isTop), letras blancas. Si hay scroll, letras azules.
  const isTop = !scrolled;
  const textColor = isTop ? 'text-white drop-shadow-md' : 'text-[#0A1F5C]';
  const textHover = isTop ? 'hover:text-blue-200' : 'hover:text-[#C8102E]';
  const subtextColor = isTop ? 'text-blue-100 drop-shadow-sm' : 'text-[#C8102E]';
  const lineColor = isTop ? 'bg-white' : 'bg-[#C8102E]';
  const inputBg = isTop 
    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40' 
    : 'bg-slate-50 border-[#0A1F5C]/20 text-[#0A1F5C] placeholder:text-slate-400 focus:border-[#0A1F5C]';

  return (
    <>
      {/* ── NAVBAR ── */}
      {/* Cambiamos a 'fixed' para superponerlo al Hero. Se hace transparente arriba y sólido al bajar */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(10,31,92,0.15)] py-2'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500">
          
         {/* ── LOGOS Y BRANDING ── */}
          <Link href="/" className="flex items-center gap-4 group">
            
            {/* 1. Logo Institucional (UAP) - Ampliado */}
            {/* Antes: w-16 h-20 | Ahora: w-20 h-24 (cuando está arriba) */}
            <div className={`relative flex-shrink-0 transition-all duration-500 group-hover:scale-105 ${scrolled ? 'w-16 h-20' : 'w-20 h-24'}`}>
              <Image 
                src="/images/logo-uap.png" 
                alt="Escudo Universidad Amazónica de Pando" 
                fill
                className={`object-contain transition-transform duration-500 ${isTop ? 'drop-shadow-xl' : ''}`}
                quality={100} 
                unoptimized
                priority
              />
            </div>

            {/* Separador Visual - Aumentamos su altura para que acompañe el nuevo tamaño */}
            <div className={`w-px transition-colors duration-500 mx-2 ${isTop ? 'bg-white/30 h-16' : 'bg-slate-300 h-12'}`}></div>

            {/* 2. Logo DICyT - Ampliado */}
            {/* Antes: w-24 h-16 | Ahora: w-32 h-20 (cuando está arriba) */}
            <div className={`relative flex-shrink-0 transition-all duration-500 group-hover:scale-105 ${scrolled ? 'w-24 h-16' : 'w-32 h-20'}`}>
              <Image 
                src="/images/logo_DICyT.png" 
                alt="Logo DICyT" 
                fill
                className={`object-contain transition-transform duration-500 ${isTop ? 'drop-shadow-xl' : ''}`}
                quality={100} 
                unoptimized
                priority
              />
            </div>
            
          {/* 3. Tipografía Oficial - Multicoloreada Siempre */}
            <div className={`border-l-[3px] pl-5 py-1 ml-2 transition-colors duration-500 ${isTop ? 'border-white/40' : 'border-[#0A1F5C]/20'}`}>
              
              {/* Contenedor Flex para las letras.
                  TRUCO SENIOR: Agregamos un resplandor blanco (drop-shadow) cuando está arriba 
                  para que las letras azules no se pierdan en el video oscuro. */}
              <div className={`font-black text-3xl flex items-center leading-none tracking-tight transition-all duration-300 ${textHover} ${
                isTop ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]' : ''
              }`}>
                {/* Ahora los colores son fijos, sin importar el scroll */}
                <span className="text-[#C8102E]">D</span>
                <span className="text-[#0A1F5C]">I</span>
                <span className="text-[#C8102E]">C</span>
                <span className="text-[#0A1F5C]">y</span>
                <span className="text-[#C8102E]">T</span>
              </div>

              <div className={`text-[11px] tracking-[0.2em] uppercase font-black leading-tight mt-1.5 transition-colors duration-300 ${subtextColor}`}>
                Investigación y Ciencia
              </div>
            </div>
          </Link>

          {/* ── NAVEGACIÓN DESKTOP ── */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 relative group ${textColor} ${isTop ? 'hover:bg-white/10' : 'hover:bg-[#C8102E]/5'} ${textHover}`}
              >
                {link.label}
                <span className={`absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${lineColor}`} />
              </Link>
            ))}
          </nav>

          {/* ── BARRA DE BÚSQUEDA ── */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Buscar investigaciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-60 pl-10 pr-4 py-2.5 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 shadow-sm backdrop-blur-md ${inputBg}`}
              />
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${isTop ? 'text-white/70 group-focus-within:text-white' : 'text-slate-400 group-focus-within:text-[#0A1F5C]'}`} />
            </div>
          </div>

          {/* ── MENÚ MÓVIL TOGGLE ── */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${isTop ? 'text-white hover:bg-white/20' : 'text-[#0A1F5C] hover:bg-slate-100'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ── MENÚ MÓVIL DESPLEGABLE ── */}
        <div className={`lg:hidden absolute w-full bg-white border-b border-slate-100 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-[#0A1F5C] font-bold border-b border-slate-50 hover:text-[#C8102E] hover:translate-x-2 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};