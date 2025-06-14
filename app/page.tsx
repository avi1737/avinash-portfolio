import Hero from './components/ui/Hero';
import PageHeader from './components/ui/PageHeader';
import Gap from './components/ui/Gap';
import WhatPeopleSay from './components/ui/WhatPeopleSay';

export default function Home() {
  return (
    <div className="flex flex-col">
      <PageHeader
        pageTitle="Hi, I'm Avinash Full Stack Developer"
        pageSubtitle="I build exceptional digital experiences using modern full stack and UI/UX technologies.
Have successfully worked with Dubai-based clients such as Five Palm Jumeirah and Smart Salem.
Specialize in building robust products from scratch, tailored to unique business needs."
      />
      <Gap />
      <Hero />
      {/* <Gap />
      <TwoColumn variant="PROFILE" />
      <Gap />
      <TwoColumn variant="SKILLS" /> */}
      <Gap />
      <Gap />
      <Gap />
      <WhatPeopleSay />
      {/* <Gap />
      <Experience />
      <Gap /> */}
      {/* <Contact /> */}
    </div>
  );
}
