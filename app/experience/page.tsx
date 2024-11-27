import ExpCard from './ExpCard';
import { ExperienceItem } from '../types/experience';
import StealthLogo from '../assets/stealth_design_logo.jpeg';
import KoyalTechLogo from '../assets/koyal_logo.jpeg';
import EmployeeForumsLogo from '../assets/employeeforums_logo.jpeg';
import PageHeader from '../components/ui/PageHeader';

// Mock data function
async function getExperienceData(): Promise<ExperienceItem[]> {
  // Replace this with API or database calls in a real application.
  return [
    {
      logo: StealthLogo,
      name: 'Stealth Global',
      companyLink: 'https://companyone.com',
      designation: 'Software Engineer',
      description: 'Worked on building scalable web applications.',
      timeline: 'Jan 2020 - Dec 2022',
    },
    {
      logo: KoyalTechLogo,
      name: 'Koyal Tech',
      companyLink: 'https://companytwo.com',
      designation: 'Frontend Developer',
      description: 'Focused on creating user-friendly interfaces.',
      timeline: 'Mar 2018 - Dec 2019',
    },
    {
      logo: EmployeeForumsLogo,
      name: 'Employee Forums',
      companyLink: 'https://companytwo.com',
      designation: 'Frontend Developer',
      description: 'Focused on creating user-friendly interfaces.',
      timeline: 'Mar 2018 - Dec 2019',
    },
  ];
}

const Experience = async () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        pageTitle="Experience"
        pageSubtitle="I have experience to create Saas product from scratch, working for clients based out of USA, Dubai and U.K."
      />
    </div>
  );
};

export default Experience;
