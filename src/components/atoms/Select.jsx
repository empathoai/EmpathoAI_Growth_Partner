import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmpathoAI Industrial Select
 * Strictly follows the Sharp-Pill Doctrine: Zero radius for containers.
 */
export default function Select({ 
  children, 
  className = '', 
  ...props 
}) {
  return (
    <select 
      className={`w-full bg-surface-deep text-text-primary border-none rounded-none px-md py-sm body-md appearance-none cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
