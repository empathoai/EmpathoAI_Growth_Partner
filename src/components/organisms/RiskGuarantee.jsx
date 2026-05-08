import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

export default function RiskGuarantee({ onActionClick }) {
  return (
    <section className="section-rhythm bg-canvas text-text-primary relative overflow-hidden border-y border-hairline">
      <div className="container-empatho text-center flex flex-col items-center py-xxl relative z-10">
        <p className="caption-md text-accent uppercase tracking-[0.2em] mb-md font-bold">Risk Mitigation Protocol</p>
        <h2 className="display-campaign mb-lg">FIX THE SYSTEM OR DON'T PAY</h2>
        <p className="body-strong text-text-secondary max-w-2xl mb-xl">
          If your system does not improve, you do not pay. We keep working until it does.
        </p>
        <div className="flex flex-col gap-sm items-center">
          <Button onClick={onActionClick}>
            START DIAGNOSIS
          </Button>

        </div>
      </div>
    </section>
  );
}

RiskGuarantee.propTypes = {
  onActionClick: PropTypes.func.isRequired,
};
