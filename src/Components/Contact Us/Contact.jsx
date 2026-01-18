import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen flex justify-center px-4 py-16 bg-white"
    >
      <div className="w-full max-w-md text-center">
        <p className="text-sm md:text-base text-black mb-10 leading-relaxed">
          Every day, EmpericTech empowers businesses to scale with confidence by
          optimizing systems, strengthening security, and enabling data-driven
          decision-making.
        </p>

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          How can we help you?
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Work Email"
            className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Job Title"
            className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Company"
            className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Country</option>
            <option>Nepal</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>

          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Checkboxes */}
          <div className="text-left text-xs space-y-3">
            <label className="flex gap-2">
              <input type="checkbox" className="mt-1" />
              <span>
                I confirm, I have read and agree to the Privacy Policy and consent
                to sharing my information.
              </span>
            </label>

            <label className="flex gap-2">
              <input type="checkbox" className="mt-1" />
              <span>
                I would like to receive alerts and updates.
              </span>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-full font-medium transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
});

export default Contact;
