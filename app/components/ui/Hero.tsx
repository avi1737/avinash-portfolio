'use client';

import Image from 'next/image';
import profilePhoto from '../../assets/avinash-portfolio-dp.jpeg';
import DownloadResume from './DownloadResume';
import Gap from './Gap';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        duration: 2,
        ease: 'back.out',
        // scale: 1,
        delay: 1.5, // Delay by 2 seconds,
        opacity: 1,
      });
    }
  }, []);

  return (
    <div className="w-full text-center flex flex-col justify-center items-center">
      <Image
        className="w-[100px] rounded-[50%] h-[100px] lg:w-[250px] lg:h-[250px]"
        src={profilePhoto}
        loading="lazy"
        alt="dp"
        ref={heroRef}
        style={{ opacity: 0, scale: 1 }}
      />
      <Gap />
      <DownloadResume />
    </div>
  );
}

export default Hero;
