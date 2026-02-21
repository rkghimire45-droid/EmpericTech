import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import LogoDark from "../../assets/images/logo-dark.png";
import LogoLight from "../../assets/images/logo-light.png";

function Navbar({ contactRef }) {
  const { theme, toggleTheme, colors } = useTheme();
  const isDark = theme === "dark";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "services" | "about" | null
  const [globalOpen, setGlobalOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const dropdownRef = useRef(null);
  const aboutRef = useRef(null);
  const globalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !dropdownRef.current?.contains(e.target) &&
        !aboutRef.current?.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
      if (!globalRef.current?.contains(e.target)) {
        setGlobalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileOpen]);


  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-r from-[#050709] to-[#0f0715]"
            : "bg-white border-b"
        }`}
        style={{ borderColor: !isDark ? colors.borderColor : "transparent" }}
      >
        <nav className="w-full px-6 xl:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LOGO */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={isDark ? LogoDark : LogoLight}
                alt="EmpericTech"
                className="h-7 md:h-9"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-12 text-[13px] tracking-wide font-medium">
              {/* WHAT WE DO - MEGA DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "services" ? null : "services")
                  }
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-[#8750f7]"
                  style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
                >
                  What We Do
                  <span 
                    className={`transition-transform duration-200 ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openDropdown === "services" && (
                  <div
                    className="absolute left-0 top-full mt-6 w-[720px] grid grid-cols-3 gap-8 p-8 rounded-2xl shadow-2xl transition-colors duration-300"
                    style={{
                      backgroundColor: isDark ? colors.darkColor : colors.whiteColor,
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.9)" : colors.borderColor}`,
                    }}
                  >
                    <DropdownColumn
                      title="Web & IT Services"
                      items={[
                        { label: "Web Development", to: "/services/web-development" },
                        { label: "Cloud Services", to: "/services/cloud-services" },
                        { label: "IT Support", to: "/services/it-support" },
                        { label: "Digital Marketing", to: "/services/digital-marketing" },
                      ]}
                      isDark={isDark}
                      colors={colors}
                    />
                    <DropdownColumn
                      title="Design & Security"
                      items={[
                        { label: "UI / UX Design", to: "/services/ui-ux-design" },
                        { label: "Cybersecurity", to: "/services/cyber-security" },
                        { label: "Data Solutions", to: "/services/data-solutions" },
                        { label: "Graphics & Design", to: "/services/graphics-design" },
                      ]}
                      isDark={isDark}
                      colors={colors}
                    />
                    <DropdownColumn
                      title="Business Services"
                      items={[
                        { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
                      ]}
                      isDark={isDark}
                      colors={colors}
                    />
                  </div>
                )}
              </div>

              {/* ABOUT EMPERIC TECH - DROPDOWN */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "about" ? null : "about")
                  }
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-[#8750f7]"
                  style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
                >
                  About EmpericTech
                  <span 
                    className={`transition-transform duration-200 ${
                      openDropdown === "about" ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openDropdown === "about" && (
                  <div
                    className="absolute left-0 top-full mt-6 w-[480px] grid grid-cols-3 gap-6 p-8 rounded-2xl shadow-2xl transition-colors duration-300"
                    style={{
                      backgroundColor: isDark ? colors.darkColor : colors.whiteColor,
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : colors.borderColor}`,
                    }}
                  >
                    {[
                      { label: "About Us", to: "/about" },
                      { label: "Case Studies", to: "/case-studies" },
                      { label: "Leadership", to: "/leadership" },
                      { label: "News", to: "/news" },
                      { label: "Privacy", to: "/privacy" },
                      { label: "Wellbeing", to: "/wellbeing" },
                    ].map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        className="transition-colors duration-300 hover:text-[#8750f7]"
                        onClick={() => setOpenDropdown(null)}
                        style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/blogs"
                className="transition-colors hover:text-[#8750f7]"
                style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
              >
                What We Think
              </NavLink>

              <NavLink
                to="/careers"
                className="transition-colors hover:text-[#8750f7]"
                style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
              >
                Careers
              </NavLink>

              <button
                onClick={() =>
                  contactRef?.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-[#8750f7] transition-colors"
                style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
              >
                Contact Us
              </button>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="hidden lg:flex items-center gap-4">
              {/* GLOBAL – centered dropdown */}
              <div className="relative" ref={globalRef}>
                <button
                  onClick={() => setGlobalOpen(!globalOpen)}
                  className="flex items-center gap-1 px-3 h-8 text-xs rounded-full border transition-colors"
                  style={{
                    color: isDark ? colors.whiteColor : colors.darkColor,
                    borderColor: isDark
                      ? "rgba(255,255,255,0.25)"
                      : colors.borderColor,
                  }}
                >
                  <Globe size={12} />
                  <span>Global</span>
                  <span
                    className={`text-[10px] transition-transform duration-200 ${
                      globalOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>



                {globalOpen && (
                  <div
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 rounded-xl shadow-2xl py-2 overflow-hidden"
                    style={{
                      backgroundColor: isDark ? "#111827" : colors.whiteColor,
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : `1px solid ${colors.borderColor}`,
                    }}
                  >
                    {["Australia 🇦🇺", "Nepal 🇳🇵", "USA 🇺🇸"].map((c) => (
                      <button
                        key={c}
                        onClick={() => setGlobalOpen(false)}
                        className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm transition-colors hover:text-[#8750f7]"
                        style={{
                          color: isDark ? colors.whiteColor : colors.darkColor,
                        }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* THEME TOGGLE */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1 px-3 h-8 text-xs rounded-full border transition-colors"
                style={{
                  color: isDark ? colors.whiteColor : colors.darkColor,
                  borderColor: isDark
                    ? "rgba(255,255,255,0.25)"
                    : colors.borderColor,
                }}
              >
                {isDark ? <Sun size={12} /> : <Moon size={12} />}
                <span>{isDark ? "Light" : "Dark"}</span>
              </button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden p-2 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[calc(100vh-4rem)]" : "max-h-0"
          } overflow-y-auto`}
          style={{
            backgroundColor: isDark ? "#0a0a0a" : colors.whiteColor,
          }}
        >

          <div className="px-6 py-4 space-y-4">
            {/* WHAT WE DO - Mobile */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-base font-medium"
                style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
              >
                What We Do
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <MobileServiceGroup
                    title="Web & IT Services"
                    items={[
                      {
                        label: "Web Development",
                        to: "/services/web-development",
                      },
                      {
                        label: "Cloud Services",
                        to: "/services/cloud-services",
                      },
                      { label: "IT Support", to: "/services/it-support" },
                      {
                        label: "Digital Marketing",
                        to: "/services/digital-marketing",
                      },
                    ]}
                    onClick={() => setMobileOpen(false)}
                  />
                  <MobileServiceGroup
                    title="Design & Security"
                    items={[
                      { label: "UI / UX Design", to: "/services/ui-ux-design" },
                      {
                        label: "Cybersecurity",
                        to: "/services/cyber-security",
                      },
                      {
                        label: "Data Solutions",
                        to: "/services/data-solutions",
                      },
                      {
                        label: "Graphics & Design",
                        to: "/services/graphics-design",
                      },
                    ]}
                    onClick={() => setMobileOpen(false)}
                  />
                  <MobileServiceGroup
                    title="Business Services"
                    items={[
                      {
                        label: "IT & Business Outsourcing",
                        to: "/services/outsourcing",
                      },
                    ]}
                    onClick={() => setMobileOpen(false)}
                  />
                </div>
              )}
            </div>

            <div
              className="h-px"
              style={{
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : colors.borderColor,
              }}
            />

            {/* ABOUT EMPERIC TECH - Mobile */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between w-full py-3 text-base font-medium"
                style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
              >
                About EmpericTech
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="pl-4 space-y-3 mt-2">
                  {[
                    { label: "About Us", to: "/about" },
                    { label: "Case Studies", to: "/case-studies" },
                    { label: "Leadership", to: "/leadership" },
                    { label: "News", to: "/news" },
                    { label: "Privacy", to: "/privacy" },
                    { label: "Wellbeing", to: "/wellbeing" },
                  ].map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className="block py-2 text-sm hover:text-[#8750f7] transition-colors"
                      onClick={() => setMobileOpen(false)}
                      style={{
                        color: isDark ? colors.whiteColor : colors.darkColor,
                      }}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <div
              className="h-px"
              style={{
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : colors.borderColor,
              }}
            />

            {/* WHAT WE THINK */}
            <NavLink
              to="/blogs"
              className="block py-3 text-base font-medium hover:text-[#8750f7] transition-colors"
              onClick={() => setMobileOpen(false)}
              style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
            >
              What We Think
            </NavLink>

            <div
              className="h-px"
              style={{
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : colors.borderColor,
              }}
            />

            {/* CAREERS */}
            <NavLink
              to="/careers"
              className="block py-3 text-base font-medium hover:text-[#8750f7] transition-colors"
              onClick={() => setMobileOpen(false)}
              style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
            >
              Careers
            </NavLink>

            <div
              className="h-px"
              style={{
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : colors.borderColor,
              }}
            />

            {/* CONTACT US */}
            <button
              onClick={() => {
                setMobileOpen(false);
                contactRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block w-full text-left py-3 text-base font-medium hover:text-[#8750f7] transition-colors"
              style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
            >
              Contact Us
            </button>

            <div
              className="h-px"
              style={{
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : colors.borderColor,
              }}
            />

            {/* GLOBAL & THEME - Mobile */}
            <div className="flex items-center gap-3 pt-2">
              {/* Global Selector */}
              <select
                className="flex-1 px-4 py-3 rounded-lg border text-sm"
                style={{
                  backgroundColor: isDark ? "#111827" : colors.whiteColor,
                  color: isDark ? colors.whiteColor : colors.darkColor,
                  borderColor: isDark
                    ? "rgba(255,255,255,0.2)"
                    : colors.borderColor,
                }}
              >
                <option>🌍 Australia 🇦🇺</option>
                <option>🌍 Nepal 🇳🇵</option>
                <option>🌍 USA 🇺🇸</option>
              </select>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="px-4 py-3 rounded-lg border flex items-center gap-2 text-sm"
                style={{
                  backgroundColor: isDark ? "#111827" : colors.whiteColor,
                  color: isDark ? colors.whiteColor : colors.darkColor,
                  borderColor: isDark
                    ? "rgba(255,255,255,0.2)"
                    : colors.borderColor,
                }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-16 md:h-20" />
    </>
  );
}

/* HELPERS */
function DropdownColumn({ title, items, isDark, colors }) {
  return (
    <div>
      <h4 
        className="font-semibold mb-4 border-l-4 pl-3 text-base transition-colors duration-300"
        style={{ 
          borderColor: colors.primaryColor || "#8750f7",
          color: isDark ? colors.whiteColor : colors.darkColor
        }}
      >
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <NavLink
              to={i.to}
              className="transition-colors duration-300 hover:text-[#8750f7] block relative group"
              style={{ color: isDark ? colors.grayColor : colors.darkColor }}
            >
              <span className="relative">
                {i.label}
                <span 
                  className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#8750f7] transition-all duration-300 group-hover:w-full"
                />
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink to={to} className="hover:text-[#8750f7] transition-colors">
      {label}
    </NavLink>
  );
}

function MobileServiceGroup({ title, items, onClick }) {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="mb-4">
      <h5
        className="text-xs font-semibold mb-2 uppercase tracking-wide transition-colors duration-300"
        style={{ color: colors.primaryColor || "#8750f7" }}
      >
        {title}
      </h5>
      <div className="space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className="block py-2 text-sm transition-colors duration-300 hover:text-[#8750f7] pl-2"
            onClick={onClick}
            style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
