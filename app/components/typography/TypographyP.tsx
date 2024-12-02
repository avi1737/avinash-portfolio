type typographyP = {
  children: React.ReactNode; // Allow for nested content (like span or text)
};

function TypographyP({ children }: typographyP) {
  return (
    <p className="text-[16px] lg:text-[22px] font-nohemiRegular text-white text-center lg:text-left">
      {children}
    </p>
  );
}

export default TypographyP;
