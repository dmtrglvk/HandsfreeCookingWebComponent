import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import OpenSource from './components/OpenSource';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <HowItWorks />
      <Benefits />
      <OpenSource />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
