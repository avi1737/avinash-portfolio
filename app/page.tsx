import Hero from './components/ui/Hero';
import TwoColumn from './components/ui/TwoColumn';
import DownloadResume from './components/ui/DownloadResume';
import PageHeader from './components/ui/PageHeader';
import Gap from './components/ui/Gap';
import WhatPeopleSay from './components/ui/WhatPeopleSay';

export default function Home() {
  return (
    <div className="flex flex-col">
      <PageHeader
        pageTitle="About Me"
        pageSubtitle="A passionate software developer who loves to code and solve problems through code."
      />
      <DownloadResume />
      <div className="mt-16"></div>
      <Hero />
      <Gap />
      <TwoColumn variant="PROFILE" />
      <Gap />
      <TwoColumn variant="SKILLS" />
      <Gap />
      <WhatPeopleSay />
    </div>
  );
}
