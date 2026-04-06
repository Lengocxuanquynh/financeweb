import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { ChartSection } from '../components/ChartSection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ChartSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
