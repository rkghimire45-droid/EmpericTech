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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="EmpericTech Logo"
                className="h-10 cursor-pointer"
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
              <li>
                <Link to="/services/web-development" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Web & Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services/custom-software" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Custom Software Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-services" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  UI / UX Design
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  SEO & Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Who We Are */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Who We Are</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  About EmpericTech
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/careers" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/clients" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Innovation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Innovation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/innovation/ai" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  AI-Driven Solutions
                </Link>
              </li>
              <li>
                <Link to="/innovation/automation" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Automation & Analytics
                </Link>
              </li>
              <li>
                <Link to="/innovation/digital-transformation" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/innovation/startups" className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200">
                  Startup Partnerships
                </Link>
              </li>
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
          <div className="flex justify-center gap-6 text-sm font-medium text-gray-300 mb-4">
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
