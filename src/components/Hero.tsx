import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="/IMG_3450.JPG.jpeg" 
          alt="Bidjed Belmeliani - Model & Actor" 
          className="w-full h-full object-cover object-[center_5%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 z-10" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col justify-end h-full pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 tracking-wide uppercase max-w-4xl">
            Bidjed Belmeliani
          </h1>
          <p className="text-sm md:text-base font-sans tracking-[0.2em] text-white/90 uppercase mb-12">
            Luxury presence. Cinematic storytelling. Timeless elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#portfolio" className="border border-brand-gold bg-brand-gold text-brand-ivory px-8 py-4 text-xs tracking-widest uppercase hover:bg-transparent hover:text-white transition-all text-center">
              View Portfolio
            </a>
            <a href="#booking" className="border border-white/30 backdrop-blur-sm px-8 py-4 text-xs text-white tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-all text-center">
              Book Talent
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
