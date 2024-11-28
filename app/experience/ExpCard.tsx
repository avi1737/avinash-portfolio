// components/ExpCard.tsx
import ExperienceKnowMore from '../components/ui/ExperienceKnowMore';
import { ExperienceItem } from '../types/experience';
import Image from 'next/image';

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
    <div className="w-full flex flex-col lg:flex-row justify-between h-auto p-4">
      <div className="w-[50px] h-[50px]">
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

      <div className="h-auto w-full lg:w-1/2">
        <h1 className="text-[16px] font-nohemiMedium mt-4">
          I have worked on creating a SAAS from scratch here. Created using Mern
          stack. I have worked on creating a SAAS from scratch here. Created
          using Mern stack.I have worked on creating a SAAS from scratch here.
          Created using Mern stack.
        </h1>
        <ExperienceKnowMore />
      </div>
    </div>
  );
};

export default ExperienceSection;
