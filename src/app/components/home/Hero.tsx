'use client'; // ¡Obligatorio! Activa el uso de Hooks (useState, useEffect) en Next.js App Router

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Tu base de datos local con las 6 revistas de las facultades
const FEATURED_COVERS = [
  { id: 'ACBN', cover: '/images/acbn.jpg', tag: 'Biológicas y Naturales', title: 'Revista Científica ACBN' },
  { id: 'ACEF', cover: '/images/acef.jpg', tag: 'Económicas y Financieras', title: 'Revista Científica ACEF' },
  { id: 'ACJyP', cover: '/images/acjyp.jpg', tag: 'Jurídicas y Políticas', title: 'Revista Científica ACJyP' },
  { id: 'ACS', cover: '/images/acs.jpg', tag: 'Ciencias de la Salud', title: 'Revista Científica ACS' },
  { id: 'ACSyH', cover: '/images/acsyh.jpg', tag: 'Sociales y Humanísticas', title: 'Revista Científica ACSyH' },
  { id: 'ACyT', cover: '/images/acyt.jpg', tag: 'Ingeniería y Tecnología', title: 'Revista Científica ACyT' },
];

export const Hero = () => {
  // Estado para saber qué tarjeta está en la posición frontal
  const [activeIndex, setActiveIndex] = useState(0);

  // Efecto que cambia la tarjeta cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FEATURED_COVERS.length);
    }, 4000); // 4000ms = 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A1F5C]">
      {/* Background Patterns */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F5C] via-[#0A1F5C]/90 to-[#060F2E]" />

      {/* Red accent bar */}
      <div className="absolute top-0 right-0 w-1 h-full bg-[#C8102E]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#C8102E]" />
            <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#C8102E] text-xs tracking-[0.2em] uppercase font-bold">
              Portal de conocimiento científico
            </span>
          </div>

          <h1 style={{ fontFamily: "'Lora', Georgia, serif" }} className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            El repositorio de la investigación{' '}
            <em className="text-[#C8102E] not-italic">amazónica</em>
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl">
            Promovemos, gestionamos y visibilizamos la producción académica de la universidad mediante plataformas de acceso abierto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/revistas"
              className="inline-flex justify-center items-center gap-2 bg-[#C8102E] hover:bg-[#9E0B24] text-white font-semibold px-8 py-3.5 transition-colors shadow-lg rounded-md"
            >
              Explorar Investigaciones
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link
              href="/convocatorias"
              className="inline-flex justify-center items-center gap-2 border border-white/30 hover:border-white text-white font-medium px-8 py-3.5 transition-colors rounded-md"
            >
              Ver convocatorias
            </Link>
          </div>
        </div>

        {/* Stack de Portadas Animadas */}
        <div className="hidden lg:block relative h-[450px] w-full perspective-1000">
          {FEATURED_COVERS.map((journal, index) => {
            // Lógica matemática para determinar la posición relativa de cada tarjeta
            let position = index - activeIndex;
            if (position < 0) position += FEATURED_COVERS.length; // Ciclo infinito

            // Solo mostramos las 3 primeras tarjetas para no saturar, las demás esperan invisibles
            const isVisible = position < 3;
            const isLeaving = position === FEATURED_COVERS.length - 1; // La que acaba de salir

            return (
              <div
                key={journal.id}
                // transition-all y duration-1000 crean el movimiento fluido de 1 segundo
                className={`absolute rounded-lg shadow-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
                  ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                  ${isLeaving ? '-translate-x-20 opacity-0' : ''} 
                `}
                style={{
                  width: 240,
                  height: 330,
                  // Calculamos la posición en X, Y, la rotación y el z-index según su turno
                  left: isVisible ? `${position * 100}px` : '200px',
                  top: isVisible ? `${position * 30}px` : '60px',
                  transform: isVisible ? `rotate(${(position - 1) * 6}deg) scale(${1 - position * 0.05})` : 'rotate(15deg) scale(0.8)',
                  zIndex: 30 - position,
                }}
              >
                <Image 
                  src={journal.cover} 
                  alt={journal.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 0vw, 240px"
                  priority={position === 0} // Da prioridad de carga a la que está al frente
                />
                
                {/* Degradado inferior para el texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F5C] via-[#0A1F5C]/40 to-transparent flex flex-col justify-end p-5 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#C8102E] text-[10px] font-bold tracking-widest uppercase mb-1">
                    {journal.tag}
                  </span>
                  <p className="text-white text-sm font-bold leading-tight">
                    {journal.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};