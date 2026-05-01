import React from 'react';
import { motion } from 'framer-motion';

const sectors = [
  {
    title: 'INCONSISTENT GROWTH',
    copy: <>You generate <span className="text-[#C56A1A]">revenue</span>, but it's not predictable.</>,
  },
  {
    title: 'LOW CONVERSION',
    copy: <>You get attention, but it doesn't turn into <span className="text-[#C56A1A]">clients</span>.</>,
  },
  {
    title: 'MESSAGING MISALIGNMENT',
    copy: <><span className="text-[#C56A1A]">You</span> have expertise, but the market doesn't feel it fast enough.</>,
  },
  {
    title: 'ERODING PROFITABILITY',
    copy: <>Growth is happening, but it keeps compressing <span className="text-[#C56A1A]">margins</span>.</>,
  },
  {
    title: 'DISCONNECTED FUNNEL',
    copy: <>Your acquisition engine attracts interest, but nothing <span className="text-[#C56A1A]">connects</span> cleanly.</>,
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

