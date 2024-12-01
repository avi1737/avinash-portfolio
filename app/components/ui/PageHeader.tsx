'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TypographyH1 from '../typography/TypographyH1';
import TypographyH2 from '../typography/TypographyH2';

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
        scale: 1,
        delay: 0.6, // Delay by 2 seconds
      });
    }

    if (subheadingRef.current) {
      gsap.to(subheadingRef.current, {
        duration: 2,
        ease: 'back.out',
        scale: 1,
        delay: 0.6, // Delay by 2 seconds
      });
    }
  }, []);

  return (
    <div className="w-full min-h-[50svh] flex flex-col justify-center items-center">
      <TypographyH1
        style={{ opacity: 0, scale: 0 }}
        text={pageTitle}
        ref={headingRef}
      />
      <TypographyH2
        style={{ scale: 0 }}
        text={pageSubtitle}
        ref={subheadingRef}
      />
    </div>
  );
}

export default PageHeader;
