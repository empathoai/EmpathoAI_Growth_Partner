import React from 'react';
import { motion } from 'framer-motion';

const sectors = [
  {
    name: 'WELLNESS',
    protocol: 'High-value patient systems',
    criteria: <>We help clinics generate more <span className="text-[#C56A1A]">predictable</span><br className="hidden md:block" /> patients without increasing operational chaos.</>,
  },
  {
    name: 'INDUSTRIAL',
    protocol: 'Complex B2B environments',
    criteria: <>We reduce long sales cycles and turn<br className="hidden md:block" /> slow pipelines into consistent <span className="text-[#C56A1A]">revenue</span>.</>,
  },
  {
    name: 'PREMIUM DTC',
    protocol: 'Premium consumer brands',
    criteria: <>We turn traffic into <span className="text-[#C56A1A]">repeat buyers</span><br className="hidden md:block" /> and scale without destroying margins.</>,
  },
  {
    name: 'REAL ESTATE',
    protocol: 'Luxury real estate',
    criteria: <>We attract <span className="text-[#C56A1A]">qualified buyers</span> and eliminate<br className="hidden md:block" /> low-intent leads that waste your time.</>,
  },
  {
    name: 'PROFESSIONAL',
    protocol: 'Professional services',
    criteria: <>We position your expertise to attract better clients<br className="hidden md:block" /> and close at <span className="text-[#C56A1A]">higher value</span>.</>,
  }
];

const SectorDominance: React.FC = () => {
  return (
    <section className="py-20 md:py-32 border-b border-white/15 bg-black overflow-hidden">
      <div className="px-6 md:px-24 mb-16 md:mb-24">
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="font-helvetica font-light text-[#F5F5F5] text-sm md:text-base uppercase tracking-label"
          >
            SECTOR VALIDATION REQUIRED
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-helvetica font-bold text-3xl sm:text-4xl md:text-5xl uppercase leading-[1.1] max-w-4xl text-balance text-[#F5F5F5]"
        >
          WE DO NOT WORK <br className="hidden md:block" />
          WITH <span className="text-[#C56A1A]">MOST</span> COMPANIES.
        </motion.p>
      </div>

      <div className="flex flex-col">
        {sectors.map((sector, idx) => (
          <div
            key={idx}
            className="group relative border-b border-divider last:border-0 py-12 md:py-16 px-6 md:px-24 hover:bg-white/[0.03] backdrop-blur-sm transition-colors duration-700"
          >
            <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-8 w-full">
              <div className="flex flex-col md:flex-row items-start md:items-baseline gap-2 md:gap-6 shrink min-w-0 max-w-full">
                <span className="font-helvetica font-light text-[#C56A1A]/80 text-2xl sm:text-4xl md:text-5xl xl:text-[5rem] leading-none select-none shrink-0">
                  0{idx + 1}
                </span>
                <h3 className="font-helvetica font-bold text-4xl sm:text-6xl md:text-[6.5rem] xl:text-[8rem] uppercase leading-none select-none break-words text-white/80 group-hover:text-white transition-colors duration-700">
                  {sector.name}
                </h3>
              </div>

              {/* Sector Details */}
              <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 space-y-6 md:space-y-8 lg:text-right shrink-0 ml-auto max-w-2xl">
                <div>
                  <span className="font-helvetica font-light text-gray-mid text-xs md:text-sm uppercase tracking-label block mb-2">WHAT WE DO</span>
                  <p className="font-helvetica font-bold text-xl md:text-2xl uppercase text-white">{sector.protocol}</p>
                </div>

                <div>
                  <span className="font-helvetica font-light text-gray-mid text-xs md:text-sm uppercase tracking-label block mb-2">HOW WE HELP</span>
                  <p className="font-helvetica font-regular text-base md:text-lg text-gray-high">
                    {sector.criteria}
                  </p>
                </div>

                <div className="flex flex-col lg:items-end gap-4 md:gap-6 pt-4">
                  <p className="font-helvetica font-regular text-sm md:text-base text-gray-mid lg:text-right">
                    If your business <span className="text-[#C56A1A]">cannot sustain growth</span>,<br className="hidden md:block" />
                    we will not move forward.
                  </p>

                  <button className="bg-[#C56A1A] text-[#F5F5F5] font-helvetica font-bold uppercase text-[10px] md:text-xs tracking-label px-6 py-3 md:px-8 md:py-4 hover:opacity-80 transition-opacity w-full md:w-auto">
                    REQUEST SECTOR VALIDATION
                  </button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      <style>{`
        .shadow-silver:hover {
          text-shadow: 0 0 15px rgba(192, 192, 192, 0.4);
        }
      `}</style>
    </section>
  );
};

export default SectorDominance;

