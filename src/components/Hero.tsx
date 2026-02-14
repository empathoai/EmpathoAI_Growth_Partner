
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Mic, MicOff, Loader2 } from 'lucide-react';
import { useVapi } from '../hooks/useVapi';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { startCall, stopCall, callStatus, errorMessage } = useVapi();
  const maskTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  const isVoiceActive = callStatus === 'active' || callStatus === 'loading';

  return (
    <section className="relative min-h-[90vh] md:h-[90vh] flex flex-col justify-center px-6 md:px-24 py-20 overflow-hidden border-b border-white/15">
      {/* Background with zoom animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-full bg-cover bg-center opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 25, ease: "linear" }}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')`,
            filter: 'contrast(1.4) brightness(0.6) grayscale(1)'
          }}
        />
        <AnimatePresence>
          {isVoiceActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-[1600px]">
        <div className="overflow-hidden mb-6 md:mb-8">
          <motion.span
            className="font-mono text-lg md:text-2xl text-noise uppercase tracking-widest block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={maskTransition}
          >
            EMPATHOAI // SOVEREIGN_FRAMEWORK_V3
          </motion.span>
        </div>

        <div className="space-y-0 text-balance leading-tight">
          <div className="overflow-hidden">
            <motion.h1
              className="font-inter font-extrabold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] tracking-tighter brutal-heading uppercase leading-[1.0] md:leading-[0.9]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.1 }}
            >
              Scaling <span className="text-noise font-mono">[</span>Revenue<span className="text-noise font-mono">]</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-inter font-extrabold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] tracking-tighter brutal-heading uppercase leading-[1.0] md:leading-[0.9]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.2 }}
            >
              Through Intuition
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-inter font-extrabold text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] tracking-tighter brutal-heading uppercase leading-[1.0] md:leading-[0.9]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ...maskTransition, delay: 0.3 }}
            >
              & Machine Precision.
            </motion.h1>
          </div>
        </div>

        <motion.div
          className="mt-12 md:mt-16 flex flex-col items-start gap-10 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <p className="font-montserrat text-lg md:text-body-lg max-w-2xl opacity-80 text-balance leading-relaxed">
            We build proprietary acquisition systems for High-Margin businesses.
            Scaling performance through integrated human-machine protocol.
          </p>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 w-full md:w-auto">
            <button
              onClick={onCtaClick}
              className="institutional-btn shimmer-active group flex items-center justify-center gap-4 bg-white text-black px-8 py-6 md:px-12 md:py-8 font-mono font-bold uppercase text-sm md:text-lg tracking-widest w-full md:w-auto"
            >
              Request Institutional Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
            </button>

            <button
              onClick={() => callStatus === 'active' ? stopCall() : startCall()}
              disabled={callStatus === 'loading'}
              className={`institutional-btn group flex items-center justify-center gap-4 px-8 py-6 md:px-12 md:py-8 font-mono font-bold uppercase text-sm md:text-lg tracking-widest transition-all w-full md:w-auto ${callStatus === 'active'
                  ? 'bg-white text-black animate-pulse'
                  : 'bg-white/5 backdrop-blur-md text-white hover:bg-white/10'
                }`}
            >
              {callStatus === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} />
                  Initializing...
                </>
              ) : callStatus === 'active' ? (
                <>
                  <Mic className="w-5 h-5" strokeWidth={1.5} />
                  [ACTIVE_SESSION] // Listening...
                </>
              ) : (
                <>
                  <MicOff className="w-5 h-5" strokeWidth={1.5} />
                  Start Voice Audit
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {errorMessage && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="font-mono text-xs text-red-500 uppercase tracking-widest"
              >
                {errorMessage}
              </motion.p>
            )}
          </AnimatePresence>

          <p className="font-mono text-[10px] text-noise uppercase tracking-[0.3em]">
            AI-Synthesis calibrated for Strategic Analysis.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVoiceActive && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto bg-black/60 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={stopCall}
              className="absolute top-8 right-8 md:top-12 md:right-12 p-4 text-white hover:bg-white/5 rounded-full transition-colors z-[60]"
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>

            <div className="relative flex flex-col items-center gap-8 md:gap-12 px-6">
              <div className="relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48">
                <motion.div
                  className="absolute inset-0 border border-white/20 rounded-full"
                  animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                <div className="relative z-10 w-16 h-16 md:w-24 md:h-24 bg-white/[0.05] backdrop-blur-2xl border border-white/20 rounded-full flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-12 md:h-12 text-white" stroke="currentColor" strokeWidth="1"
                    animate={{ scale: callStatus === 'active' ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <path d="M7 8v8M11 4v16M15 8v8" strokeLinecap="round" />
                  </motion.svg>
                </div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center space-y-4"
              >
                <span className="font-mono text-xs md:text-sm text-noise uppercase tracking-widest block">
                  {callStatus === 'loading' ? 'Authenticating Protocol...' : 'Establishing Neural Link...'}
                </span>
                <p className="font-inter font-bold text-xl md:text-2xl uppercase text-white tracking-widest">
                  {callStatus === 'loading' ? 'System Loading' : 'Awaiting Voice Input'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
