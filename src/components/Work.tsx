import { motion } from 'framer-motion';

const experiences = [
  { title: "Fashion", role: "Various Brands", year: "2026 - Present" },
  { title: "Cinematic Visuals", role: "Various Brands", year: "2026 - Present" },
  { title: "Performance-based Content", role: "Various Brands", year: "2026 - Present" },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-brand-gold uppercase block mb-4">Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory uppercase tracking-wide">
            Work &<br />Collaborations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border border-brand-gold/10 p-8 md:p-12 hover:border-brand-gold/40 transition-colors duration-500 bg-brand-navy/30 group"
            >
              <div className="text-[10px] tracking-widest text-brand-gold mb-8 uppercase line-clamp-1">{exp.year}</div>
              <h3 className="text-xl md:text-2xl font-serif text-brand-ivory uppercase tracking-wider mb-2 group-hover:text-brand-gold transition-colors duration-300">
                {titleCase(exp.title)}
              </h3>
              <p className="text-xs text-brand-light/60 tracking-widest uppercase">{exp.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function titleCase(str: string) {
  return str;
}
