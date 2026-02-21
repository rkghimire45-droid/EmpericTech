import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  ChevronRight,
  Database,
  BarChart3,
  Layers,
  TrendingUp,
  FileSearch,
  Shield,
  CheckCircle2,
  ArrowRight,
  Award,
  Lightbulb,
  Users,
  Zap,
  Target,
  GitMerge,
} from "lucide-react";

import HeroImage from "../../assets/DataSolutions.png";

function DataSolutions() {
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
    { label: "Data Solutions", to: "/services/data-solutions", active: true },
    { label: "Graphics & Design", to: "/services/graphics-design" },
    { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
  ];

  const ourServices = [
    {
      icon: BarChart3,
      title: "Data Analysis & Insights",
      description:
        "Transform raw data into actionable insights with advanced analytics, predictive modeling, and statistical analysis. Ensure seamless and secure data migration with minimal downtime.",
    },
    {
      icon: GitMerge,
      title: "Data Integration Services",
      description:
        "Unify data sources into a cohesive, real-time accessible platform. Connect disparate systems, APIs, and databases for seamless data flow across your organization.",
    },
    {
      icon: Database,
      title: "Data Warehousing & Management",
      description:
        "Optimize storage, retrieval, and security of critical business data. Build scalable data warehouses that support complex queries and reporting needs.",
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence & Visualization",
      description:
        "Create interactive dashboards and reports for clear, strategic insights. Turn complex data into visual stories that drive informed decision-making.",
    },
    {
      icon: Shield,
      title: "Data Governance & Compliance",
      description:
        "Implement robust security protocols and regulatory compliance measures. Ensure data quality, privacy, and adherence to GDPR, CCPA, and industry standards.",
    },
  ];

  const dataTechnologies = [
    "SQL & NoSQL Databases",
    "Python & R for Analytics",
    "Power BI & Tableau",
    "Apache Spark & Hadoop",
    "AWS Redshift & Snowflake",
    "Google BigQuery",
    "ETL/ELT Pipelines",
    "Machine Learning & AI",
    "Real-Time Data Streaming",
    "Data Lake Architecture",
    "Master Data Management",
    "Data Quality Tools",
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description:
        "Years of experience in data analytics and database management. Our certified data engineers and analysts bring deep technical expertise.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "Leveraging the latest technologies and methodologies including AI, machine learning, and cloud-native data platforms for cutting-edge solutions.",
    },
    {
      icon: Target,
      title: "Client-Centric Approach",
      description:
        "Solutions tailored to your business goals. We don't provide generic dashboards—every metric and visualization aligns with your KPIs.",
    },
    {
      icon: Users,
      title: "Transparent Communication",
      description:
        "Regular updates and clear collaboration throughout the project lifecycle. You'll always know project status, timelines, and deliverables.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "A strong track record of delivering measurable business impact. Our clients see average ROI improvements of 300% from data-driven decisions.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Fast implementation without compromising quality. Our agile approach means you start seeing value in weeks, not months.",
    },
  ];

  const dataProcess = [
    {
      number: "01",
      title: "Data Discovery & Assessment",
      description:
        "We analyze your current data landscape, identify data sources, assess data quality, and understand business objectives to create a comprehensive data strategy.",
    },
    {
      number: "02",
      title: "Architecture & Design",
      description:
        "Design scalable data architecture, select appropriate technologies, plan data pipelines, and establish governance frameworks aligned with your needs.",
    },
    {
      number: "03",
      title: "Implementation & Integration",
      description:
        "Build and deploy data pipelines, integrate systems, migrate data securely, and implement analytics tools with rigorous testing at each phase.",
    },
    {
      number: "04",
      title: "Optimization & Support",
      description:
        "Continuous monitoring, performance tuning, regular reporting, and ongoing support to ensure your data infrastructure delivers maximum value.",
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
            <span style={{ color: colors.primaryColor }}>Data Solutions</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ color: colors.whiteColor }}
          >
            Data Solutions
          </h1>

          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.whiteColor, opacity: 0.9 }}
          >
            We transform raw data into valuable insights that drive informed
            decision-making and business success. Our data solutions help
            organizations optimize operations, improve efficiency, and gain a
            competitive edge.
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
                Turn Data Into Your Competitive Advantage
              </h2>
              <div
                className="prose prose-lg max-w-none space-y-6 leading-relaxed"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                <p>
                  Data is the new oil—but only if you know how to refine it. At
                  EmpericTech, we help organizations unlock the full potential of
                  their data through advanced analytics, intelligent
                  visualizations, and scalable data infrastructure that drives
                  strategic decisions.
                </p>
                <p>
                  Whether you're drowning in spreadsheets, struggling with
                  disparate systems, or simply not getting the insights you need,
                  our data experts design and implement solutions that transform
                  chaos into clarity. From data warehousing and ETL pipelines to
                  predictive analytics and machine learning, we build the
                  foundation for data-driven success.
                </p>
                <p>
                  Our approach combines technical excellence with business acumen.
                  We don't just deliver dashboards—we deliver answers to your
                  most critical business questions, enabling you to make faster,
                  smarter decisions that drive growth and profitability.
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

            {/* DATA TECHNOLOGIES */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {dataTechnologies.map((tech, index) => (
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

            {/* DATA PROCESS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Our Data Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {dataProcess.map((step, index) => (
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
                Why Choose EmpericTech?
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
                Unlock Your Data's Potential
              </h3>
              <p
                className="mb-6 leading-relaxed text-sm md:text-base"
                style={{
                  color: isDark ? colors.whiteColor : colors.grayColor,
                  opacity: isDark ? 0.9 : 1,
                }}
              >
                Transform raw data into actionable insights that drive growth and
                competitive advantage.
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

export default DataSolutions;