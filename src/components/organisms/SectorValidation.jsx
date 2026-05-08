import React from 'react';
import IndustrialCard from '../molecules/IndustrialCard';

const GROWTH_LEAKS = [
  { id: '01', label: <>INCONSISTENT <span className="bg-highlight">GROWTH</span></>, desc: 'You cannot predict revenue month to month.' },
  { id: '02', label: <>LOW <span className="bg-highlight">CONVERSION</span></>, desc: 'You generate attention, but it does not turn into clients.' },
  { id: '03', label: <>MESSAGING <span className="bg-highlight">MISALIGNMENT</span></>, desc: 'You have a strong offer, but the market does not respond.' },
  { id: '04', label: <>ERODING <span className="bg-highlight">PROFITABILITY</span></>, desc: 'Revenue grows, but margins keep shrinking.' },
  { id: '05', label: <>DISCONNECTED <span className="bg-highlight">FUNNEL</span></>, desc: 'Your acquisition and conversion do not work together.' },
];

export default function SectorValidation() {
  return (
    <section className="section-rhythm bg-surface-deep">
      <div className="container-empatho">
        <div className="mb-lg">
          <h2 className="heading-xl uppercase text-text-primary">WE DO NOT WORK WITH MOST COMPANIES.</h2>
          <p className="caption-md text-text-muted uppercase tracking-widest mt-2">SECTOR VALIDATION REQUIRED</p>
          <p className="body-md text-text-secondary mt-4 max-w-2xl">
            Most companies try to fix this with more marketing. That is why it keeps getting worse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-sm">
          {GROWTH_LEAKS.map((leak) => (
            <IndustrialCard 
              key={leak.id}
              id={leak.id}
              title={leak.label}
              description={leak.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
