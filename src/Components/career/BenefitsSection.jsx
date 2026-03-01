import React from "react";
import { useTheme } from "../../context/ThemeContext";

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Competitive Compensation",
    description:
      "Market-leading salaries benchmarked globally, performance bonuses, equity for senior roles, and a comprehensive benefits package.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    title: "Remote Flexibility",
    description:
      "Work from anywhere in the world. We are remote-first with flexible hours designed around your peak productivity and time zone.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
        />
      </svg>
    ),
    title: "Global Exposure",
    description:
      "Collaborate with industry leaders across 40+ countries. Gain exposure to diverse enterprise ecosystems and cutting-edge technology stacks.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Accelerated Growth",
    description:
      "Structured career frameworks, dedicated L&D budgets, mentorship programmes, and clear pathways to leadership roles.",
  },
];

const BenefitsSection = () => {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  const sectionBg = isDark ? colors.blackColor : colors.creamLightColor;
  const headingColor = isDark ? colors.whiteColor : colors.darkColor;
  const bodyColor = isDark ? colors.grayColor2 : colors.grayColor;
  const cardBg = isDark ? colors.darkColor : colors.whiteColor;
  const borderCol = isDark ? `${colors.primaryColor}22` : colors.borderColor;

  return (
    <section
      className="transition-colors duration-300"
      style={{
        backgroundColor: sectionBg,
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="block h-px w-6 transition-colors duration-300"
              style={{ backgroundColor: colors.primaryColor }}
            />
            <span
              className="text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ color: colors.primaryColor }}
            >
              Why Work With Us
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight tracking-tight mb-4 transition-colors duration-300"
            style={{ color: headingColor }}
          >
            Built for Those Who Think Bigger
          </h2>
          <p
            className="text-base leading-relaxed transition-colors duration-300"
            style={{ color: bodyColor }}
          >
            We invest in our people as deeply as we invest in our clients. Here
            is what sets us apart as an employer of choice in the global IT
            outsourcing market.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
              style={{
                backgroundColor: cardBg,
                borderColor: borderCol,
              }}
            >
              {/* Icon container */}
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 transition-colors duration-300"
                style={{
                  backgroundColor: `${colors.primaryColor}18`,
                  color: colors.primaryColor,
                }}
              >
                {benefit.icon}
              </div>

              <h3
                className="font-semibold text-base mb-2.5 leading-snug transition-colors duration-300"
                style={{ color: headingColor }}
              >
                {benefit.title}
              </h3>

              <p
                className="text-sm leading-relaxed transition-colors duration-300"
                style={{ color: bodyColor }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;