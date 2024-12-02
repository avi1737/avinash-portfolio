'use client';

import Image, { StaticImageData } from 'next/image';

type iconLinkType = {
  icon: StaticImageData;
  link: string;
};

function IconLink({ icon, link }: iconLinkType) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Image
      onClick={handleClick}
      alt={link + 0}
      src={icon}
      className="bg-white w-[40px] h-[40px] cursor-pointer lg:w-[70px] lg:h-[70px] p-2 rounded-md"
    />
  );
}

export default IconLink;
