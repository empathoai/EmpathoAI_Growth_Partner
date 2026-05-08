import React from 'react';

/**
 * IndustrialContext Component
 * A high-fidelity container for strategic messaging.
 * Follows the Sharp-Pill doctrine: bg-surface-deep, zero radius.
 */
export default function IndustrialContext() {
  return (
    <section className="section-rhythm bg-surface-deep border-b border-hairline">
      <div className="container-empatho py-section">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-8">
          <h2 className="display-campaign text-text-primary leading-[1.1]">
            IF YOU RECOGNIZE YOUR <span className="text-accent">BUSINESS</span> IN THIS,<br />
            THE PROBLEM IS NOT <span className="text-accent">EFFORT</span>.
          </h2>
          
          <div className="flex flex-col">
            <h2 className="display-campaign text-text-primary mt-4">
              IT IS <span className="text-accent">STRUCTURE</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
