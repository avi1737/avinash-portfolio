type typographyP = {
  children: React.ReactNode; // Allow for nested content (like span or text)
};

function TypographyP({ children }: typographyP) {
  return (
    <h1 className="text-[16px] lg:text-[22px] font-nohemiMedium text-white">
      {children}
    </h1>
  );
}

export default TypographyP;
