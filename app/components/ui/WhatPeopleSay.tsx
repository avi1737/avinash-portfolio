import Image from 'next/image';
import JeffMessage from '../../assets/jeff-testimonial.png';
import ZakiahMessage from '../../assets/zakiah-testimonial.png';
import RajeshMessage from '../../assets/rajest-testimonial.png';
import TypographyH5 from '../typography/TypographyH5';

function WhatPeopleSay() {
  return (
    <div className="container flex-col flex gap-6">
      <TypographyH5 text="What people say about me"></TypographyH5>
      <Image src={JeffMessage} alt="jeff" className="rounded-md" />
      <Image src={ZakiahMessage} alt="zakiah" className="rounded-md" />
      <Image src={RajeshMessage} alt="rajesh" className="rounded-md" />
    </div>
  );
}

export default WhatPeopleSay;
