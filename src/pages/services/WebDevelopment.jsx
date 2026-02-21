import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  ChevronRight,
  Code2,
  Smartphone,
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Import your hero image - adjust path as needed
import HeroImage from "../../assets/WebDev.png";

function WebDevelopment() {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    { label: "Web Development", to: "/services/web-development", active: true },
    { label: "Cloud Services", to: "/services/cloud-services" },
    { label: "IT Support", to: "/services/it-support" },
    { label: "Digital Marketing", to: "/services/digital-marketing" },
    { label: "UI / UX Design", to: "/services/ui-ux-design" },
    { label: "Cybersecurity", to: "/services/cyber-security" },
    { label: "Data Solutions", to: "/services/data-solutions" },
    { label: "Graphics & Design", to: "/services/graphics-design" },
    { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
  ];

  const capabilities = [
    "Custom web application development from ground up",
    "Enterprise-grade scalable architectures",
    "Progressive Web Apps (PWA) for offline-first experiences",
    "E-commerce platforms with seamless checkout flows",
    "API development and third-party integrations",
    "Performance optimization and Core Web Vitals enhancement",
    "Responsive design across all devices and browsers",
    "Ongoing maintenance, security patches, and support",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Vue.js",
    "Angular",
    "Python",
    "Django",
    "PHP",
    "Laravel",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "REST APIs",
    "Tailwind CSS",
    "Material UI",
  ];

  const deliverySteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our design team crafts pixel-perfect mockups and interactive prototypes, ensuring alignment with your brand and user expectations.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Agile sprints with continuous integration, rigorous QA testing, and regular client feedback loops to ensure quality at every stage.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "Seamless deployment to production with post-launch monitoring, performance tuning, and dedicated ongoing support.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Code2,
      title: "Expert Engineers",
      description:
        "Our team consists of certified developers with 10+ years of experience in modern web technologies.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description:
        "We follow agile methodologies to deliver MVPs quickly and iterate based on real user feedback.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every application is built with enterprise-grade security protocols, GDPR compliance, and regular audits.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Transparent communication, dedicated project managers, and unlimited revisions until you're 100% satisfied.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "Future-proof architectures designed to handle growth from 100 to 10 million users seamlessly.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Always",
      description:
        "Every pixel is optimized for mobile devices, ensuring flawless experiences across all screen sizes.",
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
            <span style={{ color: colors.primaryColor }}>Web Development</span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ color: colors.whiteColor }}
          >
            Web Development Services
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.whiteColor, opacity: 0.9 }}
          >
            Build powerful, scalable, and user-centric web applications that
            drive business growth. From MVPs to enterprise platforms, we deliver
            excellence at every stage.
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
                Service Overview
              </h2>
              <div
                className="prose prose-lg max-w-none space-y-6 leading-relaxed"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                <p>
                  In today's digital-first world, your website is more than just
                  an online presence—it's your most powerful business asset. At
                  EmpericTech, we specialize in crafting custom web applications
                  that combine cutting-edge technology with intuitive user
                  experiences to deliver measurable results.
                </p>
                <p>
                  Whether you need a lightning-fast e-commerce platform, a
                  complex enterprise portal, or a customer-facing SaaS product,
                  our team of expert engineers has the skills and experience to
                  bring your vision to life. We don't just write code—we build
                  strategic digital solutions that scale with your business.
                </p>
                <p>
                  From initial concept to post-launch support, we're with you
                  every step of the way. Our agile approach ensures rapid
                  delivery without compromising on quality, security, or
                  performance. Let's build something extraordinary together.
                </p>
              </div>
            </section>

            {/* CORE CAPABILITIES */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Core Capabilities
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
                <ul className="space-y-4">
                  {capabilities.map((capability, index) => (
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
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* TECHNOLOGIES WE USE */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(135,80,247,0.15)"
                        : colors.creamLightColor,
                      color: isDark ? colors.whiteColor : colors.blackColor,
                      border: `1px solid ${
                        isDark ? "rgba(135,80,247,0.3)" : colors.borderColor
                      }`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* OUR DELIVERY PROCESS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Our Delivery Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {deliverySteps.map((step, index) => (
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
                Why Choose Us
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
                            color: isDark ? colors.primaryColor : colors.whiteColor,
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
                Ready to Start Your Project?
              </h3>
              <p
                className="mb-6 leading-relaxed text-sm md:text-base"
                style={{
                  color: isDark ? colors.whiteColor : colors.grayColor,
                  opacity: isDark ? 0.9 : 1,
                }}
              >
                Let's discuss how we can transform your vision into a powerful
                web application.
              </p>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: isDark
                    ? colors.whiteColor
                    : colors.primaryColor,
                  color: isDark ? colors.primaryColor : colors.secondaryColor,
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

export default WebDevelopment;