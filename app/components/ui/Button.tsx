'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import NavigationArrow from '../../assets/svg/navigation-arrow-dark.svg';
import gsap from 'gsap';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'PRIMARY' | 'SECONDARY';
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseOver = () => {
    if (buttonRef.current) {
      const image = buttonRef.current.querySelector('img');
      if (image) {
        gsap.to(image, {
          rotate: '90deg',
        });
      }

      gsap.to(buttonRef.current, {
        backgroundColor: '#22c55e',
      });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      const image = buttonRef.current.querySelector('img');
      if (image) {
        gsap.to(image, {
          rotate: '0deg',
        });
      }

      gsap.to(buttonRef.current, {
        x: '0px',
        backgroundColor: '#47f54d', // Reset to initial background color
      });
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave} // Add this event
      ref={buttonRef}
      className={`px-4 py-4 flex gap-4 max-w-max bg-green-400 text-black font-nohemiMedium text-[16px]`}
    >
      {text}
      <Image src={NavigationArrow} alt="btn-arrow" width={20} height={20} />
    </button>
  );
};

export default Button;
