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
              EmpericTech is a global IT services and outsourcing company
              delivering scalable, secure, and innovation-driven digital
              solutions for modern businesses.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="font-semibold text-lg mb-4">What We Do</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web & Mobile Development</li>
              <li>Custom Software Solutions</li>
              <li>Cloud & DevOps</li>
              <li>UI/UX Design</li>
              <li>SEO & Digital Marketing</li>
            </ul>
          </div>

          {/* Who We Are */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Who We Are</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About EmpericTech</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>Our Clients</li>
              <li>Case Studies</li>
            </ul>
          </div>

          {/* Innovation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Innovation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>AI-Driven Solutions</li>
              <li>Automation & Analytics</li>
              <li>Digital Transformation</li>
              <li>Startup Partnerships</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social Icons */}
          <div className="flex gap-4">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full
                    bg-white/10 hover:bg-purple-600 transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full
                    bg-white/10 hover:bg-purple-600 transition"
        >
          <FaXTwitter />
        </a>

        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full
                    bg-white/10 hover:bg-purple-600 transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full
                    bg-white/10 hover:bg-purple-600 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full
                    bg-white/10 hover:bg-purple-600 transition"
        >
          <FaYoutube />
        </a>
      </div>


          {/* Legal */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-2">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms</span>
              <span className="hover:text-white cursor-pointer">Cookie Policy</span>
            </div>
            © {new Date().getFullYear()} EmpericTech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
