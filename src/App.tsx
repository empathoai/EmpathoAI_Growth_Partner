import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import SectorDominance from './components/SectorDominance';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import GrowthSimulator from './components/GrowthSimulator';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import CookieBanner from './components/CookieBanner';
import SEO from './components/SEO';

const MotionDiv = motion.div as any;

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const isPolicyOpen = location.pathname === '/privacy-policy';
  const isTermsOpen = location.pathname === '/terms-of-service';
  const isCookieOpen = location.pathname === '/cookie-policy';

  useEffect(() => {
    const legacyPaths = [
      '/contact',
      '/services',
      '/case-studies',
      '/empowering-growth-through-intelligent-automation-and-neuromarketing-strategies',
      '/empowering-growth-through-intelligent-automation-and-user-centric-design'
    ];

    if (legacyPaths.includes(location.pathname)) {
      navigate('/', { replace: true });
    }

    if (window.location.hostname.startsWith('www.')) {
      window.location.replace(`https://empathoai.com${location.pathname}${location.search}`);
    }
  }, [location, navigate]);

  const toggleForm = useCallback(() => {
    setIsFormOpen(prev => !prev);
  }, []);

  const handleCloseLegal = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const isAnyOverlayOpen = isFormOpen || isPolicyOpen || isTermsOpen || isCookieOpen;

  return (
    <div className="relative min-h-screen bg-[#0B0B0C] selection:bg-white selection:text-black overflow-x-hidden">
      <SEO />

      <MotionDiv
        animate={{
          opacity: isAnyOverlayOpen ? 0 : 1,
          scale: isAnyOverlayOpen ? 0.98 : 1
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <Hero onCtaClick={toggleForm} />
        <SectorDominance />
        <Methodology />
        <Guarantee onCtaClick={toggleForm} />
        <FAQ />

        <footer className="px-6 py-12 md:px-24 md:py-16 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-helvetica font-light text-[10px] md:text-xs text-[#C56A1A] uppercase tracking-label">
            © 2024 EmpathoAI Growth Arquitecture. All Rights Reserved.
          </div>
          <div className="flex gap-8 font-helvetica font-light text-[10px] md:text-xs text-[#C56A1A] uppercase tracking-label">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Privacy_Protocol
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Terms_of_Service
            </Link>
          </div>
        </footer>
      </MotionDiv>

      <AnimatePresence mode="wait">
        {isFormOpen && <GrowthSimulator onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isPolicyOpen && <PrivacyPolicy key="privacy" onClose={handleCloseLegal} />}
        {isTermsOpen && <TermsOfService key="terms" onClose={handleCloseLegal} />}
        {isCookieOpen && <CookiePolicy key="cookie" onClose={handleCloseLegal} />}
      </AnimatePresence>
      <CookieBanner />
    </div>
  );
};

export default App;
