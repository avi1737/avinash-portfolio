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
      timeline: 'Jan 2023 - Nov 2024',

      workItems: [
        {
          point:
            'Built a SaaS product from scratch using Next.js, Node.js, Express, MongoDB, and AWS, optimizing for SEO and performance, attracting a strong user base early on.',
        },
        {
          point:
            'Led a team of engineers, improving sprint efficiency and ensuring on-time delivery through effective Agile practices.',
        },
        {
          point:
            'Collaborated with UX/UI teams to identify feasible use cases and eliminate costly rework, saving on development costs and contributing to a reduction in development time by ensuring the selected tech stack aligned with project requirements.',
        },
      ],
    },
    {
      logo: KoyalTechLogo,
      name: 'Koyal Tech',
      companyLink: 'https://companytwo.com',
      designation: 'Frontend Developer',
      description:
        '"Focused on creating user-friendly interfaces, built a UI component library for consistent frontend infrastructure, and handled complex API integrations."',
      timeline: 'June 2021 - Dec 2022',
      workItems: [
        {
          point:
            'Developed and optimized frontend applications for patient portals, improving user engagement by 25% and reducing user drop-off rates by 20% within the first three months.',
        },
        {
          point:
            'Led performance optimization initiatives, achieving a 40% reduction in load times and enhancing the performance of key frontend components, which contributed to a 30% improvement in user satisfaction.',
        },
        {
          point:
            'Collaborated with cross-functional teams to ensure 100% on-time project delivery, while seamlessly integrating frontend solutions with backend services and meeting client requirements without any critical bugs.',
        },
        {
          point:
            'Built a reusable Patient Component Library, streamlining the development process and reducing development time by 30%, while ensuring greater consistency across the platform.',
        },
        {
          point:
            'Integrated complex APIs and developed advanced frontend features, which expanded functionality by 35%, resulting in a 20% reduction in support queries and improved overall user experience.',
        },
      ],
    },
    {
      logo: EmployeeForumsLogo,
      name: 'Employee Forums',
      companyLink: 'https://companytwo.com',
      designation: 'Frontend Developer Intern',
      description:
        '"As an intern, worked with React, TypeScript, and Redux, contributing to major frontend features and enhancements."',
      timeline: 'Feb 2021 - April 2021',
      workItems: [
        {
          point:
            'Contributed to the development of web applications, working on both frontend and backend tasks to ensure seamless integration and functionality.',
        },
        {
          point:
            'Developed and integrated RESTful APIs, enabling smooth communication between frontend components and backend services for a cohesive user experience.',
        },
      ],
    },
    {
      logo: UnobotLogo,
      name: 'Unobot.ai',
      companyLink: 'https://companytwo.com',
      designation: 'Software engineer intern',
      description:
        '"Familiarized myself with codebases, fixed minor bugs, and learned sprint alignment methodology in an Agile/Scrum environment."',
      timeline: 'May 2020 - July 2020',
      workItems: [
        {
          point:
            'Resolved bugs and optimized functionality for a CRM platform, ensuring smoother user experiences and improved system stability.',
        },
        {
          point:
            'Gained hands-on experience with the software development life cycle (SDLC) and Agile methodologies, contributing to more efficient and collaborative project delivery.',
        },
      ],
    },
  ];
}

const Experience = async () => {
  const experiences = await getExperienceData();

  return (
    <div className="flex flex-col h-auto" id="experience">
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
