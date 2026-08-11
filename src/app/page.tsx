import { Hero } from './components/home/Hero';
import { FeaturedJournals } from './components/home/FeaturedJournals';
import { FeaturedBooks } from './components/home/FeaturedBooks';

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Todo esto solo se renderizará cuando el usuario esté en la ruta "/" */}
      <Hero />
      <FeaturedJournals />
      <FeaturedBooks />
    </main>
  );
}