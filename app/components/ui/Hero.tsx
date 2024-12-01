import Image from 'next/image';
import profilePhoto from '../../assets/avinash-portfolio-dp.jpeg';

function Hero() {
  return (
    <div className="w-full text-center flex flex-col justify-center items-center">
      <Image
        className="w-[100px] rounded-[50%] h-[100px] lg:w-[250px] lg:h-[250px]"
        src={profilePhoto}
        alt="dp"
      />
    </div>
  );
}

export default Hero;
