// app/experience/page.tsx
import ExpCard from './ExpCard';
import { ExperienceItem } from '../types/experience';
import StealthLogo from '../assets/stealth_design_logo.jpeg';
import KoyalTechLogo from '../assets/koyal_logo.jpeg';
import EmployeeForumsLogo from '../assets/employeeforums_logo.jpeg';

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
  const experiences = await getExperienceData(); // Fetch data on the server

  return (
    <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-10">
      {experiences.map((exp, index) => (
        <ExpCard key={index} experience={exp} />
      ))}
    </div>
  );
};

export default Experience;
