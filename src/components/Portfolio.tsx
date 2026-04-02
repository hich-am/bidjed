import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = ["All", "Luxury & Editorial", "Formal & Suits", "Cinematic Stills", "Runway"];

const portfolioImages = [
  { id: 1, category: "Luxury & Editorial", src: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2600&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 2, category: "Formal & Suits", src: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=2574&auto=format&fit=crop", aspect: "aspect-square" },
  { id: 3, category: "Cinematic Stills", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop", aspect: "aspect-[16/9]" },
  { id: 4, category: "Runway", src: "https://images.unsplash.com/photo-1508317469940-e3de49ba902e?q=80&w=2600&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 5, category: "Luxury & Editorial", src: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2600&auto=format&fit=crop", aspect: "aspect-square" },
  { id: 6, category: "Formal & Suits", src: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2600&auto=format&fit=crop", aspect: "aspect-[3/4]" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-brand-black border-t border-brand-gold/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-ivory uppercase tracking-wide">Editorial<br />Gallery</h2>
          
          <div className="flex flex-wrap gap-4 md:gap-8 justify-start md:justify-end">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  activeCategory === cat ? 'text-brand-gold border-b border-brand-gold' : 'text-brand-light/50 hover:text-brand-ivory'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                className={`relative group cursor-pointer overflow-hidden break-inside-avoid w-full ${img.aspect}`}
                onClick={() => setLightboxImage(img.src)}
              >
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-brand-ivory hover:text-brand-gold transition-colors z-[101]"
              onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={lightboxImage} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
