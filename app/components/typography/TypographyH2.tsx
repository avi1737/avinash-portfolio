type typographyH2Types = {
  text: string;
  style?: React.CSSProperties;
};

import React from 'react';

const TypographyH2 = React.forwardRef<HTMLHeadingElement, typographyH2Types>(
  ({ text, style }, ref) => {
    return (
      <h2
        style={style}
        ref={ref}
        className="font-nohemiMedium text-center text-white text-[24px] lg:text-[30px]"
      >
        {text}
      </h2>
    );
  }
);

// Set the display name manually
TypographyH2.displayName = 'TypographyH2';

export default TypographyH2;
