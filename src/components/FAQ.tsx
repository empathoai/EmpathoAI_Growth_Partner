import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-t border-white/20 last:border-b last:border-white/20">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-8 md:py-10 text-left focus:outline-none group"
      >
        <h3 className="font-inter font-bold text-xl md:text-2xl uppercase tracking-widest text-white/90 group-hover:text-white transition-colors duration-300 pr-8">
          {question}
        </h3>
        <div className="shrink-0 text-noise group-hover:text-white transition-colors duration-300">
          {isOpen ? <Minus className="w-6 h-6" strokeWidth={1} /> : <Plus className="w-6 h-6" strokeWidth={1} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pb-12 max-w-4xl">
              <p className="font-montserrat text-lg md:text-xl text-noise leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Why do you cap your client roster at 11 partners?",
      answer: "To maintain Bio-Operational Clarity. We cannot think at a Co-Founder level if we are drowning in client volume. We trade mass-market scale for singular focus on your net profit."
    },
    {
      question: "What is a \"Galactic\" business?",
      answer: "A business with momentum (>$50k/mo) that needs a lever, not a crutch. If you are looking for a \"service provider\" to fix your ads, we are not a fit. If you want a Partner to engineer a data moat, we are."
    },
    {
      question: "How does the \"Skin in the Game\" model work?",
      answer: "We define the LTV:CAC benchmark together. If we don't hit it, we don't get paid our full retainer. We are incentivized to optimize your profit, not just your ad spend."
    },
    {
      question: "Do you work with startups?",
      answer: "Only if they are well-funded and have \"Galactic\" potential (Proof of Concept established). We do not build from zero; we amplify momentum."
    }
  ];

  return (
    <section className="py-20 md:py-40 px-6 md:px-24 bg-void border-b border-white/15">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-32">
          <h2 className="font-mono text-lg md:text-xl text-noise uppercase tracking-widest mb-4">Strategic Intelligence</h2>
          <p className="font-inter font-extrabold text-4xl sm:text-6xl md:text-[6.5rem] tracking-brutal uppercase leading-none">
            The Bridge to <span className="text-white">Authority</span>
          </p>
        </div>

        <div className="w-full">
          {faqData.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;