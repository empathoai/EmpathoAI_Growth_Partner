import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmpathoAI Industrial Button
 * Strictly follows the Sharp Protocol: 0px radius for all elements.
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-200 uppercase tracking-widest';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    'outline-on-image': 'btn-outline-on-image',
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button 
      className={`${baseStyles} ${selectedVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline-on-image']),
  className: PropTypes.string,
};
