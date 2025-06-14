'use client';

import { useEffect, useRef } from 'react';
import Button from './Button';

function DownloadResume() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleDownloadClick = () => {
    // Trigger the download programmatically if needed
    // e.g., router.push('/assets/Avinash-resume.pdf') or any custom logic
    const link = document.createElement('a');
    link.href = '/assets/avinash-varpeti-resume.pdf';
    link.download = 'avinash-varpeti-resume.pdf';
    link.click();
  };

  useEffect(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        duration: 2,
        ease: 'back.out',
        // scale: 1,
        delay: 1.4, // Delay by 2 seconds,
        opacity: 1,
      });
    }
  }, []);
  return (
    <div className="flex justify-center items-center">
      <Button
        text="Download Resume"
        style={{ opacity: 0, scale: 1, fontSize: '20px', textAlign: 'center' }}
        onClick={handleDownloadClick} // Trigger download when button is clicked
      />
    </div>
  );
}

export default DownloadResume;
