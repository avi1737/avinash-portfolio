import Link from 'next/link';
import NavigationItem from './NavigationItem';
import Image from 'next/image';
import profilePhoto from '../../assets/avinash-portfolio-dp.jpeg';

function Header() {
  return (
    <header className="h-auto bg-primaryBlack bg-opacity-80 border-white z-50 p-2 lg:h-[60px] w-full sticky top-0 flex items-center justify-center">
      <div className="container flex flex-row">
        <div className="w-1/2 flex flex-row justify-items-start items-center">
          <Link href="/" className="text-white">
            <Image
              className="w-[40px] rounded-[50%] h-[40px]"
              src={profilePhoto}
              loading="lazy"
              alt="dp"
            />
          </Link>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <nav className="flex flex-row justify-center items-start gap-4 lg:gap-20">
            <NavigationItem
              href="/"
              text="Home"
              // setDrawerOpen={setDrawerOpen}
            />
            <NavigationItem
              href="#experience"
              text="Experience"
              // setDrawerOpen={setDrawerOpen}
            />
            <NavigationItem
              href="#contact"
              text="Contact"
              // setDrawerOpen={setDrawerOpen}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
