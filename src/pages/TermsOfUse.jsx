import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsOfUse() {
  return (
    <div className="container-empatho py-xl min-h-[60vh] bg-canvas">
      <Helmet>
        <title>Terms of Partnership | Legal Framework | EmpathoAI</title>
        <meta name="description" content="The institutional legal framework governing the partnership between EmpathoAI and its clients. Engineering growth with structural rigor." />
      </Helmet>
      <div className="max-w-3xl mx-auto flex flex-col gap-xl">
        <div className="flex flex-col gap-md">
          <h1 className="heading-xl text-text-primary uppercase">
            TERMS OF USE
          </h1>
          <p className="caption-sm text-text-secondary uppercase tracking-widest border-l-2 border-accent pl-sm">
            Sovereign Partnership Protocol
          </p>
        </div>

        <div className="flex flex-col gap-xl">
          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">01. ACCEPTANCE OF THE PROTOCOL</h2>
            <p className="body-md text-text-secondary">
              By accessing EmpathoAI, LLC ("The Company"), you agree to be bound by these Terms of Service. Our relationship is categorized as a Growth Partnership, governed by mutual strategic commitment and high-fidelity operational standards.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">02. NATURE OF THE PARTNERSHIP</h2>
            <p className="body-md text-text-secondary">
              EmpathoAI provides proprietary revenue infrastructure and conversion engineering. Success is mathematically tethered to the implementation of institutional growth protocols. We operate under a model of technical rigor and data-driven performance.
            </p>
          </section>

          <section className="flex flex-col gap-md">
            <h2 className="heading-md uppercase text-text-primary">03. PARTNER OBLIGATIONS & COMPLIANCE</h2>
            
            <div className="flex flex-col gap-xs ml-md border-l border-hairline pl-md">
              <h3 className="body-strong text-text-primary">3.1 Meta Platform Compliance</h3>
              <p className="body-md text-text-secondary">
                Partners using our acquisition modules must adhere to Meta's Advertising Policies and Business Tools Terms. EmpathoAI ensures that all technical deployments (Pixel, CAPI, Lead Forms) are engineered for compliant data transmission.
              </p>
            </div>

            <div className="flex flex-col gap-xs ml-md border-l border-hairline pl-md">
              <h3 className="body-strong text-text-primary">3.2 WhatsApp Business Interaction</h3>
              <p className="body-md text-text-secondary">
                The use of WhatsApp Business API integration requires explicit user opt-in. Partners are prohibited from using these systems for spam or unsolicited commercial outreach, in accordance with Meta's technical guidelines.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">04. INTELLECTUAL PROPERTY SOVEREIGNTY</h2>
            <p className="body-md text-text-secondary">
              All funnel architectures, AI diagnostic logic, and agentic sales protocols developed by EmpathoAI remain the intellectual property of the company. A revocable usage license is granted for the specific duration of the Growth Partnership.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">05. LIMITATION OF LIABILITY</h2>
            <p className="body-md text-text-secondary">
              EmpathoAI, LLC shall not be liable for indirect damages or fluctuations resulting from external market forces or third-party platform algorithm changes. We provide high-fidelity systems but do not control global macroeconomic variables.
            </p>
          </section>

          <section className="flex flex-col gap-sm">
            <h2 className="heading-md uppercase text-text-primary">06. JURISDICTION (WYOMING)</h2>
            <p className="body-md text-text-secondary">
              These terms are governed by the laws of the State of Wyoming, USA. Dispute resolution shall be conducted via binding arbitration in Sheridan County, Wyoming.
            </p>
          </section>

          <section className="flex flex-col gap-sm bg-surface-deep p-lg border border-hairline mt-md">
            <h2 className="heading-md uppercase text-text-primary">07. INSTITUTIONAL CONTACT</h2>
            <div className="flex flex-col gap-xs mt-2">
              <p className="body-md text-text-secondary"><strong className="text-text-primary">Legal Inquiries:</strong> compliance@empathoai.com</p>
              <p className="body-md text-text-secondary"><strong className="text-text-primary">Address:</strong> 30 N Gould St Ste R, Sheridan, WY 82801, USA.</p>
              <p className="caption-md text-text-secondary mt-md border-t border-hairline pt-sm uppercase tracking-wider">
                &copy; 2026 EmpathoAI, LLC | Registered in Wyoming, USA.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
