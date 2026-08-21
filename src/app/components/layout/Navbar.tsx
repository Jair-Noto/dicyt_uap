'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';

// ── AQUÍ AGREGAMOS EL ENLACE DE CURSOS ──
const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Revistas', href: '/revistas' },
  { label: 'Libros', href: '/libros' },
  { label: 'Convocatorias', href: '/convocatorias' },
  { label: 'Eventos', href: '/eventos' },
];

export const Navbar = () => {
  // ── ESTADOS ──
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // ── EFECTOS DE CICLO DE VIDA ──
  // 1. Detección de Scroll para cambiar el diseño del Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Bloqueo de scroll cuando el menú móvil está abierto (Senior UX)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  // ── MANEJADORES DE EVENTOS ──
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para redirigir a la página de búsqueda
    console.log("Buscando:", searchQuery);
  };

  // ── CLASES DINÁMICAS (Clean Code) ──
  const isTop = !scrolled;
  
  // Clases del contenedor principal
  const navClasses = `fixed w-full top-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(10,31,92,0.15)] py-2'
      : 'bg-transparent py-5'
  }`;

  // Clases de Tipografía
  const textColor = isTop ? 'text-white drop-shadow-md' : 'text-[#0A1F5C]';
  const textHover = isTop ? 'hover:text-blue-200' : 'hover:text-[#C8102E]';
  const lineColor = isTop ? 'bg-white' : 'bg-[#C8102E]';
  
  // Clases del Input de Búsqueda
  const inputBg = isTop 
    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40' 
    : 'bg-slate-50 border-[#0A1F5C]/20 text-[#0A1F5C] placeholder:text-slate-400 focus:border-[#0A1F5C]';

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500">
        
        {/* ── 1. LOGOS Y BRANDING ── */}
        <Link href="/" className="flex items-center gap-4 group" aria-label="Ir al inicio">
          
          {/* Escudo UAP */}
          <div className={`relative flex-shrink-0 transition-all duration-500 group-hover:scale-105 ${scrolled ? 'w-24 h-18' : 'w-32 h-23'}`}>
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

          <div className={`w-px transition-colors duration-500 mx-2 ${isTop ? 'bg-white/30 h-16' : 'bg-slate-300 h-12'}`} />

          {/* Logo DICyT */}
          <div className={`relative flex-shrink-0 transition-all duration-500 group-hover:scale-105 ${scrolled ? 'w-24 h-18' : 'w-32 h-23'}`}>
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
                   
        </Link>

        {/* ── 2. NAVEGACIÓN DESKTOP ── */}
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

        {/* ── 3. BARRA DE BÚSQUEDA (Semántica Form) ── */}
        <div className="hidden lg:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="search"
              placeholder="Buscar investigaciones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-60 pl-10 pr-4 py-2.5 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 shadow-sm backdrop-blur-md ${inputBg}`}
              aria-label="Buscar en el catálogo"
            />
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${isTop ? 'text-white/70 group-focus-within:text-white' : 'text-slate-400 group-focus-within:text-[#0A1F5C]'}`} />
          </form>
        </div>

        {/* ── 4. BOTÓN MENÚ MÓVIL ── */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${isTop ? 'text-white hover:bg-white/20' : 'text-[#0A1F5C] hover:bg-slate-100'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ── 5. MENÚ MÓVIL DESPLEGABLE ── */}
      <div 
        className={`lg:hidden absolute w-full bg-white border-b border-slate-100 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="px-6 py-4 flex flex-col gap-2">
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
          {/* Búsqueda en móvil */}
          <form onSubmit={handleSearch} className="relative mt-4 mb-2">
             <input
              type="search"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#0A1F5C] bg-slate-50 text-[#0A1F5C]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </form>
        </nav>
      </div>
    </header>
  );
};