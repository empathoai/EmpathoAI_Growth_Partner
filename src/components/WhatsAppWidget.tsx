import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const waUrl = "https://wa.me/593987090094?text=Institutional%20Audit%20Request%3A%20I%20have%20analyzed%20the%20infrastructure%20at%20EmpathoAI%20and%20request%20a%20strategic%20audit.";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end"
    >
      <a 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
      >
        {/* Hover Label (Hidden on small mobile) */}
        <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 px-4 py-2 rounded-sm whitespace-nowrap">
            <span className="font-mono text-[10px] text-white uppercase tracking-widest">Establish Secure Link</span>
          </div>
        </div>

        {/* Ghost Button */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-full hover:bg-white/10 transition-all duration-500 shadow-2xl">
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1} />
        </div>
        
        {/* Subtle Outer Glow */}
        <div className="absolute inset-0 rounded-full border border-white/5 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
      </a>
    </motion.div>
  );
};

export default WhatsAppWidget;