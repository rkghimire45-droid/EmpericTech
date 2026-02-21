import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  ChevronRight,
  Palette,
  Users,
  Sparkles,
  Eye,
  Layers,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  Heart,
  Zap,
  RefreshCw,
} from "lucide-react";

// Import your hero image - adjust path as needed
import HeroImage from "../../assets/UIUX.png";

function UIUXDesign() {
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
    { label: "UI / UX Design", to: "/services/ui-ux-design", active: true },
    { label: "Cybersecurity", to: "/services/cyber-security" },
    { label: "Data Solutions", to: "/services/data-solutions" },
    { label: "Graphics & Design", to: "/services/graphics-design" },
    { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
  ];

  const ourServices = [
    {
      icon: Users,
      title: "User Research & Analysis",
      description:
        "Understand your audience's needs, behaviors, and pain points to create user-centric designs. In-depth interviews, surveys, usability testing, and behavioral analytics inform every design decision.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Develop seamless, accessible, and responsive interfaces that enhance digital interactions. From wireframes to high-fidelity prototypes, we craft experiences that users love.",
    },
    {
      icon: Sparkles,
      title: "Prototyping & Testing",
      description:
        "Validate designs with interactive prototypes to refine usability and performance. Iterative testing ensures we eliminate friction and optimize user flows before development.",
    },
    {
      icon: Layers,
      title: "Development & Implementation",
      description:
        "Collaborate with developers to bring designs to life with modern technologies. We ensure pixel-perfect implementation and maintain design integrity throughout development.",
    },
    {
      icon: RefreshCw,
      title: "Ongoing Support & Maintenance",
      description:
        "Ensure continued optimization and updates for long-term usability. Regular audits, A/B testing, and iterative improvements keep your product competitive and user-friendly.",
    },
  ];

  const designPrinciples = [
    "User-Centered Design Thinking",
    "Accessibility (WCAG Compliance)",
    "Responsive & Adaptive Design",
    "Design Systems & Component Libraries",
    "Information Architecture",
    "Interaction Design & Micro-interactions",
    "Visual Design & Branding",
    "Usability Testing & Heuristics",
    "Mobile-First Approach",
    "Cross-Platform Consistency",
    "Performance Optimization",
    "Conversion Rate Optimization",
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expertise",
      description:
        "With years of experience in UI/UX design, we handle projects of any complexity, from startups to enterprise applications.",
    },
    {
      icon: Heart,
      title: "User-Centric Approach",
      description:
        "Our designs focus on end-users, ensuring their needs and preferences are met through research-backed decisions and empathy-driven design.",
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description:
        "We work closely with you throughout the project to ensure your vision is realized, with regular check-ins and transparent communication.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "We stay up-to-date with the latest trends and technologies to deliver cutting-edge designs that set you apart from competitors.",
    },
    {
      icon: Target,
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our priority—we deliver high-quality work that exceeds expectations and drives measurable business results.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "Efficient workflows and agile methodology mean we deliver exceptional designs quickly without compromising quality or attention to detail.",
    },
  ];

  const designProcess = [
    {
      number: "01",
      title: "Research & Discovery",
      description:
        "We immerse ourselves in your business, users, and competitive landscape. Through interviews, surveys, and analytics, we uncover insights that drive design strategy.",
    },
    {
      number: "02",
      title: "Wireframing & Prototyping",
      description:
        "Low-fidelity wireframes establish structure and flow, then evolve into interactive prototypes for testing and validation before committing to high-fidelity design.",
    },
    {
      number: "03",
      title: "Visual Design & Testing",
      description:
        "We apply your brand identity to create stunning, accessible interfaces. Usability testing with real users ensures the design meets objectives and delights users.",
    },
    {
      number: "04",
      title: "Handoff & Iteration",
      description:
        "Detailed design specifications and collaborative developer handoff ensure seamless implementation. Post-launch, we analyze metrics and iterate for continuous improvement.",
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
        {/* Dark Overlay Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(42,20,84,0.95) 0%, rgba(5,7,9,0.85) 100%)"
              : "linear-gradient(135deg, rgba(5,7,9,0.75) 0%, rgba(42,20,84,0.65) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
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
            <span style={{ color: colors.primaryColor }}>UI/UX Design</span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ color: colors.whiteColor }}
          >
            UI/UX Design
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.whiteColor, opacity: 0.9 }}
          >
            At EmpericTech, we are passionate about creating user-centric
            designs that not only look stunning but also provide an exceptional
            user experience. Our team of skilled designers and developers work
            collaboratively to craft intuitive, engaging, and efficient digital
            products that meet the unique needs of your business and your users.
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
                Design That Drives Results
              </h2>
              <div
                className="prose prose-lg max-w-none space-y-6 leading-relaxed"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                <p>
                  Great design isn't just about aesthetics—it's about solving
                  problems, delighting users, and driving business outcomes. At
                  EmpericTech, we believe that exceptional UI/UX design is the
                  foundation of successful digital products that users love and
                  businesses profit from.
                </p>
                <p>
                  Our design philosophy is simple: understand the user deeply,
                  design with intention, test rigorously, and iterate
                  relentlessly. Whether you're building a consumer app, an
                  enterprise platform, or an e-commerce experience, we create
                  interfaces that are not only beautiful but also intuitive,
                  accessible, and optimized for conversion.
                </p>
                <p>
                  From initial research and wireframing to high-fidelity design
                  and developer handoff, we're with you every step of the way.
                  Let's create digital experiences that set you apart and keep
                  your users coming back.
                </p>
              </div>
            </section>

            {/* OUR SERVICES INCLUDE */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Our Services Include
              </h2>
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

            {/* DESIGN PRINCIPLES */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Design Principles We Follow
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
                  {designPrinciples.map((principle, index) => (
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
                        {principle}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* OUR DESIGN PROCESS */}
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Why Choose Us?
              </h2>
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
            {/* ALL SERVICES */}
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

            {/* GET IN TOUCH CTA */}
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
                Ready to Create Amazing Experiences?
              </h3>
              <p
                className="mb-6 leading-relaxed text-sm md:text-base"
                style={{
                  color: isDark ? colors.whiteColor : colors.grayColor,
                  opacity: isDark ? 0.9 : 1,
                }}
              >
                Let's design a digital product that your users will love and
                your business will benefit from.
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

export default UIUXDesign;