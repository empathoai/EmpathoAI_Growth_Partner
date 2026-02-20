import React from 'react';
import { motion } from 'framer-motion';

const sectors = [
  {
    name: 'WELLNESS',
    fullName: 'WELLNESS & LONGEVITY',
    protocol: 'High-LTV Patient Systems',
    criteria: 'Minimum $50K/mo revenue. Professional clinical staff. Scalable patient database.',
    stat: '+42% Avg LTV Growth'
  },
  {
    name: 'INDUSTRIAL',
    fullName: 'INDUSTRIAL & METALLURGY',
    protocol: 'Complex B2B Sales Cycles',
    criteria: 'Direct CEO access. Minimum contract value $25K. No commodity-based models.',
    stat: '11-Month Pipeline Compression'
  },
  {
    name: 'PREMIUM DTC',
    fullName: 'PREMIUM DTC',
    protocol: 'Luxury Brand Scaling & Retention',
    criteria: '70%+ Gross margins. Established brand identity. $30K+ Monthly ad spend.',
    stat: '4.8x Return on Ad Spend'
  },
  {
    name: 'REAL ESTATE',
    fullName: 'LUXURY REAL ESTATE',
    protocol: 'HNW Investor Acquisition',
    criteria: 'Listing average >$750K. Portfolio-based marketing. Global investor focus.',
    stat: '94% Lead Qualification Rate'
  },
  {
    name: 'PROFESSIONAL',
    fullName: 'PROFESSIONAL SERVICES',
    protocol: 'Advanced operational protocols for Clinical, Legal, and Strategic Consulting firms.',
    criteria: 'We engineer high-intent acquisition systems for high-value expertise.',
    stat: '3.5x Fee Authority Increase'
  }
];

const SectorDominance: React.FC = () => {
  return (
    <section className="py-20 md:py-32 border-b border-white/15 bg-void overflow-hidden">
      <div className="px-6 md:px-24 mb-16 md:mb-24">
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-lg md:text-xl text-noise uppercase tracking-widest"
          >
            SECTOR VALIDATION REQUIRED
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-inter font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-brutal leading-[1.1] max-w-4xl text-balance"
        >
          WE ONLY DEPLOY FOR <span className="text-noise font-mono">[</span>GALACTIC<span className="text-noise font-mono">]</span> ENTITIES.
        </motion.p>
      </div>

      <div className="flex flex-col">
        {sectors.map((sector, idx) => (
          <div
            key={idx}
            className="group relative border-b border-white/20 last:border-0 py-12 md:py-16 px-6 md:px-24 hover:bg-white/[0.03] backdrop-blur-sm transition-colors duration-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Massive Name */}
              <div className="lg:col-span-7">
                <h3 className="outline-text font-inter font-extrabold text-4xl sm:text-6xl md:text-[8rem] xl:text-[10rem] uppercase tracking-brutal leading-none select-none break-words">
                  {sector.name}
                </h3>
              </div>

              {/* Sector Details */}
              <div className="lg:col-span-12 xl:col-span-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 space-y-6 md:space-y-8 lg:text-right">
                <div>
                  <span className="font-mono text-noise text-xs md:text-sm uppercase tracking-widest block mb-2">Protocol_Core</span>
                  <p className="font-inter font-bold text-xl md:text-2xl uppercase text-white">{sector.protocol}</p>
                </div>

                <div>
                  <span className="font-mono text-noise text-xs md:text-sm uppercase tracking-widest block mb-2">Selection_Criteria</span>
                  <p className="font-montserrat text-base md:text-lg text-white group-hover:text-[#C0C0C0] transition-colors duration-500 shadow-silver">
                    {sector.criteria}
                  </p>
                </div>

                <div className="flex flex-col lg:items-end gap-4 md:gap-6 pt-4">
                  <div className="inline-block border border-white/30 px-6 py-2">
                    <span className="font-mono text-white text-lg md:text-xl font-bold">{sector.stat}</span>
                  </div>

                  <button className="bg-white text-black font-mono font-bold uppercase text-[10px] md:text-xs tracking-widest px-6 py-3 md:px-8 md:py-4 hover:bg-neutral-200 transition-all w-full md:w-auto">
                    INITIATE SECTOR PROTOCOL
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute right-6 top-6 md:right-12 md:top-12 font-mono text-noise/[0.03] text-6xl md:text-9xl pointer-events-none select-none">
              0{idx + 1}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .shadow-silver:hover {
          text-shadow: 0 0 15px rgba(192, 192, 192, 0.4);
        }
      `}</style>
    </section>
  );
};

export default SectorDominance;