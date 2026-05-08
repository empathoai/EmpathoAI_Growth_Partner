import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import TextArea from '../atoms/TextArea';
import FormField from '../molecules/FormField';

export default function DiagnosisModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.combined_phone = `${countryCode} ${data.phone}`;
    data.msg_length = data.business_situation.length;
    data.referral_source = document.referrer || 'direct';

    try {
      await fetch('https://services.leadconnectorhq.com/hooks/BecP4OzzrESHzfqhFUEz/webhook-trigger/3d759b69-1297-456f-be66-3dd506225915', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed', error);
      alert('There was an issue submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-canvas/92 backdrop-blur-xl" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="relative w-full max-w-4xl bg-canvas border border-hairline p-lg md:p-xl max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-lg right-lg text-text-primary hover:text-accent transition-colors uppercase font-bold tracking-widest text-sm"
          aria-label="Close modal"
        >
          CLOSE
        </button>

        <div className="mb-lg">
          <p className="caption-sm text-accent uppercase tracking-[0.2em] mb-xxs">Diagnosis Request</p>
          <h2 id="modal-title" className="heading-xl uppercase text-text-primary">
            {isSubmitted ? 'REQUEST RECEIVED' : 'REQUEST A STRUCTURAL DIAGNOSIS'}
          </h2>
          <p className="body-md text-text-secondary mt-1">
            {isSubmitted ? 'If there is a fit, we will contact you.' : 'We review a limited number of businesses. Be precise.'}
          </p>
        </div>

        {isSubmitted ? (
          <div className="pt-md">
            <Button onClick={onClose}>
              CLOSE
            </Button>
          </div>
        ) : (
          <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-md">
              <FormField label="Your Name" id="modal-name">
                <Input id="modal-name" name="full_name" placeholder="Full Name" required />
              </FormField>
              <FormField label="Email Address" id="modal-email">
                <Input id="modal-email" name="email" type="email" placeholder="email@company.com" required />
              </FormField>
            </div>
            
            <div className="grid md:grid-cols-2 gap-md">
              <FormField label="Phone Number" id="modal-phone">
                <div className="flex bg-surface-deep focus-within:ring-1 focus-within:ring-accent">
                  <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-surface-deep text-text-primary border-none rounded-none pl-md pr-sm py-sm body-md cursor-pointer border-r border-hairline"
                  >
                    <option value="+1" className="bg-surface-deep text-text-primary">+1 (US)</option>
                    <option value="+44" className="bg-surface-deep text-text-primary">+44 (UK)</option>
                    <option value="+34" className="bg-surface-deep text-text-primary">+34 (ES)</option>
                    <option value="+52" className="bg-surface-deep text-text-primary">+52 (MX)</option>
                    <option value="+57" className="bg-surface-deep text-text-primary">+57 (CO)</option>
                    <option value="+58" className="bg-surface-deep text-text-primary">+58 (VE)</option>
                    <option value="+54" className="bg-surface-deep text-text-primary">+54 (AR)</option>
                    <option value="+56" className="bg-surface-deep text-text-primary">+56 (CL)</option>
                    <option value="+51" className="bg-surface-deep text-text-primary">+51 (PE)</option>
                    <option value="+593" className="bg-surface-deep text-text-primary">+593 (EC)</option>
                  </select>
                  <Input id="modal-phone" name="phone" type="tel" placeholder="(555) 000-0000" className="bg-transparent" required />
                </div>
              </FormField>
              <FormField label="Company Website" id="modal-website">
                <Input id="modal-website" name="website" type="url" placeholder="https://yourcompany.com" required />
              </FormField>
            </div>

            <FormField label="Select Industry" id="modal-industry">
              <Select id="modal-industry" name="industry" required defaultValue="">
                <option value="" disabled>Select Industry</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Health">Health</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Real Estate">Real Estate</option>
                <option value="B2B">B2B</option>
                <option value="Local">Local</option>
                <option value="Other">Other</option>
              </Select>
            </FormField>

            <FormField 
              label="What is happening in your business?" 
              id="modal-situation"
              helperText="Low-effort requests are ignored."
            >
              <TextArea 
                id="modal-situation"
                name="business_situation"
                placeholder="What is breaking in your business right now? Be specific. (Min 40 chars)" 
                minLength="40"
                required
              />
            </FormField>
            
            <div className="pt-md">
              <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? 'SUBMITTING...' : 'REQUEST STRUCTURAL DIAGNOSIS'}
              </Button>
              <p className="caption-md text-text-muted mt-sm text-center md:text-left">
                By submitting, you agree to our Privacy Protocol.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

DiagnosisModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
