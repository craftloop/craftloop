import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const LongArrowRightUp = forwardRef(
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4168 9.02292L12.3964 12.1551C12.1595 12.4008 11.7657 12.3997 11.5302 12.1527L10.9528 11.547C10.731 11.3143 10.732 10.948 10.9552 10.7165L14.7096 6.82303C15.1002 6.41804 15.7333 6.41804 16.1239 6.82303L19.8841 10.7225C20.1032 10.9497 20.1087 11.3078 19.8969 11.5418L19.3343 12.1628C19.1012 12.4202 18.6988 12.4265 18.4577 12.1765L15.4168 9.02292Z"
            fill="currentColor"
          />
          <path
            d="M14.5312 8.47217H16.5312V13.4814C16.5312 16.2429 14.2927 18.4814 11.5312 18.4814H4.12539C3.79402 18.4814 3.52539 18.2128 3.52539 17.8814V17.0814C3.52539 16.7501 3.79402 16.4814 4.12539 16.4814H11.5312C13.1881 16.4814 14.5312 15.1383 14.5312 13.4814V8.47217Z"
            fill="currentColor"
          />
        </svg>
      </svg>
    );
  }
);

LongArrowRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LongArrowRightUp.displayName = 'LongArrowRightUp';

export default LongArrowRightUp;