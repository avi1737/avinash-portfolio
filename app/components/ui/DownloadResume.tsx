'use client';

import Button from './Button';

function DownloadResume() {
  const handleDownloadClick = () => {
    // Trigger the download programmatically if needed
    // e.g., router.push('/assets/Avinash-resume.pdf') or any custom logic
    const link = document.createElement('a');
    link.href = '/assets/avinash-varpeti-resume.pdf';
    link.download = 'avinash-varpeti-resume.pdf';
    link.click();
  };

  return (
    <div className="flex justify-center items-center">
      <Button
        text="Download Resume"
        onClick={handleDownloadClick} // Trigger download when button is clicked
      />
    </div>
  );
}

export default DownloadResume;
