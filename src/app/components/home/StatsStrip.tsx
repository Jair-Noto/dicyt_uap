'use client';
import React from 'react';
import { FileText, BookOpen, Library, Users } from 'lucide-react';

const STATS_DATA = [
  { 
    value: '4,820', 
    label: 'Artículos publicados', 
    icon: <FileText size={24} className="text-[#C8102E]" /> 
  },
  { 
    value: '312', 
    label: 'Libros científicos', 
    icon: <BookOpen size={24} className="text-[#C8102E]" /> 
  },
  { 
    value: '86', 
    label: 'Revistas activas', 
    icon: <Library size={24} className="text-[#C8102E]" /> 
  },
  { 
    value: '1,940', 
    label: 'Autores registrados', 
    icon: <Users size={24} className="text-[#C8102E]" /> 
  },
];

export const StatsStrip = () => {
  return (
    // Eliminamos el margen negativo (-mt-32) y usamos py-16 para que se posicione naturalmente abajo
    <section className="relative z-30 max-w-7xl mx-auto px-6 py-16">
      
      {/* ── TARJETA SÓLIDA MODERNA ── */}
      <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(10,31,92,0.10)] border border-slate-100 p-8 md:p-10">
        
        {/* Líneas separadoras grises automáticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
          
          {STATS_DATA.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center group px-4"
            >
              {/* Ícono con fondo sutil que se tiñe de rojo al hacer hover */}
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-[#C8102E]/10 transition-all duration-500 shadow-inner">
                {stat.icon}
              </div>
              
              {/* Números en azul institucional para que contrasten con el fondo blanco */}
              <h3 
                style={{ fontFamily: "'Lora', Georgia, serif" }} 
                className="text-4xl lg:text-5xl font-bold text-[#0A1F5C] mb-2 tracking-tight group-hover:scale-105 group-hover:text-[#C8102E] transition-all duration-500"
              >
                {stat.value}
              </h3>
              
              {/* Etiqueta refinada */}
              <p className="text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};