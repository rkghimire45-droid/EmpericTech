import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  ChevronRight,
  Shield,
  Lock,
  AlertTriangle,
  FileSearch,
  Network,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Award,
  Eye,
  Zap,
  Clock,
  ShieldCheck,
  Bug,
} from "lucide-react";

import HeroImage from "../../assets/CyberSecurity.png";

function CyberSecurity() {
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
    { label: "Cybersecurity", to: "/services/cyber-security", active: true },
    { label: "Data Solutions", to: "/services/data-solutions" },
    { label: "Graphics & Design", to: "/services/graphics-design" },
    { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
  ];

  const ourServices = [
    {
      icon: FileSearch,
      title: "Security Assessment & Audit",
      description:
        "Identify vulnerabilities and enhance security measures through comprehensive penetration testing, vulnerability assessments, and security posture evaluations across your entire infrastructure.",
    },
    {
      icon: Eye,
      title: "Threat Detection & Prevention",
      description:
        "Monitor systems for suspicious activities and prevent cyberattacks with real-time threat intelligence, intrusion detection systems, and advanced behavioral analytics.",
    },
    {
      icon: Network,
      title: "Endpoint & Network Security",
      description:
        "Protect devices and networks from unauthorized access and malware with next-generation firewalls, endpoint protection platforms, and network segmentation strategies.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response & Recovery",
      description:
        "Rapidly address cyber incidents and restore operations with our 24/7 incident response team, forensic analysis, and business continuity planning.",
    },
    {
      icon: Lock,
      title: "Data Encryption & Compliance",
      description:
        "Ensure sensitive information remains secure and meets regulatory requirements with end-to-end encryption, access controls, and compliance frameworks (GDPR, HIPAA, SOC 2).",
    },
    {
      icon: GraduationCap,
      title: "Security Awareness Training",
      description:
        "Educate employees on best practices for cybersecurity through interactive training programs, phishing simulations, and ongoing security awareness campaigns.",
    },
  ];

  const securitySolutions = [
    "Penetration Testing & Ethical Hacking",
    "Vulnerability Management",
    "Security Information & Event Management (SIEM)",
    "Identity & Access Management (IAM)",
    "Multi-Factor Authentication (MFA)",
    "Zero Trust Architecture",
    "Cloud Security Solutions",
    "Application Security Testing",
    "Security Operations Center (SOC)",
    "Managed Detection & Response (MDR)",
    "Disaster Recovery Planning",
    "Compliance Management (GDPR, HIPAA, PCI-DSS)",
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expertise",
      description:
        "Our cybersecurity professionals have extensive experience protecting businesses from cyber threats, with certifications including CISSP, CEH, and CISM.",
    },
    {
      icon: ShieldCheck,
      title: "Proactive Approach",
      description:
        "We focus on prevention and early detection of threats with continuous monitoring, threat hunting, and predictive analytics to stay ahead of attackers.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description:
        "We use the latest security technologies including AI-powered threat detection, behavioral analytics, and automated response systems for maximum protection.",
    },
    {
      icon: Shield,
      title: "Customized Solutions",
      description:
        "Services tailored to your business needs for maximum security. Every organization is unique, and so are our security strategies and implementations.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Our dedicated security operations center is available around the clock to monitor, detect, and respond to any cybersecurity incidents immediately.",
    },
    {
      icon: Bug,
      title: "Proven Track Record",
      description:
        "Successfully protected hundreds of organizations from cyber threats, preventing millions in potential damages and maintaining zero-breach records for our clients.",
    },
  ];

  const securityProcess = [
    {
      number: "01",
      title: "Security Assessment",
      description:
        "Comprehensive evaluation of your current security posture, identifying vulnerabilities, assessing risks, and benchmarking against industry standards and compliance requirements.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Create a tailored cybersecurity roadmap with prioritized recommendations, budget considerations, and implementation timelines aligned with your business objectives.",
    },
    {
      number: "03",
      title: "Implementation & Hardening",
      description:
        "Deploy security controls, configure systems, implement policies, and strengthen defenses across your entire technology stack with minimal business disruption.",
    },
    {
      number: "04",
      title: "Continuous Monitoring & Improvement",
      description:
        "24/7 security monitoring, regular audits, threat intelligence updates, and ongoing optimization to adapt to evolving threats and maintain robust protection.",
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
            <span style={{ color: colors.primaryColor }}>Cybersecurity</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ color: colors.whiteColor }}
          >
            Cyber Security
          </h1>

          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.whiteColor, opacity: 0.9 }}
          >
            At EmpericTech, we are committed to safeguarding your digital assets
            against cyber threats. Our team of cybersecurity experts provides
            comprehensive solutions to protect your business from data breaches,
            malware, and other online threats.
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
                Protect Your Digital Future
              </h2>
              <div
                className="prose prose-lg max-w-none space-y-6 leading-relaxed"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                <p>
                  Cyber threats are evolving faster than ever, and a single
                  breach can cost millions in damages, lost trust, and
                  regulatory penalties. At EmpericTech, we provide
                  enterprise-grade cybersecurity solutions that protect your
                  business from sophisticated attacks while ensuring compliance
                  with industry regulations.
                </p>
                <p>
                  Our team of certified security professionals brings decades of
                  combined experience in threat detection, incident response, and
                  security architecture. We don't just react to threats—we
                  anticipate them, building defense-in-depth strategies that
                  protect your most valuable assets.
                </p>
                <p>
                  From security assessments and penetration testing to 24/7
                  monitoring and incident response, we provide comprehensive
                  protection that lets you focus on growing your business with
                  confidence.
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

            {/* SECURITY SOLUTIONS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Comprehensive Security Solutions
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
                  {securitySolutions.map((solution, index) => (
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

            {/* SECURITY PROCESS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Our Security Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {securityProcess.map((step, index) => (
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
                Secure Your Business Today
              </h3>
              <p
                className="mb-6 leading-relaxed text-sm md:text-base"
                style={{
                  color: isDark ? colors.whiteColor : colors.grayColor,
                  opacity: isDark ? 0.9 : 1,
                }}
              >
                Protect your business from cyber threats with our comprehensive
                security solutions.
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

export default CyberSecurity;