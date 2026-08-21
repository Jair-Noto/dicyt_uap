// src/data/cursos.ts
export const CURSOS_DICYT = [
  {
    id: 'busqueda-avanzada',
    titulo: 'Estrategias de Búsqueda Avanzada en Bases de Datos Científicas', //[cite: 1]
    modalidad: 'Virtual', //[cite: 1]
    horas: 60, //[cite: 1]
    costo: { estudiantes: 150, docentes: 200, externos: 250 }, // Tarifas estándar DICyT
    estado: 'Inscripciones Abiertas',
    imagen: '/images/cursos/busqueda.jpg',
    presentacion: 'Dirigido a fortalecer las competencias informacionales, metodológicas y tecnológicas de docentes, investigadores y profesionales que requieren localizar, seleccionar, gestionar y evaluar información científica pertinente y de calidad.' //[cite: 1]
  },
  {
    id: 'formacion-tutores',
    titulo: 'Formación de Tutores y Miembros de Tribunales de Tesis para Programas de Posgrado', //[cite: 2]
    modalidad: 'Virtual', //[cite: 2]
    horas: 60, //[cite: 2]
    costo: { general: 250 }, //[cite: 2]
    estado: 'Próximamente',
    imagen: '/images/cursos/tutores.jpg',
    presentacion: 'Dirigido a fortalecer las competencias pedagógicas, metodológicas, normativas y éticas de los docentes y profesionales que asumen la responsabilidad de acompañar y evaluar procesos de investigación conducentes a grado académico.' //[cite: 2]
  },
  {
    id: 'ia-investigacion',
    titulo: 'Inteligencia Artificial Generativa Aplicada a la Investigación Científica', //[cite: 3]
    modalidad: 'Híbrida y virtual', //[cite: 3]
    horas: 60, //[cite: 3]
    costo: { estudiantes: 150, docentes: 200, externos: 250 }, //[cite: 3]
    estado: 'Inscripciones Abiertas',
    imagen: '/images/cursos/ia-investigacion.jpg',
    presentacion: 'Desarrollar competencias prácticas, críticas y éticas para integrar IA generativa como herramienta de apoyo en las etapas de investigación científica, manteniendo verificación humana, trazabilidad, rigor metodológico e integridad académica.' //[cite: 3]
  },
  {
    id: 'bioestadistica-ia',
    titulo: 'Bioestadística Básica en Salud con Herramientas de Inteligencia Artificial', //[cite: 4]
    modalidad: 'Híbrida / Virtual', //[cite: 4]
    horas: 60, //[cite: 4]
    costo: { estudiantes: 150, docentes: 200, externos: 250 }, //[cite: 4]
    estado: 'Inscripciones Abiertas',
    imagen: '/images/cursos/bioestadistica.jpg',
    presentacion: 'Formación práctica y progresiva para interpretar, organizar, analizar y comunicar datos básicos de salud mediante herramientas bioestadísticas y apoyo responsable de Inteligencia Artificial (IA).' //[cite: 4]
  },
  {
    id: 'ia-aula',
    titulo: 'Inteligencia Artificial Aplicada en el Aula', //[cite: 5]
    modalidad: 'Híbrida y virtual', //[cite: 5]
    horas: 60, //[cite: 5]
    costo: { estudiantes: 150, docentes: 200, externos: 250 }, //[cite: 5]
    estado: 'Próximamente',
    imagen: '/images/cursos/ia-aula.jpg',
    presentacion: 'Diseño de experiencias de aprendizaje, evaluación y productividad académica con IA.' //[cite: 5]
  },
  {
    id: 'docencia-digital',
    titulo: 'Docencia Digital: Diseño y Gestión de Experiencias de Aprendizaje en Entornos Híbridos y Virtuales', //[cite: 6]
    modalidad: 'Híbrida y Virtual', //[cite: 6]
    horas: 60, //[cite: 6]
    costo: { estudiantes: 150, docentes: 200, externos: 250 }, //[cite: 6]
    estado: 'Inscripciones Abiertas',
    imagen: '/images/cursos/docencia.jpg',
    presentacion: 'Desarrolla capacidades prácticas para planificar, facilitar, evaluar y mejorar procesos de enseñanza-aprendizaje mediados por tecnologías.' //[cite: 6]
  },
  {
    id: 'metodologia-apa',
    titulo: 'Metodología de la Investigación Científica, Redacción Científica y Normas APA 7.ª Edición', //[cite: 7]
    modalidad: 'Híbrida / semipresencial', //[cite: 7]
    horas: 60, //[cite: 7]
    costo: { estudiantes: 150, docentes: 200, externos: 250 }, //[cite: 7]
    estado: 'Inscripciones Abiertas',
    imagen: '/images/cursos/apa.jpg',
    presentacion: 'Diseñado para fortalecer competencias aplicadas en metodología de la investigación científica, redacción científica y uso de las Normas APA 7.ª edición.' //[cite: 7]
  },
  {
    id: 'estadistica-no-parametrica',
    titulo: 'Estadística No Paramétrica Aplicada a la Investigación Científica', //[cite: 8]
    modalidad: 'Virtual', //[cite: 8]
    horas: 80, //[cite: 8]
    costo: { estudiantes: 150, docentes: 200, externos: 250 }, //[cite: 8]
    estado: 'Próximamente',
    imagen: '/images/cursos/no-parametrica.jpg',
    presentacion: 'Fortalecer competencias en análisis cuantitativo de datos cuando no se cumplen los supuestos exigidos por la estadística paramétrica.' //[cite: 8]
  },
  {
    id: 'estadistica-inferencial',
    titulo: 'Estadística Inferencial Aplicada a la Investigación Científica', //[cite: 9]
    modalidad: 'Virtual', //[cite: 9]
    horas: 60, //[cite: 9]
    costo: { estudiantes: 150, docentes: 200, externos: 250 }, //[cite: 9]
    estado: 'Próximamente',
    imagen: '/images/cursos/inferencial.jpg',
    presentacion: 'Fortalecer las competencias analíticas y metodológicas requeridas para el desarrollo de trabajos de investigación, tesis, proyectos de grado y publicaciones científicas.' //[cite: 9]
  }
];