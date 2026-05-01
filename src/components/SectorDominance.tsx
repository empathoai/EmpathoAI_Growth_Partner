import React from 'react';
import { motion } from 'framer-motion';

const sectors = [
  {
    title: 'INCONSISTENT GROWTH',
    copy: <>You cannot predict <span className="text-[#C56A1A]">revenue</span> month to month.</>,
  },
  {
    title: 'LOW CONVERSION',
    copy: <>You generate <span className="text-[#C56A1A]">attention</span>, but it does not turn into <span className="text-[#C56A1A]">clients</span>.</>,
  },
  {
    title: 'MESSAGING MISALIGNMENT',
    copy: <>You have a strong <span className="text-[#C56A1A]">offer</span>, but the market does not <span className="text-[#C56A1A]">respond</span>.</>,
  },
  {
    title: 'ERODING PROFITABILITY',
    copy: <>Revenue grows, but <span className="text-[#C56A1A]">margins</span> keep shrinking.</>,
  },
  {
    title: 'DISCONNECTED FUNNEL',
    copy: <>Your <span className="text-[#C56A1A]">acquisition</span> and <span className="text-[#C56A1A]">conversion</span> do not work together.</>,
  }
];

const SectorDominance: React.FC = () => {
  return (
    <section className="py-20 md:py-32 border-b border-white/15 bg-[#0B0B0C] overflow-hidden">
      <div className="px-6 md:px-24 mb-16 md:mb-24">
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: '100%' }}
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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 font-helvetica font-light text-base md:text-lg leading-relaxed text-gray-high max-w-2xl"
        >
          Most companies try to fix this with more <span className="text-[#C56A1A]">marketing</span>.
          <br />
          That is why it keeps getting <span className="text-[#C56A1A]">worse</span>.
        </motion.p>
      </div>

      <div className="flex flex-col">
        {sectors.map((sector, idx) => (
          <div
            key={idx}
            className="group relative border-b border-divider last:border-0 py-10 md:py-12 px-6 md:px-24 hover:bg-white/[0.03] transition-colors duration-300"
          >
            <div className="flex flex-col gap-4 md:gap-5 max-w-5xl">
              <div className="flex flex-col md:flex-row items-start md:items-baseline gap-2 md:gap-6 min-w-0">
                <span className="font-helvetica font-light text-[#C56A1A] text-2xl sm:text-4xl md:text-5xl xl:text-[5rem] leading-none select-none shrink-0">
                  0{idx + 1}
                </span>
                <h3 className="font-helvetica font-bold text-4xl sm:text-6xl md:text-[5.5rem] xl:text-[7rem] uppercase leading-none break-words text-white/80 group-hover:text-white transition-colors duration-300">
                  {sector.title}
                </h3>
              </div>

              <p className="pl-0 md:pl-[7.25rem] font-helvetica font-regular text-base sm:text-lg md:text-xl text-gray-high max-w-2xl text-pretty">
                {sector.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectorDominance;

