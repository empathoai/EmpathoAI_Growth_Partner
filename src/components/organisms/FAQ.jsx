import React from 'react';

const FAQS = [
  { q: "Who is this for?", a: "Businesses already generating revenue that need to fix how they grow. We work with established entities looking for structural engineering, not just tactical band-aids." },
  { q: "Who is this NOT for?", a: "Businesses looking for quick wins or avoiding structural changes, or companies without validated market demand." },
  { q: "How long does this take?", a: "Most systems improve within 90 days. The diagnostic phase is completed within the first 14 days of partnership." },
  { q: "Do you work with startups?", a: "Only if there is traction, clear demand, and a commitment to building long-term revenue infrastructure." }
];

export default function FAQ() {
  return (
    <section className="section-rhythm bg-surface-deep">
      <div className="container-empatho">
        <div className="max-w-3xl mx-auto">
        <h2 className="heading-xl uppercase mb-xl border-b border-hairline pb-md text-center md:text-left text-text-primary">WHO THIS IS FOR</h2>
        <div className="flex flex-col gap-0">
          {FAQS.map((faq, i) => (
            <details key={i} className="group border-b border-hairline py-lg cursor-pointer">
              <summary className="flex items-center justify-between list-none">
                <h3 className="body-strong text-text-primary uppercase tracking-tight">{faq.q}</h3>
                <span className="text-xl text-text-muted group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-md max-w-2xl">
                <p className="body-md text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
