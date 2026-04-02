import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Showreel() {
  return (
    <section id="showreel" className="py-32 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-gold/30" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold/30" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-brand-gold uppercase block mb-4">The Actor</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory uppercase tracking-wide">
            Cinematic Showreel
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto aspect-video cursor-pointer group"
        >
          {/* Film borders */}
          <div className="absolute -inset-1 border border-brand-gold/20 z-0" />
          <div className="absolute -inset-2 border border-brand-gold/10 z-0" />
          
          <div className="relative w-full h-full bg-brand-black overflow-hidden z-10 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop" 
              alt="Cinematic Showreel Placeholder" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-50 group-hover:scale-105 group-hover:brightness-75 transition-all duration-1000"
            />
            
            <div className="relative z-20 w-20 h-20 md:w-24 md:h-24 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-black/30 backdrop-blur-sm group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors duration-500">
              <Play className="text-brand-ivory group-hover:text-brand-ivory w-8 h-8 md:w-10 md:h-10 ml-2 transition-colors duration-500" strokeWidth={1} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
