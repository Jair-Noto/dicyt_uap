import React from 'react';
import { BookCard } from '../components/ui/BookCard';

// Datos oficiales de los Libros y Monografías
const ALL_BOOKS = [
  {
    title: 'GOBERNANZA, JUSTICIA Y DESARROLLO EN TERRITORIOS AMAZÓNICOS: ESTUDIOS MULTIDISCIPLINARIOS DESDE LA UNIVERSIDAD AMAZÓNICA DE PANDO',
    author: 'Edición Institucional',
    year: 2026,
    pages: 350,
    cover: '/images/libro.jpg', // Reemplazar luego con portada real
    category: 'Gobernanza',
    downloadLink: 'https://www.editoracientifica.com.br/books/gobernanza-justicia-y-desarrollo-en-territorios-amazonicos-estudios-multidisciplinarios-desde-la-universidad-amazonica-de-pando'
  },
  {
    title: 'DINÁMICAS SOCIOAMBIENTALES, LEGALES Y ECONÓMICAS EN LA TRIPLE FRONTERA MADRE DE DIOS (PERÚ), ACRE (BRASIL) Y PANDO (BOLIVIA)',
    author: 'Edición Institucional',
    year: 2026,
    pages: 280,
    cover: '/images/socioeconomia.jpg',
    category: 'Socioeconomía',
    downloadLink: 'https://www.editoracientifica.com.br/books/dinamicas-socioambientales-legales-y-economicas-en-la-triple-frontera-madre-de-dios-peru-acre-brasil-y-pando-bolivia'
  },
  {
    title: 'BOSQUE AMAZÓNICO EN LA ENCRUCIJADA DEL SIGLO XXI: CRISIS CLIMÁTICA, GOBERNANZA, CRIMEN AMBIENTAL Y TECNOLOGÍAS PARA EL FUTURO',
    author: 'Edición Institucional',
    year: 2026,
    pages: 410,
    cover: '/images/medioambiente.jpg',
    category: 'Medio Ambiente',
    downloadLink: 'https://www.editoracientifica.com.br/books/bosque-amazonico-en-la-encrucijada-del-siglo-xxi-crisis-climatica-gobernanza-crimen-ambiental-y-tecnologias-para-el-futuro'
  },
  {
    title: 'DESARROLLO SOSTENIBLE Y BIODIVERSIDAD EN PANDO: ESTUDIOS SOBRE EUTERPE PRECATÓRIA MART., AGRICULTURA Y SOCIOECONOMÍA',
    author: 'Edición Institucional',
    year: 2025,
    pages: 320,
    cover: '/images/biodiversidad.jpg',
    category: 'Biodiversidad',
    downloadLink: 'https://www.editoracientifica.com.br/books/desarrollo-sostenible-y-biodiversidad-en-pando-estudios-sobre-euterpe-precatoria-mart-agricultura-y-socioeconomia'
  },
  {
    title: 'VISIONES CONTEMPORÁNEAS: DERECHO, EDUCACIÓN E INVESTIGACIÓN',
    author: 'Edición Institucional',
    year: 2024,
    pages: 245,
    cover: '/images/derecho.jpg',
    category: 'Derecho y Educación',
    downloadLink: 'https://www.editoracientifica.com.br/books/visiones-contemporaneas-derecho-educacion-e-investigacion'
  },
  {
    title: 'INGENIERÍA Y TECNOLOGÍA: APORTES Y AVANCES EN LOS ÚLTIMOS TEMPOS',
    author: 'Edición Institucional',
    year: 2024,
    pages: 310,
    cover: '/images/ingenieria.jpg',
    category: 'Ingeniería',
    downloadLink: 'https://www.editoracientifica.com.br/books/ingenieria-y-tecnologia-aportes-y-avances-en-los-ultimos-tempos'
  },
  {
    title: 'RECURSOS NATURALES Y MEDIO AMBIENTE: ALTERNATIVAS DE CONSERVACIÓN SOSTENIBLE EN LA AMAZONIA BOLIVIANA',
    author: 'Edición Institucional',
    year: 2023,
    pages: 290,
    cover: '/images/medioambiente_1.jpg',
    category: 'Medio Ambiente',
    downloadLink: 'https://www.editoracientifica.com.br/books/isbn/978-65-5360-307-3'
  },
  {
    title: 'DE LA TEORÍA A LA PRÁCTICA: EXPERIENCIAS Y APLICACIONES EN SALUD',
    author: 'Edición Institucional',
    year: 2023,
    pages: 275,
    cover: '/images/salud.jpg',
    category: 'Salud',
    downloadLink: 'https://www.editoracientifica.com.br/books/de-la-teoria-a-la-practica-experiencias-y-aplicaciones-en-salud'
  },
  {
    title: 'CRECIMIENTO Y DESARROLLO SOCIOECONÓMICO EN LA AMAZONIA BOLIVIANA: UNA PERSPECTIVA SOSTENIBLE',
    author: 'Edición Institucional',
    year: 2023,
    pages: 330,
    cover: '/images/economia.jpg',
    category: 'Economía',
    downloadLink: 'https://www.editoracientifica.com.br/books/isbn/978-65-5360-306-6'
  }
];

export default function LibrosPage() {
  return (
    <main className="flex-grow bg-[#F8FAFC] min-h-screen pb-24">
      {/* ── HEADER INTERNO AZUL INSTITUCIONAL ── */}
      <div className="bg-[#0A1F5C] pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Patrón de fondo geométrico */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`, backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#C8102E] text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
            Repositorio Bibliográfico
          </span>
          <h1 style={{ fontFamily: "'Lora', Georgia, serif" }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Libros y Volumenes Académicos
          </h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Colección de estudios multidisciplinarios, avances y aportes científicos de nuestra comunidad académica.
          </p>
        </div>
      </div>

      {/* ── GRILLA DE LIBROS ── */}
      {/* Añadido el -mt-10 y relative z-20 para que los libros se superpongan ligeramente a la cabecera */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {ALL_BOOKS.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </main>
  );
}