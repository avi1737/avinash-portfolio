import HighlightText from '../typography/HighlightText';
import TypographyH5 from '../typography/TypographyH5';
import TypographyP from '../typography/TypographyP';
import IconLink from './IconLink';

import leetcode from '../../assets/leetcode.png';
import gfg from '../../assets/gfg.png';
import github from '../../assets/github-image.svg';
import Gap from './Gap';

type twoColumnProps = {
  variant: 'PROFILE' | 'SKILLS';
  side?: 'LEFT' | 'RIGHT';
};

function CodingProfile() {
  return (
    <div className="w-full text-white">
      <div className="container flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <TypographyH5 text="Coding Profiles" />
          <TypographyP textAlign="center">
            I’m a passionate problem solver with <HighlightText text="300+ " />
            problems solved on <HighlightText text=" leetcode " />
            and <HighlightText text=" 130+ " /> on GeeksforGeeks. My favorite
            DSA topic is <HighlightText text=" Dynamic Programming " />
            ,where I enjoy optimizing complex problems. These platforms have
            helped me strengthen my problem-solving skills and deepen my
            understanding of
            <HighlightText text=" algorithms and data structures " />.
          </TypographyP>
        </div>
        <div className="lg:w-1/2 w-full flex mt-10 lg:mt-0 justify-center items-center gap-10">
          <IconLink icon={leetcode} link="https://leetcode.com/muallem" />
          <IconLink
            icon={gfg}
            link="https://www.geeksforgeeks.org/user/avinashvarpeti1/"
          />
          <IconLink icon={github} link="https://github.com/avi1737" />
        </div>
      </div>
    </div>
  );
}

function TechSkills() {
  return (
    <div className="w-full min-h-[40svh] text-white">
      <div className="container flex flex-row">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2">
          <TypographyH5 text="Tech skills" />
          <TypographyP textAlign="center">
            I have built a SaaS product from scratch, working primarily with
            frontend and backend technologies. I specialize in{' '}
            <HighlightText
              text="JavaScript,
            React, and Next.js"
            />
            . As a full-stack developer, I have also worked with{' '}
            <HighlightText
              text="Node.js,
            Express for creating APIs, Docker"
            />{' '}
            and various databases.
          </TypographyP>
          <Gap />
          <TypographyP>
            Currently, I am expanding my skill set to include DevOps, and have
            gained 1+ years of hands-on experience with AWS and its services,
            including
            <HighlightText
              text="S3, Route 53, ECR, ECS, SQS, CloudFront, and
            CloudFormation"
            />
            .
          </TypographyP>
          <Gap />
          <TypographyP>
            My expertise is in building high-performance web applications,
            consistently achieving top-tier load times that outperform
            competitors.
          </TypographyP>
        </div>
      </div>
    </div>
  );
}

function TwoColumn({ variant }: twoColumnProps) {
  let component = null;
  switch (variant) {
    case 'PROFILE':
      component = <CodingProfile />;
      break;
    case 'SKILLS':
      component = <TechSkills />;
      break;
    default:
      break;
  }

  return component;
}

export default TwoColumn;
