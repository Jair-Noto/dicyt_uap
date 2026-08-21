import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ChevronRight, } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060F2E] text-slate-300 pt-20 pb-10 border-t-4 border-[#C8102E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ── CUADRÍCULA PRINCIPAL ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Branding y Descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-22 h-22 flex-shrink-0">
                <Image 
                  src="/images/logo-uap.png" 
                  alt="Escudo UAP" 
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="h-8 w-px bg-slate-700 mx-1"></div>
              <div className="relative w-22 h-22 flex-shrink-0">
                <Image 
                  src="/images/logo_DICyT.png" 
                  alt="Logo DICyT" 
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Promovemos, gestionamos y visibilizamos la producción científica de la región amazónica mediante plataformas de acceso abierto e indexación global.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Explorar
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Revistas Científicas', href: '/revistas' },
                { label: 'Libros y Monografías', href: '/libros' },
                { label: 'Convocatorias', href: '/convocatorias' },
                { label: 'Eventos Académicos', href: '/eventos' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center gap-2 text-sm hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-[#C8102E] transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios e Indexación */}
          <div>
            <h4 style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Servicios OJS
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Portal OJS Principal', href: 'https://ojs.uap.bo/index.php/index/en' },
                { label: 'Guía para Autores', href: '#' },
                { label: 'Proceso de Revisión', href: '#' },
                { label: 'Políticas de Acceso Abierto', href: '#' },
                { label: 'Declaración de Privacidad', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-[#C8102E] transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Campus Universitario, <br />
                  Cobija, Pando, Bolivia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#C8102E] flex-shrink-0" />
                <span className="text-slate-400">+591 3 842 2222</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C8102E] flex-shrink-0" />
                <a href="mailto:dicyt@uap.edu.bo" className="text-slate-400 hover:text-white transition-colors">
                  dicyt@uap.edu.bo
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── LÍNEA DIVISORIA ── */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-xs text-slate-500">
            &copy; {currentYear} Dirección de Investigación, Ciencia y Tecnología (DICyT). Todos los derechos reservados.
          </div>

          {/* Badges de Open Access */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <div className="w-5 h-5 rounded-full bg-[#C8102E] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              Acceso Abierto
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};