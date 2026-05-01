import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'DIAGNOSIS', sub: 'Find the real problem.' },
  { num: '02', title: 'STRUCTURE', sub: 'Fix how the business works.' },
  { num: '03', title: 'EXECUTION', sub: 'Put the system in place.' },
  { num: '04', title: 'IMPROVEMENT', sub: 'Make it perform better.' },
  { num: '05', title: 'SCALE', sub: 'Grow what is already working.' }
];

const Deployment: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-24 border-b border-white/15 bg-black">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12">
          <h2 className="font-helvetica font-light tracking-label text-xs text-gray-mid uppercase mb-4">IMPLEMENTATION SEQUENCE</h2>
          <p className="font-helvetica font-bold text-3xl md:text-5xl uppercase text-[#F5F5F5]">
            HOW THIS GETS IMPLEMENTED
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-divider overflow-hidden">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative p-8 border-b md:border-b-0 md:border-r last:border-0 border-divider group hover:bg-white/[0.03] transition-colors duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="font-helvetica font-bold text-4xl md:text-5xl text-gray-mid group-hover:text-white/40 transition-colors duration-500 mb-6">
                {step.num}
              </div>
              <div className="space-y-3">
                <h3 className="font-helvetica font-bold text-base md:text-lg uppercase tracking-label text-[#F5F5F5]">{step.title}</h3>
                <p className="font-helvetica font-regular text-xs md:text-sm text-gray-mid group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
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
