import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";

// Logos (same pattern you use elsewhere)
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";

const Footer = () => {
  const { theme, colors } = useTheme();

  const isDark = theme === "dark";

  return (
    <footer
      className="transition-colors duration-300"
      style={{
        background: isDark
          ? "linear-gradient(to bottom, #020024, #04045e, #020024)"
          : colors.creamLightColor,
        color: isDark ? colors.whiteColor : colors.blackColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-center md:text-left">

          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={isDark ? logoDark : logoLight}
                alt="EmpericTech Logo"
                className="h-10 mx-auto md:mx-0 cursor-pointer"
              />
            </Link>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: isDark ? colors.grayColor2 : colors.grayColor,
              }}
            >
              EmpericTech is a global IT services and outsourcing company,
              helping businesses scale through secure, innovative, and
              future-ready digital solutions.
            </p>
          </div>

          {/* What We Do */}
          <FooterColumn
            title="What We Do"
            items={[
              { name: "Web & Mobile Development", path: "/services/web-development" },
              { name: "IT Support", path: "/services/it-support" },
              { name: "Cloud Services", path: "/services/cloud-services" },
              { name: "UI / UX Design", path: "/services/ui-ux-design" },
              { name: "SEO & Digital Marketing", path: "/services/digital-marketing" },
            ]}
            isDark={isDark}
            colors={colors}
          />

          {/* Who We Are */}
          <FooterColumn
            title="Who We Are"
            items={[
              { name: "About EmpericTech", path: "/about" },
              { name: "Leadership", path: "/leadership" },
              { name: "Careers", path: "/careers" },
              { name: "Our Clients", path: "/clients" },
              { name: "Case Studies", path: "/case-studies" },
            ]}
            isDark={isDark}
            colors={colors}
          />

          {/* Innovation */}
          <FooterColumn
            title="Innovation"
            items={[
              { name: "AI-Driven Solutions", path: "/innovation/ai" },
              { name: "Automation & Analytics", path: "/innovation/automation" },
              { name: "Digital Transformation", path: "/innovation/digital-transformation" },
              { name: "Startup Partnerships", path: "/innovation/startups" },
            ]}
            isDark={isDark}
            colors={colors}
          />
        </div>

        {/* ================= DIVIDER ================= */}
        <div
          className="mt-12 pt-8 transition-colors duration-300"
          style={{
            borderTop: `1px solid ${
              isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            }`,
          }}
        >

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-4">
            {[FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)",
                  }}
                >
                  <Icon
                    className="text-lg"
                    style={{
                      color: isDark ? colors.whiteColor : colors.blackColor,
                    }}
                  />
                </a>
              )
            )}
          </div>

          {/* Policy Links */}
          <div
            className="flex justify-center flex-wrap gap-6 text-sm font-medium mb-4"
            style={{
              color: isDark ? colors.grayColor2 : colors.grayColor,
            }}
          >
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
          <p
            className="text-center text-xs"
            style={{
              color: isDark ? colors.grayColor2 : colors.grayColor,
            }}
          >
            © 2026 EmpericTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ================= SUB COMPONENT ================= */

const FooterColumn = ({ title, items, isDark, colors }) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <ul
      className="space-y-2 text-sm"
      style={{
        color: isDark ? colors.grayColor2 : colors.grayColor,
      }}
    >
      {items.map((item) => (
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
);
