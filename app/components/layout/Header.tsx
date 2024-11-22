import Link from 'next/link';
import Button from '../ui/Button';

type NavigationItem = {
  title: string;
  link: string;
};

type NavigationList = NavigationItem[];

function Header() {
  const NAVIGATON_LINKS: NavigationList = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Experience',
      link: '/experience',
    },
    {
      title: 'Skills',
      link: '/skills',
    },
  ];

  return (
    <header className="h-auto lg:h-[60px] w-full p-4 transition-all ease-in-out backdrop-blur-md fixed top-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-center">
      <div className="container flex flex-col md:flex-row">
        <div className="w-1/2 flex flex-row justify-items-start gap-10 items-center">
          {NAVIGATON_LINKS.map((item: NavigationItem) => (
            <Link key={item.title} href={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="w-1/2 hidden md:flex justify-end">
          <Button text="Download Resume" />
        </div>
      </div>
    </header>
  );
}

export default Header;
