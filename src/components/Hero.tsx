import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const maskTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <section className="relative h-[100svh] md:min-h-screen flex flex-col justify-center px-6 md:px-24 pt-16 pb-8 md:py-24 overflow-hidden border-b border-white/15 bg-[#0B0B0C]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-full bg-cover bg-center opacity-80"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 25, ease: 'linear' }}
          style={{
            backgroundImage: `url('/images/hero-system-architecture.png')`,
            filter: 'contrast(1.02) brightness(0.82) grayscale(0.18)'
          }}
        />
        <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
        <div className="absolute inset-y-0 left-0 w-full md:hidden bg-gradient-to-r from-black/18 via-black/10 to-transparent" />
      </div>

      <div className="absolute top-24 left-6 md:top-28 md:left-24 z-20">
        <img
          src="/logo_empathoai.svg"
          alt="EmpathoAI"
          className="h-20 md:h-[5.5rem] w-auto"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] flex min-h-0 flex-1 flex-col pt-40 md:pt-40">
        <div className="max-w-[20rem] md:max-w-none space-y-1 md:space-y-0 text-balance">
          <div className="overflow-hidden">
            <motion.h1
              className="font-helvetica font-bold text-[3.35rem] sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.06] md:leading-[0.9] tracking-[-0.03em] md:tracking-normal text-[#F5F5F5]"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.1 }}
            >
              YOUR BUSINESS
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-helvetica font-bold text-[3.35rem] sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.06] md:leading-[0.9] tracking-[-0.03em] md:tracking-normal text-[#F5F5F5]"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.2 }}
            >
              IS <span className="text-[#C56A1A]">NOT</span> STUCK.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-helvetica font-bold text-[3.35rem] sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.06] md:leading-[0.9] tracking-[-0.03em] md:tracking-normal text-[#F5F5F5]"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.3 }}
            >
              YOUR <span className="text-[#C56A1A]">SYSTEM</span> IS.
            </motion.h2>
          </div>
        </div>

        <motion.div
          className="mt-auto flex flex-col items-start gap-6 md:mt-20 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="mt-10 max-w-[18rem] md:mt-0 md:max-w-[720px] space-y-5 md:space-y-6 font-helvetica font-medium text-[1.4rem] md:text-2xl text-[#8A8F98] leading-[1.45] md:leading-relaxed text-balance">
            <p>
              We identify what is slowing your growth
              <br />
              before you invest more time or money.
            </p>
            <p>
              For companies already generating revenue
              <br />
              that need to fix how they grow.
            </p>
          </div>

          <div className="mt-1 md:mt-0 flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 w-full md:w-auto">
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
