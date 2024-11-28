import CalendlyComponent from '../components/ui/Calendly';
import PageHeader from '../components/ui/PageHeader';

const Contact = async () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        pageTitle="Contact me"
        pageSubtitle="You can reach out to me on LinkedIn, Gmail, or book a call on Calendly!"
      />

      {/* Calendly Badge Widget */}
      <CalendlyComponent />
    </div>
  );
};

export default Contact;
