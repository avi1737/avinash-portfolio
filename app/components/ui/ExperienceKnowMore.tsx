'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import Button from './Button';

type experienceWorkItemProps = {
  points: Array<{ point: string }>;
};

function ExperienceKnowMore({ points }: experienceWorkItemProps) {
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
      <Button
        text="Know more"
        onClick={() => {
          setOpenKnowMore(!isOpen);
          handleListAnimation();
        }}
      />

      <ul
        ref={listRef}
        className="overflow-hidden list-disc flex flex-col mt-3 gap-4"
        style={{ maxHeight: 0, opacity: 0 }} // Initial state (collapsed)
      >
        {points.map((item, index) => (
          <li key={index} className="font-nohemiRegular text-[16px]">
            {item.point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceKnowMore;
