
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VoiceAgentWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="fixed bottom-24 md:bottom-6 left-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group cursor-pointer">
        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-full ml-4 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 px-4 py-2 rounded-sm whitespace-nowrap">
                <span className="font-mono text-[10px] text-white uppercase tracking-widest">Initialize Voice Synthesis Audit</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Neural Pulse Container */}
        <div className="relative flex items-center justify-center w-14 h-14">
          {/* Animated Stroke Circles */}
          <motion.div
            className="absolute inset-0 border border-white/20 rounded-full"
            animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 border border-white/10 rounded-full"
            animate={{ scale: [1, 2], opacity: [0.2, 0] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Main Core */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-3 rounded-full hover:bg-white/10 transition-all duration-500 shadow-2xl relative z-10 overflow-hidden">
            {/* Waveform SVG */}
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="1">
              <path d="M3 12h2M7 8v8M11 4v16M15 8v8M19 12h2" strokeLinecap="round" />
              <motion.path
                d="M7 8v8M11 4v16M15 8v8"
                animate={{
                  d: isHovered
                    ? ["M7 6v12M11 2v20M15 6v12", "M7 10v4M11 8v8M15 10v4", "M7 6v12M11 2v20M15 6v12"]
                    : ["M7 8v8M11 4v16M15 8v8"]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VoiceAgentWidget;
