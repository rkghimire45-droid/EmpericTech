import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#020024] via-[#03045e] to-[#020024] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img src={logo} alt="EmpericTech" className="h-10 mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              EmpericTech is a global IT services and outsourcing company,
              helping businesses scale through secure, innovative, and
              future-ready digital solutions.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="font-semibold text-lg mb-4">What We Do</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services/web-development" className="hover:text-white">Web & Mobile Development</Link></li>
              <li><Link to="/services/software-solutions" className="hover:text-white">Custom Software Solutions</Link></li>
              <li><Link to="/services/cloud-devops" className="hover:text-white">Cloud & DevOps</Link></li>
              <li><Link to="/services/ui-ux-design" className="hover:text-white">UI / UX Design</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-white">SEO & Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Who We Are */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Who We Are</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white">About EmpericTech</Link></li>
              <li><Link to="/leadership" className="hover:text-white">Leadership</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/clients" className="hover:text-white">Our Clients</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            </ul>
          </div>

          {/* Innovation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Innovation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/innovation/ai" className="hover:text-white">AI-Driven Solutions</Link></li>
              <li><Link to="/innovation/automation" className="hover:text-white">Automation & Analytics</Link></li>
              <li><Link to="/innovation/digital-transformation" className="hover:text-white">Digital Transformation</Link></li>
              <li><Link to="/innovation/startups" className="hover:text-white">Startup Partnerships</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 transition">
              <FaLinkedinIn />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 transition">
              <FaXTwitter />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 transition">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 transition">
              <FaInstagram />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 transition">
              <FaYoutube />
            </a>
          </div>

          {/* Legal */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-2">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms</Link>
              <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            </div>
            © {new Date().getFullYear()} EmpericTech. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
