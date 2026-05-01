import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const maskTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <section className="relative min-h-screen md:min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 md:py-24 overflow-hidden border-b border-white/15 bg-[#0B0B0C]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-full bg-cover bg-center opacity-80"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 25, ease: 'linear' }}
          style={{
            backgroundImage: `url('/images/hero-system-architecture.png')`,
            filter: 'contrast(1.1) brightness(0.95) grayscale(0.15)'
          }}
        />
      </div>

      <div className="absolute top-24 left-6 md:top-28 md:left-24 z-20">
        <img
          src="/logo_empathoai.svg"
          alt="EmpathoAI"
          className="h-20 md:h-[5.5rem] w-auto"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] pt-36 md:pt-40">
        <div className="space-y-0 text-balance leading-tight">
          <div className="overflow-hidden">
            <motion.h1
              className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.0] md:leading-[0.9] text-[#F5F5F5]"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.1 }}
            >
              YOUR BUSINESS
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.0] md:leading-[0.9] text-[#F5F5F5]"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.2 }}
            >
              IS <span className="text-[#C56A1A]">NOT</span> STUCK.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.0] md:leading-[0.9] text-[#F5F5F5]"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.3 }}
            >
              YOUR <span className="text-[#C56A1A]">SYSTEM</span> IS.
            </motion.h1>
          </div>
        </div>

        <motion.div
          className="mt-20 flex flex-col items-start gap-10 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <p className="font-helvetica font-medium text-2xl max-w-[720px] text-[#8A8F98] text-balance leading-relaxed">
            We identify what is slowing your growth<br className="hidden md:block" />
            before you invest more time or money.
            <br className="hidden md:block" />
            For companies already generating revenue that need to fix how they grow.
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 w-full md:w-auto">
            <button
              onClick={onCtaClick}
              className="institutional-btn shimmer-active flex items-center justify-center bg-[#C56A1A] text-[#F5F5F5] px-8 py-6 md:px-12 md:py-8 font-helvetica font-bold uppercase text-sm md:text-lg w-full md:w-auto"
            >
              REQUEST DIAGNOSIS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
