import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const highlightQuestion = (question: string) => {
  const parts = question.split(' ');
  if (parts.length === 0) return question;
  const lastWord = parts[parts.length - 1];
  const prefix = parts.slice(0, -1).join(' ');

  return (
    <>
      {prefix ? `${prefix} ` : ''}
      <span className="text-[#C56A1A]">{lastWord}</span>
    </>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-t border-divider last:border-b last:border-divider">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-10 md:py-12 text-left focus:outline-none group"
      >
        <h3 className="font-helvetica font-bold text-xl md:text-2xl uppercase tracking-label text-[#F5F5F5]/90 group-hover:text-[#F5F5F5] transition-colors duration-300 pr-8">
          {isOpen ? highlightQuestion(question) : question}
        </h3>
        <div className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-[#C56A1A]' : 'text-gray-mid group-hover:text-[#F5F5F5]'}`}>
          {isOpen ? <Minus className="w-6 h-6" strokeWidth={1} /> : <Plus className="w-6 h-6" strokeWidth={1} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 md:pb-14 pt-2 max-w-4xl">
              <p className="font-helvetica font-medium text-lg md:text-xl text-[#F5F5F5] leading-[1.75]">
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
      question: 'Who is this for?',
      answer: <>Businesses already generating <span className="text-[#C56A1A]">revenue</span> that need to fix how they <span className="text-[#C56A1A]">grow</span>.</>
    },
    {
      question: 'Who is this NOT for?',
      answer: <>Businesses looking for <span className="text-[#C56A1A]">quick wins</span> or avoiding structural <span className="text-[#C56A1A]">changes</span>.</>
    },
    {
      question: 'How long does this take?',
      answer: <>Most systems improve within <span className="text-[#C56A1A]">90 days</span>.</>
    },
    {
      question: 'Do you work with startups?',
      answer: <>Only if there is <span className="text-[#C56A1A]">traction</span> and clear <span className="text-[#C56A1A]">demand</span>.</>
    }
  ];

  return (
    <section className="py-20 md:py-40 px-6 md:px-24 bg-[#0B0B0C] border-b border-white/15">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-32">
          <p className="font-helvetica font-bold text-4xl sm:text-6xl md:text-[6.5rem] uppercase leading-none text-[#F5F5F5]">
            WHO THIS IS FOR
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

