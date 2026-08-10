import { Hero } from './components/home/Hero';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-black text-uap-blue uppercase tracking-tight mb-4">
            Producción Científica Reciente
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-uap-blue to-uap-red rounded-full mb-12"></div>
          
          <p className="text-slate-500 max-w-2xl">
            Aquí irá la grilla conectada a los datos de la DICyT.
          </p>
        </div>
      </section>
    </main>
  );
}