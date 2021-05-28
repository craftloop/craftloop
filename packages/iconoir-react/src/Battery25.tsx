import * as React from 'react';

function SvgBattery25(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M23 10v4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 16V8a2 2 0 012-2h15a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M4 14.4V9.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBattery25);
export default ForwardRef;