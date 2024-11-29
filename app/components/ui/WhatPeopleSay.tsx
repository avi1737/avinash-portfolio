import Image from 'next/image';
import JeffMessage from '../../assets/jeff-testimonial.png';
import ZakiahMessage from '../../assets/zakiah-testimonial.png';
import RajeshMessage from '../../assets/rajest-testimonial.png';

function WhatPeopleSay() {
  return (
    <div className="container flex-col flex gap-6">
      <h5 className="font-nohemiMedium text-[36px] lg:text-[64px]">
        Message from people I worked with
      </h5>
      <Image src={JeffMessage} alt="jeff" className="rounded-md" />
      <Image src={ZakiahMessage} alt="zakiah" className="rounded-md" />
      <Image src={RajeshMessage} alt="rajesh" className="rounded-md" />
    </div>
  );
}

export default WhatPeopleSay;
