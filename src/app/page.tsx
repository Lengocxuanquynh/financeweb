import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { ChartSection } from '../components/ChartSection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16"> {/* Offset for fixed header */}
        <Hero />
        <Stats />
        <Services />
        <ChartSection />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
