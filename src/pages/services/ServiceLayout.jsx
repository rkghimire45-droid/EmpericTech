import { Link, useLocation } from "react-router-dom";

const services = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Cloud Services", path: "/services/cloud-services" },
  { name: "IT / Tech Support", path: "/services/it-support" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "UI / UX Design", path: "/services/ui-ux-design" },
  { name: "Cyber Security", path: "/services/cyber-security" },
  { name: "Data Solutions", path: "/services/data-solutions" },
  { name: "Graphics & Design", path: "/services/graphics-design" },
  { name: "IT & Business Outsourcing", path: "/services/outsourcing" },
];

const ServiceLayout = ({ title, description, heroImage, children }) => {
  const location = useLocation();

  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center py-28 px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-sm text-gray-300">
            <Link to="/" className="hover:underline">Home</Link> &gt;{" "}
            <Link to="/services" className="hover:underline">Services</Link> &gt;{" "}
            {title}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold mb-6">{title}</h2>
          <p className="text-gray-300 leading-relaxed mb-10">
            {description}
          </p>

          {children}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">

          {/* ALL SERVICES */}
          <div className="bg-gradient-to-b from-purple-900/40 to-black p-6 rounded-xl border border-purple-700">
            <h3 className="text-lg font-semibold mb-4">ALL SERVICES</h3>

            <ul className="space-y-3">
              {services.map((service) => {
                const isActive = location.pathname === service.path;

                return (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className={`flex justify-between items-center px-4 py-2 rounded-md transition
                        ${isActive
                          ? "bg-purple-600"
                          : "bg-black/40 hover:bg-purple-600"
                        }`}
                    >
                      {service.name}
                      <span>›</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="bg-gradient-to-b from-purple-900/40 to-black p-6 rounded-xl border border-purple-700">
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-black/50 border border-purple-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black/50 border border-purple-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-black/50 border border-purple-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-md py-2 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

        </aside>
      </div>
    </section>
  );
};

export default ServiceLayout;
