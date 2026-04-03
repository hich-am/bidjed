import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-32 bg-brand-black text-brand-ivory border-t border-brand-gold/20">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 xl:gap-48">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight uppercase tracking-wide mb-12">
              Available for <span className="text-brand-gold italic normal-case font-light">bookings</span> & <span className="text-brand-gold italic normal-case font-light">collaborations</span>.
            </h2>
            
            <div className="space-y-8 mt-16">
              <a href="mailto:bidjedbelmeliani@gmail.com" className="flex items-center gap-6 group w-max">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold transition-all duration-300">
                  <Mail strokeWidth={1} className="w-5 h-5 group-hover:text-brand-ivory transition-colors" />
                </div>
                <span className="text-sm tracking-widest text-brand-light/80 group-hover:text-brand-ivory transition-colors">bidjedbelmeliani@gmail.com</span>
              </a>
              
              <a href="https://www.instagram.com/bidjed_belmeliani/" target="_blank" rel="noreferrer" className="flex items-center gap-6 group w-max">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-brand-ivory transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <span className="text-sm tracking-widest text-brand-light/80 group-hover:text-brand-ivory transition-colors">@bidjed_belmeliani</span>
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
            <form action="mailto:bidjedbelmeliani@gmail.com" method="POST" encType="text/plain" className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Name</label>
                <input 
                  id="name"
                  name="Name"
                  type="text" 
                  className="w-full bg-transparent border-b border-brand-light/20 pb-4 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm tracking-wider" 
                  placeholder="Your Full Name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Email</label>
                <input 
                  id="email"
                  name="Email"
                  type="email" 
                  className="w-full bg-transparent border-b border-brand-light/20 pb-4 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm tracking-wider" 
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Inquiry Type</label>
                <select id="inquiryType" name="Inquiry Type" className="w-full bg-transparent border-b border-brand-light/20 pb-4 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm tracking-wider appearance-none">
                  <option className="bg-brand-navy text-brand-ivory" value="campaign">Fashion/Luxury Campaign</option>
                  <option className="bg-brand-navy text-brand-ivory" value="film">Film/Acting Role</option>
                  <option className="bg-brand-navy text-brand-ivory" value="runway">Runway Booking</option>
                  <option className="bg-brand-navy text-brand-ivory" value="other">Other Collaboration</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Message Details</label>
                <textarea 
                  id="message"
                  name="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-light/20 pb-4 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm tracking-wider resize-none mt-2" 
                  placeholder="Tell us about the project..."
                  required
                />
              </div>

              <button type="submit" className="w-full border border-brand-gold bg-brand-gold text-brand-ivory py-4 text-xs tracking-widest uppercase hover:bg-transparent hover:text-brand-gold transition-all mt-8">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
