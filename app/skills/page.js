import Image from 'next/image';
import JsLogo from '../assets/skills/js.png';
import DevopsLogo from '../assets/skills/devops.png';
import AWSLogo from '../assets/skills/icons8-aws-logo-96.png';
import CPlusLogo from '../assets/skills/icons8-c-96.png';
import DockerLogo from '../assets/skills/icons8-docker-96.png';
import GitLogo from '../assets/skills/icons8-git-96.png';
import GraphQlLogo from '../assets/skills/icons8-graphql-96.png';
import LinuxLogo from '../assets/skills/icons8-linux-96.png';
import NextJSLogo from '../assets/skills/nodejs.png';
import PostmanLogo from '../assets/skills/icons8-postman-is-the-only-complete-api-development-environment-96.png';
import PostgresLogo from '../assets/skills/postgre.png';
import ReduxLogo from '../assets/skills/icons8-redux-96.png';
import MysqlLogo from '../assets/skills/mysql.png';

const Skills = async () => {
  const skills = [
    { icon: JsLogo, label: 'JavaScript', percentage: '90%' },
    { icon: DevopsLogo, label: 'DevOps', percentage: '80%' },
    { icon: AWSLogo, label: 'AWS', percentage: '70%' },
    { icon: CPlusLogo, label: 'C++', percentage: '80%' },
    { icon: DockerLogo, label: 'Docker', percentage: '90%' },
    { icon: GitLogo, label: 'Git', percentage: '90%' },
    { icon: GraphQlLogo, label: 'GraphQL', percentage: '70%' },
    { icon: LinuxLogo, label: 'Linux', percentage: '80%' },
    { icon: NextJSLogo, label: 'Next.js', percentage: '80%' },
    { icon: PostmanLogo, label: 'Postman', percentage: '90%' },
    { icon: PostgresLogo, label: 'PostgreSQL', percentage: '80%' },
    { icon: ReduxLogo, label: 'Redux', percentage: '90%' },
    { icon: MysqlLogo, label: 'MySQL', percentage: '80%' },
  ];

  return (
    <div className="p-4 grid grid-cols-2 gap-10">
      {/* {skills.map((item) => (
        <div
          key={item.label}
          className="flex w-full justify-between items-center"
        >
          <div className="w-1/5">
            <Image src={item.icon} alt={item.label} width={60} height={60} />
          </div>
          <div className="w-4/5 border-solid border-[3px] border-white">
            <div
              className={`bg-green-400 text-white  w-[${item.percentage}] h-5`}
            ></div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Skills;
