import NoiseOverlay from './components/NoiseOverlay';
import Nav from './components/Nav';
import Thread from './components/Thread';
import Hero from './components/Hero';
import CostSection from './components/CostSection';
import ThreeArtifacts from './components/ThreeArtifacts';
import Protocol from './components/Protocol';
import Demo from './components/Demo';
import Calculator from './components/Calculator';
import Manifesto from './components/Manifesto';
import TradeTiles from './components/TradeTiles';
import Checklist from './components/Checklist';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

// Section order per §6 of the build plan.
export default function App() {
  return (
    <>
      <NoiseOverlay />
      <Nav />
      <Thread />
      <main id="main" className="relative-content">
        <Hero />
        <CostSection />
        <ThreeArtifacts />
        <Protocol />
        <Demo />
        <Calculator />
        <Manifesto />
        <TradeTiles />
        <Checklist />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
