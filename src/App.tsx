import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio.tsx';
import Showreel from './components/Showreel.tsx';
import Work from './components/Work.tsx';
import Booking from './components/Booking.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light font-sans selection:bg-brand-gold selection:text-brand-ivory">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Showreel />
        <Work />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
