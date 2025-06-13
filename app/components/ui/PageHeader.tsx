'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TypographyH1 from '../typography/TypographyH1';
import TypographyH2 from '../typography/TypographyH2';
import Image from 'next/image';
import bgImage from '../../assets/bg_image.jpg';

type PageHeaderProps = {
  pageTitle: string;
  pageSubtitle: string;
};

function PageHeader({ pageTitle, pageSubtitle }: PageHeaderProps) {
  const headingRef = useRef<HTMLHeadingElement>(null); // Reference for the entire container
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        // scale: 1,
        delay: 0.4, // Delay by 2 seconds
      });
    }

    if (subheadingRef.current) {
      gsap.to(subheadingRef.current, {
        duration: 2,
        ease: 'back.out',
        // scale: 1,
        delay: 1.0, // Delay by 2 seconds,
        opacity: 1,
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col justify-center mt-8">
      <TypographyH1
        style={{ opacity: 0, scale: 1, textAlign: 'left' }}
        text={pageTitle}
        ref={headingRef}
      />
      <TypographyH2
        style={{ scale: 1, opacity: 0, textAlign: 'left', marginTop: '1rem' }}
        text={pageSubtitle}
        ref={subheadingRef}
      />
    </div>
  );
}

export default PageHeader;
