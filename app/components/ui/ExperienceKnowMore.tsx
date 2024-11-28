'use client';

import Image from 'next/image';
import NavigationArrow from '../../assets/svg/navigation-arrow.svg';
import { useRef, useState } from 'react';
import gsap from 'gsap';

function ExperienceKnowMore() {
  const listRef = useRef<HTMLUListElement>(null);
  const [isOpen, setOpenKnowMore] = useState(false);

  const handleListAnimation = () => {
    if (listRef.current) {
      if (isOpen) {
        // Closing animation
        gsap.to(listRef.current, {
          opacity: 0,
          maxHeight: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        // Opening animation
        gsap.to(listRef.current, {
          opacity: 1,
          maxHeight: listRef.current.scrollHeight, // Dynamically adjust to the content height
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    }
  };

  return (
    <div className="w-full mt-6">
      <h5
        className="text-[18px] cursor-pointer flex gap-4"
        onClick={() => {
          setOpenKnowMore(!isOpen);
          handleListAnimation();
        }}
      >
        Know more
        <Image
          className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
          src={NavigationArrow}
          alt="know-more-arrow"
        />
      </h5>

      <ul
        ref={listRef}
        className="overflow-hidden list-disc flex flex-col mt-3 gap-4"
        style={{ maxHeight: 0, opacity: 0 }} // Initial state (collapsed)
      >
        <li className="font-nohemiRegular text-[16px]">
          Developed responsive, interactive user interfaces with React.js,
          Next.js, and styled-components.
        </li>
        <li className="font-nohemiRegular text-[16px]">
          Implemented server-side rendering (SSR) and static site generation
          (SSG) features with Next.js for optimal SEO and performance.
        </li>
        <li className="font-nohemiRegular text-[16px]">
          Integrated APIs with React components and managed state with
          Redux/Context API.
        </li>
        <li className="font-nohemiRegular text-[16px]">
          Led the migration of legacy code to a modern React-based stack,
          improving load times by 30%.
        </li>
      </ul>
    </div>
  );
}

export default ExperienceKnowMore;
