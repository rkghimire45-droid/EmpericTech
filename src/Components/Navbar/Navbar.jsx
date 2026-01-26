// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// /* ===== LOGOS ===== */
// import logoLight from "../../assets/logo-light.png";
// import logoDark from "../../assets/logo-dark.png";

// /* ===== COLOR CONSTANTS ===== */
// const primaryColor = "#8750f7";
// const primaryColorLight = "#140c1c";
// const seondaryColor = "#2a1454";
// const bodyColor = "#dddddd";
// const whiteColor = "#ffffff";
// const blackColor = "#050709";
// const grayColor = "#636363";
// const grayColor2 = "#747779";
// const grayColor3 = "#22272c";
// const borderColor = "#d9d9d9";
// const creamLightColor = "#f6f3fc";
// const darkColor = "#0f0715";

// const Navbar = ({ contactRef }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   /* ===== THEME (DEFAULT DARK + PERSIST) ===== */
//   const [darkMode, setDarkMode] = useState(() =>
//     localStorage.getItem("theme") !== "light"
//   );

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//   }, [darkMode]);

//   /* ===== DROPDOWNS ===== */
//   const [whatOpen, setWhatOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [globalOpen, setGlobalOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const [mobileWhatOpen, setMobileWhatOpen] = useState(false);
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

//   const whatRef = useRef(null);
//   const aboutRef = useRef(null);
//   const globalRef = useRef(null);

//   /* ===== CLICK OUTSIDE CLOSE ===== */
//   useEffect(() => {
//     const handler = (e) => {
//       if (whatRef.current && !whatRef.current.contains(e.target)) setWhatOpen(false);
//       if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
//       if (globalRef.current && !globalRef.current.contains(e.target)) setGlobalOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   /* ===== CONTACT SCROLL ===== */
//   const scrollToContact = () => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         contactRef?.current?.scrollIntoView({ behavior: "smooth" });
//       }, 300);
//     } else {
//       contactRef?.current?.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileOpen(false);
//   };

//   /* ===== MOBILE BODY LOCK ===== */
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "unset";
//   }, [mobileOpen]);

//   // ================= TEXT COLOR =================
//   const navTextColor = darkMode ? whiteColor : darkColor;
//   const dropdownTextColor = darkMode ? bodyColor : grayColor3;

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <nav
//         className="sticky top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between border-b transition-colors duration-300"
//         style={{
//           backgroundColor: darkMode ? darkColor : whiteColor, // Dark background fixed
//           borderColor: darkMode ? darkColor : borderColor,
//         }}
//       >
//         {/* LOGO */}
//         <Link to="/">
//           <img
//             src={darkMode ? logoDark : logoLight}
//             alt="EmpericTech"
//             className="h-10"
//           />
//         </Link>

//         {/* ================= DESKTOP MENU ================= */}
//         <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
//           {/* WHAT WE DO */}
//           <li className="relative" ref={whatRef}>
//             <button
//               onClick={() => {
//                 setWhatOpen(!whatOpen);
//                 setAboutOpen(false);
//                 setGlobalOpen(false);
//               }}
//               className="flex items-center gap-2"
//               style={{ color: navTextColor }}
//             >
//               What We Do 
//               <span
//                 className={`transition-transform ${
//                   whatOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>

//             {whatOpen && (
//               <div
//                 className="absolute mt-4 w-[920px] rounded-2xl p-8 grid grid-cols-3 gap-10 shadow-2xl animate-dropdown"
//                 style={{
//                   backgroundColor: darkMode ? blackColor : whiteColor,
//                   border: `1px solid ${borderColor}`,
//                 }}
//               >
//                 {[
//                   {
//                     title: "Web & IT Services",
//                     items: [
//                       ["Web Development", "/services/web-development"],
//                       ["Cloud Services", "/services/cloud-services"],
//                       ["IT Support", "/services/it-support"],
//                       ["Digital Marketing", "/services/digital-marketing"],
//                     ],
//                   },
//                   {
//                     title: "Design & Security",
//                     items: [
//                       ["UI / UX Design", "/services/ui-ux-design"],
//                       ["Cybersecurity", "/services/cyber-security"],
//                       ["Data Solutions", "/services/data-solutions"],
//                       ["Graphics & Design", "/services/graphics-design"],
//                     ],
//                   },
//                   {
//                     title: "Business Services",
//                     items: [["IT & Business Outsourcing", "/services/outsourcing"]],
//                   },
//                 ].map((sec) => (
//                   <div key={sec.title}>
//                     <h3
//                       className="font-semibold mb-4 pl-3 border-l-4"
//                       style={{ borderColor: primaryColor, color: navTextColor }}
//                     >
//                       {sec.title}
//                     </h3>
//                     <ul className="space-y-3">
//                       {sec.items.map(([label, link]) => (
//                         <li key={label}>
//                           <Link
//                             className="dropdown-link"
//                             to={link}
//                             style={{ color: dropdownTextColor }}
//                           >
//                             {label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </li>

//           <Link className="nav-link" to="/insights" style={{ color: navTextColor }}>
//             What We Think
//           </Link>

//           {/* ABOUT */}
//           <li className="relative" ref={aboutRef}>
//             <button
//               onClick={() => {
//                 setAboutOpen(!aboutOpen);
//                 setWhatOpen(false);
//               }}
//               className="flex items-center gap-2"
//               style={{ color: navTextColor }}
//             >
//               About EmpericTech
//               <span
//                 className={`transition-transform ${
//                   aboutOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>

//             {aboutOpen && (
//               <div
//                 className="absolute mt-4 w-[620px] p-6 grid grid-cols-3 gap-6 rounded-xl shadow-xl animate-dropdown"
//                 style={{ backgroundColor: darkMode ? blackColor : whiteColor }}
//               >
//                 {[
//                   ["About Us", "/about"],
//                   ["Case Studies", "/case-studies"],
//                   ["Leadership", "/leadership"],
//                   ["News", "/news"],
//                   ["Privacy", "/privacy"],
//                   ["Wellbeing", "/wellbeing"],
//                 ].map(([label, link]) => (
//                   <Link
//                     key={label}
//                     className="dropdown-link"
//                     to={link}
//                     style={{ color: dropdownTextColor }}
//                   >
//                     {label}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </li>

//           <Link className="nav-link" to="/careers" style={{ color: navTextColor }}>
//             Careers
//           </Link>

//           <button
//             className="nav-link"
//             onClick={scrollToContact}
//             style={{ color: navTextColor }}
//           >
//             Contact Us
//           </button>

//           {/* GLOBAL */}
//           <li className="relative" ref={globalRef}>
//             <button
//               className="px-4 py-2 rounded-full text-white font-medium"
//               style={{ backgroundColor: primaryColor }}
//               onClick={() => setGlobalOpen(!globalOpen)}
//             >
//               🌍 Global ▼
//             </button>

//             {globalOpen && (
//               <div className="absolute right-0 mt-2 rounded-lg shadow-lg bg-white overflow-hidden">
//                 {["Australia", "Nepal", "USA"].map((c) => (
//                   <button
//                     key={c}
//                     className="block px-4 py-2 w-full hover:bg-gray-100 text-left"
//                   >
//                     {c}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </li>
//         </ul>

//         {/* DARK / LIGHT TOGGLE */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="ml-4 px-3 py-2 rounded-full transition"
//           style={{
//             backgroundColor: darkMode ? creamLightColor : primaryColor,
//             color: darkMode ? blackColor : whiteColor,
//           }}
//         >
//           {darkMode ? "☀️" : "🌙"}
//         </button>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           className="lg:hidden ml-4 text-2xl"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           ☰
//         </button>
//       </nav>

//       {/* ================= MOBILE MENU ================= */}
//       {mobileOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" />}

//       <div
//         className={`lg:hidden fixed top-[72px] right-0 w-80 h-full z-50 p-6 overflow-y-auto transition-transform ${
//           mobileOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{
//           backgroundColor: darkMode ? darkColor : whiteColor,
//           color: navTextColor,
//         }}
//       >
//         {/* WHAT WE DO - MOBILE */}
//         <button
//           className="w-full flex justify-between py-2 font-semibold"
//           onClick={() => setMobileWhatOpen(!mobileWhatOpen)}
//           style={{ color: navTextColor }}
//         >
//           What We Do ▼
//         </button>

//         {mobileWhatOpen && (
//           <div className="ml-4 space-y-2">
//             {[
//               "Web Development",
//               "Cloud Services",
//               "IT Support",
//               "Digital Marketing",
//               "UI / UX Design",
//               "Cybersecurity",
//               "Data Solutions",
//               "Graphics & Design",
//               "IT & Business Outsourcing",
//             ].map((item) => (
//               <Link
//                 key={item}
//                 to="/"
//                 className="block text-sm"
//                 style={{ color: dropdownTextColor }}
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         )}

//         {/* WHAT WE THINK */}
//         <Link to="/insights" className="block py-2 font-semibold" style={{ color: navTextColor }}>
//           What We Think
//         </Link>

//         {/* ABOUT - MOBILE */}
//         <button
//           className="w-full flex justify-between py-2 font-semibold"
//           onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
//           style={{ color: navTextColor }}
//         >
//           About EmpericTech ▼
//         </button>

//         {mobileAboutOpen && (
//           <div className="ml-4 space-y-2">
//             {["About Us", "Case Studies", "Leadership", "News", "Privacy", "Wellbeing"].map(
//               (item) => (
//                 <Link
//                   key={item}
//                   to="/"
//                   className="block text-sm"
//                   style={{ color: dropdownTextColor }}
//                 >
//                   {item}
//                 </Link>
//               )
//             )}
//           </div>
//         )}

//         {/* CAREERS */}
//         <Link to="/careers" className="block py-2 font-semibold" style={{ color: navTextColor }}>
//           Careers
//         </Link>

//         {/* CONTACT */}
//         <button
//           className="block py-2 font-semibold"
//           onClick={scrollToContact}
//           style={{ color: navTextColor }}
//         >
//           Contact Us
//         </button>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, ChevronDown, Menu, X, Globe } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function Navbar({ contactRef }) {
  const { theme, toggleTheme, colors } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-r from-[#050709] to-[#0f0715]"
          : "bg-white border-b"
      }`}
      style={{
        borderColor: !isDark ? colors.borderColor : "transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-bold tracking-wide"
            style={{ color: isDark ? colors.whiteColor : colors.darkColor }}
          >
            Emperic<span style={{ color: colors.primaryColor }}>Tech</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">

            {/* What We Do */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex items-center gap-1 font-medium transition-colors"
                style={{
                  color: isDark ? colors.whiteColor : colors.darkColor,
                }}
              >
                What We Do
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* MEGA DROPDOWN */}
              {openDropdown === "services" && (
                <div
                  className="absolute left-0 mt-6 w-[700px] rounded-xl shadow-xl p-8 grid grid-cols-3 gap-8"
                  style={{
                    backgroundColor: isDark
                      ? colors.grayColor3
                      : colors.whiteColor,
                  }}
                >
                  {/* Column 1 */}
                  <div>
                    <h4
                      className="font-semibold mb-4 border-l-4 pl-3"
                      style={{
                        borderColor: colors.primaryColor,
                        color: isDark ? colors.whiteColor : colors.darkColor,
                      }}
                    >
                      Web & IT Services
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <NavItem to="/services/web-development" label="Web Development" colors={colors} />
                      <NavItem to="/services/cloud-services" label="Cloud Services" colors={colors} />
                      <NavItem to="/services/it-support" label="IT Support" colors={colors} />
                      <NavItem to="/services/digital-marketing" label="Digital Marketing" colors={colors} />
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h4
                      className="font-semibold mb-4 border-l-4 pl-3"
                      style={{
                        borderColor: colors.primaryColor,
                        color: isDark ? colors.whiteColor : colors.darkColor,
                      }}
                    >
                      Design & Security
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <NavItem to="/services/ui-ux-design" label="UI / UX Design" colors={colors} />
                      <NavItem to="/services/cyber-security" label="Cybersecurity" colors={colors} />
                      <NavItem to="/services/data-solutions" label="Data Solutions" colors={colors} />
                      <NavItem to="/services/graphics-design" label="Graphics & Design" colors={colors} />
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h4
                      className="font-semibold mb-4 border-l-4 pl-3"
                      style={{
                        borderColor: colors.primaryColor,
                        color: isDark ? colors.whiteColor : colors.darkColor,
                      }}
                    >
                      Business Services
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <NavItem
                        to="/services/outsourcing"
                        label="IT & Business Outsourcing"
                        colors={colors}
                      />
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <NavLinkStyled to="/blogs" label="What We Think" isDark={isDark} colors={colors} />

            {/* About */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex items-center gap-1 font-medium transition-colors"
                style={{
                  color: isDark ? colors.whiteColor : colors.darkColor,
                }}
              >
                About EmpericTech
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "about" && (
                <div
                  className="absolute left-0 mt-6 w-56 rounded-xl shadow-lg p-4"
                  style={{
                    backgroundColor: isDark
                      ? colors.grayColor3
                      : colors.whiteColor,
                  }}
                >
                  {[
                    "About Us",
                    "Case Studies",
                    "Leadership",
                    "News",
                    "Privacy",
                    "Wellbeing",
                  ].map((item) => (
                    <div
                      key={item}
                      className="px-3 py-2 rounded-md text-sm transition-colors cursor-pointer"
                      style={{
                        color: isDark ? colors.whiteColor : colors.darkColor,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <NavLinkStyled to="/careers" label="Careers" isDark={isDark} colors={colors} />
            <NavLinkStyled to="/blogs" label="Blogs" isDark={isDark} colors={colors} />

            <button
              onClick={() =>
                contactRef?.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-medium"
              style={{ color: colors.primaryColor }}
            >
              Contact Us
            </button>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <button
              className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full text-sm"
              style={{
                border: `1px solid ${colors.primaryColor}`,
                color: colors.primaryColor,
              }}
            >
              <Globe size={14} /> Global
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors"
              style={{
                backgroundColor: isDark
                  ? colors.grayColor3
                  : colors.creamLightColor,
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div
            className="lg:hidden mt-2 rounded-xl shadow-lg p-4"
            style={{
              backgroundColor: isDark ? colors.grayColor3 : colors.whiteColor,
            }}
          >
            <MobileNavItem to="/services" label="What We Do" colors={colors} />
            <MobileNavItem to="/blogs" label="What We Think" colors={colors} />
            <MobileNavItem to="/careers" label="Careers" colors={colors} />
            <MobileNavItem to="/blogs" label="Blogs" colors={colors} />
            <button
              className="w-full text-left mt-2 font-medium"
              style={{ color: colors.primaryColor }}
              onClick={() =>
                contactRef?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ---------- Helper Components ---------- */

function NavLinkStyled({ to, label, isDark, colors }) {
  return (
    <NavLink
      to={to}
      className="font-medium transition-colors"
      style={{
        color: isDark ? colors.whiteColor : colors.darkColor,
      }}
    >
      {label}
    </NavLink>
  );
}

function NavItem({ to, label, colors }) {
  return (
    <li>
      <NavLink
        to={to}
        className="transition-colors"
        style={{ color: colors.grayColor }}
      >
        {label}
      </NavLink>
    </li>
  );
}

function MobileNavItem({ to, label, colors }) {
  return (
    <NavLink
      to={to}
      className="block py-2 font-medium"
      style={{ color: colors.grayColor }}
    >
      {label}
    </NavLink>
  );
}

export default Navbar;
