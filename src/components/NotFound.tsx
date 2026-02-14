
import React from 'react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-void flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden relative">
      {/* Background Neural Void Decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="font-inter font-extrabold text-[40vw] leading-none uppercase tracking-tighter">NULL_ADDR</span>
      </div>

      {/* Glitch 404 Container */}
      <div className="relative mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <motion.h1 
            className="font-inter font-extrabold text-7xl md:text-[12rem] tracking-tighter uppercase leading-none text-white flex items-center justify-center"
            animate={{
              x: [0, -1, 1, -1, 0],
              y: [0, 0.5, -0.5, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <span className="text-noise font-mono mr-2 md:mr-4">[</span>
            404
            <span className="text-noise font-mono ml-2 md:ml-4">]</span>
          </motion.h1>
        </motion.div>

        {/* Glitch Ghost Layers */}
        <motion.div 
          className="absolute inset-0 font-inter font-extrabold text-7xl md:text-[12rem] tracking-tighter uppercase leading-none text-white opacity-20 mix-blend-screen pointer-events-none"
          animate={{
            x: [-4, 4, -2, 0],
            opacity: [0, 0.3, 0.1, 0],
            skewX: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 0.15, 
            repeat: Infinity, 
            repeatDelay: 3 
          }}
        >
          <span className="text-noise font-mono mr-2 md:mr-4">[</span>404<span className="text-noise font-mono ml-2 md:ml-4">]</span>
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="max-w-2xl space-y-8 md:space-y-12 relative z-10">
        <div className="space-y-4">
          <h2 className="font-mono text-sm md:text-lg text-noise uppercase tracking-[0.4em]">
            // Protocol Not Found.
          </h2>
          <p className="font-montserrat font-light text-lg md:text-xl text-white/50 leading-relaxed text-balance">
            The architectural path you are trying to access is outside the Sovereign network. 
            The connection has been terminated to preserve infrastructure integrity.
          </p>
        </div>

        <div className="pt-8">
          <motion.a 
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="institutional-btn shimmer-active inline-block bg-white text-black px-10 py-5 md:px-16 md:py-8 font-mono font-bold uppercase text-xs md:text-sm tracking-[0.4em] transition-all duration-500 hover:bg-zinc-200"
          >
            [RE-INITIALIZE_SESSION]
          </motion.a>
        </div>
      </div>

      {/* Terminal Status Overlay */}
      <div className="absolute bottom-12 left-12 hidden md:block opacity-30">
        <p className="font-mono text-[10px] text-noise uppercase tracking-[0.3em] vertical-rl rotate-180">
          ERR_CON_TERMINATED // 0x00000404
        </p>
      </div>
    </div>
  );
};

export default NotFound;
