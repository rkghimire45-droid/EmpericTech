import React from "react";
import { useTheme } from "../../context/ThemeContext";

const CareerHero = ({ onScrollToPositions }) => {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: isDark ? colors.darkColor : colors.secondaryColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.primaryColor}22 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Soft glow behind heading */}
      <div
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 40% 0%, ${colors.primaryColor}18 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Top label */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="block h-px w-8 transition-colors duration-300"
              style={{ backgroundColor: colors.primaryColor }}
            />
            <span
              className="text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ color: colors.primaryColor }}
            >
              Join Our Team
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6 transition-colors duration-300"
            style={{ color: colors.whiteColor }}
          >
            Build the Future of{" "}
            <span style={{ color: colors.primaryColor }}>Enterprise IT</span>
            <br />
            With Us
          </h1>

          {/* Description */}
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl transition-colors duration-300"
            style={{ color: `${colors.whiteColor}99` }}
          >
            We partner with the world's most ambitious organisations to deliver
            transformative technology solutions. Join a global team of experts
            shaping the next era of digital enterprise.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onScrollToPositions}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              style={{
                backgroundColor: colors.primaryColor,
                color: colors.whiteColor,
              }}
            >
              View Open Positions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <button
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: `${colors.whiteColor}22`,
                color: `${colors.whiteColor}bb`,
                backgroundColor: "transparent",
              }}
            >
              Our Culture
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-12 grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-2xl transition-colors duration-300"
          style={{ borderTop: `1px solid ${colors.whiteColor}11` }}
        >
          {[
            { value: "500+", label: "Team Members" },
            { value: "40+", label: "Countries Served" },
            { value: "12", label: "Years of Excellence" },
            { value: "98%", label: "Client Retention" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl font-bold mb-1 transition-colors duration-300"
                style={{ color: colors.whiteColor }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm transition-colors duration-300"
                style={{ color: `${colors.whiteColor}55` }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHero;