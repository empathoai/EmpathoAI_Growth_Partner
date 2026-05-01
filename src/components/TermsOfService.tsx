import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface TermsOfServiceProps {
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black flex flex-col items-center justify-start overflow-y-auto pt-24 pb-32 px-6"
    >
      <div className="absolute top-24 left-6 md:top-28 md:left-24 z-20">
        <img
          src="/logo_empathoai-v2.svg"
          alt="EmpathoAI"
          className="h-20 md:h-[5.5rem] w-auto"
        />
      </div>

      <div className="absolute top-12 right-12">
        <button
          onClick={onClose}
          className="p-4 hover:bg-white/5 rounded-full transition-colors group"
        >
          <X className="w-8 h-8 text-[#F5F5F5] group-hover:rotate-90 transition-transform duration-500" strokeWidth={1} />
        </button>
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-16 pt-36 md:pt-40">
        <header className="space-y-6 pb-8 border-b border-divider">          <h1 className="font-helvetica font-bold text-4xl md:text-6xl uppercase leading-[0.95] text-[#F5F5F5] max-w-4xl">
            TERMS OF SERVICE: SOVEREIGN PARTNERSHIP PROTOCOL
          </h1>
        </header>

        <div className="space-y-10">
          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">01. ACCEPTANCE OF THE PROTOCOL</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              By accessing EmpathoAI, LLC ("The Company"), you agree to be bound by these Terms of Service. Our relationship is categorized as a Growth Partnership, governed by mutual strategic commitment and high-fidelity operational standards.
            </p>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">02. NATURE OF THE PARTNERSHIP</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              EmpathoAI provides proprietary revenue infrastructure and conversion engineering. Success is mathematically tethered to the implementation of institutional growth protocols. We operate under a model of technical rigor and data-driven performance.
            </p>
          </section>

          <section className="space-y-6 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">03. PARTNER OBLIGATIONS & COMPLIANCE</h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-helvetica font-bold text-base md:text-lg text-gray-mid uppercase">3.1 Meta Platform Compliance</h3>
                <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
                  Partners using our acquisition modules must adhere to Meta's Advertising Policies and Business Tools Terms. EmpathoAI ensures that all technical deployments (Pixel, CAPI, Lead Forms) are engineered for compliant data transmission.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-helvetica font-bold text-base md:text-lg text-gray-mid uppercase">3.2 WhatsApp Business Interaction</h3>
                <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
                  The use of WhatsApp Business API integration requires explicit user opt-in. Partners are prohibited from using these systems for spam or unsolicited commercial outreach, in accordance with Meta's technical guidelines.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">04. INTELLECTUAL PROPERTY SOVEREIGNTY</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              All funnel architectures, AI diagnostic logic, and agentic sales protocols developed by EmpathoAI remain the intellectual property of the company. A revocable usage license is granted for the specific duration of the Growth Partnership.
            </p>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">05. LIMITATION OF LIABILITY</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              EmpathoAI, LLC shall not be liable for indirect damages or fluctuations resulting from external market forces or third-party platform algorithm changes. We provide high-fidelity systems but do not control global macroeconomic variables.
            </p>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">06. JURISDICTION (WYOMING)</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              These terms are governed by the laws of the State of Wyoming, USA. Dispute resolution shall be conducted via binding arbitration in Sheridan County, Wyoming.
            </p>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">07. INSTITUTIONAL CONTACT</h2>
            <div className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] space-y-2">
              <p>Legal Inquiries: <span className="text-[#C56A1A]">compliance@empathoai.com</span></p>
              <p>Address: <span className="text-[#F5F5F5]">30 N Gould St Ste R, Sheridan, WY 82801, USA.</span></p>
            </div>
          </section>
        </div>

        <footer className="pt-12 border-t border-divider">
          <p className="font-helvetica font-light text-sm text-gray-mid uppercase tracking-label">
            © 2026 EmpathoAI, LLC | Registered in Wyoming, USA.
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default TermsOfService;



