import * as React from 'react';

function SvgMultiplePagesEmpty(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M7 2h9.5L21 6.5V19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 20.5v-14A1.5 1.5 0 014.5 5h9.752a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0118 8.75V20.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 013 20.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.4V5.354a.354.354 0 01.604-.25l3.292 3.292a.353.353 0 01-.25.604H14.6a.6.6 0 01-.6-.6z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMultiplePagesEmpty);
export default ForwardRef;
