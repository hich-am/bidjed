import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-brand-black w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4]">
              <div className="absolute -inset-4 border border-brand-gold/30 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1549471013-3364d7ce50ea?q=80&w=2070&auto=format&fit=crop" 
                alt="Bidjed Portrait" 
                className="relative z-10 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm tracking-[0.3em] text-brand-gold uppercase mb-6">Presence & Discipline</h2>
            <p className="text-2xl md:text-3xl font-serif text-brand-light leading-relaxed mb-10">
              A refined model and actor known for a strong on-screen presence and timeless elegance. Specialized in luxury campaigns, cinematic visuals, and performance-driven storytelling.
            </p>
            
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-brand-gold/20 pt-8">
              <div>
                <span className="block text-[10px] tracking-[0.2em] text-brand-light/40 uppercase mb-2">Location</span>
                <span className="block text-sm text-brand-ivory tracking-widest uppercase">Oran, Algeria</span>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.2em] text-brand-light/40 uppercase mb-2">Height</span>
                <span className="block text-sm text-brand-ivory tracking-widest uppercase">183 cm</span>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.2em] text-brand-light/40 uppercase mb-2">Languages</span>
                <span className="block text-sm text-brand-ivory tracking-widest uppercase">AR • EN • FR</span>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.2em] text-brand-light/40 uppercase mb-2">Specialties</span>
                <span className="block text-sm text-brand-ivory tracking-widest uppercase text-balance">Fashion • Runway • Film • Theatre</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
