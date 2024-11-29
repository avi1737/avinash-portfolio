type twoColumnProps = {
  variant: string;
};

function TwoColumn({ variant }: twoColumnProps) {
  if (variant === 'coding') {
    return (
      <div className="w-full">
        <div className="container flex flex-row">
          <div className="lg:w-1/2">
            <h5 className="font-nohemiMedium text-[36px] lg:text-[64px]">
              Coding Profiles
            </h5>
            <p className="font-nohemiMedium text-[16px] lg:text-[24px]">
              I solve coding problems based on Data structures and algorithms on
              platforms like{' '}
              <span className="text-green-400 font-nohemiBold text-[20px] lg:text-[32px]">
                Leetcode
              </span>
              , Geeksforgeeks etc. I have solved more than{' '}
              <span className="text-green-400 font-nohemiBold text-[20px] lg:text-[32px]">
                300+
              </span>{' '}
              problems on leetcode and{' '}
              <span className="text-green-400 font-nohemiBold text-[20px] lg:text-[32px]">
                130+
              </span>{' '}
              problems on GFG.
            </p>
          </div>
          <div className="lg:w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[40svh]">
      <div className="container flex flex-row">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2">
          <h5 className="font-nohemiMedium text-[36px] lg:text-[64px]">
            Tech skills
          </h5>
          <p className="font-nohemiMedium text-[16px] lg:text-[24px]">
            I have built SAAS product from scratch. I work on mostly frontend
            and backend technologies. I specilise in{' '}
            <span className="text-green-400 font-nohemiBold text-[20px] lg:text-[32px]">
              Javascript, React and Next.js
            </span>
            . As a full stack developer i also have worked on Node Express for
            creating APIs, Docker and various databases.
          </p>
          <p className="font-nohemiMedium text-[24px] mt-6">
            Currenly on the journey to learn Deveops as well, while doing so i
            have 1 years of hands on experience with{' '}
            <span className="text-green-400 font-nohemiBold text-[20px] lg:text-[32px]">
              AWS and its various services like s3, route53, ECR, ECS, SQS,
              Cloudfront, Cloudformation{' '}
            </span>
            .
          </p>

          <p className="font-nohemiMedium text-[16px] lg:text-[24px] mt-6">
            My expertise lies in creating top 1% performant web applications
            which has better load times than rest of them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoColumn;
