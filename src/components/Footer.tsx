export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20 py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-serif text-brand-ivory tracking-[0.25em] uppercase">
          Bidjed
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs tracking-widest text-brand-light/60 uppercase">
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#booking" className="hover:text-brand-gold transition-colors">Contact</a>
          <a href="https://www.instagram.com/bidjed_belmeliani/" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a>
          <a href="mailto:bidjedbelmeliani@gmail.com" className="hover:text-brand-gold transition-colors">Email</a>
        </div>
        <div className="text-xs tracking-widest text-brand-light/40 uppercase flex flex-col items-center md:items-end gap-2 text-center md:text-right mt-8 md:mt-0">
          <span>© {new Date().getFullYear()} All Rights Reserved.</span>
          <span className="text-xs text-brand-light/50 tracking-[0.2em] lowercase">made by <a href="https://heeshvisuals.vercel.app" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors italic">heesh</a></span>
        </div>
      </div>
    </footer>
  );
}
