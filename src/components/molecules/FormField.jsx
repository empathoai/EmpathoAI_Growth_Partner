import React from 'react';
import PropTypes from 'prop-types';

export default function FormField({ 
  label, 
  id, 
  children, 
  error, 
  helperText, 
  className = '' 
}) {
  return (
    <div className={`flex flex-col gap-xxs ${className}`}>
      {label && (
        <label htmlFor={id} className="caption-sm text-accent uppercase tracking-widest">
          {label}
        </label>
      )}
      {children}
      {helperText && !error && (
        <p className="caption-sm text-text-secondary mt-1">{helperText}</p>
      )}
      {error && (
        <p className="caption-sm text-accent mt-1 uppercase font-bold">{error}</p>
      )}
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
};
