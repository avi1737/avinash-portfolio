// NavigationItem.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavigationArrow from '../../assets/svg/navigation-arrow.svg';
import gsap from 'gsap';

type NavigationItemProps = {
  href: string;
  text: string;
  // setDrawerOpen: (open: boolean) => void;
};

const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  text,
  setDrawerOpen,
}) => {
  const handleMouseOver = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    gsap.to(target, {
      x: '20px', // Move text to the right on hover
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseOut = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    gsap.to(target, {
      x: '0px', // Reset text position
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <Link
      href={href}
      className="text-xl flex justify-center items-center  gap-1 lg:gap-4  font-nohemiMedium border-[2px] border-transparent text-white text-[13px] lg:text-[20px]"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      // onClick={() => setDrawerOpen(false)} // Close drawer when link is clicked
    >
      {text}
      <span>
        <Image
          className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px]"
          src={NavigationArrow}
          alt="navigation-arrow"
        />
      </span>
    </Link>
  );
};

export default NavigationItem;
