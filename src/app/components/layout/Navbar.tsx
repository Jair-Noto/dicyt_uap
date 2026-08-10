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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      
      {/* ── NAVBAR ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur shadow-[0_1px_0_0_rgba(10,31,92,0.15)]'
            : 'bg-white border-b border-[#0A1F5C]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          
          {/* Logo Adaptado a la DICyT */}
          {/* Brand / Dual Logo UAP + DICyT */}
          <Link href="/" className="flex items-center gap-3 group">
            
            {/* 1. Logo Institucional Matriz (UAP) */}
            <div className="relative w-18 h-18 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/logo-uap.jpg" 
                alt="Escudo Universidad Amazónica de Pando" 
                fill
                className="object-contain"
                quality={100} 
                unoptimized
                priority
              />
            </div>

            {/* Separador Visual */}
            <div className="h-10 w-px bg-slate-300 mx-1"></div>

            {/* 2. Logo del Departamento (DICyT) */}
            <div className="relative w-22 h-18 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/logo_DICyT.jpg" 
                alt="Logo DICyT" 
                fill
                className="object-contain"
                quality={100} 
                unoptimized
                priority
              />
            </div>
            
            {/* 3. Tipografía Oficial */}
            <div className="border-l-2 border-[#0A1F5C]/20 pl-4 py-1 ml-1">
              <div className="text-[#0A1F5C] font-black text-2xl leading-tight tracking-tight group-hover:text-[#C8102E] transition-colors">
                DICyT
              </div>
              <div className="text-[10px] text-[#C8102E] tracking-[0.15em] uppercase font-bold leading-none mt-1">
                Investigación y Ciencia
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-[#0A1F5C] hover:text-[#C8102E] hover:bg-[#C8102E]/5 rounded transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#C8102E] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Search + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar investigaciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-56 pl-10 pr-3 py-2 text-sm border border-[#0A1F5C]/20 rounded focus:outline-none focus:border-[#0A1F5C] focus:ring-1 focus:ring-[#0A1F5C]/30 placeholder:text-gray-400 transition-all bg-slate-50"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded text-[#0A1F5C] hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#0A1F5C]/10 bg-white px-6 py-4 flex flex-col gap-2 shadow-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-[#0A1F5C] font-bold border-b border-slate-50 hover:text-[#C8102E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
};