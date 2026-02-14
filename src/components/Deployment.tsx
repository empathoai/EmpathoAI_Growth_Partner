import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'DIAGNOSIS', sub: 'Baseline audit of leakage.' },
  { num: '02', title: 'ARCHITECTURE', sub: 'Infrastructure design.' },
  { num: '03', title: 'EXECUTION', sub: 'Module deployment.' },
  { num: '04', title: 'OPTIMIZATION', sub: 'Algorithmic stress-testing.' },
  { num: '05', title: 'SCALE', sub: 'Autonomous production.' }
];

const Deployment: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-24 border-b border-white/15 bg-void">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12">
          <h2 className="font-mono text-xs text-noise uppercase tracking-[0.4em] mb-4">Strategic Sequence</h2>
          <p className="font-inter font-extrabold text-3xl md:text-5xl uppercase tracking-tighter">
            The Deployment <span className="text-noise font-mono">[</span>Protocol<span className="text-noise font-mono">]</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-white/10 overflow-hidden">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative p-8 border-b md:border-b-0 md:border-r last:border-0 border-white/10 group hover:bg-white/[0.03] transition-colors duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="font-mono text-4xl md:text-5xl text-noise/15 group-hover:text-white/40 transition-colors duration-500 mb-6">
                {step.num}
              </div>
              <div className="space-y-3">
                <h3 className="font-inter font-bold text-base md:text-lg uppercase tracking-wider text-white">{step.title}</h3>
                <p className="font-montserrat text-xs md:text-sm text-noise group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
                  {step.sub}
                </p>
              </div>
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-[1px] bg-white/5 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deployment;