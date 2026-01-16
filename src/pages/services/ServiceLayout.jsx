import { Link } from "react-router-dom";

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

const ServiceLayout = ({ title, description, children }) => {
  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="relative bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-sm text-gray-200">
          <Link to="/" className="hover:underline">Home</Link> &gt; 
          <Link to="/services" className="hover:underline ml-1">Services</Link> &gt; {title}
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold mb-6">{title}</h2>
          <p className="text-gray-300 leading-relaxed mb-10">
            {description}
          </p>

          {children}
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gradient-to-b from-purple-900/40 to-black p-6 rounded-xl border border-purple-700">
          <h3 className="text-lg font-semibold mb-4">All Services</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.path}>
                <Link
                  to={service.path}
                  className="flex justify-between items-center px-4 py-2 rounded-md bg-black/40 hover:bg-purple-600 transition"
                >
                  {service.name}
                  <span>›</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

      </div>
    </section>
  );
};

export default ServiceLayout;
