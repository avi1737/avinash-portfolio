'use client';

import Image from 'next/image';
import NavigationArrow from '../../assets/svg/navigation-arrow-dark.svg';

function DownloadResume() {
  return (
    <div className="flex justify-center items-center">
      <a
        className="px-4 py-4 flex gap-4 max-w-max bg-green-400 text-black font-nohemiMedium text-[16px]"
        href="/assets/Avinash-resume.pdf" // Updated path to use the correct location
        download={true}
      >
        Download Resume
        <Image src={NavigationArrow} alt="btn-arrow" width={20} height={20} />
      </a>
    </div>
  );
}

export default DownloadResume;
