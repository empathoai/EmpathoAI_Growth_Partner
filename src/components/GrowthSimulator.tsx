import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';

interface GrowthSimulatorProps {
  onClose: () => void;
}

type FormState = {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  website: string;
  industry: string;
  businessSituation: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const MotionDiv = motion.div as any;
const MotionForm = motion.form as any;

const INDUSTRY_OPTIONS = [
  'Professional Services',
  'Health / Wellness',
  'E-commerce / DTC',
  'Real Estate',
  'B2B Services',
  'Local Business',
  'Other'
];

const COUNTRY_CODES = ['+1', '+44', '+34', '+52', '+57', '+58', '+54', '+56', '+51', '+593'];

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/BecP4OzzrESHzfqhFUEz/webhook-trigger/3d759b69-1297-456f-be66-3dd506225915';

const initialFormState: FormState = {
  fullName: '',
  email: '',
  countryCode: '+1',
  phone: '',
  website: '',
  industry: '',
  businessSituation: ''
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const fieldBaseClass =
  'w-full min-w-0 bg-[#1A1A1D] border border-[#2A2F36] px-5 py-4 text-[#F5F5F5] placeholder:text-[#7A8087] font-helvetica font-regular text-base focus:outline-none focus:border-[#C56A1A] transition-colors';

const GrowthSimulator: React.FC<GrowthSimulatorProps> = ({ onClose }) => {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const fields = useMemo(
    () => ({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      countryCode: form.countryCode.trim(),
      phone: form.phone.trim(),
      website: form.website.trim(),
      industry: form.industry.trim(),
      businessSituation: form.businessSituation.trim()
    }),
    [form]
  );

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!fields.fullName) nextErrors.fullName = 'This field is required.';
    if (!fields.email) nextErrors.email = 'This field is required.';
    else if (!isValidEmail(fields.email)) nextErrors.email = 'This field is required.';
    if (!fields.phone) nextErrors.phone = 'This field is required.';
    if (!fields.industry) nextErrors.industry = 'This field is required.';
    if (!fields.businessSituation) nextErrors.businessSituation = 'This field is required.';
    else if (fields.businessSituation.length < 40) nextErrors.businessSituation = 'This field is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
    setSubmitError('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fields.fullName,
          email: fields.email,
          phone: `${fields.countryCode} ${fields.phone}`,
          countryCode: fields.countryCode,
          phoneNumber: fields.phone,
          website: fields.website,
          industry: fields.industry,
          businessSituation: fields.businessSituation,
          source: 'EmpathoAI Diagnosis Form'
        })
      });

      if (!response.ok) throw new Error('Request failed');
      setIsSuccess(true);
    } catch {
      setSubmitError('Unable to submit right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTextareaFocus = () => {
    window.setTimeout(() => {
      textareaRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 250);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0B0B0C]/92 backdrop-blur-xl overflow-y-auto"
    >
      <div className="min-h-full px-3 py-4 md:px-8 md:py-8 flex items-start md:items-center justify-center">
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[640px] bg-[#0B0B0C] border border-[#2A2F36] p-5 md:p-10 shadow-2xl"
        >
          <div className="relative mb-8 md:mb-10 flex items-center justify-start">
            <img
              src="/logo_empathoai.svg"
              alt="EmpathoAI"
              className="h-10 md:h-12 w-auto"
            />
            <button
              onClick={onClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 shrink-0 p-2 text-[#7A8087] hover:text-[#F5F5F5] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <MotionDiv
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <p className="font-helvetica font-light text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#7A8087]">
                    DIAGNOSIS REQUEST
                  </p>
                  <h2 className="font-helvetica font-bold text-3xl md:text-5xl uppercase leading-[0.95] text-[#F5F5F5]">
                    REQUEST RECEIVED
                  </h2>
                  <p className="font-helvetica font-regular text-base md:text-lg leading-relaxed text-[#8A8F98] max-w-lg">
                    We will review your information and contact you if there is a fit.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="institutional-btn shimmer-active w-full md:w-auto min-w-[220px] inline-flex items-center justify-center bg-[#C56A1A] text-[#F5F5F5] font-helvetica font-bold uppercase text-sm tracking-label px-8 py-6 md:px-12 md:py-8 transition-all duration-500"
                >
                  CLOSE
                </button>
              </MotionDiv>
            ) : (
              <MotionForm
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-8 md:space-y-9"
              >
                <div className="space-y-4">
                  <p className="font-helvetica font-light text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#7A8087]">
                    DIAGNOSIS REQUEST
                  </p>
                  <h2 className="font-helvetica font-bold text-[1.7rem] sm:text-[1.95rem] md:text-[3.25rem] uppercase leading-[0.92] text-[#F5F5F5] max-w-[12ch]">
                    REQUEST A STRUCTURAL DIAGNOSIS
                  </h2>
                  <p className="font-helvetica font-medium text-base md:text-lg leading-relaxed text-[#8A8F98] max-w-md">
                    We review a limited number of businesses. Be precise.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-7 md:gap-6">
                  <div className="space-y-3">
                    <label className="font-helvetica font-light text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#F5F5F5]">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Your name"
                      className={fieldBaseClass}
                    />
                    {errors.fullName && <p className="text-[#C56A1A] text-xs font-helvetica">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="font-helvetica font-light text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#F5F5F5]">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="founder@company.com"
                      className={fieldBaseClass}
                    />
                    {errors.email && <p className="text-[#C56A1A] text-xs font-helvetica">{errors.email}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="font-helvetica font-light text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#F5F5F5]">
                      PHONE
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-[120px_minmax(0,1fr)] gap-4 sm:gap-5">
                      <select
                        value={form.countryCode}
                        onChange={(e) => handleChange('countryCode', e.target.value)}
                        className="w-full min-w-0 bg-[#1A1A1D] border border-[#2A2F36] px-4 py-4 text-[#F5F5F5] font-helvetica font-regular focus:outline-none focus:border-[#C56A1A] transition-colors appearance-none"
                      >
                        {COUNTRY_CODES.map(code => (
                          <option key={code} value={code}>{code}</option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="Phone number"
                        className={fieldBaseClass}
                      />
                    </div>
                    {errors.phone && <p className="text-[#C56A1A] text-xs font-helvetica">{errors.phone}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="font-helvetica font-light text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#F5F5F5]">
                      WEBSITE
                    </label>
                    <input
                      type="url"
                      value={form.website}
                      onChange={(e) => handleChange('website', e.target.value)}
                      placeholder="https://yourcompany.com"
                      className={fieldBaseClass}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="font-helvetica font-light text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#F5F5F5]">
                      INDUSTRY
                    </label>
                    <select
                      value={form.industry}
                      onChange={(e) => handleChange('industry', e.target.value)}
                      className={fieldBaseClass + ' appearance-none'}
                    >
                      <option value="">Select industry</option>
                      {INDUSTRY_OPTIONS.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.industry && <p className="text-[#C56A1A] text-xs font-helvetica">{errors.industry}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="font-helvetica font-light text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#F5F5F5]">
                      WHAT IS HAPPENING IN YOUR BUSINESS?
                    </label>
                    <textarea
                      ref={textareaRef}
                      value={form.businessSituation}
                      onChange={(e) => handleChange('businessSituation', e.target.value)}
                      onFocus={handleTextareaFocus}
                      placeholder="What is breaking in your business right now? Be specific."
                      rows={8}
                      className="w-full min-h-[200px] bg-[#1A1A1D] border border-[#2A2F36] px-5 py-4 text-[#F5F5F5] placeholder:text-[#7A8087] font-helvetica font-regular text-base focus:outline-none focus:border-[#C56A1A] transition-colors resize-none"
                    />
                    {errors.businessSituation && <p className="text-[#C56A1A] text-xs font-helvetica">{errors.businessSituation}</p>}
                  </div>
                </div>

                {submitError && <p className="text-[#C56A1A] text-sm font-helvetica">{submitError}</p>}

                <div className="space-y-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="institutional-btn shimmer-active w-full md:w-auto min-w-[260px] inline-flex items-center justify-center bg-[#C56A1A] text-[#F5F5F5] font-helvetica font-bold uppercase text-sm tracking-label px-8 py-6 md:px-12 md:py-8 transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} /> : null}
                    REQUEST DIAGNOSIS
                  </button>
                  <p className="font-helvetica font-light text-[11px] uppercase tracking-[0.22em] text-[#7A8087]">
                    We only respond if there is a clear fit.
                  </p>
                </div>
              </MotionForm>
            )}
          </AnimatePresence>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default GrowthSimulator;
