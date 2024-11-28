'use client';

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for portals
import gsap from 'gsap';
import Link from 'next/link';
import NavigationArrow from '../../assets/svg/navigation-arrow.svg';
import HomeIcon from '../../assets/navigation/property.png';
import ExeperienceIcon from '../../assets/navigation/achievement.png';
import ContactIcon from '../../assets/navigation/call-back.png';
import Image from 'next/image';

type DrawerProps = {
  setDrawerOpen: (open: boolean) => void; // Function to manage drawer open state
  isOpen: boolean; // Boolean state to check if drawer is open
};

const Drawer: React.FC<DrawerProps> = ({ setDrawerOpen, isOpen }) => {
  const [isClient, setIsClient] = useState(false); // State to track if we are on the client-side
  const drawerRef = useRef<HTMLDivElement>(null);

  // Set isClient to true once component is mounted (on client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Open/close drawer animation using GSAP
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    // If the drawer is open, animate it to be visible from the left
    if (isOpen) {
      gsap.to(drawer, {
        x: '0%', // Animate to its original position (from left to right)
        duration: 1,
        ease: 'power2.out',
      });
    } else {
      // If the drawer is closed, animate it out of view (to the left)
      gsap.to(drawer, {
        x: '-100%', // Move out of the screen (to the left)
        duration: 1,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  const handleMouseOver = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    gsap.to(target, {
      x: '20px', // Move text 10px to the right on hover
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseOut = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    gsap.to(target, {
      x: '0px', // Reset text position back to normal
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const drawerContent = (
    <div
      ref={drawerRef}
      className="fixed top-[80px] left-0 w-full h-full bg-primaryBlack flex flex-col z-100 text-black"
      style={{ transform: 'translateX(-100%)', zIndex: 9999 }} // Start off-screen to the left
    >
      {/* Close button header section */}
      <div className="p-2 w-full">
        <div className="container h-auto flex items-center justify-center">
          <div className="w-1/2 flex justify-start items-center">
            <h1 className="font-nohemiMedium text-[18px] md:text-[36px]"></h1>
          </div>

          <div className="w-1/2 flex justify-end items-center"></div>
        </div>
      </div>

      {/* Menu container */}
      <div className="container flex flex-col lg:flex-row p-2 mt-20">
        <div className="w-full lg:w-1/2">
          <nav className="flex flex-col justify-center items-start gap-4 lg:gap-20">
            <Link
              href="/"
              className="text-xl  flex justify-center items-center gap-4 font-nohemiMedium border-[2px] border-transparent text-white text-[32px] lg:text-[84px]"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => setDrawerOpen(false)}
            >
              Home
              <span>
                <Image
                  className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
                  src={NavigationArrow}
                  alt="navigation-arrow"
                />
              </span>
            </Link>
            <Link
              href="/experience"
              className="text-xl  flex justify-center items-center gap-4 font-nohemiMedium  border-[2px] border-transparent text-white text-[32px] lg:text-[84px]"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => setDrawerOpen(false)}
            >
              Experience
              <span>
                <Image
                  className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
                  src={NavigationArrow}
                  alt="navigation-arrow"
                />
              </span>
            </Link>
            <Link
              href="/contact"
              className="text-xl flex justify-center items-center gap-4 font-nohemiMedium  border-[2px] border-transparent text-white text-[32px] lg:text-[84px]"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => setDrawerOpen(false)}
            >
              Contact
              <span>
                <Image
                  className="w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]"
                  src={NavigationArrow}
                  alt="navigation-arrow"
                />
              </span>
            </Link>
          </nav>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center"></div>
      </div>
    </div>
  );

  // Check if we are on the client-side before rendering the portal
  if (!isClient) {
    return null; // Don't render anything during server-side render
  }

  // Now we can safely use `document.body` because we're on the client-side
  return ReactDOM.createPortal(drawerContent, document.body); // Render drawerContent into the body using React Portal
};

export default Drawer;
