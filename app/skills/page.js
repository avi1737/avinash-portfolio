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
import RestAPILogo from '../assets/skills/icons8-rest-api-100.png';
import MysqlLogo from '../assets/skills/mysql.png';

const Skills = async () => {
  const skills = [
    { icon: JsLogo, label: 'JavaScript' },
    { icon: DevopsLogo, label: 'DevOps' },
    { icon: AWSLogo, label: 'AWS' },
    { icon: CPlusLogo, label: 'C++' },
    { icon: DockerLogo, label: 'Docker' },
    { icon: GitLogo, label: 'Git' },
    { icon: GraphQlLogo, label: 'GraphQL' },
    { icon: LinuxLogo, label: 'Linux' },
    { icon: NextJSLogo, label: 'Next.js' },
    { icon: PostmanLogo, label: 'Postman' },
    { icon: PostgresLogo, label: 'PostgreSQL' },
    { icon: ReduxLogo, label: 'Redux' },
    { icon: RestAPILogo, label: 'REST API' },
    { icon: MysqlLogo, label: 'MySQL' },
  ];

  return (
    <div className="grid grid-cols-4 gap-10">
      {skills.map((item, index) => (
        <div key={item.label} className="text-center">
          <Image src={item.icon} alt={item.label} width={100} height={100} />
          <p className="text-center mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
