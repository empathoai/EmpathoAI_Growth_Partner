import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    num: '01',
    label: '[DIGITAL DISCOVERY]',
    title: 'Synthetic Testing',
    desc: 'We simulate your market before spending a dollar, identifying high-intent accounts via non-linear signals.'
  },
  {
    num: '02',
    label: '[ACTION FOUNDATION]',
    title: 'Unified Data',
    desc: 'We unify Marketing, Sales, and Product into a single \'System of Action\' that triggers autonomous workflows.'
  },
  {
    num: '03',
    label: '[STRAT-AGENT]',
    title: 'Agent Deployment',
    desc: 'Agentic fleets handle 80% of execution. Humans focus purely on closing and relationship architecture.'
  },
  {
    num: '04',
    label: '[FLYWHEEL MOAT]',
    title: 'Proprietary Intelligence',
    desc: 'Your growth generates proprietary data benchmarks that competitors cannot copy, creating a defensive moat.'
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-24 border-b border-white/15 bg-void">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-32">
          <h2 className="font-mono text-lg md:text-xl text-noise uppercase tracking-widest mb-4">The Sovereign Process</h2>
          <p className="font-inter font-extrabold text-4xl sm:text-6xl md:text-[6.5rem] tracking-brutal uppercase leading-[0.9]">The Sovereign <span className="text-noise font-mono">[</span>Process<span className="text-noise font-mono">]</span></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/20 border border-white/20">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              className="bg-void p-10 md:p-16 flex flex-col justify-between min-h-[400px] md:min-h-[500px] hover:bg-white/[0.05] backdrop-blur-sm transition-colors duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="space-y-6">
                <span className="font-mono text-6xl md:text-8xl text-noise block leading-none">{phase.num}</span>
                <span className="font-mono text-base md:text-lg text-noise uppercase tracking-[0.3em] block">{phase.label}</span>
              </div>

              <div className="space-y-6 md:space-y-8 mt-12 md:mt-0">
                <h3 className="font-inter font-bold text-3xl md:text-4xl tracking-tight text-white uppercase">{phase.title}</h3>
                <p className="font-montserrat text-lg md:text-body-lg leading-relaxed text-white/70">
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