import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, BookOpen } from 'lucide-react';

interface JournalCardProps {
  id: string;
  title: string;
  issue: string;
  articles: number;
  cover: string;
  tag: string;
  ojsLink: string;
}

export const JournalCard = ({ id, title, issue, articles, cover, tag, ojsLink }: JournalCardProps) => {
  return (
    <div className="relative group h-full">
      
      {/* ── EL SECRETO DE LAS LUCES (Glow Effect) ── */}
      {/* Este div está detrás y brilla al hacer hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C8102E] to-[#0A1F5C] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition duration-500 group-hover:duration-200 z-0"></div>

      {/* ── LA TARJETA PRINCIPAL ── */}
      <article className="relative z-10 flex flex-col h-full bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
        
        {/* Cabecera / Portada */}
        <div className="relative h-98 w-full bg-slate-50 overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          
          {/* Overlay de Oscurecimiento Superior para leer los badges */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F5C]/60 via-transparent to-transparent"></div>

          {/* Badges Flotantes */}
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-black px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#0A1F5C] shadow-sm uppercase tracking-widest border border-white">
              {tag}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-white text-xs font-bold bg-[#C8102E]/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm">
              {id}
            </span>
          </div>
        </div>

        {/* Cuerpo de la Tarjeta */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 style={{ fontFamily: "'Lora', Georgia, serif" }} className="font-bold text-[#0A1F5C] text-xl leading-snug mb-2 group-hover:text-[#C8102E] transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-xs text-slate-500 mb-5 font-medium bg-slate-50 inline-block px-2 py-1 rounded w-fit">
            {issue}
          </div>
          
          {/* Separador */}
          <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
              <BookOpen size={16} className="text-[#C8102E]" />
              <strong className="text-[#0A1F5C] font-bold">{articles}</strong> artículos
            </span>
            
            {/* Botón de Salto al OJS */}
            <Link 
              href={ojsLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-bold text-[#C8102E] hover:text-[#0A1F5C] transition-colors group/link"
            >
              Ir al OJS 
              <ExternalLink size={16} className="transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};