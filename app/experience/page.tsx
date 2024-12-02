import StealthLogo from '../assets/stealth_design_logo.jpeg';
import KoyalTechLogo from '../assets/koyal_logo.jpeg';
import EmployeeForumsLogo from '../assets/employeeforums_logo.jpeg';
import UnobotLogo from '../assets/unobotai_logo.jpeg';
import PageHeader from '../components/ui/PageHeader';
import ExperienceSection, { ExperienceItem } from './ExperienceCard';

// Mock data function
async function getExperienceData(): Promise<ExperienceItem[]> {
  // Replace this with API or database calls in a real application.
  return [
    {
      logo: StealthLogo,
      name: 'Stealth Global',
      companyLink: 'https://companyone.com',
      designation: 'Software Engineer',
      description:
        '"I have developed a SaaS product from scratch using the MERN stack, handling both frontend and backend development."',
      timeline: 'Jan 2020 - Dec 2022',
    },
    {
      logo: KoyalTechLogo,
      name: 'Koyal Tech',
      companyLink: 'https://companytwo.com',
      designation: 'Frontend Developer',
      description:
        '"Focused on creating user-friendly interfaces, built a UI component library for consistent frontend infrastructure, and handled complex API integrations."',
      timeline: 'Mar 2018 - Dec 2019',
    },
    {
      logo: EmployeeForumsLogo,
      name: 'Employee Forums',
      companyLink: 'https://companytwo.com',
      designation: 'Frontend Developer Intern',
      description:
        '"As an intern, worked with React, TypeScript, and Redux, contributing to major frontend features and enhancements."',
      timeline: 'Mar 2018 - Dec 2019',
    },
    {
      logo: UnobotLogo,
      name: 'Unobot.ai',
      companyLink: 'https://companytwo.com',
      designation: 'Software engineer intern',
      description:
        '"Familiarized myself with codebases, fixed minor bugs, and learned sprint alignment methodology in an Agile/Scrum environment."',
      timeline: 'Mar 2018 - Dec 2019',
    },
  ];
}

const Experience = async () => {
  const experiences = await getExperienceData();

  return (
    <div className="flex flex-col h-auto">
      <PageHeader
        pageTitle="Experience"
        pageSubtitle="I have experience to create Saas product from scratch, working for clients based out of USA, Dubai and U.K."
      />
      <div className="flex flex-col gap-5">
        {experiences.map((item) => (
          <ExperienceSection key={item.name} experience={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
