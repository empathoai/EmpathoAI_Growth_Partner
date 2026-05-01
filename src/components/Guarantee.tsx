import React from 'react';
import { motion } from 'framer-motion';

interface GuaranteeProps {
  onCtaClick: () => void;
}

const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-24 bg-[#0B0B0C] border-b border-white/15 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className="bg-white/[0.01] backdrop-blur-3xl border border-divider p-12 md:p-24 shadow-2xl">
          <h2 className="font-helvetica font-bold text-4xl sm:text-6xl md:text-8xl uppercase mb-8 leading-none text-[#F5F5F5] max-w-4xl mx-auto">
            FIX THE SYSTEM OR DON'T PAY
          </h2>

          <p className="font-helvetica font-regular text-lg md:text-2xl text-gray-mid mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto">
            If your system doesn't improve, you don't pay.
          </p>

          <button
            onClick={onCtaClick}
            className="institutional-btn shimmer-active flex items-center justify-center w-full md:w-auto bg-[#C56A1A] text-[#F5F5F5] px-8 py-6 md:px-12 md:py-8 font-helvetica font-bold uppercase text-sm md:text-lg tracking-label transition-all duration-500 mx-auto"
          >
            START DIAGNOSIS
          </button>
        </div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="font-helvetica font-bold text-[50vw] leading-none uppercase">RISK</span>
      </div>
    </section>
  );
};

export default Guarantee;

