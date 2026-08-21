'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ── BASE DE DATOS LOCAL ──
const FEATURED_COVERS = [
  { id: 'ACBN', cover: '/images/acbn.jpg', tag: 'Biológicas y Naturales', title: 'Revista Científica ACBN' },
  { id: 'ACEF', cover: '/images/acef.jpg', tag: 'Económicas y Financieras', title: 'Revista Científica ACEF' },
  { id: 'ACJyP', cover: '/images/acjyp.jpg', tag: 'Jurídicas y Políticas', title: 'Revista Científica ACJyP' },
  { id: 'ACS', cover: '/images/acs.jpg', tag: 'Ciencias de la Salud', title: 'Revista Científica ACS' },
  { id: 'ACSyH', cover: '/images/acsyh.jpg', tag: 'Sociales y Humanísticas', title: 'Revista Científica ACSyH' },
  { id: 'ACyT', cover: '/images/acyt.jpg', tag: 'Ingeniería y Tecnología', title: 'Revista Científica ACyT' },
];

const HERO_PHRASES = [
  { main: "El repositorio de la investigación", highlight: "amazónica" },
  { main: "El epicentro del desarrollo", highlight: "científico" },
  { main: "El motor de la innovación", highlight: "tecnológica" }
];

// ── 1. AISLAMIENTO DEL FONDO (RENDIMIENTO SENIOR) ──
// Usamos React.memo para que este bloque NUNCA se vuelva a renderizar
// aunque las revistas o los textos cambien cada 4 segundos.
const HeroBackground = React.memo(() => (
  <>
    <video
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
    >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" aria-hidden="true" />

    {/* OPTIMIZACIÓN: Se agregó 'will-change-transform' para forzar la aceleración por hardware (GPU) */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[70%] rounded-full bg-[#C8102E]/40 blur-[100px] animate-aurora mix-blend-screen will-change-transform" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[80%] rounded-full bg-[#1e73be]/40 blur-[100px] animate-aurora-reverse mix-blend-screen will-change-transform" />
    </div>
    
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
      aria-hidden="true"
      style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)`,
      }}
    />
    <div className="absolute top-0 right-0 w-1 h-full bg-[#C8102E] z-10" aria-hidden="true" />
  </>
));
HeroBackground.displayName = 'HeroBackground';

// ── 2. COMPONENTE PRINCIPAL ──
export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const coverTimer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FEATURED_COVERS.length);
    }, 4000);

    const phraseTimer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWordIndex((current) => (current + 1) % HERO_PHRASES.length);
        setIsFading(false);
      }, 500); 
    }, 4500);

    return () => {
      clearInterval(coverTimer);
      clearInterval(phraseTimer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent min-h-screen flex items-center"> 
      
      {/* Fondo aislado */}
      <HeroBackground />

      {/* ── CONTENIDO DINÁMICO ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
        
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8 group cursor-default">
            <div className="h-[2px] w-12 bg-[#C8102E] group-hover:w-24 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] drop-shadow-md" />
            <span 
              style={{ fontFamily: "'JetBrains Mono', monospace" }} 
              className="text-white text-[11px] sm:text-xs tracking-[0.2em] group-hover:tracking-[0.35em] uppercase font-black transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            >
              Portal de conocimiento científico
            </span>
          </div>

          <h1 style={{ fontFamily: "'Lora', Georgia, serif" }} className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            <motion.div
              className={`transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isFading ? 'opacity-0 -translate-y-4 blur-[4px]' : 'opacity-100 translate-y-0 blur-0'
              }`}
              style={{
                '--mask-x': '100%',
                WebkitMaskImage: "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
                maskImage: "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
              } as React.CSSProperties}
              animate={{ '--mask-x': '-100%' } as { '--mask-x': string }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1.5 }}
            >
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] block mb-1">
                {HERO_PHRASES[wordIndex].main}
              </span>
              <span className="inline-block text-[#34D399] drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                {HERO_PHRASES[wordIndex].highlight}
              </span>
            </motion.div>
          </h1>

          <p className="text-blue-50/90 text-lg leading-relaxed mb-10 max-w-xl drop-shadow-md">
            Promovemos, gestionamos y visibilizamos la producción académica de la universidad mediante plataformas de acceso abierto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/revistas"
              className="inline-flex justify-center items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-8 py-3.5 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] rounded-md group"
            >
              Explorar Investigaciones
              <svg aria-label="Flecha derecha" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>

            <Link
              href="/convocatorias"
              className="inline-flex justify-center items-center gap-2 border border-white/30 hover:border-white text-white font-medium px-8 py-3.5 transition-all duration-300 rounded-md backdrop-blur-sm hover:bg-white/10"
            >
              Ver convocatorias
            </Link>
          </div>
        </div>

        <div className="hidden lg:block relative h-[450px] w-full perspective-1000">
          {FEATURED_COVERS.map((journal, index) => {
            const position = (index - activeIndex + FEATURED_COVERS.length) % FEATURED_COVERS.length;
            const isVisible = position < 3;
            const isLeaving = position === FEATURED_COVERS.length - 1; 

            const cardStyles: React.CSSProperties = {
              width: 240,
              height: 330,
              left: isVisible ? `${position * 100}px` : '200px',
              top: isVisible ? `${position * 30}px` : '60px',
              transform: isVisible 
                ? `rotate(${(position - 1) * 6}deg) scale(${1 - position * 0.05})` 
                : 'rotate(15deg) scale(0.8)',
              zIndex: 30 - position,
            };

            return (
              <div
                key={journal.id}
                className={`absolute rounded-lg shadow-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] border border-white/10
                  ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                  ${isLeaving ? '-translate-x-20 opacity-0' : ''} 
                `}
                style={cardStyles}
              >
                <Image 
                  src={journal.cover} 
                  alt={journal.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 0vw, 240px"
                  /* OPTIMIZACIÓN: Solo las primeras 3 imágenes son críticas. El atributo se vuelve estático */
                  priority={index < 3} 
                />
                
                {/* OPTIMIZACIÓN: Se retiró el backdrop-blur de esta capa móvil para no sobrecargar el renderizado */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F5C] via-[#0A1F5C]/60 to-transparent flex flex-col justify-end p-5 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#34D399] text-[10px] font-bold tracking-widest uppercase mb-1 drop-shadow-md">
                    {journal.tag}
                  </span>
                  <p className="text-white text-sm font-bold leading-tight drop-shadow-md">
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