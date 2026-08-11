import React from 'react';
import { JournalCard } from '../ui/JournalCard';
import { ArrowRight } from 'lucide-react';

// Data real estructurada desde los registros de la DICyT
const FEATURED_JOURNALS = [
  {
    id: 'RACBN',
    title: 'Revista científica ciencias naturales y biológicas',
    issue: 'ISSN: 2958-3535',
    articles: 12, // Dato de ejemplo temporal
    cover: '/images/acbn.jpg',
    tag: 'Biológicas',
    ojsLink: 'https://ojs.uap.bo/index.php/RACBN/en' 
  },
  {
    id: 'RACEF',
    title: 'Revista científica ciencias económicas y financieras',
    issue: 'ISSN: 2957-689X',
    articles: 15,
    cover: '/images/acef.jpg',
    tag: 'Económicas',
    ojsLink: 'https://ojs.uap.bo/index.php/RACEF/en'
  },
  {
    id: 'RACS',
    title: 'Revista científica ciencias de la salud',
    issue: 'ISSN: 2958-3543',
    articles: 18,
    cover: '/images/acs.jpg',
    tag: 'Salud',
    ojsLink: 'https://ojs.uap.bo/index.php/RACS/en'
  },
  {
    id: 'RACyT',
    title: 'Revista DICyT ciencias y tecnología',
    issue: 'ISSN: 3005-3501',
    articles: 10,
    cover: '/images/acyt.jpg', // Asumiendo que nombraste acyt.jpg a esta portada
    tag: 'Tecnología',
    ojsLink: 'https://ojs.uap.bo/index.php/RACyT/en'
  },
  {
    id: 'RACJyP',
    title: 'Revista Científica Ciencias Jurídicas y Políticas',
    issue: 'ISSN: 3005-5180',
    articles: 14,
    cover: '/images/acjyp.jpg',
    tag: 'Jurídicas',
    ojsLink: 'https://ojs.uap.bo/index.php/RACJyP'
  },
  {
    id: 'RACSyH',
    title: 'Revista Científica Ciencias Sociales Y Humanísticas',
    issue: 'ISSN: 3005-5180',
    articles: 11,
    cover: '/images/acsyh.jpg',
    tag: 'Sociales',
    ojsLink: 'https://ojs.uap.bo/index.php/RACSyH/en'
  }
];

export const FeaturedJournals = () => {
  return (
    <section id="revistas" className="relative py-24 bg-[#F8FAFC]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#C8102E] text-xs tracking-[0.2em] uppercase font-black">
                — 01
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-slate-400 text-xs tracking-widest uppercase font-semibold">
                Revistas Destacadas
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-[#0A1F5C] uppercase tracking-tight">
              Producción Científica
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#0A1F5C] to-[#C8102E] rounded-full mt-6"></div>
          </div>
          
          <a href="/revistas" className="group flex items-center gap-2 text-[#C8102E] font-bold text-sm bg-white border border-slate-200 px-5 py-2.5 rounded-full hover:border-[#C8102E] hover:shadow-md transition-all">
            Explorar todo el catálogo
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mostramos solo las 3 primeras en el Home para no saturar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED_JOURNALS.slice(0, 3).map((journal) => (
            <JournalCard key={journal.id} {...journal} />
          ))}
        </div>
      </div>
    </section>
  );
};