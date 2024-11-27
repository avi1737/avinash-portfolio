'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const drawerRef = useRef<HTMLDivElement>(null);
  const [currentSelectedIcon, setCurrentIcon] = useState(HomeIcon);

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
    if (target.textContent === 'Experience') {
      setCurrentIcon(ExeperienceIcon);
    }

    if (target.textContent === 'Home') {
      setCurrentIcon(HomeIcon);
    }

    if (target.textContent === 'Contact') {
      setCurrentIcon(ContactIcon);
    }

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

  return (
    <div
      ref={drawerRef}
      className="fixed top-10 left-0 w-full h-full flex flex-col z-100 text-black"
      style={{ transform: 'translateX(-100%)' }} // Start off-screen to the left
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
                  className="w-[50px] h-[50px]"
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
                  className="w-[50px] h-[50px]"
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
                  className="w-[50px] h-[50px]"
                  src={NavigationArrow}
                  alt="navigation-arrow"
                />
              </span>
            </Link>
          </nav>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={currentSelectedIcon}
            className="hidden lg:flex w-[256px] h-[256px]"
            alt="home"
          />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
