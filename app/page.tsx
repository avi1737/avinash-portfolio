import Image from 'next/image';
import portfolioDp from './assets/avinash-portfolio-dp.jpeg';
import Hero from './components/layout/Hero';

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-end items-center">
      <Hero />
      <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={portfolioDp} // Can be a local file or external URL
          alt="dp"
          priority // Preloads the image for above-the-fold content
        />
      </div>
      <p className="font-nueueMedium text-[18px]">
        About I’m a developer passionate about crafting accessible,
        pixel-perfect user interfaces that blend thoughtful design with robust
        engineering. My favorite work lies at the intersection of design and
        development, creating experiences that not only look great but are
        meticulously built for performance and usability.
      </p>
    </div>
  );
}
