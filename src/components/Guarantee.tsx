import React from 'react';
import { motion } from 'framer-motion';

interface GuaranteeProps {
  onCtaClick: () => void;
}

const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-24 bg-void border-b border-white/15 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <span className="font-mono text-sm md:text-base text-noise uppercase tracking-[0.4em] block mb-8">Performance Commitment</span>

        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-12 md:p-24 shadow-2xl">
          <h2 className="font-inter font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase mb-8 leading-none text-white">
            <span className="text-noise font-mono">[</span>45 Days<span className="text-noise font-mono">]</span> <br className="md:hidden" />
            or <span className="text-white/40">Zero</span> Fee.
          </h2>

          <p className="font-montserrat text-lg md:text-2xl text-noise mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto">
            "We own the results. If institutional benchmarks are not met within 45 days of deployment, we work without fees until they are. Performance is non-negotiable."
          </p>

          <button
            onClick={onCtaClick}
            className="institutional-btn shimmer-active w-full md:w-auto bg-white text-black px-12 py-6 md:px-24 md:py-10 font-mono font-bold uppercase text-lg md:text-xl tracking-[0.2em] hover:bg-zinc-200 transition-all duration-700"
          >
            Request Institutional Access
          </button>
        </div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="font-inter font-extrabold text-[50vw] leading-none uppercase tracking-tighter">RISK</span>
      </div>
    </section>
  );
};

export default Guarantee;