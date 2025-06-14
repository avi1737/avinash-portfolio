'use client';

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import NavigationArrow from '../../assets/svg/navigation-arrow-dark.svg';
import gsap from 'gsap';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      // Set initial rotation state to 0deg when the component is mounted
      gsap.set(imageRef.current, { rotation: 0 });
    }

    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        duration: 2,
        ease: 'back.out',
        scale: 1,
        delay: 2.0, // Delay by 2 seconds,
        opacity: 1,
      });
    }
  }, []);

  const handleMouseOver = () => {
    if (imageRef.current) {
      // Rotate the image to 90deg on hover
      gsap.to(imageRef.current, {
        // rotate: '90deg',
        duration: 0.3, // Add some duration for smooth animation
      });
    }

    if (buttonRef.current) {
      // Change the background color on hover
      gsap.to(buttonRef.current, {
        duration: 0.3, // Smooth background color transition
      });
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      // Reverse the rotation back to 0deg when mouse leaves
      gsap.to(imageRef.current, {
        // rotate: '0deg',
        duration: 0.3, // Smooth rotation back to the original position
      });
    }

    if (buttonRef.current) {
      // Reset the background color
      gsap.to(buttonRef.current, {
        // Reset to initial background color
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
      // className={`px-2 py-2 lg:px-4 lg:py-4 flex gap-4 max-w-max bg-green-400 text-black font-nohemiMedium text-[16px]`}
      style={{
        height: '40px',
        width: 'max-content',
        marginTop: 'var(--gap-xl)',
        borderRadius: '40px',
        outline: 'none',
        padding: '0 20px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        fontWeight: '500',
        scale: 0,
        textShadow: '0px 1px 1.5px rgba(0, 0, 0, .16)',
        background: 'linear-gradient(to bottom, #fff, #e6e6e6a9)',
        boxShadow:
          '0 1px 1px #ffffff14 inset, 0 1px 1.5px #00000052, 0 0 0 .5px var(--gray-9)',
        color: '#000',
        cursor: 'pointer',
      }}
    >
      {text}
      <Image
        ref={imageRef} // Attach the ref to the image for rotation
        src={NavigationArrow}
        style={{ marginLeft: '8px' }}
        alt="btn-arrow"
        width={20}
        height={20}
      />
    </button>
  );
};

export default Button;
