import Link from 'next/link';
import NavigationButton from '../ui/NavigationButton';

function Header() {
  return (
    <header className="h-auto bg-primaryBlack z-50 p-2 lg:h-[80px] w-full fixed top-0 flex  items-center justify-center">
      <div className="container flex flex-row">
        <div className="w-1/2 flex flex-row justify-items-start items-center">
          <h1 className="font-nohemiMedium text-[18px] md:text-[36px]">
            <Link href="/" className="text-white">
              Avinash Varpeti
            </Link>
          </h1>
        </div>
        <div className="w-1/2 flex justify-end">
          <NavigationButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
