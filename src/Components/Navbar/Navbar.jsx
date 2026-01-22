import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = ({ contactRef }) => {
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
    setMobileOpen(false); // Close mobile menu after navigation
  };

  const [whatOpen, setWhatOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [globalOpen, setGlobalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Mobile dropdown states
  const [mobileWhatOpen, setMobileWhatOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileGlobalOpen, setMobileGlobalOpen] = useState(false);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileWhatOpen(false);
    setMobileAboutOpen(false);
    setMobileGlobalOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-4 bg-white border-b border-gray-200 shadow-sm">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
          <img src={logo} alt="EmpericTech" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-medium">
          {/* What We Do */}
          <li className="relative" ref={whatRef}>
            <button
              className="flex items-center gap-1.5 text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2"
              onClick={() => {
                setWhatOpen(!whatOpen);
                setAboutOpen(false);
                setGlobalOpen(false);
              }}
            >
              What We Do
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  whatOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {whatOpen && (
              <div className="absolute top-full left-0 mt-2 w-[900px] bg-white shadow-2xl rounded-xl p-8 grid grid-cols-3 gap-8 animate-fadeIn border border-gray-100">
                <div>
                  <h3 className="text-base font-semibold mb-4 text-gray-900 border-l-4 border-purple-600 pl-3">
                    Web & IT Services
                  </h3>
                  <ul className="space-y-2.5 text-gray-600">
                    <li>
                      <Link
                        to="/services/web-development"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cloud-services"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Cloud Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/it-support"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        IT Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/digital-marketing"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-4 text-gray-900 border-l-4 border-purple-600 pl-3">
                    Design & Security
                  </h3>
                  <ul className="space-y-2.5 text-gray-600">
                    <li>
                      <Link
                        to="/services/ui-ux-design"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        UI / UX Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cyber-security"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/data-solutions"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Data Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/graphics-design"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Graphics & Design
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-4 text-gray-900 border-l-4 border-purple-600 pl-3">
                    Business Services
                  </h3>
                  <ul className="space-y-2.5 text-gray-600">
                    <li>
                      <Link
                        to="/services/outsourcing"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        IT & Business Outsourcing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* What We Think */}
          <li>
            <Link
              to="/insights"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2 block"
            >
              What We Think
            </Link>
          </li>

          {/* About */}
          <li className="relative" ref={aboutRef}>
            <button
              className="flex items-center gap-1.5 text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2"
              onClick={() => {
                setAboutOpen(!aboutOpen);
                setWhatOpen(false);
                setGlobalOpen(false);
              }}
            >
              About EmpericTech
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {aboutOpen && (
              <div className="absolute top-full -left-[300px] mt-2 w-[900px] bg-white shadow-2xl rounded-xl p-8 animate-fadeIn border border-gray-100">
                <div className="grid grid-cols-3 gap-10">
                  <ul className="space-y-2.5 text-gray-600">
                    <li>
                      <Link
                        to="/about"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/case-studies"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Case Studies
                      </Link>
                    </li>
                  </ul>
                  <ul className="space-y-2.5 text-gray-600">
                    <li>
                      <Link
                        to="/leadership"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Leadership
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        News
                      </Link>
                    </li>
                  </ul>
                  <ul className="space-y-2.5 text-gray-600">
                    <li>
                      <Link
                        to="/privacy"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wellbeing"
                        className="block hover:text-purple-600 hover:translate-x-1 transition-all duration-200"
                      >
                        Wellbeing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Careers */}
          <li>
            <Link
              to="/careers"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2 block"
            >
              Careers
            </Link>
          </li>

          {/* Contact */}
          <li>
            <button
              onClick={scrollToContact}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2"
            >
              Contact Us
            </button>
          </li>

          {/* Global */}
          <li className="relative" ref={globalRef}>
            <button
              className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200"
              onClick={() => {
                setGlobalOpen(!globalOpen);
                setWhatOpen(false);
                setAboutOpen(false);
              }}
            >
              <span className="text-base">📍</span>
              Global
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  globalOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {globalOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-xl rounded-lg p-2 animate-fadeIn border border-gray-100">
                <button className="w-full text-center py-2 px-3 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors duration-150 text-gray-700 cursor-pointer">
                  Australia
                </button>
                <button className="w-full text-center py-2 px-3 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors duration-150 text-gray-700 cursor-pointer">
                  Nepal
                </button>
                <button className="w-full text-center py-2 px-3 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors duration-150 text-gray-700 cursor-pointer">
                  USA
                </button>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[73px] right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl z-40 transform transition-transform duration-300 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {/* What We Do - Mobile */}
          <div>
            <button
              className="w-full flex items-center justify-between text-gray-900 font-semibold text-base py-2"
              onClick={() => setMobileWhatOpen(!mobileWhatOpen)}
            >
              What We Do
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileWhatOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {mobileWhatOpen && (
              <div className="mt-3 ml-4 space-y-4 animate-fadeIn">
                <div>
                  <h4 className="text-sm font-semibold text-purple-600 mb-2">
                    Web & IT Services
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/services/web-development"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cloud-services"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        Cloud Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/it-support"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        IT Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/digital-marketing"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-purple-600 mb-2">
                    Design & Security
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/services/ui-ux-design"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        UI / UX Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cyber-security"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/data-solutions"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        Data Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/graphics-design"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        Graphics & Design
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-purple-600 mb-2">
                    Business Services
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/services/outsourcing"
                        className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        IT & Business Outsourcing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* What We Think - Mobile */}
          <div>
            <Link
              to="/insights"
              className="block text-gray-900 font-semibold text-base py-2 hover:text-purple-600 transition-colors"
            >
              What We Think
            </Link>
          </div>

          {/* About - Mobile */}
          <div>
            <button
              className="w-full flex items-center justify-between text-gray-900 font-semibold text-base py-2"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              About EmpericTech
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileAboutOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {mobileAboutOpen && (
              <div className="mt-3 ml-4 space-y-2 animate-fadeIn">
                <Link
                  to="/about"
                  className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                >
                  About Us
                </Link>
                <Link
                  to="/case-studies"
                  className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                >
                  Case Studies
                </Link>
                <Link
                  to="/leadership"
                  className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                >
                  Leadership
                </Link>
                <Link
                  to="/news"
                  className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                >
                  News
                </Link>
                <Link
                  to="/privacy"
                  className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                >
                  Privacy
                </Link>
                <Link
                  to="/wellbeing"
                  className="block text-gray-600 hover:text-purple-600 transition-colors py-1"
                >
                  Wellbeing
                </Link>
              </div>
            )}
          </div>

          {/* Careers - Mobile */}
          <div>
            <Link
              to="/careers"
              className="block text-gray-900 font-semibold text-base py-2 hover:text-purple-600 transition-colors"
            >
              Careers
            </Link>
          </div>

          {/* Contact - Mobile */}
          <div>
            <button
              onClick={scrollToContact}
              className="w-full text-left text-gray-900 font-semibold text-base py-2 hover:text-purple-600 transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Global - Mobile */}
          <div>
            <button
              className="w-full flex items-center justify-between text-gray-900 font-semibold text-base py-2"
              onClick={() => setMobileGlobalOpen(!mobileGlobalOpen)}
            >
              <span className="flex items-center gap-2">
                <span>📍</span>
                Global
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileGlobalOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {mobileGlobalOpen && (
              <div className="mt-3 ml-4 space-y-2 animate-fadeIn">
                <button className="block w-full text-center text-gray-600 hover:text-purple-600 transition-colors py-1 cursor-pointer">
                  Australia
                </button>
                <button className="block w-full text-center text-gray-600 hover:text-purple-600 transition-colors py-1 cursor-pointer">
                  Nepal
                </button>
                <button className="block w-full text-center text-gray-600 hover:text-purple-600 transition-colors py-1 cursor-pointer">
                  USA
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
