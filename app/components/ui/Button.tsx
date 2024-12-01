'use client';

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import NavigationArrow from '../../assets/svg/navigation-arrow-dark.svg';
import gsap from 'gsap';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      // Set initial rotation state to 0deg when the component is mounted
      gsap.set(imageRef.current, { rotation: 0 });
    }
  }, []);

  const handleMouseOver = () => {
    if (imageRef.current) {
      // Rotate the image to 90deg on hover
      gsap.to(imageRef.current, {
        rotate: '90deg',
        duration: 0.3, // Add some duration for smooth animation
      });
    }

    if (buttonRef.current) {
      // Change the background color on hover
      gsap.to(buttonRef.current, {
        backgroundColor: '#47f54d',
        duration: 0.3, // Smooth background color transition
      });
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      // Reverse the rotation back to 0deg when mouse leaves
      gsap.to(imageRef.current, {
        rotate: '0deg',
        duration: 0.3, // Smooth rotation back to the original position
      });
    }

    if (buttonRef.current) {
      // Reset the background color
      gsap.to(buttonRef.current, {
        backgroundColor: '#47f54d', // Reset to initial background color
        duration: 0.3, // Smooth background color transition
      });
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
      className={`px-2 py-2 lg:px-4 lg:py-4 flex gap-4 max-w-max bg-green-400 text-black font-nohemiMedium text-[16px]`}
    >
      {text}
      <Image
        ref={imageRef} // Attach the ref to the image for rotation
        src={NavigationArrow}
        alt="btn-arrow"
        width={20}
        height={20}
      />
    </button>
  );
};

export default Button;
