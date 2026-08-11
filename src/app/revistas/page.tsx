import React from 'react';
import { JournalCard } from '../components/ui/JournalCard';

// Datos oficiales de las Revistas Científicas de la UAP
const ALL_JOURNALS = [
  {
    id: 'RACBN',
    title: 'Revista científica ciencias naturales y biológicas', //[cite: 11]
    issue: 'ISSN: 2958-3535', //[cite: 11]
    articles: 24, 
    cover: '/images/acbn.jpg',
    tag: 'Biológicas', 
    ojsLink: 'https://ojs.uap.bo/index.php/RACBN/en' //[cite: 11]
  },
  {
    id: 'RACEF',
    title: 'Revista científica ciencias económicas y financieras', //[cite: 11]
    issue: 'ISSN: 2957-689X', //[cite: 11]
    articles: 18,
    cover: '/images/acef.jpg',
    tag: 'Económicas',
    ojsLink: 'https://ojs.uap.bo/index.php/RACEF/en' //[cite: 11]
  },
  {
    id: 'RACS',
    title: 'Revista científica ciencias de la salud', //[cite: 11]
    issue: 'ISSN: 2958-3543', //[cite: 11]
    articles: 31,
    cover: '/images/acs.jpg',
    tag: 'Salud',
    ojsLink: 'https://ojs.uap.bo/index.php/RACS/en' //[cite: 11]
  },
  {
    id: 'RACyT',
    title: 'Revista DICyT ciencias y tecnología', //[cite: 11]
    issue: 'ISSN: 3005-3501', //[cite: 11]
    articles: 15,
    cover: '/images/acyt.jpg', 
    tag: 'Tecnología',
    ojsLink: 'https://ojs.uap.bo/index.php/RACyT/en' //[cite: 11]
  },
  {
    id: 'RACJyP',
    title: 'Revista Científica Ciencias Jurídicas y Políticas', //[cite: 11]
    issue: 'ISSN: 3005-5180', //[cite: 11]
    articles: 22,
    cover: '/images/acjyp.jpg',
    tag: 'Jurídicas',
    ojsLink: 'https://ojs.uap.bo/index.php/RACJyP' //[cite: 11]
  },
  {
    id: 'RACSyH',
    title: 'Revista Científica Ciencias Sociales Y Humanísticas', //[cite: 11]
    issue: 'ISSN: 3005-5180', //[cite: 11]
    articles: 19,
    cover: '/images/acsyh.jpg',
    tag: 'Sociales',
    ojsLink: 'https://ojs.uap.bo/index.php/RACSyH/en' //[cite: 11]
  }
];

export default function RevistasPage() {
  return (
    <main className="flex-grow bg-[#F8FAFC] min-h-screen pb-24">
      {/* ── HEADER INTERNO ── */}
      <div className="bg-[#0A1F5C] pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`, backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#C8102E] text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
            Catálogo Oficial
          </span>
          <h1 style={{ fontFamily: "'Lora', Georgia, serif" }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Revistas Científicas
          </h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Explora las publicaciones periódicas indexadas de las diferentes áreas del conocimiento de la Universidad Amazónica de Pando.
          </p>
        </div>
      </div>

      {/* ── GRILLA DE REVISTAS ── */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ALL_JOURNALS.map((journal) => (
            <JournalCard key={journal.id} {...journal} />
          ))}
        </div>
      </div>
    </main>
  );
}