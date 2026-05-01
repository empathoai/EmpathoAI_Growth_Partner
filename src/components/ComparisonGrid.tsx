import React from 'react';
import { motion } from 'framer-motion';

const ComparisonGrid: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-24 border-b border-white/15 bg-black">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-24">
          <h2 className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6rem] uppercase leading-[0.95] text-[#F5F5F5] max-w-[900px]">
            BROKEN GROWTH <br />
            VS <span className="text-[#C56A1A]">STRUCTURED GROWTH</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#2A2F36] border border-divider relative overflow-hidden">
          <motion.div
            className="bg-black p-8 md:p-12 flex flex-col justify-start min-h-[420px] md:min-h-[460px] group transition-all duration-1000 lg:border-r lg:border-divider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mt-0 max-w-[420px]">
              <h3 className="font-helvetica font-bold text-3xl md:text-4xl text-gray-mid uppercase opacity-70">WASTED EFFORT</h3>
              <ul className="space-y-3 mt-5">
                {noiseItems.map((item, idx) => (
                  <li key={idx} className="font-helvetica font-medium text-xl md:text-2xl text-gray-mid leading-[1.3] text-balance">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-black p-8 md:p-12 flex flex-col justify-start min-h-[420px] md:min-h-[460px] group hover:bg-white/[0.05] transition-all duration-1000"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="mt-0 max-w-[420px]">
              <h3 className="font-helvetica font-bold text-3xl md:text-4xl uppercase"><span className="text-[#C56A1A]">REAL</span> <span className="text-[#F5F5F5]">GROWTH</span></h3>
              <ul className="space-y-3 mt-5">
                {signalItems.map((item, idx) => (
                  <li key={idx} className="font-helvetica font-medium text-xl md:text-2xl text-[#F5F5F5] leading-[1.3] text-balance">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const noiseItems: React.ReactNode[] = [
  "You spend more to get the same results",
  "You chase leads that never convert",
  "Your team works harder without growing",
  "Everything depends on constant effort"
];

const signalItems: React.ReactNode[] = [
  "Your effort turns into real revenue",
  "You focus only on high-quality demand",
  "Your team works with clarity",
  "Growth continues without constant pressure"
];

export default ComparisonGrid;
