type typographyH5Types = {
  text: string;
  style?: React.CSSProperties;
};

import React from 'react';

const TypographyH5 = React.forwardRef<HTMLHeadingElement, typographyH5Types>(
  ({ text, style }, ref) => {
    return (
      <h2
        style={style}
        ref={ref}
        className="font-nohemiMedium text-[36px] lg:text-[64px] text-center lg:text-left text-white"
      >
        {text}
      </h2>
    );
  }
);

// Set the display name manually
TypographyH5.displayName = 'TypographyH5';

export default TypographyH5;
