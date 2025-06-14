'use client';

import Image from 'next/image';
import JeffMessage from '../../assets/jeff-testimonial.png';
import ZakiahMessage from '../../assets/zakiah-testimonial.png';
import RajeshMessage from '../../assets/rajest-testimonial.png';
import TypographyH5 from '../typography/TypographyH5';

import jeffProfile from '../../assets/jeff_image.webp';
import zakiahProfile from '../../assets/zakiah_image.jpeg';
import rajeshProfile from '../../assets/rajesh_image.jpeg';
import gsap from 'gsap';
import { useRef } from 'react';

const testimonials = [
  {
    image: JeffMessage,
    alt: 'jeff',
    quote:
      'He regularly delighted our clients, and we had a lot of fun learning new technology together from time to time. Avinash came to us early on in his career, and learned aggressively during his entire time...',
    linkedinUrl: 'https://www.linkedin.com/in/your-profile/#recommendation-123',
    profile_img: jeffProfile,
  },
  {
    image: ZakiahMessage,
    alt: 'zakiah',
    quote:
      'Avinash is extremely knowledgeable and was a pleasure to work with. He quickly worked his way up as a team lead and was the “go to” person on his team...',
    linkedinUrl: 'https://www.linkedin.com/in/your-profile/#recommendation-456',
    profile_img: zakiahProfile,
  },
  {
    image: RajeshMessage,
    alt: 'rajesh',
    quote:
      'He is a fantastic problem solver who is always eager to learn new things. His attention to detail and commitment to producing high-quality code is truly outstanding...',
    linkedinUrl: 'https://www.linkedin.com/in/your-profile/#recommendation-789',
    profile_img: rajeshProfile,
  },
];

function WhatPeopleSay() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleCardHover = (hoveredIndex: number, isEntering: boolean) => {
    testimonials.forEach((_, index) => {
      const card = cardsRef.current[index];
      if (!card) return;

      gsap.to(card, {
        scale: isEntering ? (index === hoveredIndex ? 1.3 : 0.5) : 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  };

  return (
    <div className="container flex-col flex gap-8">
      <TypographyH5 text="What people say about me"></TypographyH5>
      <div className="flex flex-row gap-2">
        {testimonials.map((testimonial, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div
              // ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-100 p-4 z-50 rounded-lg shadow-md testimonial-card"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <Image
                src={testimonial.profile_img}
                className="w-[40px] h-[40px] rounded-full mb-2"
                alt={testimonial.alt}
              />
              <p className="text-gray-900">{testimonial.alt}</p>
              <p className="text-gray-700 italic mb-4">{`"${testimonial.quote}"`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatPeopleSay;
