import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    num: '01',
    label: '[SYSTEM DIAGNOSIS]',
    title: <>FIND THE <span className="text-[#C56A1A]">PROBLEM</span></>,
    desc: <>We find what is slowing your <span className="text-[#C56A1A]">growth</span>.</>
  },
  {
    num: '02',
    label: '[ARCHITECTURE]',
    title: <>FIX THE <span className="text-[#C56A1A]">STRUCTURE</span></>,
    desc: <>We fix how your business is <span className="text-[#C56A1A]">structured</span>.</>
  },
  {
    num: '03',
    label: '[EXECUTION]',
    title: <>IMPLEMENT THE <span className="text-[#C56A1A]">SYSTEM</span></>,
    desc: <>We implement systems that run <span className="text-[#C56A1A]">without you</span>.</>
  },
  {
    num: '04',
    label: '[SCALE]',
    title: <>SCALE <span className="text-[#C56A1A]">RESULTS</span></>,
    desc: <>We scale what is already <span className="text-[#C56A1A]">working</span>.</>
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-24 border-b border-white/15 bg-[#0B0B0C]">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 md:mb-36">
          <p className="font-helvetica font-bold text-4xl sm:text-6xl md:text-[6.5rem] uppercase leading-[0.9] text-[#F5F5F5]">HOW WE WORK</p>
          <p className="mt-6 font-helvetica font-light text-base md:text-lg leading-relaxed text-gray-high max-w-2xl">
            Most companies stop after finding the <span className="text-[#C56A1A]">problem</span>.
            <br />
            We fix the entire <span className="text-[#C56A1A]">system</span>.
          </p>
        </div>

        <div className="grid grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-[#2A2F36] border border-divider">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0B0B0C] p-12 md:p-20 flex flex-col justify-between min-h-[460px] md:min-h-[560px] hover:bg-white/[0.05] backdrop-blur-sm transition-colors duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="space-y-6">
                <span className="font-helvetica font-bold text-6xl md:text-8xl text-gray-mid block leading-none opacity-50">{phase.num}</span>
                <span className="font-helvetica font-light text-gray-mid text-sm md:text-base uppercase tracking-label block">{phase.label}</span>
              </div>

              <div className="space-y-6 md:space-y-8 mt-12 md:mt-0">
                <h3 className="font-helvetica font-bold text-4xl md:text-[2.75rem] text-[#F5F5F5] uppercase">{phase.title}</h3>
                <p className="font-helvetica font-regular text-lg leading-relaxed text-gray-high">
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




