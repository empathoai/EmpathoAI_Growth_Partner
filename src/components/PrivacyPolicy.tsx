
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
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
          <span className="font-mono text-sm text-noise uppercase tracking-[0.4em] block">Legal Framework</span>
          <h1 className="font-inter font-extrabold text-5xl md:text-6xl tracking-brutal uppercase bg-gradient-to-b from-white to-[#666666] bg-clip-text text-transparent">
            PRIVACY PROTOCOL & DATA GOVERNANCE
          </h1>
        </header>

        <div className="space-y-12">
          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">01. STRATEGIC INTENT</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              EmpathoAI operates as a Growth Partner. The processing of collected data is strictly limited to the technical necessity of revenue infrastructure engineering and the identification of partnership capacity for high-performance founders and enterprises.
            </p>
          </section>

          <section className="space-y-6 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">02. META PLATFORM INTEGRATION & COMPLIANCE</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-mono text-lg text-white/70 uppercase tracking-widest">### 2.1 Meta Conversions API (CAPI)</h3>
                <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
                  EmpathoAI ensures compliance with Meta's Business Tools Terms by utilizing the Conversions API (CAPI). This server-side integration processes web events to improve measurement, attribution, and the optimization of institutional advertising performance.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-lg text-white/70 uppercase tracking-widest">### 2.2 Data Hashing & Advanced Matching</h3>
                <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
                  To preserve data sovereignty, all Personally Identifiable Information (PII) collected via our Sovereign Framework is subjected to SHA-256 hashing protocols prior to transmission to Meta's infrastructure. This hashing ensures that data used for Advanced Matching is pseudonymized and secure.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">03. COMMUNICATION PROTOCOLS</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-mono text-lg text-white/70 uppercase tracking-widest">### 3.1 WhatsApp Business API Opt-in</h3>
                <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
                  By interacting with the WhatsApp interface, users grant explicit affirmative consent (Opt-in) to receive automated Business-to-Consumer (B2C) messages. EmpathoAI ensures strict adherence to Meta's WhatsApp Business Policy and Commerce Policy. Users may revoke this consent by replying "STOP" at any time.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-lg text-white/70 uppercase tracking-widest">### 3.2 SMS & Automated Outreach</h3>
                <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
                  Providing a mobile number constitutes an agreement to receive strategic audit data via encrypted SMS. Data is never shared or sold for third-party marketing purposes.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">04. DATA INFRASTRUCTURE (GHL & CRM)</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              Qualified partnership signals are integrated into our proprietary management infrastructure (GoHighLevel). This processing is necessary for the orchestration of the value flow and maintaining the integrity of the sovereign growth pipeline.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">05. INFORMATION SOVEREIGNTY</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              Data subjects retain the absolute right to access, rectify, or delete their records. For such requests, the EmpathoAI Compliance Department maintains a direct oversight channel for institutional privacy concerns.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">06. VOICE SYNTHESIS & AUDIT DATA</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              Activation of the Voice Strategic Auditor involves real-time audio processing. Transcripts are retained within our secure ecosystem solely for strategic analysis. We do not store biometric voice-prints.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">07. INSTITUTIONAL CONTACT FOR PRIVACY</h2>
            <div className="font-montserrat font-light text-xl text-white/40 space-y-2">
              <p>Compliance Officer: <span className="text-white">compliance@empathoai.com</span></p>
              <p>Address: <span className="text-white">30 N Gould St Ste R, Sheridan, WY 82801, USA.</span></p>
            </div>
          </section>
        </div>

        <footer className="pt-20 border-t border-white/10">
          <p className="font-mono text-sm text-noise uppercase tracking-widest">
            Last Audit: February 2026 | EmpathoAI Compliance Department.
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
