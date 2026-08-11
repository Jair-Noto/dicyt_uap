import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookText, Download } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  year: number;
  pages: number;
  cover: string;
  category: string;
  downloadLink: string;
}

export const BookCard = ({ title, author, year, pages, cover, category, downloadLink }: BookCardProps) => {
  return (
    <article className="group flex flex-col h-full cursor-pointer">
      
      {/* ── CONTENEDOR 3D DEL LIBRO ── */}
      <div className="relative w-full aspect-[2/3] rounded-r-md rounded-l-sm overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 mb-5 bg-slate-200">
        
        {/* Imagen de la Portada */}
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* TRUCO SENIOR: Efecto de Lomo de Libro (Sombra lateral izquierda) */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-10 pointer-events-none border-l border-white/20"></div>
        
        {/* TRUCO SENIOR: Reflejo de luz en la tapa */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-white/20 z-10 pointer-events-none"></div>

        {/* Overlay Hover para Leer/Descargar */}
        <div className="absolute inset-0 bg-[#0A1F5C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20 backdrop-blur-sm">
          <Link 
            href={downloadLink}
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-[#C8102E] text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white hover:text-[#C8102E]"
          >
            <Download size={16} />
            Descargar PDF
          </Link>
        </div>
      </div>

      {/* ── METADATOS DEL LIBRO ── */}
      <div className="flex flex-col flex-grow px-1">
        <span className="text-[10px] font-black text-[#C8102E] uppercase tracking-widest mb-2">
          {category}
        </span>
        
        <h3 style={{ fontFamily: "'Lora', Georgia, serif" }} className="font-bold text-[#0A1F5C] text-lg leading-snug mb-2 group-hover:text-[#1e73be] transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-slate-500 italic mb-3 line-clamp-1">
          {author}
        </p>
        
        <div className="mt-auto flex items-center gap-3 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1">
            <BookText size={14} /> {pages} págs.
          </span>
          <span>•</span>
          <span>Edición {year}</span>
        </div>
      </div>
    </article>
  );
};