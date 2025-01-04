import React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const TimeIcon = () => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <G clipPath="url(#clip0)">
      <Path
        d="M13.335 1.46001C6.91315 1.46001 1.71002 6.66313 1.71002 13.085C1.71002 19.5069 6.91315 24.71 13.335 24.71C19.7569 24.71 24.96 19.5069 24.96 13.085C24.96 6.66313 19.7569 1.46001 13.335 1.46001ZM16.0116 17.8709L11.8772 14.8663C11.7319 14.7584 11.6475 14.5897 11.6475 14.4116V6.52251C11.6475 6.21313 11.9006 5.96001 12.21 5.96001H14.46C14.7694 5.96001 15.0225 6.21313 15.0225 6.52251V12.9772L17.9991 15.1428C18.2522 15.3256 18.3038 15.6772 18.121 15.9303L16.7991 17.7491C16.6163 17.9975 16.2647 18.0538 16.0116 17.8709Z"
        fill="#FAFAFA"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.75 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default TimeIcon;
