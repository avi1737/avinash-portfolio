'use client'; // This directive ensures the code runs only on the client-side.

import Script from 'next/script';
import Button from './Button';

function CalendlyComponent() {
  function handleClick() {
    // @ts-expect-error this is important to make sure window has calendly object
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/avinashvarpeti1/30-mins-call',
    });
    return false;
  }

  return (
    <div className="flex justify-center items-center">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <Button onClick={handleClick} text="Schedule a call" />
    </div>
  );
}

export default CalendlyComponent;
