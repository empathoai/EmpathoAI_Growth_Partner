import React from 'react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  onCtaClick: () => void;
}

const sectionClassName = 'px-6 py-14 md:px-24 md:py-16 border-b border-white/15 bg-[#0B0B0C]';
const containerClassName = 'max-w-[1600px] mx-auto';

const AboutPage: React.FC<AboutPageProps> = ({ onCtaClick }) => {
  return (
    <main className="bg-[#0B0B0C]">
      <section className={`${sectionClassName} relative pt-44 md:pt-52`}>
        <div className="absolute top-24 left-6 md:top-28 md:left-24 z-20">
          <Link to="/" aria-label="Go to homepage" className="inline-block">
            <img
              src="/logo_empathoai.svg"
              alt="EmpathoAI"
              className="h-20 md:h-[5.5rem] w-auto"
            />
          </Link>
        </div>

        <div className={`${containerClassName} space-y-6 md:space-y-7`}>
          <h1 className="max-w-6xl font-helvetica font-bold text-4xl sm:text-6xl md:text-[6.5rem] uppercase leading-[0.9] text-[#F5F5F5]">
            THIS IS <span className="text-[#C56A1A]">NOT</span> A MARKETING AGENCY.
          </h1>
          <p className="max-w-3xl font-helvetica font-medium text-2xl md:text-3xl leading-relaxed text-[#8A8F98]">
            EmpathoAI is a growth architecture firm.
          </p>
          <p className="max-w-4xl font-helvetica font-medium text-xl md:text-2xl leading-[1.65] text-[#8A8F98]">
            We diagnose why businesses don't <span className="text-[#C56A1A]">grow</span>.
            <br />
            Then we design the system that fixes it.
          </p>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={`${containerClassName} space-y-4`}>
          <h2 className="font-helvetica font-bold text-3xl md:text-5xl uppercase leading-tight text-[#F5F5F5]">
            Most companies try to scale <span className="text-[#C56A1A]">tactics</span>.
          </h2>
          <p className="font-helvetica font-medium text-xl md:text-3xl leading-relaxed text-[#8A8F98]">
            We fix <span className="text-[#C56A1A]">structure</span>.
          </p>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={`${containerClassName} grid items-start gap-8 md:grid-cols-[305px_minmax(0,1fr)] md:gap-14`}>
          <div className="w-full max-w-[305px]">
            <div className="relative aspect-[4/4.55] w-full overflow-hidden bg-[#111214]">
              <img
                src="/images/alex_guajardo_empathoai_founder.png"
                alt="Alex Guajardo"
                className="block h-full w-full object-cover object-center grayscale contrast-[1.3] brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>
            <div className="mt-3 space-y-1 md:mt-3.5">
              <p className="font-helvetica font-bold text-[1.7rem] leading-none md:text-[2.05rem] text-[#F5F5F5]">Alex Guajardo</p>
              <p className="font-helvetica font-medium text-[13px] md:text-[14px] text-[#8A8F98]">Founder, EmpathoAI</p>
            </div>
          </div>

          <div className="max-w-3xl space-y-4 pt-1 md:pt-2 lg:pt-4 font-helvetica font-medium text-lg md:text-2xl leading-[1.55] text-[#8A8F98]">
            <p>
              Built by Alex Guajardo.
              <br />
              20+ years inside Coca-Cola and Nestl{'é'}.
            </p>
            <p>
              Fixing how businesses actually <span className="text-[#C56A1A]">grow</span>.{' '}
              <span className="text-[#C56A1A]">Systems</span>, not campaigns.
            </p>
            <p>
              Most businesses don't fail because of marketing.
              <br />
              They fail because their system is <span className="text-[#C56A1A]">broken</span>.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={containerClassName}>
          <p className="font-helvetica font-bold text-3xl md:text-5xl uppercase leading-tight text-[#F5F5F5]">
            Diagnosis ? Architecture ? Execution ?
          </p>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={`${containerClassName} space-y-4`}>
          <p className="font-helvetica font-bold text-2xl md:text-4xl uppercase leading-tight text-[#F5F5F5]">
            For founders who <span className="text-[#C56A1A]">execute</span>.
          </p>
          <p className="font-helvetica font-medium text-xl md:text-2xl leading-relaxed text-[#8A8F98]">
            Not for those looking for shortcuts.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-24 md:py-24 bg-[#0B0B0C]">
        <div className="max-w-[1600px] mx-auto pt-12 md:pt-16 text-center">
          <p className="mx-auto max-w-4xl font-helvetica font-medium text-2xl md:text-4xl leading-relaxed text-[#F5F5F5]">
            If you're serious about fixing your business:
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
      </section>
    </main>
  );
};

export default AboutPage;

