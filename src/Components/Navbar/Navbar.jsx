import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = ({contactRef}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    } else {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  const [whatOpen, setWhatOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [globalOpen, setGlobalOpen] = useState(false);

  const whatRef = useRef(null);
  const aboutRef = useRef(null);
  const globalRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (whatRef.current && !whatRef.current.contains(event.target)) {
        setWhatOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
      if (globalRef.current && !globalRef.current.contains(event.target)) {
        setGlobalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  

  return (
    <nav className="flex items-center px-16 py-5 bg-white border-b border-gray-200 relative z-50">
      
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img src={logo} alt="EmpericTech" className="h-10" />
      </Link>

      {/* Menu */}
      <ul className="flex ml-auto gap-10 items-center">

        {/* What We Do */}
        <li className="relative" ref={whatRef}>
          <button
            className="font-medium flex items-center gap-1"
            onClick={() => {
              setWhatOpen(!whatOpen);
              setAboutOpen(false);
              setGlobalOpen(false);
            }}
          >
            What We Do ▾
          </button>

          {whatOpen && (
            <div className="absolute top-10 left-0 w-[900px] bg-white shadow-xl p-8 grid grid-cols-3 gap-8 z-50">
              
              <div>
                <h3 className="font-semibold mb-4">Web & IT Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><Link to="/services/web-development" className="hover:text-purple-600">Web Development</Link></li>
                  <li><Link to="/services/cloud-services" className="hover:text-purple-600">Cloud Services</Link></li>
                  <li><Link to="/services/it-support" className="hover:text-purple-600">IT Support</Link></li>
                  <li><Link to="/services/digital-marketing" className="hover:text-purple-600">Digital Marketing</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Design & Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><Link to="/services/ui-ux-design" className="hover:text-purple-600">UI / UX Design</Link></li>
                  <li><Link to="/services/cyber-security" className="hover:text-purple-600">Cybersecurity</Link></li>
                  <li><Link to="/services/data-solutions" className="hover:text-purple-600">Data Solutions</Link></li>
                  <li><Link to="/services/graphics-design" className="hover:text-purple-600">Graphics & Design</Link></li>

                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Business Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><Link to="/services/outsourcing" className="hover:text-purple-600">IT & Business Outsourcing</Link></li>
                </ul>
              </div>

            </div>
          )}
        </li>

        {/* What We Think */}
        <li className="font-medium">
          <Link to="/insights" className="hover:text-purple-600">
            What We Think
          </Link>
        </li>

        {/* About */}
        <li className="relative" ref={aboutRef}>
          <button
            className="font-medium flex items-center gap-1"
            onClick={() => {
              setAboutOpen(!aboutOpen);
              setWhatOpen(false);
              setGlobalOpen(false);
            }}
          >
            About EmpericTech ▾
          </button>

          {aboutOpen && (
            <div className="absolute top-10 -left-[300px] w-[900px] bg-white shadow-xl p-8 z-50">
              <h2 className="text-2xl mb-5 font-semibold border-l-4 border-green-500 pl-3">
                About EmpericTech
              </h2>
              <div className="grid grid-cols-3 gap-10 text-gray-700">
                <ul className="space-y-2">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                </ul>
                <ul className="space-y-2">
                  <li><Link to="/leadership">Leadership</Link></li>
                  <li><Link to="/news">News</Link></li>
                </ul>
                <ul className="space-y-2">
                  <li><Link to="/privacy">Privacy</Link></li>
                  <li><Link to="/wellbeing">Wellbeing</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* Careers */}
        <li className="font-medium">
          <Link to="/careers" className="hover:text-purple-600">Careers</Link>
        </li>

        {/* Contact */}
        <li className="font-medium">
          <button
            onClick={scrollToContact}
            className="hover:text-purple-600"
          >
            Contact Us
          </button>
        </li>


        {/* Global */}
        <li className="relative" ref={globalRef}>
          <button
            className="font-medium flex items-center gap-1"
            onClick={() => {
              setGlobalOpen(!globalOpen);
              setWhatOpen(false);
              setAboutOpen(false);
            }}
          >
            📍 Global ▼
          </button>

          {globalOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md p-3 z-50">
              <p className="py-1 px-2 hover:bg-gray-100 rounded">Australia</p>
              <p className="py-1 px-2 hover:bg-gray-100 rounded">Nepal</p>
              <p className="py-1 px-2 hover:bg-gray-100 rounded">USA</p>
            </div>
          )}
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
