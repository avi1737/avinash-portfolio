import Image from 'next/image';
import portfolioDp from './assets/avinash-portfolio-dp.jpeg';
import Hero from './components/layout/Hero';

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-end items-center p-2">
      <div className="w-[100px] h-[100px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={portfolioDp} // Can be a local file or external URL
          alt="dp"
          priority // Preloads the image for above-the-fold content
        />
      </div>
      <Hero />
      <p className="font-nueueRegular text-[18px] text-justify">
        A talented software engineer with expertise in the MERN stack, this
        individual has successfully led teams of 4-5 developers, ensuring the
        delivery of scalable and high-quality software solutions. With a strong
        emphasis on collaboration, they foster a culture of innovation and
        learning within their teams, driving technical excellence and timely
        project execution.
      </p>

      <p className="font-nueueRegular text-[18px] text-justify">
        Their frontend development skills, combined with a deep understanding of
        system design, allow them to create intuitive interfaces and architect
        robust, efficient systems. Proficiency in data structures and algorithms
        enables them to solve complex problems effectively, ensuring optimized
        performance and reliability across applications.In addition to
        development, they excel in DevOps practices, streamlining CI/CD
        pipelines and managing cloud infrastructure for seamless deployments.
      </p>
    </div>
  );
}
