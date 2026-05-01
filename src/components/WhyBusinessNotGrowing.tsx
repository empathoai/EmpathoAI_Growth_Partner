import React from 'react';

interface WhyBusinessNotGrowingProps {
  onCtaClick: () => void;
}

const WhyBusinessNotGrowing: React.FC<WhyBusinessNotGrowingProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-24 border-b border-white/15 bg-[#0B0B0C]">
      <div className="max-w-[1600px] mx-auto space-y-16 md:space-y-20">
        <header className="space-y-6">
          <h1 className="font-helvetica font-bold text-4xl sm:text-6xl md:text-[6.5rem] uppercase leading-[0.9] text-[#F5F5F5]">
            WHY YOUR BUSINESS IS NOT GROWING
          </h1>
        </header>

        <div className="space-y-12 max-w-4xl">
          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl uppercase text-[#F5F5F5]">
              Your business is not growing.
            </h2>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl uppercase text-[#F5F5F5]">
              It is not a marketing problem.
            </h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#8A8F98] leading-[1.7]">
              It is a system problem.
            </p>
          </section>

          <section className="space-y-6 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl uppercase text-[#F5F5F5]">
              What is broken
            </h2>
            <div className="space-y-5 font-helvetica font-medium text-lg md:text-xl text-[#8A8F98] leading-[1.7]">
              <p><span className="text-[#F5F5F5]">Inconsistent growth</span> means revenue does not move with predictability.</p>
              <p><span className="text-[#F5F5F5]">Low conversion</span> means attention is not turning into clients.</p>
              <p><span className="text-[#F5F5F5]">Poor structure</span> means acquisition, messaging, and conversion do not work together.</p>
            </div>
          </section>
        </div>

        <div className="pt-8 border-t border-white/15 text-center">
          <p className="font-helvetica font-medium text-xl md:text-2xl leading-relaxed text-[#8A8F98] max-w-3xl mx-auto">
            If this sounds familiar, the problem is not effort.
            <br />
            <br />
            It is structure.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={onCtaClick}
              className="institutional-btn shimmer-active flex items-center justify-center bg-[#C56A1A] text-[#F5F5F5] px-8 py-6 md:px-12 md:py-8 font-helvetica font-bold uppercase text-sm md:text-lg w-full md:w-auto"
            >
              REQUEST DIAGNOSIS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBusinessNotGrowing;
