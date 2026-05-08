import React from 'react';

const STEPS = [
  { id: '01', title: <><span className="bg-highlight">SYSTEM</span> <span className="bg-highlight">DIAGNOSIS</span></>, focus: 'FIND THE PROBLEM', desc: 'We find what is slowing your growth.', img: '/images/diag.png' },
  { id: '02', title: <span className="bg-highlight">ARCHITECTURE</span>, focus: 'FIX THE STRUCTURE', desc: 'We fix how your business is structured.', img: '/images/arch.png' },
  { id: '03', title: <span className="bg-highlight">EXECUTION</span>, focus: 'IMPLEMENT THE SYSTEM', desc: 'We implement systems that run without you.', img: '/images/exec.png' },
  { id: '04', title: <span className="bg-highlight">SCALE</span>, focus: 'SCALE RESULTS', desc: 'We scale what is already working.', img: '/images/hero_empathoai.png' },
];

export default function Methodology() {
  return (
    <section className="section-rhythm container-empatho overflow-hidden border-b border-hairline">
      <div className="flex flex-col mb-lg">
        <h2 className="heading-xl uppercase text-text-primary">The Growth Architecture</h2>
        <p className="body-strong text-text-secondary mt-2">
          Most companies stop after finding the problem. We fix the entire system.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {STEPS.map((item) => (
          <div key={item.id} className="flex flex-col group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden bg-surface-deep relative">
              <img 
                src={item.img} 
                alt="" 
                loading="lazy" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/hero_empathoai.png';
                }}
              />
            </div>
            <div className="mt-md">
              <span className="caption-sm text-accent uppercase tracking-widest">{item.title}</span>
              <h3 className="body-strong text-text-primary uppercase mt-1">{item.focus}</h3>
              <p className="caption-md text-text-secondary mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
