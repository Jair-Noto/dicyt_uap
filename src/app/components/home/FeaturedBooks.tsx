import React from 'react';
import { BookCard } from '../ui/BookCard';
import { ArrowRight } from 'lucide-react';

// Data real estructurada - Seleccionamos las 4 más recientes para el Home
const FEATURED_BOOKS = [
  {
    title: 'GOBERNANZA, JUSTICIA Y DESARROLLO EN TERRITORIOS AMAZÓNICOS',
    author: 'Universidad Amazónica de Pando', // Ajustar con el organizador real
    year: 2026,
    pages: 350, // Dato temporal
    cover: '/images/libro.png', // Reemplazar luego con portada real
    category: 'Gobernanza',
    downloadLink: 'https://www.editoracientifica.com.br/books/gobernanza-justicia-y-desarrollo-en-territorios-amazonicos-estudios-multidisciplinarios-desde-la-universidad-amazonica-de-pando'
  },
  {
    title: 'DINÁMICAS SOCIOAMBIENTALES, LEGALES Y ECONÓMICAS EN LA TRIPLE FRONTERA',
    author: 'Universidad Amazónica de Pando',
    year: 2026,
    pages: 280,
    cover: '/images/socioeconomia.png',
    category: 'Socioeconomía',
    downloadLink: 'https://www.editoracientifica.com.br/books/dinamicas-socioambientales-legales-y-economicas-en-la-triple-frontera-madre-de-dios-peru-acre-brasil-y-pando-bolivia'
  },
  {
    title: 'BOSQUE AMAZÓNICO EN LA ENCRUCIJADA DEL SIGLO XXI',
    author: 'Universidad Amazónica de Pando',
    year: 2026,
    pages: 410,
    cover: '/images/medioambiente.png',
    category: 'Medio Ambiente',
    downloadLink: 'https://www.editoracientifica.com.br/books/bosque-amazonico-en-la-encrucijada-del-siglo-xxi-crisis-climatica-gobernanza-crimen-ambiental-y-tecnologias-para-el-futuro'
  },
  {
    title: 'DESARROLLO SOSTENIBLE Y BIODIVERSIDAD EN PANDO',
    author: 'Universidad Amazónica de Pando',
    year: 2025,
    pages: 320,
    cover: '/images/biodiversidad.png',
    category: 'Biodiversidad',
    downloadLink: 'https://www.editoracientifica.com.br/books/desarrollo-sostenible-y-biodiversidad-en-pando-estudios-sobre-euterpe-precatoria-mart-agricultura-y-socioeconomia'
  }
];

export const FeaturedBooks = () => {
  return (
    <section id="libros" className="relative py-24 bg-white overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#C8102E] text-xs tracking-[0.2em] uppercase font-black">
                — 02
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-slate-400 text-xs tracking-widest uppercase font-semibold">
                Repositorio Bibliográfico
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-[#0A1F5C] uppercase tracking-tight">
              Libros
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#0A1F5C] to-[#C8102E] rounded-full mt-6"></div>
          </div>
          
          <a href="/libros" className="group flex items-center gap-2 text-[#0A1F5C] font-bold text-sm hover:text-[#C8102E] transition-colors">
            Ver estante completo
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
              <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {FEATURED_BOOKS.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};