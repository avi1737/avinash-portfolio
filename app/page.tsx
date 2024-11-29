import Hero from './components/layout/Hero';
import DownloadResume from './components/ui/DownloadResume';
import PageHeader from './components/ui/PageHeader';

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
    </div>
  );
}
