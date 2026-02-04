import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import LogoDark from "../../assets/images/logo-dark.png";
import LogoLight from "../../assets/images/logo-light.png";

function Navbar({ contactRef }) {
  const { theme, toggleTheme, colors } = useTheme();
  const isDark = theme === "dark";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "services" | "about" | null
  const [globalOpen, setGlobalOpen] = useState(false);

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
                className="h-9 md:h-11"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10 text-sm font-medium">

              {/* WHAT WE DO */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "services" ? null : "services")
                  }
                  className="flex items-center gap-2 hover:text-[#8750f7] transition-colors"
                  style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
                >
                  What We Do
                  <span className={`transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {openDropdown === "services" && (
                  <div
                    className="absolute left-0 top-full mt-6 w-[720px] grid grid-cols-3 gap-8 p-8 rounded-2xl shadow-2xl"
                    style={{
                      backgroundColor: isDark ? "#111827" : colors.whiteColor,
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : `1px solid ${colors.borderColor}`,
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
                    />
                    <DropdownColumn
                      title="Design & Security"
                      items={[
                        { label: "UI / UX Design", to: "/services/ui-ux-design" },
                        { label: "Cybersecurity", to: "/services/cyber-security" },
                        { label: "Data Solutions", to: "/services/data-solutions" },
                        { label: "Graphics & Design", to: "/services/graphics-design" },
                      ]}
                    />
                    <DropdownColumn
                      title="Business Services"
                      items={[
                        { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
                      ]}
                    />
                  </div>
                )}
              </div>

              {/* ABOUT EMPERIC TECH */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "about" ? null : "about")
                  }
                  className="flex items-center gap-2 hover:text-[#8750f7] transition-colors"
                  style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
                >
                  About EmpericTech
                  <span className={`transition-transform duration-200 ${openDropdown === "about" ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {openDropdown === "about" && (
                  <div
                    className="absolute left-0 top-full mt-6 w-[480px] grid grid-cols-3 gap-6 p-8 rounded-2xl shadow-2xl"
                    style={{
                      backgroundColor: isDark ? "#111827" : colors.whiteColor,
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : `1px solid ${colors.borderColor}`,
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
                        className="hover:text-[#8750f7] transition-colors"
                        onClick={() => setOpenDropdown(null)}
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
                onClick={() => contactRef?.current?.scrollIntoView({ behavior: "smooth" })}
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
                  className="flex items-center gap-2 px-5 h-11 rounded-full border transition-colors"
                  style={{
                    color: isDark ? colors.whiteColor : colors.darkColor,
                    borderColor: isDark ? "rgba(255,255,255,0.3)" : colors.borderColor,
                  }}
                >
                  <Globe size={16} /> Global
                  <span className={`transition-transform ${globalOpen ? "rotate-180" : ""}`}>
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
                        style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
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
                className="flex items-center gap-2 px-5 h-11 rounded-full border transition-colors"
                style={{
                  color: isDark ? colors.whiteColor : colors.darkColor,
                  borderColor: isDark ? "rgba(255,255,255,0.3)" : colors.borderColor,
                }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                {isDark ? "Light" : "Dark"}
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <div className="h-16 md:h-20" />
    </>
  );
}

/* HELPERS */
function DropdownColumn({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold mb-4 border-l-4 pl-3 border-[#8750f7] text-base">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <NavLink
              to={i.to}
              className="hover:text-[#8750f7] transition-colors block"
            >
              {i.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className="hover:text-[#8750f7] transition-colors"
    >
      {label}
    </NavLink>
  );
}

export default Navbar;