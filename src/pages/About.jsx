import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/atoms/Button';
import DiagnosisModal from '../components/organisms/DiagnosisModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="container-empatho py-xl min-h-[60vh] bg-canvas">
      <Helmet>
        <title>About EmpathoAI | Our Growth Engineering Methodology</title>
        <meta name="description" content="Learn about EmpathoAI, founded by Alex Guajardo. We are a growth architecture firm specializing in fixing business structures and implementing scalable systems." />
      </Helmet>
      <div className="max-w-5xl flex flex-col gap-xl">
        
        {/* Executive Summary & Identity */}
        <div className="flex flex-col gap-md">
          <span className="caption-sm text-text-secondary uppercase tracking-widest">The Authority Protocol</span>
          <h1 className="display-campaign text-text-primary uppercase">
            THIS IS NOT A <span className="text-accent">MARKETING</span> AGENCY.
          </h1>
          <p className="body-strong text-text-secondary border-l-2 border-accent pl-md mt-sm">
            EmpathoAI is a growth architecture firm.
          </p>
        </div>

        {/* Mission & Paradigm */}
        <div className="grid md:grid-cols-2 gap-xl border-t border-hairline pt-xl">
          <div className="flex flex-col gap-sm">
            <h2 className="caption-sm text-accent uppercase tracking-widest">Mission Protocol</h2>
            <p className="body-md text-text-primary">
              We diagnose why businesses don't grow. Then we design the system that fixes it.
            </p>
          </div>
          <div className="flex flex-col gap-sm">
            <h2 className="caption-sm text-accent uppercase tracking-widest">Operational Paradigm</h2>
            <p className="body-md text-text-primary">
              Most companies try to scale tactics.<br />
              We fix structure.
            </p>
          </div>
        </div>

        {/* Founder Profile */}
        <div className="border-t border-hairline pt-xl">
          <h2 className="heading-xl uppercase mb-lg text-text-primary">
            Founder Profile <span className="bg-highlight">ALEX GUAJARDO</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0 border border-hairline bg-surface-deep overflow-hidden">
            {/* Authoritative Image */}
            <div className="aspect-[3/4] md:aspect-auto md:h-full bg-surface-mid overflow-hidden border-b md:border-b-0 md:border-r border-hairline">
              <img 
                src="/images/alex_guajardo_empathoai_founder.png" 
                alt="Alex Guajardo" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/hero_empathoai.png';
                }}
              />
            </div>
            
            {/* Executive Content */}
            <div className="flex flex-col justify-center p-lg lg:p-xl gap-xl">
              <div className="flex flex-col gap-sm">
                <span className="caption-sm text-accent uppercase tracking-widest">Track Record</span>
                <p className="heading-lg text-text-primary uppercase leading-tight">
                  20+ years industrial experience <br className="hidden lg:block" />
                  <span className="text-text-secondary">(Coca-Cola, Nestle).</span>
                </p>
              </div>
              
              <div className="border-t border-hairline pt-xl">
                <span className="caption-sm text-accent uppercase tracking-widest">Core Thesis</span>
                <p className="body-strong text-text-primary italic text-xl lg:text-2xl leading-relaxed mt-4">
                  "Most businesses don't fail because of marketing. They fail because their system is broken."
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-xl text-center flex flex-col items-center gap-lg">
            <p className="heading-lg uppercase text-text-primary tracking-tight">
              IF YOU'RE SERIOUS ABOUT <span className="bg-highlight">FIXING</span> YOUR <span className="bg-highlight">BUSINESS</span>
            </p>
            <Button variant="primary" onClick={toggleModal}>
              REQUEST DIAGNOSIS
            </Button>
          </div>
        </div>

        {/* Process Telemetry - RESTRICTED TO SAAS USE CASES
        <div className="border-t border-hairline pt-xl pb-xl">
          <h2 className="caption-sm text-text-secondary uppercase tracking-widest mb-md">Process Telemetry</h2>
          <div className="flex flex-wrap items-center gap-md body-strong text-text-primary uppercase">
            <span>DIAGNOSIS</span>
            <span className="text-text-secondary">→</span>
            <span>ARCHITECTURE</span>
            <span className="text-text-secondary">→</span>
            <span>EXECUTION</span>
          </div>
        </div>
        */}

      </div>
      <DiagnosisModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
