
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
      className="fixed inset-0 z-[110] bg-void flex flex-col items-center justify-start overflow-y-auto pt-24 pb-32 px-6"
    >
      <div className="absolute top-12 right-12">
        <button 
          onClick={onClose}
          className="p-4 hover:bg-white/5 rounded-full transition-colors group"
        >
          <X className="w-8 h-8 text-white group-hover:rotate-90 transition-transform duration-500" strokeWidth={1} />
        </button>
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-16">
        <header className="space-y-4">
          <span className="font-mono text-sm text-noise uppercase tracking-[0.4em] block">Legal Protocol</span>
          <h1 className="font-inter font-extrabold text-5xl md:text-6xl tracking-brutal uppercase bg-gradient-to-b from-white to-[#666666] bg-clip-text text-transparent">
            TERMS OF SERVICE: SOVEREIGN PARTNERSHIP PROTOCOL
          </h1>
        </header>

        <div className="space-y-12">
          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">01. ACCEPTANCE OF THE PROTOCOL</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              By accessing EmpathoAI, LLC ("The Company"), you agree to be bound by these Terms of Service. Our relationship is categorized as a Growth Partnership, governed by mutual strategic commitment and high-fidelity operational standards.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">02. NATURE OF THE PARTNERSHIP</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              EmpathoAI provides proprietary revenue infrastructure and conversion engineering. Success is mathematically tethered to the implementation of institutional growth protocols. We operate under a model of technical rigor and data-driven performance.
            </p>
          </section>

          <section className="space-y-6 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">03. PARTNER OBLIGATIONS & COMPLIANCE</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-mono text-lg text-white/70 uppercase tracking-widest">### 3.1 Meta Platform Compliance</h3>
                <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
                  Partners using our acquisition modules must adhere to Meta's Advertising Policies and Business Tools Terms. EmpathoAI ensures that all technical deployments (Pixel, CAPI, Lead Forms) are engineered for compliant data transmission.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-lg text-white/70 uppercase tracking-widest">### 3.2 WhatsApp Business Interaction</h3>
                <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
                  The use of WhatsApp Business API integration requires explicit user opt-in. Partners are prohibited from using these systems for spam or unsolicited commercial outreach, in accordance with Meta's technical guidelines.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">04. INTELLECTUAL PROPERTY SOVEREIGNTY</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              All funnel architectures, AI diagnostic logic, and agentic sales protocols developed by EmpathoAI remain the intellectual property of the company. A revocable usage license is granted for the specific duration of the Growth Partnership.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">05. LIMITATION OF LIABILITY</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              EmpathoAI, LLC shall not be liable for indirect damages or fluctuations resulting from external market forces or third-party platform algorithm changes. We provide high-fidelity systems but do not control global macroeconomic variables.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">06. JURISDICTION (WYOMING)</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              These terms are governed by the laws of the State of Wyoming, USA. Dispute resolution shall be conducted via binding arbitration in Sheridan County, Wyoming.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">07. INSTITUTIONAL CONTACT</h2>
            <div className="font-montserrat font-light text-xl text-white/40 space-y-2">
              <p>Legal Inquiries: <span className="text-white">compliance@empathoai.com</span></p>
              <p>Address: <span className="text-white">30 N Gould St Ste R, Sheridan, WY 82801, USA.</span></p>
            </div>
          </section>
        </div>

        <footer className="pt-20 border-t border-white/10">
          <p className="font-mono text-sm text-noise uppercase tracking-widest">
            © 2026 EmpathoAI, LLC | Registered in Wyoming, USA.
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
