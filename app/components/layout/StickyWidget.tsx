import LinkedinIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';
import GmailIcon from '../../assets/gmail.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import Button from '../ui/Button';
import Image from 'next/image';

function StickyWidget() {
  const socialMediaList = [
    {
      link: 'https://www.linkedin.com/in/avinash-varpeti-4300b4172/',
      icon: LinkedinIcon,
      label: 'LinkedIn',
    },
    {
      link: 'https://github.com/',
      icon: GithubIcon,
      label: 'GitHub',
    },
    {
      link: 'mailto:your-email@gmail.com',
      icon: GmailIcon,
      label: 'Gmail',
    },
    {
      link: 'https://wa.me/your-number',
      icon: WhatsappIcon,
      label: 'WhatsApp',
    },
  ];

  return (
    <div className="w-[90%] gap-2 fixed lg:max-w-[440px] p-2 md:rounded-lg h-[60px] shadow-md bg-white flex flex-row items-center justify-between bottom-0 md:bottom-[40px] left-1/2 transform -translate-x-1/2">
      <div className="flex w-2/3 flex-row items-start gap-3">
        {socialMediaList.map((item) => (
          <Image
            key={item.label}
            src={item.icon}
            alt={item.label}
            width={50}
            height={50}
            // Handle link navigation
          />
        ))}
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <Button text="Book Call" />
      </div>
    </div>
  );
}

export default StickyWidget;
