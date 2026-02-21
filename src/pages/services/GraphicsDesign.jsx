import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  ChevronRight,
  Video,
  Palette,
  Image,
  Package,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Award,
  Lightbulb,
  Users,
  Zap,
  Sparkles,
  FileImage,
} from "lucide-react";

import HeroImage from "../../assets/GraphicsDesign.png";

function GraphicsAndDesign() {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    { label: "Web Development", to: "/services/web-development" },
    { label: "Cloud Services", to: "/services/cloud-services" },
    { label: "IT Support", to: "/services/it-support" },
    { label: "Digital Marketing", to: "/services/digital-marketing" },
    { label: "UI / UX Design", to: "/services/ui-ux-design" },
    { label: "Cybersecurity", to: "/services/cyber-security" },
    { label: "Data Solutions", to: "/services/data-solutions" },
    { label: "Graphics & Design", to: "/services/graphics-design", active: true },
    { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
  ];

  const ourServices = [
    {
      icon: Video,
      title: "Video Production & Motion Graphics",
      description:
        "Create dynamic videos, motion graphics, and animations that captivate audiences. From explainer videos to social media content, we bring your stories to life with professional production quality.",
    },
    {
      icon: Palette,
      title: "Graphic Design & Brand Identity",
      description:
        "Develop strong brand visuals, including logos, promotional materials, and social media graphics. We create cohesive visual identities that resonate with your target audience.",
    },
    {
      icon: Megaphone,
      title: "Marketing & Promotional Materials",
      description:
        "Design brochures, flyers, banners, and advertisements that drive engagement. Eye-catching designs optimized for both print and digital channels.",
    },
    {
      icon: Image,
      title: "Website & UI Graphics",
      description:
        "Enhance digital experiences with custom-designed icons, infographics, and interface elements. Pixel-perfect graphics that elevate your web presence.",
    },
    {
      icon: Package,
      title: "Product Packaging & Print Design",
      description:
        "Deliver impactful packaging and print materials to strengthen brand recognition. From product boxes to business cards, we ensure your brand stands out on shelves.",
    },
  ];

  const designServices = [
    "Logo Design & Branding",
    "Corporate Identity Packages",
    "Social Media Graphics",
    "Infographics & Data Visualization",
    "Business Cards & Stationery",
    "Brochures & Catalogs",
    "Posters & Banners",
    "Trade Show Graphics",
    "Magazine & Book Layout",
    "3D Modeling & Rendering",
    "Illustration & Icon Design",
    "Typography & Font Selection",
  ];

  const whyChooseUs = [
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description:
        "Our designers and editors bring artistic vision and technical skill to every project, creating visuals that capture attention and communicate effectively.",
    },
    {
      icon: Award,
      title: "Strategic Approach",
      description:
        "Every design choice is made with your brand's goals in mind. We don't just make things pretty—we create visuals that drive results.",
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description:
        "We involve you at every stage to ensure the final product aligns with your vision. Your feedback shapes the creative direction.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "Efficient workflows and dedicated designers mean quick delivery without compromising on quality. We meet deadlines while exceeding expectations.",
    },
    {
      icon: Lightbulb,
      title: "Versatile Expertise",
      description:
        "From motion graphics to print design, our team handles diverse creative challenges across all mediums and platforms.",
    },
    {
      icon: FileImage,
      title: "Brand Consistency",
      description:
        "We ensure visual consistency across all touchpoints, creating a cohesive brand experience that builds recognition and trust.",
    },
  ];

  const designProcess = [
    {
      number: "01",
      title: "Discovery & Briefing",
      description:
        "We dive deep into your brand, objectives, target audience, and project requirements to establish a clear creative direction and deliverables.",
    },
    {
      number: "02",
      title: "Concept Development",
      description:
        "Our creative team develops multiple design concepts and directions, exploring different visual approaches that align with your brand identity.",
    },
    {
      number: "03",
      title: "Design & Refinement",
      description:
        "We refine selected concepts based on your feedback, iterating on details, colors, typography, and layouts until the design is perfect.",
    },
    {
      number: "04",
      title: "Finalization & Delivery",
      description:
        "Final files delivered in all required formats for print and digital use, along with brand guidelines and ongoing support as needed.",
    },
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: isDark ? colors.darkColor : colors.whiteColor,
      }}
    >
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(42,20,84,0.95) 0%, rgba(5,7,9,0.85) 100%)"
              : "linear-gradient(135deg, rgba(5,7,9,0.75) 0%, rgba(42,20,84,0.65) 100%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-sm md:text-base">
            <Link
              to="/"
              className="transition-colors duration-300 hover:opacity-80"
              style={{ color: colors.whiteColor }}
            >
              Home
            </Link>
            <ChevronRight size={16} style={{ color: colors.whiteColor }} />
            <Link
              to="/services"
              className="transition-colors duration-300 hover:opacity-80"
              style={{ color: colors.whiteColor }}
            >
              Services
            </Link>
            <ChevronRight size={16} style={{ color: colors.whiteColor }} />
            <span style={{ color: colors.primaryColor }}>Graphics & Design</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ color: colors.whiteColor }}
          >
            Graphics & Design
          </h1>

          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.whiteColor, opacity: 0.9 }}
          >
            At EmpericTech, we believe that powerful visuals can transform the
            way you communicate your brand's story. Whether through dynamic video
            editing, compelling motion graphics, or strategic graphic design, we
            craft engaging visuals that capture attention and leave a lasting
            impact.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* MAIN CONTENT */}
          <div className="flex-1">
            {/* SERVICE OVERVIEW */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Visual Stories That Captivate
              </h2>
              <div
                className="prose prose-lg max-w-none space-y-6 leading-relaxed"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                <p>
                  In a world saturated with content, exceptional design is what
                  makes you stand out. At EmpericTech, our creative team blends
                  artistic expertise with technical precision to deliver
                  high-quality visuals that don't just look beautiful—they
                  communicate, persuade, and convert.
                </p>
                <p>
                  From brand identity and logo design to motion graphics and video
                  production, we craft visual experiences that resonate with your
                  audience and strengthen your brand. Every project is approached
                  with strategic thinking, ensuring that aesthetics serve your
                  business objectives.
                </p>
                <p>
                  Whether you need a complete brand overhaul, marketing materials
                  for a new campaign, or engaging video content for social media,
                  our designers and motion artists bring your vision to life with
                  creativity, precision, and passion.
                </p>
              </div>
            </section>

            {/* OUR SERVICES INCLUDE */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Our Services Include
              </h2>
              <p
                className="mb-8 text-lg"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                We craft visually compelling content that enhances brand identity
                and engages audiences across platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {ourServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      style={{
                        backgroundColor: isDark
                          ? "rgba(5,7,9,0.6)"
                          : colors.creamLightColor,
                        border: isDark
                          ? "1px solid rgba(255,255,255,0.08)"
                          : `1px solid ${colors.borderColor}`,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{
                          backgroundColor: isDark
                            ? "rgba(135,80,247,0.2)"
                            : colors.primaryColor,
                        }}
                      >
                        <Icon
                          size={32}
                          style={{
                            color: isDark
                              ? colors.primaryColor
                              : colors.whiteColor,
                          }}
                        />
                      </div>
                      <h3
                        className="text-xl font-bold mb-4"
                        style={{
                          color: isDark ? colors.whiteColor : colors.blackColor,
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="leading-relaxed text-sm md:text-base"
                        style={{
                          color: isDark ? colors.whiteColor : colors.grayColor,
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* DESIGN SERVICES */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Comprehensive Design Services
              </h2>
              <div
                className="rounded-3xl p-8 md:p-10 lg:p-12 transition-colors duration-300"
                style={{
                  backgroundColor: isDark
                    ? "rgba(5,7,9,0.6)"
                    : colors.creamLightColor,
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : `1px solid ${colors.borderColor}`,
                }}
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {designServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle2
                        size={24}
                        className="shrink-0 mt-1"
                        style={{ color: colors.primaryColor }}
                      />
                      <span
                        className="text-base md:text-lg leading-relaxed"
                        style={{
                          color: isDark ? colors.whiteColor : colors.blackColor,
                        }}
                      >
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* DESIGN PROCESS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Our Design Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {designProcess.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(5,7,9,0.6)"
                        : colors.creamLightColor,
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : `1px solid ${colors.borderColor}`,
                    }}
                  >
                    <div
                      className="text-6xl md:text-7xl font-bold mb-4 opacity-20"
                      style={{ color: colors.primaryColor }}
                    >
                      {step.number}
                    </div>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-4"
                      style={{
                        color: isDark ? colors.whiteColor : colors.blackColor,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{
                        color: isDark ? colors.whiteColor : colors.grayColor,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Why Choose Us?
              </h2>
              <p
                className="mb-8 text-lg"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                We are committed to delivering exceptional value through
                expertise, customization, and continuous support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      style={{
                        backgroundColor: isDark
                          ? "rgba(5,7,9,0.6)"
                          : colors.creamLightColor,
                        border: isDark
                          ? "1px solid rgba(255,255,255,0.08)"
                          : `1px solid ${colors.borderColor}`,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{
                          backgroundColor: isDark
                            ? "rgba(135,80,247,0.2)"
                            : colors.primaryColor,
                        }}
                      >
                        <Icon
                          size={32}
                          style={{
                            color: isDark
                              ? colors.primaryColor
                              : colors.whiteColor,
                          }}
                        />
                      </div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{
                          color: isDark ? colors.whiteColor : colors.blackColor,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="leading-relaxed text-sm md:text-base"
                        style={{
                          color: isDark ? colors.whiteColor : colors.grayColor,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:w-80 lg:sticky lg:top-24 lg:self-start space-y-8">
            <div
              className="rounded-3xl p-8 transition-colors duration-300"
              style={{
                backgroundColor: isDark
                  ? "rgba(5,7,9,0.6)"
                  : colors.creamLightColor,
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : `1px solid ${colors.borderColor}`,
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                All Services
              </h3>
              <ul className="space-y-3">
                {allServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.to}
                      className="flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: service.active
                          ? colors.primaryColor
                          : "transparent",
                        color: service.active
                          ? colors.whiteColor
                          : isDark
                          ? colors.whiteColor
                          : colors.blackColor,
                        border: service.active
                          ? "none"
                          : isDark
                          ? "1px solid rgba(255,255,255,0.1)"
                          : `1px solid ${colors.borderColor}`,
                      }}
                    >
                      <span className="text-sm md:text-base font-medium">
                        {service.label}
                      </span>
                      <ArrowRight size={18} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-3xl p-8 transition-colors duration-300"
              style={{
                backgroundColor: isDark
                  ? colors.primaryColor
                  : colors.creamLightColor,
                border: isDark ? "none" : `1px solid ${colors.borderColor}`,
              }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{
                  color: isDark ? colors.whiteColor : colors.blackColor,
                }}
              >
                Ready to Create Something Amazing?
              </h3>
              <p
                className="mb-6 leading-relaxed text-sm md:text-base"
                style={{
                  color: isDark ? colors.whiteColor : colors.grayColor,
                  opacity: isDark ? 0.9 : 1,
                }}
              >
                Let's bring your brand to life with stunning visuals that
                captivate and convert.
              </p>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: isDark
                    ? colors.whiteColor
                    : colors.primaryColor,
                  color: isDark ? colors.primaryColor : colors.whiteColor,
                }}
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default GraphicsAndDesign;