import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  ChevronRight,
  Cloud,
  Server,
  Lock,
  Database,
  Gauge,
  HeadphonesIcon,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Award,
  Clock,
} from "lucide-react";

// Import your hero image - adjust path as needed
import HeroImage from "../../assets/Cloud.png";

function CloudServices() {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    { label: "Web Development", to: "/services/web-development" },
    { label: "Cloud Services", to: "/services/cloud-services", active: true },
    { label: "IT Support", to: "/services/it-support" },
    { label: "Digital Marketing", to: "/services/digital-marketing" },
    { label: "UI / UX Design", to: "/services/ui-ux-design" },
    { label: "Cybersecurity", to: "/services/cyber-security" },
    { label: "Data Solutions", to: "/services/data-solutions" },
    { label: "Graphics & Design", to: "/services/graphics-design" },
    { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
  ];

  const ourServices = [
    {
      icon: Cloud,
      title: "Cloud Migration & Management",
      description:
        "Seamless transition from on-premise to cloud infrastructure with zero downtime. We handle the entire migration process, optimize your cloud architecture, and provide ongoing management to ensure peak performance and cost efficiency.",
    },
    {
      icon: Shield,
      title: "Cloud Security & Backup",
      description:
        "Robust multi-layered security protocols to protect your data in the cloud. Automated backup solutions, disaster recovery planning, encryption at rest and in transit, and compliance with industry standards like SOC 2, HIPAA, and GDPR.",
    },
    {
      icon: Server,
      title: "Cloud Application Development",
      description:
        "Build scalable, cloud-native applications designed to leverage the full power of modern cloud platforms. Microservices architecture, containerization with Docker/Kubernetes, serverless computing, and API-first development.",
    },
  ];

  const cloudPlatforms = [
    "AWS (Amazon Web Services)",
    "Microsoft Azure",
    "Google Cloud Platform",
    "IBM Cloud",
    "Oracle Cloud",
    "DigitalOcean",
    "Alibaba Cloud",
    "VMware Cloud",
  ];

  const cloudSolutions = [
    "Infrastructure as a Service (IaaS)",
    "Platform as a Service (PaaS)",
    "Software as a Service (SaaS)",
    "Hybrid Cloud Solutions",
    "Multi-Cloud Strategy",
    "Cloud Storage & CDN",
    "Cloud Analytics & Big Data",
    "DevOps & CI/CD Pipelines",
    "Serverless Computing",
    "Container Orchestration",
    "Cloud Monitoring & Optimization",
    "Cost Management & FinOps",
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Cloud Professionals",
      description:
        "Our team holds certifications from AWS, Azure, and Google Cloud, with proven expertise in architecting enterprise-grade cloud solutions.",
    },
    {
      icon: Zap,
      title: "Tailor-Made Cloud Solutions",
      description:
        "No cookie-cutter approaches. Every cloud strategy is custom-designed to align with your specific business goals, workloads, and budget.",
    },
    {
      icon: Gauge,
      title: "High Reliability & Uptime",
      description:
        "We architect for 99.99% uptime with redundancy, load balancing, auto-scaling, and proactive monitoring to keep your services always available.",
    },
    {
      icon: TrendingUp,
      title: "Cost-Efficient Cloud Management",
      description:
        "Optimize your cloud spending with right-sizing, reserved instances, spot instances, and continuous cost analysis to eliminate waste.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Continuous Support",
      description:
        "Round-the-clock monitoring and support from our dedicated cloud engineers. We're always here to troubleshoot, scale, and optimize.",
    },
    {
      icon: Lock,
      title: "Security & Compliance First",
      description:
        "Built-in security best practices, regular audits, penetration testing, and compliance frameworks to protect your most sensitive data.",
    },
  ];

  const migrationSteps = [
    {
      number: "01",
      title: "Assessment & Planning",
      description:
        "We analyze your current infrastructure, identify workloads suitable for cloud migration, and create a detailed migration roadmap with timelines and risk mitigation strategies.",
    },
    {
      number: "02",
      title: "Architecture Design",
      description:
        "Our cloud architects design a scalable, secure, and cost-optimized cloud architecture tailored to your specific requirements and future growth projections.",
    },
    {
      number: "03",
      title: "Migration & Testing",
      description:
        "Phased migration approach with rigorous testing at each stage. We ensure data integrity, application functionality, and performance benchmarks are met before cutover.",
    },
    {
      number: "04",
      title: "Optimization & Support",
      description:
        "Post-migration optimization, performance tuning, cost management, and ongoing 24/7 support to ensure your cloud environment runs at peak efficiency.",
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
            <span style={{ color: colors.primaryColor }}>Cloud Services</span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ color: colors.whiteColor }}
          >
            Cloud Services
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.whiteColor, opacity: 0.9 }}
          >
            At EmpericTech, we are committed to helping you harness the full
            potential of cloud technology. Our comprehensive cloud support and
            services are designed to optimize your business operations, enhance
            scalability, and improve efficiency.
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
                Unlock the Power of the Cloud
              </h2>
              <div
                className="prose prose-lg max-w-none space-y-6 leading-relaxed"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                <p>
                  Cloud computing has revolutionized the way businesses operate,
                  offering unprecedented flexibility, scalability, and
                  cost-efficiency. At EmpericTech, we specialize in delivering
                  end-to-end cloud solutions that empower organizations to
                  innovate faster, reduce infrastructure costs, and scale on
                  demand.
                </p>
                <p>
                  Whether you're just beginning your cloud journey or looking to
                  optimize an existing cloud infrastructure, our certified cloud
                  experts are here to guide you every step of the way. From
                  strategy and migration to security and ongoing management, we
                  provide comprehensive cloud services across all major
                  platforms—AWS, Azure, Google Cloud, and more.
                </p>
                <p>
                  Our approach is simple: understand your business objectives,
                  design a cloud architecture that aligns with your goals, and
                  execute with precision. The result? A cloud environment that's
                  secure, performant, cost-effective, and ready to scale with
                  your business.
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

            {/* CLOUD PLATFORMS WE SUPPORT */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Cloud Platforms We Support
              </h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {cloudPlatforms.map((platform, index) => (
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
                    {platform}
                  </span>
                ))}
              </div>
            </section>

            {/* COMPREHENSIVE CLOUD SOLUTIONS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Comprehensive Cloud Solutions
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
                  {cloudSolutions.map((solution, index) => (
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
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* OUR MIGRATION PROCESS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Our Migration Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {migrationSteps.map((step, index) => (
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
                Ready to Move to the Cloud?
              </h3>
              <p
                className="mb-6 leading-relaxed text-sm md:text-base"
                style={{
                  color: isDark ? colors.whiteColor : colors.grayColor,
                  opacity: isDark ? 0.9 : 1,
                }}
              >
                Let's design a cloud strategy that scales with your business and
                delivers measurable ROI.
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

export default CloudServices;