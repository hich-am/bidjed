export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20 py-10 md:py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-20">
        
        {/* Top Section: Logo and Navigation */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-3xl font-serif text-brand-ivory tracking-[0.25em] uppercase">
            Bidjed
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 text-xs tracking-widest text-brand-light/60 uppercase">
            <a href="#about" className="hover:text-brand-gold transition-colors">Presence</a>
            <a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a>
            <a href="#work" className="hover:text-brand-gold transition-colors">Experience</a>
            <a href="#booking" className="hover:text-brand-gold transition-colors">Book</a>
            <a href="https://www.instagram.com/bidjed_belmeliani/" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a>
            <a href="mailto:Sevenbidjed@gmail.com" className="hover:text-brand-gold transition-colors">Email</a>
          </div>
        </div>

        {/* Bottom Section: Copyright & Credit */}
        <div className="w-full border-t border-brand-gold/10 pt-5 flex flex-col items-center text-center gap-2">
          <div className="text-sm tracking-[0.2em] text-brand-light/60 uppercase">
            © {new Date().getFullYear()} Bidjed Belmeliani. All Rights Reserved.
          </div>
          <div className="text-sm text-brand-light/40 tracking-[0.3em]">
            Designed by <a href="https://heeshvisuals.vercel.app" target="_blank" rel="noreferrer" className="text-brand-gold/60 hover:text-brand-gold transition-colors italic font-light lowercase">heesh visuals</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
