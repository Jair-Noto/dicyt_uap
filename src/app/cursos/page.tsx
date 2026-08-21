import React from 'react';
import Link from 'next/link';
import { CURSOS_DICYT } from '../data/cursos';
import { Clock, MonitorPlay } from 'lucide-react';

export default function CursosCatalogPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      {/* ── HEADER DEL CATÁLOGO ── */}
      <div className="bg-[#0A1F5C] pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`, backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#34D399] text-sm tracking-[0.2em] uppercase font-bold mb-4 block drop-shadow-md">
            Formación Continua CEUB
          </span>
          <h1 style={{ fontFamily: "'Lora', Georgia, serif" }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Programas y Capacitaciones
          </h1>
          <p className="text-blue-100/90 max-w-2xl mx-auto text-lg">
            Cursos cortos, virtuales e híbridos diseñados para potenciar las habilidades investigativas y docentes de nuestra comunidad académica.
          </p>
        </div>
      </div>

      {/* ── GRILLA DE CURSOS (FLYERS) ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CURSOS_DICYT.map((curso) => (
            <div key={curso.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-slate-100 hover:shadow-2xl transition-shadow duration-300 group">
              
              {/* Flyer Image Mock */}
              <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                 <div className="absolute top-4 left-4 z-10 bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {curso.estado}
                 </div>
                 {/* Reemplazar con <Image src={curso.imagen} /> cuando tengas las imágenes reales */}
                 <div className="w-full h-full bg-gradient-to-tr from-[#0A1F5C] to-[#1e73be] opacity-90 group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0A1F5C] mb-3 leading-tight group-hover:text-[#C8102E] transition-colors">
                  {curso.titulo}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {curso.presentacion}
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-3 mb-6 border-t border-b border-slate-100 py-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <MonitorPlay size={16} className="text-[#34D399]" />
                    {curso.modalidad}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Clock size={16} className="text-[#34D399]" />
                    {curso.horas} Horas Acad.
                  </div>
                </div>

                {/* Botones */}
                <Link 
                  href={`/cursos/${curso.id}`}
                  className="w-full text-center bg-[#10B981] hover:bg-[#059669] text-white font-bold py-3 rounded-lg transition-colors shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                >
                  Ver Plan Académico
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}