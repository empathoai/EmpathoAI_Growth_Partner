import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmpathoAI Industrial Card
 * Strictly follows the Sharp-Pill Doctrine: Zero radius, Hairline dividers.
 */
export default function IndustrialCard({
  image,
  title,
  subtitle,
  description,
  id,
  className = ''
}) {
  return (
    <div className={`product-card group cursor-pointer bg-surface-deep p-md lg:p-lg border border-hairline flex flex-col lg:min-h-[320px] justify-between ${className}`}>
      <div className="flex flex-col gap-lg lg:gap-xl">
        {id && (
          <div className="text-accent text-5xl font-bold tracking-tighter select-none">{id}</div>
        )}

        <div className="flex flex-col gap-md">
          {title && (
            <h3 className="heading-lg uppercase text-text-primary leading-tight tracking-tight lg:min-h-[110px]">
              {title}
            </h3>
          )}
          {description && (
            <p className="body-md text-text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {image && (
        <div className="product-card-image mt-auto pt-lg h-32 overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      )}
    </div>
  );
}

IndustrialCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  description: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};
