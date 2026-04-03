import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
//
const portfolioImages = [
  { id: 1, src: "/IMG_2587.JPG.jpeg", aspect: "aspect-[2/4]" },
  { id: 2, src: "/IMG_0388.PNG", aspect: "aspect-square" },
  { id: 3, src: "/IMG_0326.JPG.jpeg", aspect: "aspect-[3/4]" },
  { id: 4, src: "/IMG_0315.JPG.jpeg", aspect: "aspect-[3/4]" },
  { id: 5, src: "/IMG_4914.JPG.jpeg", aspect: "aspect-[3/4]" },
  { id: 6, src: "/IMG_3451.JPG.jpeg", aspect: "aspect-[3/4]" },
  { id: 7, src: "/IMG_0311.JPG.jpeg", aspect: "aspect-[3/4]", position: "object-top" },
  { id: 8, src: "/IMG_3452.JPG.jpeg", aspect: "aspect-square" },
  { id: 9, src: "/IMG_1561.JPG.jpeg", aspect: "aspect-square" },
];

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-brand-black border-t border-brand-gold/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-ivory uppercase tracking-wide">Editorial<br />Gallery</h2>
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {portfolioImages.map((img) => (
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
                <img 
                  src={img.src} 
                  alt="Portfolio Piece" 
                  className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${img.position || 'object-center'}`}
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
