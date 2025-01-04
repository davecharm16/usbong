import React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const BellIcon = () => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <G clipPath="url(#clip0)">
      <Path
        d="M12.75 24.5C14.4056 24.5 15.7486 23.157 15.7486 21.5H9.75138C9.75138 23.157 11.0943 24.5 12.75 24.5ZM22.8464 17.4823C21.9408 16.5092 20.2462 15.0453 20.2462 10.25C20.2462 6.60781 17.6925 3.69219 14.249 2.97688V2C14.249 1.17172 13.5778 0.5 12.75 0.5C11.9222 0.5 11.2509 1.17172 11.2509 2V2.97688C7.80747 3.69219 5.25372 6.60781 5.25372 10.25C5.25372 15.0453 3.55919 16.5092 2.65357 17.4823C2.37232 17.7847 2.24763 18.1461 2.24997 18.5C2.25513 19.2687 2.85841 20 3.75466 20H21.7453C22.6415 20 23.2453 19.2687 23.25 18.5C23.2523 18.1461 23.1276 17.7842 22.8464 17.4823Z"
        fill="white"
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

export default BellIcon;
