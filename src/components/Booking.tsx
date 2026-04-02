import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-32 bg-black text-brand-ivory border-t border-brand-gold/20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight uppercase tracking-wide mb-12">
              Available for <span className="text-brand-gold italic normal-case font-light">international</span><br/>bookings & collaborations.
            </h2>
            
            <div className="space-y-8 mt-16">
              <a href="mailto:booking@bidjed.com" className="flex items-center gap-6 group w-max">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold transition-all duration-300">
                  <Mail strokeWidth={1} className="w-5 h-5 group-hover:text-brand-black transition-colors" />
                </div>
                <span className="text-sm tracking-widest uppercase text-brand-light/80 group-hover:text-brand-ivory transition-colors">booking@bidjed.com</span>
              </a>
              
              <a href="#" className="flex items-center gap-6 group w-max">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-brand-black transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <span className="text-sm tracking-widest uppercase text-brand-light/80 group-hover:text-brand-ivory transition-colors">@bidjedbel</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-brand-navy p-8 md:p-12 border border-brand-gold/10"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-brand-light/20 pb-4 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm tracking-wider" 
                  placeholder="Your Full Name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-brand-light/20 pb-4 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm tracking-wider" 
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-brand-light/20 pb-4 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm tracking-wider appearance-none">
                  <option className="bg-brand-navy text-brand-ivory" value="campaign">Fashion/Luxury Campaign</option>
                  <option className="bg-brand-navy text-brand-ivory" value="film">Film/Acting Role</option>
                  <option className="bg-brand-navy text-brand-ivory" value="runway">Runway Booking</option>
                  <option className="bg-brand-navy text-brand-ivory" value="other">Other Collaboration</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Message Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-light/20 pb-4 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm tracking-wider resize-none mt-2" 
                  placeholder="Tell us about the project..."
                />
              </div>

              <button type="button" className="w-full border border-brand-gold bg-brand-gold text-brand-black py-4 text-xs tracking-widest uppercase hover:bg-transparent hover:text-brand-gold transition-all mt-8">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
