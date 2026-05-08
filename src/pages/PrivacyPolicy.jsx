import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <div className="container-empatho py-xl min-h-[60vh] bg-canvas">
      <Helmet>
        <title>Privacy Protocol | Data Governance & Compliance | EmpathoAI</title>
        <meta name="description" content="Review the EmpathoAI Privacy Protocol. We ensure data sovereignty and compliance with Meta CAPI and WhatsApp Business standards." />
      </Helmet>
      <div className="max-w-3xl mx-auto flex flex-col gap-xl">
        <div className="flex flex-col gap-md">
          <h1 className="heading-xl text-text-primary uppercase">
            PRIVACY PROTOCOL
          </h1>
          <p className="caption-sm text-text-secondary uppercase tracking-widest border-l-2 border-accent pl-sm">
            &amp; DATA GOVERNANCE
          </p>
        </div>

        <div className="flex flex-col gap-xl">
          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">01. STRATEGIC INTENT</h2>
            <p className="body-md text-text-secondary">
              EmpathoAI operates as a Growth Partner. The processing of collected data is strictly limited to the technical necessity of revenue infrastructure engineering and the identification of partnership capacity for high-performance founders and enterprises.
            </p>
          </section>

          <section className="flex flex-col gap-md">
            <h2 className="heading-md uppercase text-text-primary">02. META PLATFORM INTEGRATION & COMPLIANCE</h2>
            
            <div className="flex flex-col gap-xs ml-md border-l border-hairline pl-md">
              <h3 className="body-strong text-text-primary">2.1 Meta Conversions API (CAPI)</h3>
              <p className="body-md text-text-secondary">
                EmpathoAI ensures compliance with Meta's Business Tools Terms by utilizing the Conversions API (CAPI). This server-side integration processes web events to improve measurement, attribution, and the optimization of institutional advertising performance.
              </p>
            </div>

            <div className="flex flex-col gap-xs ml-md border-l border-hairline pl-md">
              <h3 className="body-strong text-text-primary">2.2 Data Hashing & Advanced Matching</h3>
              <p className="body-md text-text-secondary">
                To preserve data sovereignty, all Personally Identifiable Information (PII) collected via our Sovereign Framework is subjected to SHA-256 hashing protocols prior to transmission to Meta's infrastructure. This hashing ensures that data used for Advanced Matching is pseudonymized and secure.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-md">
            <h2 className="heading-md uppercase text-text-primary">03. COMMUNICATION PROTOCOLS</h2>
            
            <div className="flex flex-col gap-xs ml-md border-l border-hairline pl-md">
              <h3 className="body-strong text-text-primary">3.1 WhatsApp Business API Opt-in</h3>
              <p className="body-md text-text-secondary">
                By interacting with the WhatsApp interface, users grant explicit affirmative consent (Opt-in) to receive automated Business-to-Consumer (B2C) messages. EmpathoAI ensures strict adherence to Meta's WhatsApp Business Policy and Commerce Policy. Users may revoke this consent by replying "STOP" at any time.
              </p>
            </div>

            <div className="flex flex-col gap-xs ml-md border-l border-hairline pl-md">
              <h3 className="body-strong text-text-primary">3.2 SMS & Automated Outreach</h3>
              <p className="body-md text-text-secondary">
                Providing a mobile number constitutes an agreement to receive strategic audit data via encrypted SMS. Data is never shared or sold for third-party marketing purposes.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">04. DATA INFRASTRUCTURE (GHL & CRM)</h2>
            <p className="body-md text-text-secondary">
              Qualified partnership signals are integrated into our proprietary management infrastructure (GoHighLevel). This processing is necessary for the orchestration of the value flow and maintaining the integrity of the sovereign growth pipeline.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">05. INFORMATION SOVEREIGNTY</h2>
            <p className="body-md text-text-secondary">
              Data subjects retain the absolute right to access, rectify, or delete their records. For such requests, the EmpathoAI Compliance Department maintains a direct oversight channel for institutional privacy concerns.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">06. VOICE SYNTHESIS & AUDIT DATA</h2>
            <p className="body-md text-text-secondary">
              Activation of the Voice Strategic Auditor involves real-time audio processing. Transcripts are retained within our secure ecosystem solely for strategic analysis. We do not store biometric voice-prints.
            </p>
          </section>

          <section className="flex flex-col gap-sm bg-surface-deep p-lg border border-hairline mt-md">
            <h2 className="heading-md uppercase text-text-primary">07. INSTITUTIONAL CONTACT FOR PRIVACY</h2>
            <div className="flex flex-col gap-xs mt-2">
              <p className="body-md text-text-secondary"><strong className="text-text-primary">Compliance Officer:</strong> compliance@empathoai.com</p>
              <p className="body-md text-text-secondary"><strong className="text-text-primary">Address:</strong> 30 N Gould St Ste R, Sheridan, WY 82801, USA.</p>
              <p className="caption-md text-text-secondary mt-md border-t border-hairline pt-sm uppercase tracking-wider">
                Last Audit: February 2026 | EmpathoAI Compliance Department.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
