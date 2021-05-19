import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const RefreshDouble = forwardRef(
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
            d="M21.1674 8C19.6243 4.46819 16.1001 2 11.9995 2C6.8141 2 2.55055 5.94668 2.04883 11M21.1674 8H16.9995M21.1674 8H21.3995C21.7308 8 21.9995 7.73137 21.9995 7.4V3"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13M2.88146 16H7.04938M2.88146 16H2.64938C2.318 16 2.04938 16.2686 2.04938 16.6V21"
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

RefreshDouble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RefreshDouble.displayName = 'RefreshDouble';

export default RefreshDouble;