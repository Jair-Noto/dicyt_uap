import { Hero } from './components/home/Hero';
import { FeaturedJournals } from './components/home/FeaturedJournals';
import { FeaturedBooks } from './components/home/FeaturedBooks';
import { StatsStrip } from './components/home/StatsStrip';

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Todo esto solo se renderizará cuando el usuario esté en la ruta "/" */}
      <Hero />
      <StatsStrip />
      <FeaturedJournals />
      <FeaturedBooks />
    </main>
  );
}