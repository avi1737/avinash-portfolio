import CalendlyComponent from '../components/ui/Calendly';
import IconLink from '../components/ui/IconLink';
import PageHeader from '../components/ui/PageHeader';
import LinkedInIcon from '../assets/linkedin.png';
import Gap from '../components/ui/Gap';

const Contact = async () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageHeader
        pageTitle="Contact me"
        pageSubtitle="You can reach out to me on LinkedIn, Gmail, or book a call on Calendly!"
      />

      {/* Calendly Badge Widget */}
      <CalendlyComponent />
      <Gap />
      <IconLink
        icon={LinkedInIcon}
        link="https://www.linkedin.com/in/avinash-varpeti-4300b4172/"
      />
    </div>
  );
};

export default Contact;
