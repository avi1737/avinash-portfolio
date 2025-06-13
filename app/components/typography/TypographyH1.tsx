import React from 'react';

type typographyH1Types = {
  text: string;
  style?: React.CSSProperties;
};

const TypographyH1 = React.forwardRef<HTMLHeadingElement, typographyH1Types>(
  ({ text, style }, ref) => {
    return (
      <h1
        style={style}
        ref={ref}
        className="font-nohemiMedium text-[30px] text-white lg:text-[44px]"
      >
        {text}
      </h1>
    );
  }
);

// Set the display name manually
TypographyH1.displayName = 'TypographyH1';

export default TypographyH1;
