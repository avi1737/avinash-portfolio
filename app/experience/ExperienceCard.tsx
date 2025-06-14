// components/ExpCard.tsx

import Image, { StaticImageData } from 'next/image';

export type ExperienceItem = {
  logo: string | StaticImageData; // URL of the company logo
  name: string; // Company name
  companyLink: string; // URL to the company's website
  designation: string; // Your role in the company
  description: string; // Brief about your role or work
  timeline: string; // Time period (e.g., "Jan 2020 - Dec 2022"),
  workItems: Array<{ point: string }>;
};

interface ExpCardProps {
  experience: ExperienceItem;
}

type companyDesignationProps = {
  designation: string;
  timeline: string;
  name: string;
};

const CompanyDesignation: React.FC<companyDesignationProps> = ({
  designation,
  timeline,
  name,
}: companyDesignationProps) => {
  return (
    <div className="flex lg:ml-[40px] w-full lg:w-1/2 flex-col">
      <h5 className="font-nohemiRegular text-[18px] lg:text-[36px] flex gap-3 items-center">
        {name}
        {name === 'Stealth Global' ? (
          <div className="h-[10px] w-[10px] bg-green-400 rounded-[50%]"></div>
        ) : null}
      </h5>
      <h4 className="text-[24px] font-nohemiMedium">{designation}</h4>
      <p>{timeline}</p>
    </div>
  );
};

const ExperienceSection: React.FC<ExpCardProps> = ({ experience }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between text-white h-auto p-4">
      <div className="w-[50px] h-[50px] mb-4">
        <Image
          src={experience.logo}
          alt={`${experience.name} logo`}
          className="company-logo"
          width={50}
          height={50}
        />
      </div>
      <CompanyDesignation
        name={experience.name}
        timeline={experience.timeline}
        designation={experience.designation}
      />

      {/* <div className="h-auto mt-[20px] lg:mt-0 w-full lg:w-1/2">
        <TypographyP textAlign="left">{experience.description}</TypographyP>
        <ExperienceKnowMore points={experience.workItems} />
      </div> */}
    </div>
  );
};

export default ExperienceSection;
