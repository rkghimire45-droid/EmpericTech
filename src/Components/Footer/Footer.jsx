import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#020024] via-[#04045e] to-[#020024] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-center md:text-left">

          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="EmpericTech Logo"
                className="h-10 mx-auto md:mx-0 cursor-pointer"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              EmpericTech is a global IT services and outsourcing company,
              helping businesses scale through secure, innovative, and
              future-ready digital solutions.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-lg font-semibold mb-4">What We Do</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "Web & Mobile Development", path: "/services/web-development" },
                { name: "Custom Software Solutions", path: "/services/custom-software" },
                { name: "Cloud & DevOps", path: "/services/cloud-services" },
                { name: "UI / UX Design", path: "/services/ui-ux-design" },
                { name: "SEO & Digital Marketing", path: "/services/digital-marketing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-1 hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Are */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Who We Are</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "About EmpericTech", path: "/about" },
                { name: "Leadership", path: "/leadership" },
                { name: "Careers", path: "/careers" },
                { name: "Our Clients", path: "/clients" },
                { name: "Case Studies", path: "/case-studies" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-1 hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Innovation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Innovation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "AI-Driven Solutions", path: "/innovation/ai" },
                { name: "Automation & Analytics", path: "/innovation/automation" },
                { name: "Digital Transformation", path: "/innovation/digital-transformation" },
                { name: "Startup Partnerships", path: "/innovation/startups" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-1 hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-4">
            {[FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 
                             hover:bg-purple-600 transition-colors duration-300"
                >
                  <Icon className="text-white text-lg" />
                </a>
              )
            )}
          </div>

          {/* Policy Links */}
          <div className="flex justify-center flex-wrap gap-6 text-sm font-medium text-gray-300 mb-4">
            <Link to="/privacy-policy" className="hover:text-purple-600 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-purple-600 transition">
              Terms
            </Link>
            <Link to="/cookie-policy" className="hover:text-purple-600 transition">
              Cookie Policy
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-gray-400">
            © 2026 EmpericTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
