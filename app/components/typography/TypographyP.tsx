type typographyP = {
  children: React.ReactNode; // Allow for nested content (like span or text)
  textAlign?: 'left' | 'right' | 'center';
};

function TypographyP({ children, textAlign = 'center' }: typographyP) {
  return (
    <p
      className="text-[16px] lg:text-[22px] font-nohemiRegular text-white"
      style={{ textAlign: textAlign }}
    >
      {children}
    </p>
  );
}

export default TypographyP;
