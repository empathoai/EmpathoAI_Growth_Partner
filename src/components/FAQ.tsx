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
    <div className="border-t border-white/10 last:border-b last:border-white/10">
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
      question: "Why isn't my current marketing agency scaling my revenue?",
      answer: "Most agencies focus on vanity metrics like clicks or impressions. They provide 'services,' not systems. EmpathoAI replaces fragmented tactics with Revenue Infrastructure, ensuring that every dollar spent on Meta Ads is an investment in a predictable, high-fidelity acquisition engine."
    },
    {
      question: "How can I reduce my Customer Acquisition Cost (CAC) on Meta Ads?",
      answer: "High CAC is usually a symptom of a weak 'Conversion Bridge.' Our Sovereign Framework V3 uses AI-driven empathy to capture human intent and machine precision to optimize the unit economics of your sales funnel, driving down costs by increasing resonance and friction-less conversion."
    },
    {
      question: "What is the difference between a lead generator and a Growth Partner?",
      answer: "A lead generator sells you names; a Growth Partner builds the infrastructure to own the market. We operate under a 'Skin in the Game' model, where our success is mathematically tethered to your profit margins, providing the institutional rigor that traditional agencies lack."
    },
    {
      question: "Is EmpathoAI suitable for niche industries like Industrial Manufacturing or Medical Aesthetics?",
      answer: "Yes. Our methodology is vertical-agnostic because the mathematics of growth are universal. Whether it is Industrial B2B or High-Value Clinical Services, we engineer the specific 'Ecosystem of Influence' required to dominate your particular niche."
    }
  ];

  return (
    <section className="py-20 md:py-40 px-6 md:px-24 bg-void border-b border-white/15">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-32">
          <h2 className="font-mono text-lg md:text-xl text-noise uppercase tracking-widest mb-4">Strategic Intelligence</h2>
          <p className="font-inter font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-brutal uppercase leading-none">
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