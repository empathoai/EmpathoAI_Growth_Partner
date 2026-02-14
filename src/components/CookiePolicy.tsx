
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CookiePolicyProps {
  onClose: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onClose }) => {
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
          <span className="font-mono text-sm text-noise uppercase tracking-[0.4em] block">Data Engineering</span>
          <h1 className="font-inter font-extrabold text-5xl md:text-6xl tracking-brutal uppercase bg-gradient-to-b from-white to-[#666666] bg-clip-text text-transparent">
            COOKIE PROTOCOL & TECHNOLOGICAL TRACKING
          </h1>
        </header>

        <div className="space-y-12">
          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">01. TECHNICAL TRANSPARENCY</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              At EmpathoAI, we utilize cookies and advanced tracking technologies (including Meta Pixel and Conversions API) to measure the efficiency of our growth infrastructure. These tools allow us to understand how potential partners interact with our digital ecosystem.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">02. COOKIE CATEGORIES IN USE</h2>
            <div className="space-y-6 pt-4">
              <div>
                <h3 className="font-inter font-bold text-white uppercase text-lg mb-2">Essential</h3>
                <p className="font-montserrat font-light text-lg text-white/40">Necessary for the integrity of the application form and site security.</p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-white uppercase text-lg mb-2">Performance & Analytics</h3>
                <p className="font-montserrat font-light text-lg text-white/40">Tools that process anonymous data to improve load speed and information architecture.</p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-white uppercase text-lg mb-2">Marketing & Retargeting</h3>
                <p className="font-montserrat font-light text-lg text-white/40">Meta and Google technologies that allow us to reconnect with founders who have shown interest in our strategic audits.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">03. USER SOVEREIGNTY</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              You maintain total control over your data. You can configure your browser to reject cookies or delete them at any time. However, this could limit the functionality of our application portal and access to certain high-value resources.
            </p>
          </section>

          <section className="space-y-4 border-l border-white/10 pl-8">
            <h2 className="font-mono text-xl text-white uppercase tracking-widest">04. INFRASTRUCTURE UPDATES</h2>
            <p className="font-montserrat font-light text-xl text-white/40 leading-relaxed">
              As our AI and analysis tools evolve, this protocol will be updated to reflect changes in our data processing capacity.
            </p>
          </section>
        </div>

        <footer className="pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="font-mono text-sm text-white uppercase tracking-widest">
              Technical Inquiries: <span className="text-noise">support@empathoai.com</span>
            </p>
            <p className="font-mono text-sm text-noise uppercase tracking-widest">
              © 2026 EmpathoAI, LLC
            </p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default CookiePolicy;
