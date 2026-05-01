import React from 'react';
import { motion } from 'framer-motion';

const Mechanism: React.FC = () => {
  const cards = [
    { 
      title: 'CAPTURE', 
      sub: <>We identify the right prospects early.</> 
    },
    { 
      title: 'CONVERT', 
      sub: <>We turn interest into paying clients.</> 
    },
    { 
      title: 'GROW', 
      sub: <>We help your existing clients generate more revenue.</> 
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-24 border-b border-white/15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mb-20 md:mb-32 items-start">
        <div className="space-y-4">
          <span className="font-helvetica font-light text-gray-mid text-sm md:text-base uppercase tracking-label">Protocol_01</span>
          <h2 className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6.5rem] uppercase leading-[0.9] text-[#F5F5F5]">
            HOW IT WORKS
          </h2>
        </div>
        <div className="space-y-4">
          <span className="font-helvetica font-light text-gray-mid text-sm md:text-base uppercase tracking-label">Protocol_02</span>
          <h2 className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6.5rem] uppercase leading-[0.9] text-[#F5F5F5]">
            HOW IT WORKS
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/20 border border-divider">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="bg-black p-8 md:p-16 flex flex-col justify-between min-h-[350px] md:min-h-[400px] hover:bg-white/[0.05] backdrop-blur-sm transition-colors duration-700"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <span className="font-helvetica font-light text-gray-mid text-xs md:text-sm uppercase tracking-label">Module_0{idx + 1}</span>
            <div className="mt-12 md:mt-0">
              <h3 className="font-helvetica font-bold text-3xl md:text-4xl mb-6 md:mb-8 text-[#F5F5F5]">{card.title}</h3>
              <p className="font-helvetica font-regular text-lg leading-relaxed text-gray-high">{card.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mechanism;
