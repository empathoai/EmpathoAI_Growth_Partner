import React from 'react';
import { motion } from 'framer-motion';

const Mechanism: React.FC = () => {
  const cards = [
    { title: 'CAPTURE', sub: 'Mapping high-intent behavioral patterns across desiloed data lakes.' },
    { title: 'CONVERT', sub: 'Agentic sales protocols that qualify and close at institutional scale.' },
    { title: 'COMPOUND', sub: 'Automated retention architecture that extracts maximum lifetime value.' }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-24 border-b border-white/15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mb-20 md:mb-32 items-start">
        <div className="space-y-4">
          <span className="font-mono text-lg md:text-xl text-noise uppercase tracking-widest">Protocol_01</span>
          <h2 className="font-inter font-extrabold text-4xl sm:text-5xl md:text-[5rem] tracking-brutal uppercase leading-none">
            Human <br className="hidden md:block" /> Psychology.
          </h2>
        </div>
        <div className="space-y-4">
          <span className="font-mono text-lg md:text-xl text-noise uppercase tracking-widest">Protocol_02</span>
          <h2 className="font-inter font-extrabold text-4xl sm:text-5xl md:text-[5rem] tracking-brutal uppercase leading-none">
            Machine <br className="hidden md:block" /> Scale.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/15 border border-white/15">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="bg-void p-8 md:p-16 flex flex-col justify-between min-h-[350px] md:min-h-[400px] hover:bg-white/[0.03] transition-colors duration-700"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <span className="font-mono text-base md:text-lg text-noise uppercase tracking-[0.3em]">Module_0{idx + 1}</span>
            <div className="mt-12 md:mt-0">
              <h3 className="font-inter font-bold text-3xl md:text-4xl tracking-tight mb-6 md:mb-8 text-white">[{card.title}]</h3>
              <p className="font-montserrat text-lg md:text-body-lg leading-relaxed opacity-60">{card.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mechanism;