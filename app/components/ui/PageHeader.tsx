'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
      });
    }

    if (subheadingRef.current) {
      gsap.to(subheadingRef.current, {
        duration: 2,
        ease: 'back.out',
        scale: 1,
      });
    }
  }, []);
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center">
      <h1
        ref={headingRef}
        style={{ opacity: 0, scale: 0 }}
        className="font-nohemiMedium text-[56px] lg:text-[180px]"
      >
        {pageTitle}
      </h1>
      <p
        ref={subheadingRef}
        style={{ scale: 0 }}
        className="font-nohemiMedium text-[24px] lg:text-[30px]"
      >
        {pageSubtitle}
      </p>
    </div>
  );
}

export default PageHeader;
