import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const maskTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <section className="relative min-h-[90vh] md:h-[90vh] flex flex-col justify-center px-6 md:px-24 py-20 overflow-hidden border-b border-white/15">
      {/* Background with zoom animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-full bg-cover bg-center opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 25, ease: "linear" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')`,
            filter: 'contrast(1.4) brightness(0.6) grayscale(1)'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1600px]">
        <div className="space-y-0 text-balance leading-tight">
          <div className="overflow-hidden">
            <motion.h1
              className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.0] md:leading-[0.9] text-[#F5F5F5]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.1 }}
            >
              YOUR BUSINESS
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.0] md:leading-[0.9] text-[#F5F5F5]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.2 }}
            >
              IS <span className="text-[#C56A1A]">NOT</span> STUCK.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-helvetica font-bold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] uppercase leading-[1.0] md:leading-[0.9] text-[#F5F5F5]"
              initial={{ y: "100%" }}
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
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 w-full md:w-auto">
            <button
              onClick={onCtaClick}
              className="institutional-btn shimmer-active group flex items-center justify-center gap-4 bg-[#C56A1A] text-[#F5F5F5] px-8 py-6 md:px-12 md:py-8 font-helvetica font-bold uppercase text-sm md:text-lg w-full md:w-auto"
            >
              REQUEST DIAGNOSIS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
            </button>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
