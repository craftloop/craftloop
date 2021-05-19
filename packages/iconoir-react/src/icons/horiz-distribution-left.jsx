import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const HorizDistributionLeft = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 17V7M19 17H13.6C13.2686 17 13 16.7314 13 16.4V7.6C13 7.26863 13.2686 7 13.6 7H19M19 17V20M19 7V4"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 17V7M9 17H5.6C5.26863 17 5 16.7314 5 16.4V7.6C5 7.26863 5.26863 7 5.6 7H9M9 17V20M9 7V4"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

HorizDistributionLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HorizDistributionLeft.displayName = 'HorizDistributionLeft';

export default HorizDistributionLeft;