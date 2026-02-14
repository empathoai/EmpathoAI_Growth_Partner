
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Mechanism from './components/Mechanism';
import Methodology from './components/Methodology';
import SectorDominance from './components/SectorDominance';
import ComparisonGrid from './components/ComparisonGrid';
import FAQ from './components/FAQ';
import Deployment from './components/Deployment';
import Guarantee from './components/Guarantee';
import ProtocolForm from './components/ProtocolForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import CookieBanner from './components/CookieBanner';
import WhatsAppWidget from './components/WhatsAppWidget';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleForm = useCallback(() => {
    setIsFormOpen(prev => !prev);
  }, []);

  const togglePolicy = useCallback(() => {
    setIsPolicyOpen(prev => !prev);
  }, []);

  const toggleTerms = useCallback(() => {
    setIsTermsOpen(prev => !prev);
  }, []);

  const isAnyOverlayOpen = isFormOpen || isPolicyOpen || isTermsOpen || isCookieOpen;

  return (
    <div className="relative min-h-screen bg-void selection:bg-white selection:text-black overflow-x-hidden">
      {/* Sovereign Ghost Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 px-6 md:px-12 py-5 flex justify-between items-center ${
          scrolled 
            ? 'bg-black/50 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-4">
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] leading-none">
            EMPATHOAI // SOVEREIGN_FRAMEWORK_V3
          </div>
        </div>
        
        <div className="flex items-center">
          <button 
            onClick={toggleForm}
            className="institutional-btn font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] px-4 py-2 hover:bg-white hover:text-black transition-all duration-500"
          >
            APPLY FOR AUDIT
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <motion.div
        animate={{ 
          opacity: isAnyOverlayOpen ? 0 : 1, 
          scale: isAnyOverlayOpen ? 0.98 : 1 
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-16"
      >
        {/* RESTRUCTURED FLOW */}
        <Hero onCtaClick={toggleForm} />
        <SectorDominance />
        <Mechanism />
        <Methodology />
        <ComparisonGrid />
        <Deployment />
        <Guarantee onCtaClick={toggleForm} />
        <FAQ />
        
        <footer className="px-6 py-12 md:px-24 md:py-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-[10px] md:text-xs text-noise uppercase tracking-widest">
            © 2025 EMPATHOAI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 font-mono text-[10px] md:text-xs text-noise uppercase tracking-widest">
            <button 
              onClick={togglePolicy}
              className="hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Privacy Protocol
            </button>
            <button 
              onClick={toggleTerms}
              className="hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Terms of Service
            </button>
          </div>
        </footer>
      </motion.div>

      {/* Overlays */}
      <AnimatePresence>
        {isFormOpen && <ProtocolForm onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {isPolicyOpen && <PrivacyPolicy onClose={() => setIsPolicyOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {isTermsOpen && <TermsOfService onClose={() => setIsTermsOpen(false)} />}
      </AnimatePresence>
      <CookieBanner />
    </div>
  );
};

export default App;
