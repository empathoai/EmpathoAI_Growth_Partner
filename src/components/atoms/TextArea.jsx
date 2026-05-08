import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmpathoAI Industrial TextArea
 * Strictly follows the Sharp-Pill Doctrine: Zero radius for containers.
 */
export default function TextArea({ 
  className = '', 
  ...props 
}) {
  return (
    <textarea 
      className={`w-full bg-surface-deep text-text-primary border-none rounded-none px-md py-sm body-md min-h-[100px] ${className}`}
      {...props}
    />
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
};
