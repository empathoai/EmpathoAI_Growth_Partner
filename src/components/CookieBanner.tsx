
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('empathoai_cookie_consent');
    if (!consent) {
      // Trigger subtle entry after 2 seconds of session initialization
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('empathoai_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-6 z-50 w-[320px] md:bottom-24"
        >
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-sm p-5 shadow-2xl">
            <div className="flex flex-col gap-4">
              <p className="font-montserrat text-[11px] text-white/50 tracking-tight leading-relaxed max-w-[240px]">
                We utilize cookie protocols to optimize our infrastructure engineering and measure market resonance.
              </p>
              
              <div className="flex justify-start">
                <button
                  onClick={handleAccept}
                  className="bg-white text-black text-[10px] font-mono font-bold uppercase px-4 py-2 hover:bg-zinc-200 transition-colors tracking-widest"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
