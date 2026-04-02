export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20 py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-serif text-brand-ivory tracking-[0.25em] uppercase">
          Bidjed
        </div>
        <div className="flex gap-8 text-xs tracking-widest text-brand-light/60 uppercase">
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#booking" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>
        <div className="text-xs tracking-widest text-brand-light/40 uppercase">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
