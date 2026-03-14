import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Services from './components/Services';
import Trailers from './components/Trailers';
import ServiceAreas from './components/ServiceAreas';
import Calculator from './components/Calculator';
import Process from './components/Process';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Trailers />
      <ServiceAreas />
      <Calculator />
      <Process />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
