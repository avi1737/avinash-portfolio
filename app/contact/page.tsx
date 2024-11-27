import Button from '../components/ui/Button';

const Contact = async () => {
  return (
    <div className="p-4 w-full md:w-[400px] gap-10">
      <form className="shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="bg-[#0a0a0a] mt-1 block w-full px-0 py-2 outline-none  rounded-md shadow-sm  sm:text-sm"
          />
          <hr className="h-[2px] bg-white w-full"></hr>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="bg-[#0a0a0a] mt-1 block w-full px-0 py-2 outline-none  rounded-md shadow-sm  sm:text-sm"
          />
          <hr className="h-[2px] bg-white w-full"></hr>
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="bg-[#0a0a0a] mt-1 block w-full px-0 py-2 outline-none  rounded-md shadow-sm  sm:text-sm"
          />
          <hr className="h-[2px] bg-white w-full"></hr>
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Enter your message"
            className="bg-[#0a0a0a] mt-1 block w-full px-0 py-2 outline-none  rounded-md shadow-sm  sm:text-sm"
          ></textarea>
          <hr className="h-[2px] bg-white w-full"></hr>
        </div>

        <Button text="Submit" />
      </form>
    </div>
  );
};

export default Contact;
