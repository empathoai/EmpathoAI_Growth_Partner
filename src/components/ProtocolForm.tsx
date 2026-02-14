import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { FormStep, Sector, RevenueBracket } from '../types';

interface ProtocolFormProps {
  onClose: () => void;
}

const ProtocolForm: React.FC<ProtocolFormProps> = ({ onClose }) => {
  const [step, setStep] = useState<FormStep | 'PROCESSING'>(FormStep.SECTOR);
  const [formData, setFormData] = useState({
    sector: '',
    scale: '',
    friction: ''
  });

  const nextStep = () => {
    if (step === FormStep.SECTOR) setStep(FormStep.SCALE);
    else if (step === FormStep.SCALE) setStep(FormStep.FRICTION);
    else if (step === FormStep.FRICTION) {
      setStep('PROCESSING');
      // Simulated Neural Processing delay for Institutional Authority
      setTimeout(() => {
        setStep(FormStep.SUCCESS);
      }, 2500);
    }
  };

  const handleSectorSelect = (s: Sector) => {
    setFormData({ ...formData, sector: s });
    nextStep();
  };

  const handleScaleSelect = (sc: RevenueBracket) => {
    setFormData({ ...formData, scale: sc });
    nextStep();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center p-6"
    >
      <div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center">
        <span className="font-mono text-xs text-noise uppercase tracking-widest">
          Protocol Intake Phase: {step === 'PROCESSING' ? 'ANALYZING' : step}
        </span>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/5 rounded-full transition-colors group"
        >
          <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" strokeWidth={1} />
        </button>
      </div>

      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {step === FormStep.SECTOR && (
            <motion.div
              key="sector"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <h3 className="font-inter font-extrabold text-4xl md:text-6xl tracking-brutal brutal-heading uppercase">Identify your Sector</h3>
              <div className="grid grid-cols-1 gap-4">
                {sectors.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSectorSelect(s as Sector)}
                    className="group flex justify-between items-center p-8 border border-white/10 hover:border-white transition-all text-left"
                  >
                    <span className="font-mono text-sm uppercase tracking-widest">{s}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === FormStep.SCALE && (
            <motion.div
              key="scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <h3 className="font-inter font-extrabold text-4xl md:text-6xl tracking-brutal brutal-heading uppercase">Current Scale</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {brackets.map((b) => (
                  <button
                    key={b}
                    onClick={() => handleScaleSelect(b as RevenueBracket)}
                    className="group flex justify-between items-center p-8 border border-white/10 hover:border-white transition-all text-left"
                  >
                    <span className="font-mono text-sm uppercase tracking-widest">{b}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === FormStep.FRICTION && (
            <motion.form
              key="friction"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-inter font-extrabold text-4xl md:text-6xl tracking-brutal brutal-heading uppercase mb-4">The Friction</h3>
                <p className="font-montserrat text-noise text-sm uppercase tracking-widest">What is the exact bottleneck preventing 10x growth?</p>
              </div>

              <div className="relative group">
                <textarea
                  autoFocus
                  required
                  placeholder="Describe the structural failure..."
                  className="w-full bg-transparent border-b border-white/20 py-4 font-montserrat text-xl focus:outline-none focus:border-white transition-all resize-none min-h-[150px]"
                  value={formData.friction}
                  onChange={(e) => setFormData({ ...formData, friction: e.target.value })}
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
              </div>

              <p className="text-[10px] text-noise font-montserrat uppercase tracking-wider leading-relaxed opacity-60">
                By clicking Submit Application, you agree to our Privacy Policy and consent to receive communications via WhatsApp/SMS for strategic auditing purposes.
              </p>

              <button
                type="submit"
                className="w-full md:w-auto bg-white text-black px-12 py-5 font-mono font-bold uppercase text-sm tracking-widest hover:bg-neutral-200 transition-colors"
              >
                Submit Application
              </button>
            </motion.form>
          )}

          {step === 'PROCESSING' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-8"
            >
              <div className="flex justify-center">
                <Loader2 className="w-16 h-16 text-white animate-spin" strokeWidth={1} />
              </div>
              <h3 className="font-inter font-extrabold text-2xl uppercase tracking-[0.3em]">Institutional Validation</h3>
              <div className="font-mono text-[10px] text-noise uppercase space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >Analyzing Infrastructure Alignment...</motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >Validating Strategic Intent...</motion.p>
              </div>
            </motion.div>
          )}

          {step === FormStep.SUCCESS && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="flex justify-center">
                <CheckCircle2 className="w-20 h-20 text-white" strokeWidth={1} />
              </div>
              <div>
                <h3 className="font-inter font-extrabold text-4xl md:text-6xl tracking-brutal brutal-heading uppercase">Protocol Accepted</h3>
                <p className="font-montserrat text-noise text-lg mt-4 max-w-md mx-auto">
                  Our sovereign partners will review your deployment request within 12 hours. Stand by for encrypted outreach.
                </p>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-xs uppercase tracking-widest border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all"
              >
                Close Gateway
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-12 hidden md:block">
        <p className="font-mono text-[10px] text-noise uppercase tracking-widest vertical-rl rotate-180">
          Secure Transmission Link Established // 256-bit Encryption Active
        </p>
      </div>
    </motion.div>
  );
};

const sectors: Sector[] = [
  'WELLNESS & LONGEVITY',
  'INDUSTRIAL & METALLURGY',
  'PREMIUM DTC',
  'LUXURY REAL ESTATE',
  'PROFESSIONAL SERVICES'
];

const brackets: RevenueBracket[] = ['< $50k/mo', '$50k - $250k/mo', '$250k - $1M/mo', '> $1M/mo'];

export default ProtocolForm;