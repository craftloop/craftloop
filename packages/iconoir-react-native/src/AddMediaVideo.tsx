import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgAddMediaVideo(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M13 21H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V13M16 19h3m3 0h-3m0 0v-3m0 3v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.898 8.513a.6.6 0 00-.898.52v5.933a.6.6 0 00.898.521l5.19-2.966a.6.6 0 000-1.042l-5.19-2.966z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgAddMediaVideo);
export default ForwardRef;
