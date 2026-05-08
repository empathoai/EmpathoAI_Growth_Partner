import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmpathoAI Industrial Input
 * Strictly follows the Sharp-Pill Doctrine: Zero radius for containers.
 */
export default function Input({ 
  className = '', 
  type = 'text', 
  ...props 
}) {
  return (
    <input 
      type={type}
      className={`w-full bg-surface-deep text-text-primary border-none rounded-none px-md py-sm body-md ${className}`}
      {...props}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};
