import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  ChevronRight,
  TrendingUp,
  Target,
  Mail,
  Search,
  BarChart3,
  MousePointerClick,
  CheckCircle2,
  ArrowRight,
  Megaphone,
  Users,
  Zap,
  Award,
  Lightbulb,
  Clock,
} from "lucide-react";

// Import your hero image - adjust path as needed
import HeroImage from "../../assets/DigitalMarketing.png";

function DigitalMarketing() {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    { label: "Web Development", to: "/services/web-development" },
    { label: "Cloud Services", to: "/services/cloud-services" },
    { label: "IT Support", to: "/services/it-support" },
    { label: "Digital Marketing", to: "/services/digital-marketing", active: true },
    { label: "UI / UX Design", to: "/services/ui-ux-design" },
    { label: "Cybersecurity", to: "/services/cyber-security" },
    { label: "Data Solutions", to: "/services/data-solutions" },
    { label: "Graphics & Design", to: "/services/graphics-design" },
    { label: "IT & Business Outsourcing", to: "/services/outsourcing" },
  ];

  const ourServices = [
    {
      icon: Megaphone,
      title: "Social Media Management",
      description:
        "Create and manage content to boost online presence. We handle everything from content calendars and community engagement to brand voice consistency across all major platforms.",
    },
    {
      icon: Target,
      title: "Social Media Advertising",
      description:
        "Run data-driven ad campaigns for maximum reach and engagement. Precision targeting, A/B testing, and continuous optimization to maximize your ad spend ROI.",
    },
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description:
        "Optimize websites and create valuable content to enhance search rankings. From technical SEO to compelling blog posts, we drive organic traffic that converts.",
    },
    {
      icon: MousePointerClick,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Implement high-converting ad campaigns for lead generation. Google Ads, Bing Ads, and display advertising managed by certified PPC specialists.",
    },
    {
      icon: Mail,
      title: "Email Marketing & Automation",
      description:
        "Build customer relationships through personalized email campaigns. Automated workflows, segmentation, and compelling copy that drives opens, clicks, and conversions.",
    },
    {
      icon: BarChart3,
      title: "Landing Page Optimization",
      description:
        "Improve conversions with strategic design and UX enhancements. Data-driven testing, heat mapping, and conversion rate optimization to maximize every visitor.",
    },
  ];

  const marketingChannels = [
    "Facebook & Instagram Marketing",
    "LinkedIn B2B Campaigns",
    "Twitter/X Engagement",
    "YouTube Video Marketing",
    "TikTok & Short-Form Video",
    "Google Ads & Shopping",
    "Display & Retargeting Ads",
    "Influencer Partnerships",
    "Affiliate Marketing Programs",
    "Content Syndication",
    "Native Advertising",
    "Podcast Advertising",
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Integrated Approach",
      description:
        "We combine social media and digital marketing for a cohesive online presence that amplifies your brand message across every touchpoint.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategies",
      description:
        "Every decision is backed by analytics and insights to maximize results. We track, measure, and optimize based on real performance data.",
    },
    {
      icon: Target,
      title: "Targeted Advertising",
      description:
        "Reach the right audience with precision and increase conversions. Advanced audience segmentation and lookalike modeling for maximum impact.",
    },
    {
      icon: Lightbulb,
      title: "Creative & Engaging Content",
      description:
        "From visuals to ads, we create compelling content that connects. Our creative team crafts messages that resonate and drive action.",
    },
    {
      icon: Clock,
      title: "Timely Execution",
      description:
        "Campaigns are delivered on time and optimized for performance. We move fast without sacrificing quality or strategic thinking.",
    },
    {
      icon: Users,
      title: "Transparent Reporting",
      description:
        "Clear, detailed reports that show exactly what's working. You'll always know your ROI, cost per acquisition, and campaign performance.",
    },
  ];

  const marketingProcess = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business goals, target audience, competitors, and current marketing efforts to develop a comprehensive strategy aligned with your objectives.",
    },
    {
      number: "02",
      title: "Campaign Planning & Creation",
      description:
        "Our team designs and produces compelling campaigns, from ad creatives and copy to landing pages and email sequences, all optimized for conversions.",
    },
    {
      number: "03",
      title: "Launch & Optimization",
      description:
        "We launch campaigns across selected channels and continuously monitor performance, making real-time adjustments to maximize results and ROI.",
    },
    {
      number: "04",
      title: "Analysis & Scaling",
      description:
        "Regular performance reviews, A/B testing insights, and strategic recommendations to scale what works and eliminate what doesn't for sustained growth.",
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
            <span style={{ color: colors.primaryColor }}>Digital Marketing</span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{ color: colors.whiteColor }}
          >
            Digital Marketing
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.whiteColor, opacity: 0.9 }}
          >
            At EmpericTech, we specialize in a holistic approach to online
            marketing, combining expert social media management with data-driven
            digital marketing strategies. Our goal is to help businesses
            establish a strong online presence, engage with their audience, and
            drive measurable growth through targeted campaigns.
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
                Grow Your Business Online
              </h2>
              <div
                className="prose prose-lg max-w-none space-y-6 leading-relaxed"
                style={{ color: isDark ? colors.whiteColor : colors.grayColor }}
              >
                <p>
                  In today's digital landscape, having a website isn't
                  enough—you need a strategic, multi-channel marketing approach
                  to cut through the noise and reach your ideal customers. At
                  EmpericTech, we craft integrated digital marketing campaigns
                  that drive real, measurable business results.
                </p>
                <p>
                  Our team combines creative storytelling with data science to
                  build campaigns that resonate with your audience and convert
                  browsers into buyers. From social media engagement to paid
                  advertising and SEO, we manage every aspect of your digital
                  presence to maximize ROI.
                </p>
                <p>
                  We don't believe in vanity metrics. Our focus is on outcomes
                  that matter: more leads, higher conversions, increased
                  customer lifetime value, and sustainable business growth. Let's
                  transform your digital marketing into a revenue-generating
                  engine.
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

            {/* MARKETING CHANNELS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Marketing Channels We Master
              </h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {marketingChannels.map((channel, index) => (
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
                    {channel}
                  </span>
                ))}
              </div>
            </section>

            {/* OUR MARKETING PROCESS */}
            <section className="mb-16 lg:mb-20">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Our Marketing Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {marketingProcess.map((step, index) => (
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
                Ready to Grow Your Brand?
              </h3>
              <p
                className="mb-6 leading-relaxed text-sm md:text-base"
                style={{
                  color: isDark ? colors.whiteColor : colors.grayColor,
                  opacity: isDark ? 0.9 : 1,
                }}
              >
                Let's create a digital marketing strategy that drives real
                results for your business.
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

export default DigitalMarketing;