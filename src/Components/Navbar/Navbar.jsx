import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [whatOpen, setWhatOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [globalOpen, setGlobalOpen] = useState(false);

  return (
    <nav className="flex items-center px-16 py-5 bg-white border-b border-gray-200 relative z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Menu */}
      <ul className="flex ml-auto gap-10 items-start relative">
        {/* What We Do */}
        <li className="relative">
          <button
            className="cursor-pointer font-medium flex items-center gap-1"
            onClick={() => setWhatOpen(!whatOpen)}
          >
            What We Do ▾
          </button>
          {whatOpen && (
            <div className="absolute top-10 left-0 w-[900px] bg-white shadow-xl p-8 grid grid-cols-3 gap-8 z-50">
              <div>
                <h3 className="font-semibold mb-4">Web & IT Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Web Development</li>
                  <li>Cloud Services</li>
                  <li>IT/Tech Support</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Design & Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>UI/UX Design</li>
                  <li>Cybersecurity</li>
                  <li>Data Solutions</li>
                  <li>Graphics & Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Business Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>IT & Business Outsourcing</li>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* What We Think */}
        <li className="cursor-pointer font-medium">What We Think</li>

        {/* About EmpericTech */}
        <li className="relative">
          <button
            className="cursor-pointer font-medium flex items-center gap-1"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            About EmpericTech ▾
          </button>
          {aboutOpen && (
            <div className="absolute top-10 -left-[300px] w-[900px] bg-white shadow-xl p-8 z-50">
              <h2 className="text-2xl mb-5 font-semibold border-l-4 border-green-500 pl-3">
                About EmpericTech
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <ul className="space-y-2 text-gray-700">
                  <li>About Us</li>
                  <li>Analyst Speak</li>
                  <li>Awards and Recognitions</li>
                  <li>Case Studies</li>
                  <li>Corporate Sustainability</li>
                  <li>Events</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>Inclusion and Belonging</li>
                  <li>Investors</li>
                  <li>Leadership</li>
                  <li>Locations</li>
                  <li>News</li>
                  <li>Partner Ecosystem</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>Privacy at EmpericTech</li>
                  <li>Supplier Diversity</li>
                  <li>EmpericTech Innovation Network</li>
                  <li>EmpericTech Ventures</li>
                  <li>EmpericTech Wellbeing</li>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* Careers */}
        <li className="cursor-pointer font-medium">Careers</li>

        {/* Contact Us */}
        <li className="cursor-pointer font-medium">Contact Us</li>

        {/* Global Dropdown */}
        <li className="relative">
          <button
            className="font-medium flex items-center gap-1"
            onClick={() => setGlobalOpen(!globalOpen)}
          >
            📍 Global ▼
          </button>
          {globalOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md p-3 z-50">
              <p className="cursor-pointer py-1 px-2 hover:bg-gray-100 rounded">Australia</p>
              <p className="cursor-pointer py-1 px-2 hover:bg-gray-100 rounded">Nepal</p>
              <p className="cursor-pointer py-1 px-2 hover:bg-gray-100 rounded">USA</p>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
