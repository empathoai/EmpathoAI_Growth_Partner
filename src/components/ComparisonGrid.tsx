import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ComparisonGrid: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-24 border-b border-white/15 bg-void">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header: Mirrored from SectorDominance for absolute consistency */}
        <div className="mb-20 md:mb-32">
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-lg md:text-xl text-noise uppercase tracking-widest"
            >
              DIFFERENTIAL_ANALYSIS_V3
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter font-extrabold text-3xl sm:text-4xl md:text-[6.5rem] uppercase tracking-brutal leading-none max-w-4xl text-balance"
          >
            Noise vs. <span className="text-noise font-mono">[</span>Rigor<span className="text-noise font-mono">]</span>
          </motion.p>
        </div>

        {/* Grid: Mirrored Architecture from Methodology/SectorDominance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/20 border border-white/20 relative overflow-hidden">

          {/* Side A: The Noise - Grayscale/Faded Legacy */}
          <motion.div
            className="bg-void p-10 md:p-16 flex flex-col justify-between min-h-[550px] md:min-h-[650px] group transition-all duration-1000 lg:border-r lg:border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-white/50 border border-white/10 px-2 py-1 tracking-[0.3em] uppercase">
                  [ LEGACY_SYSTEM / OBSOLETE ]
                </span>
              </div>
              <span className="font-mono text-6xl md:text-8xl text-white/10 block leading-none select-none tracking-tighter">NOISE_A</span>
              <span className="font-mono text-sm md:text-base text-gray-500 uppercase tracking-[0.4em] block">Tactical Fragmentation</span>
            </div>

            <div className="space-y-8 mt-12 md:mt-0">
              <h3 className="font-inter font-bold text-2xl md:text-3xl tracking-tight text-white/60 uppercase">Outbound Variance</h3>
              <ul className="space-y-6">
                {noiseItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5">
                    <X className="w-5 h-5 mt-1 shrink-0 text-gray-600" strokeWidth={1} />
                    <span className="font-montserrat font-light text-lg md:text-xl text-gray-400 leading-relaxed text-balance">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Side B: The Signal - High Fidelity / Active */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-xl p-10 md:p-16 flex flex-col justify-between min-h-[550px] md:min-h-[650px] group hover:bg-white/[0.05] transition-all duration-1000 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                <span className="font-mono text-[9px] text-white border border-white/40 px-2 py-1 tracking-[0.3em] uppercase">
                  [ SOVEREIGN_PROTOCOL / ACTIVE ]
                </span>
              </div>
              <span className="font-mono text-6xl md:text-8xl text-white/10 block leading-none select-none tracking-tighter">SIGNAL_B</span>
              <span className="font-mono text-sm md:text-base text-white uppercase tracking-[0.4em] block">Sovereign Infrastructure</span>
            </div>

            <div className="space-y-8 mt-12 md:mt-0">
              <h3 className="font-inter font-bold text-2xl md:text-3xl tracking-tight text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Revenue Engineering</h3>
              <ul className="space-y-6">
                {signalItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5">
                    <Check className="w-5 h-5 mt-1 shrink-0 text-white/80" strokeWidth={1} />
                    <span className="font-montserrat font-light text-lg md:text-xl text-white/90 leading-relaxed text-balance">
                      {item}
                    </span>
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

const noiseItems = [
  "Generic outbound scripts optimized for volume over high-intent.",
  "Junior management with excessive churn and protocol latency.",
  "Focus on vanity metrics (Clicks/Leads) over institutional profit.",
  "Disconnected tech stacks resulting in critical attribution leakage.",
  "Retainer-based models prioritizing maintenance over growth."
];

const signalItems = [
  "Integrated revenue infrastructure engineered for sovereign scale.",
  "Agentic protocols precision-tuned to sector-specific intent.",
  "Direct partner-level strategic execution and capital rigor.",
  "100% Data feedback loops with absolute ROI transparency.",
  "Mathematically tethered models (Skin in the Game participation)."
];

export default ComparisonGrid;