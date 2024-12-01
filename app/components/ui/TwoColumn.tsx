import HighlightText from '../typography/HighlightText';
import TypographyH5 from '../typography/TypographyH5';
import TypographyP from '../typography/TypographyP';

type twoColumnProps = {
  variant: 'PROFILE' | 'SKILLS';
  side?: 'LEFT' | 'RIGHT';
};

function CodingProfile() {
  return (
    <div className="w-full text-white">
      <div className="container flex flex-row">
        <div className="lg:w-1/2">
          <TypographyH5 text="Coding Profiles" />
          <TypographyP>
            I solve coding problems based on Data structures and algorithms on
            platforms like <HighlightText text="Leetcode"></HighlightText>,
            Geeksforgeeks etc. I have solved more than{' '}
            <HighlightText text="300+"></HighlightText> problems on Leetcode and{' '}
            <HighlightText text="130+"></HighlightText> problems on GFG.
          </TypographyP>
        </div>
        <div className="lg:w-1/2"></div>
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
          <TypographyP>
            I have built SAAS product from scratch. I work on mostly frontend
            and backend technologies. I specilise in{' '}
            <HighlightText text="Javascript, React and Next.js" />. As a full
            stack developer i also have worked on Node Express for creating
            APIs, Docker and various databases.
          </TypographyP>
          <TypographyP>
            Currenly on the journey to learn Deveops as well, while doing so i
            have 1 years of hands on experience with{' '}
            <HighlightText
              text="AWS and its various services like s3, route53, ECR, ECS, SQS,
              Cloudfront, Cloudformation"
            />
            .
          </TypographyP>
          <TypographyP>
            My expertise lies in creating top 1% performant web applications
            which has better load times than rest of them.
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
