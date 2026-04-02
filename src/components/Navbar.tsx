import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-md border-b border-brand-gold/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-serif text-brand-ivory tracking-[0.3em] uppercase">
          Bidjed
        </a>
        <div className="hidden md:flex gap-8 items-center text-xs tracking-[0.2em] text-brand-light/80 uppercase">
          <a href="#about" className="hover:text-brand-gold transition-colors">Presence</a>
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#showreel" className="hover:text-brand-gold transition-colors">Cinema</a>
          <a href="#booking" className="border border-brand-gold/50 px-6 py-2.5 hover:bg-brand-gold hover:text-brand-ivory transition-colors rounded-sm">Book</a>
        </div>
      </div>
    </motion.nav>
  );
}
