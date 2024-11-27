import NavigationButton from '../ui/NavigationButton';

function Header() {
  return (
    <header className="h-auto p-2 lg:h-[80px] w-full fixed top-0 flex  items-center justify-center">
      <div className="container flex flex-row">
        <div className="w-1/2 flex flex-row justify-items-start items-center">
          <h1 className="font-nohemiMedium text-[18px] md:text-[36px]">
            Avinash Varpeti
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
