// components/ExpCard.tsx
import { ExperienceItem } from '../types/experience';
import Image from 'next/image';

interface ExpCardProps {
  experience: ExperienceItem;
}

const ExpCard: React.FC<ExpCardProps> = ({ experience }) => {
  return (
    <div className="border-[1px] border-transparent shadow-lg p-2 hover:opacity-100 cursor-pointer border-b-slate-300 border-dashed">
      <Image
        src={experience.logo}
        alt={`${experience.name} logo`}
        className="company-logo"
        width={50}
        height={50}
      />

      <div className="details mt-1">
        <h3 className="font-nueueBold text-[18px]">
          <a
            href={experience.companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {experience.name}
          </a>
        </h3>
        <p className="designation font-nueueMedium text-[14px]">
          {experience.designation}
        </p>
        <p className="timeline">{experience.timeline}</p>
        <br />
        <h5 className="font-nueueBold">Roles and responsibility</h5>
        <p className="description">{experience.description}</p>
      </div>

      {experience.name === 'Stealth Global' ? (
        <div className="bg-green-600 mt-2 max-w-max text-[12px] p-1 rounded-md">
          Currently working
        </div>
      ) : null}
    </div>
  );
};

export default ExpCard;
