import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    num: '01',
    label: '[PRE-SIGNAL]',
    title: 'Baseline Audit',
    desc: 'Deep-layer structural analysis of existing revenue leakage and market arbitrage opportunities.'
  },
  {
    num: '02',
    label: '[SIGNAL ACQUISITION]',
    title: 'System Deployment',
    desc: 'Integration of agentic acquisition modules and proprietary behavioral heuristics.'
  },
  {
    num: '03',
    label: '[AUTONOMOUS ALPHA]',
    title: 'Scaled Dominance',
    desc: 'Transition to 24/7 autonomous revenue production with 100% data attribution.'
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-24 border-b border-white/15 bg-void">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-32">
          <h2 className="font-mono text-lg md:text-xl text-noise uppercase tracking-widest mb-4">The Sovereign Process</h2>
          <p className="font-inter font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase">The Sovereign <span className="text-noise font-mono">[</span>Process<span className="text-noise font-mono">]</span></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/15 border border-white/15">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              className="bg-void p-10 md:p-16 flex flex-col justify-between min-h-[400px] md:min-h-[500px] hover:bg-white/[0.03] transition-colors duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="space-y-6">
                <span className="font-mono text-6xl md:text-8xl text-noise/15 block leading-none">{phase.num}</span>
                <span className="font-mono text-base md:text-lg text-noise uppercase tracking-[0.3em] block">{phase.label}</span>
              </div>

              <div className="space-y-6 md:space-y-8 mt-12 md:mt-0">
                <h3 className="font-inter font-bold text-3xl md:text-4xl tracking-tight text-white uppercase">{phase.title}</h3>
                <p className="font-montserrat text-lg md:text-body-lg leading-relaxed opacity-60">
                  {phase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;