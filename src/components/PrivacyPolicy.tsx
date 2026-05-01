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
      className="fixed inset-0 z-[110] bg-black flex flex-col items-center justify-start overflow-y-auto pt-24 pb-32 px-6"
    >
      <div className="absolute top-24 left-6 md:top-28 md:left-24 z-20">
        <img
          src="/logo_empathoai.svg"
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
            PRIVACY PROTOCOL & DATA GOVERNANCE
          </h1>
        </header>

        <div className="space-y-10">
          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">01. STRATEGIC INTENT</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              EmpathoAI operates as a Growth Partner. The processing of collected data is strictly limited to the technical necessity of revenue infrastructure engineering and the identification of partnership capacity for high-performance founders and enterprises.
            </p>
          </section>

          <section className="space-y-6 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">02. META PLATFORM INTEGRATION & COMPLIANCE</h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-helvetica font-bold text-base md:text-lg text-gray-mid uppercase">2.1 Meta Conversions API (CAPI)</h3>
                <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
                  EmpathoAI ensures compliance with Meta's Business Tools Terms by utilizing the Conversions API (CAPI). This server-side integration processes web events to improve measurement, attribution, and the optimization of institutional advertising performance.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-helvetica font-bold text-base md:text-lg text-gray-mid uppercase">2.2 Data Hashing & Advanced Matching</h3>
                <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
                  To preserve data sovereignty, all Personally Identifiable Information (PII) collected via our Sovereign Framework is subjected to SHA-256 hashing protocols prior to transmission to Meta's infrastructure. This hashing ensures that data used for Advanced Matching is pseudonymized and secure.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">03. COMMUNICATION PROTOCOLS</h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-helvetica font-bold text-base md:text-lg text-gray-mid uppercase">3.1 WhatsApp Business API Opt-in</h3>
                <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
                  By interacting with the WhatsApp interface, users grant explicit affirmative consent (Opt-in) to receive automated Business-to-Consumer (B2C) messages. EmpathoAI ensures strict adherence to Meta's WhatsApp Business Policy and Commerce Policy. Users may revoke this consent by replying "STOP" at any time.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-helvetica font-bold text-base md:text-lg text-gray-mid uppercase">3.2 SMS & Automated Outreach</h3>
                <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
                  Providing a mobile number constitutes an agreement to receive strategic audit data via encrypted SMS. Data is never shared or sold for third-party marketing purposes.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">04. DATA INFRASTRUCTURE (GHL & CRM)</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              Qualified partnership signals are integrated into our proprietary management infrastructure (GoHighLevel). This processing is necessary for the orchestration of the value flow and maintaining the integrity of the sovereign growth pipeline.
            </p>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">05. INFORMATION SOVEREIGNTY</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              Data subjects retain the absolute right to access, rectify, or delete their records. For such requests, the EmpathoAI Compliance Department maintains a direct oversight channel for institutional privacy concerns.
            </p>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">06. VOICE SYNTHESIS & AUDIT DATA</h2>
            <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] max-w-4xl">
              Activation of the Voice Strategic Auditor involves real-time audio processing. Transcripts are retained within our secure ecosystem solely for strategic analysis. We do not store biometric voice-prints.
            </p>
          </section>

          <section className="space-y-4 border-l border-divider pl-8">
            <h2 className="font-helvetica font-bold text-xl md:text-2xl text-[#F5F5F5] uppercase">07. INSTITUTIONAL CONTACT FOR PRIVACY</h2>
            <div className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.7] space-y-2">
              <p>Compliance Officer: <span className="text-[#C56A1A]">compliance@empathoai.com</span></p>
              <p>Address: <span className="text-[#F5F5F5]">30 N Gould St Ste R, Sheridan, WY 82801, USA.</span></p>
            </div>
          </section>
        </div>

        <footer className="pt-12 border-t border-divider">
          <p className="font-helvetica font-light text-sm text-gray-mid uppercase tracking-label">
            Last Audit: February 2026 | EmpathoAI Compliance Department.
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;

