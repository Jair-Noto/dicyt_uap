import React from 'react';
import Link from 'next/link';
import { CURSOS_DICYT } from '../../data/cursos';
import { CheckCircle2, ChevronRight, Download } from 'lucide-react';

// Next.js App Router: Generación de rutas dinámicas
export default function DetalleCursoPage({ params }: { params: { id: string } }) {
  const curso = CURSOS_DICYT.find(c => c.id === params.id) || CURSOS_DICYT[0]; // Fallback seguro

  return (
    <main className="min-h-screen bg-white">
      {/* ── HEADER DEL CURSO ── */}
      <div className="bg-[#0A1F5C] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/cursos" className="hover:text-white">Cursos</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium truncate">{curso.titulo}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight mb-6">
            {curso.titulo}
          </h1>
          <div className="flex flex-wrap gap-4">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Modalidad: {curso.modalidad}
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Carga Horaria: {curso.horas} Horas Académicas
            </span>
          </div>
        </div>
      </div>

      {/* ── CUERPO PRINCIPAL (2 COLUMNAS) ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Columna Izquierda: Plan Académico CEUB */}
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-[#0A1F5C] mb-4 border-b border-slate-200 pb-2">1. Presentación y Justificación</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {curso.presentacion}
            </p>
            <p className="text-slate-600 leading-relaxed">
              El presente diseño curricular responde a la necesidad de fortalecer las competencias académicas e investigativas en la comunidad universitaria, cumpliendo con las directrices establecidas por el Comité Ejecutivo de la Universidad Boliviana (CEUB).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A1F5C] mb-4 border-b border-slate-200 pb-2">2. Propósito y Resultados de Aprendizaje</h2>
            <ul className="space-y-3">
              {[
                "Desarrollar competencias técnicas e investigativas aplicadas.",
                "Aplicar metodologías estructuradas según estándares internacionales.",
                "Generar productos académicos defendibles y verificables."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A1F5C] mb-4 border-b border-slate-200 pb-2">3. Estructura Curricular (Matriz)</h2>
            {/* Tabla responsive basada en la estructura CEUB */}
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[#0A1F5C]">
                    <th className="p-4 border-b font-bold text-sm">Módulo / Tema</th>
                    <th className="p-4 border-b font-bold text-sm">Competencia</th>
                    <th className="p-4 border-b font-bold text-sm">Evaluación</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600">
                  <tr>
                    <td className="p-4 border-b">Fundamentos y Análisis de Contexto</td>
                    <td className="p-4 border-b">Comprende el marco teórico y normativo.</td>
                    <td className="p-4 border-b">Diagnóstico inicial</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Estrategias y Desarrollo Práctico</td>
                    <td className="p-4 border-b">Aplica técnicas avanzadas de investigación.</td>
                    <td className="p-4 border-b">Taller aplicado</td>
                  </tr>
                  <tr>
                    <td className="p-4">Proyecto Integrador Final</td>
                    <td className="p-4">Consolida el aprendizaje en un producto.</td>
                    <td className="p-4">Defensa de proyecto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Columna Derecha: Sticky Sidebar para Inscripción y Pagos */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-[#0A1F5C] mb-6">Inversión y Matrícula</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Estudiantes Universitarios</span>
                <span className="text-lg font-bold text-[#0A1F5C]">Bs. 150</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Docentes</span>
                <span className="text-lg font-bold text-[#0A1F5C]">Bs. 200</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-slate-600 font-medium">Personas Externas</span>
                <span className="text-lg font-bold text-[#0A1F5C]">Bs. 250</span>
              </div>
            </div>

            {/* Formulario rápido de Pre-Inscripción (Fase 1) */}
            <form className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Nombre Completo</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10B981] outline-none" placeholder="Juan Pérez" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10B981] outline-none" placeholder="juan@ejemplo.com" />
              </div>
              
              <button type="button" className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-3 rounded-lg transition-colors shadow-lg mt-4">
                Proceder al Pago / Inscripción
              </button>
            </form>

            <button className="w-full flex items-center justify-center gap-2 text-sm text-[#0A1F5C] hover:text-[#C8102E] font-bold py-2 transition-colors">
              <Download size={16} />
              Descargar Plan CEUB (PDF)
            </button>

          </div>
        </div>

      </div>
    </main>
  );
}