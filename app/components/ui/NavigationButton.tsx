'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function NavigationButton() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  // Refs for hamburger and cross icons
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDrawerOpen) {
      // Hide hamburger and show cross
      gsap.to(hamburgerRef.current, { x: -100, opacity: 0, duration: 0.5 });
      gsap.to(crossRef.current, { x: 0, opacity: 1, duration: 0.5 });
    } else {
      // Hide cross and show hamburger
      gsap.to(crossRef.current, { x: 100, opacity: 0, duration: 0.5 });
      gsap.to(hamburgerRef.current, { x: 0, opacity: 1, duration: 0.5 });
    }
  }, [isDrawerOpen]);

  return (
    <>
      <div
        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] cursor-pointer rounded-[50%] bg-slate-700 flex justify-center items-center relative"
        onClick={() => setDrawerOpen(!isDrawerOpen)}
      >
        {/* Hamburger Icon */}
        <div
          ref={hamburgerRef}
          className="flex w-full flex-col items-center justify-center absolute"
        >
          <span className="w-[60%] h-[3px] bg-white mb-[4px]"></span>
          <span className="w-[35%] h-[3px] bg-white"></span>
        </div>

        {/* Cross Icon */}
        <div
          ref={crossRef}
          className="absolute w-full flex items-center justify-center opacity-0"
        >
          <span className="w-[60%] h-[2px] bg-white absolute rotate-45"></span>
          <span className="w-[60%] h-[2px] bg-white absolute -rotate-45"></span>
        </div>
      </div>

      {/* <Drawer setDrawerOpen={setDrawerOpen} isOpen={isDrawerOpen} /> */}
    </>
  );
}

export default NavigationButton;
