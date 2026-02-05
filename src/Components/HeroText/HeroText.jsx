import { memo, useMemo, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

/* -------------------- Animated Orb -------------------- */
const AnimatedOrb = memo(({ position, color, delay, duration }) => (
  <div
    className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
    style={{
      ...position,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      animation: `float ${duration} ease-in-out ${delay} infinite`,
      willChange: "transform",
    }}
  />
));
AnimatedOrb.displayName = "AnimatedOrb";

/* -------------------- Status Badge -------------------- */
const StatusBadge = memo(({ theme, colors }) => (
  <div
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105"
    style={{
      backgroundColor:
        theme === "dark"
          ? "rgba(255,255,255,0.08)"
          : "rgba(0,0,0,0.06)",
      borderColor:
        theme === "dark"
          ? "rgba(255,255,255,0.15)"
          : "rgba(0,0,0,0.15)",
    }}
  >
    <span className="relative w-2 h-2 rounded-full bg-emerald-500">
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping" />
    </span>
    <span
      className="text-sm font-semibold tracking-wider"
      style={{ color: theme === "dark" ? colors.whiteColor : colors.blackColor }}
    >
      ENTERPRISE IT SOLUTIONS
    </span>
  </div>
));
StatusBadge.displayName = "StatusBadge";

/* -------------------- Gradient Text -------------------- */
const GradientText = memo(({ children, gradient, className = "" }) => (
  <span
    className={className}
    style={{
      backgroundImage: gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      transition: "background-image 0.4s ease",
      display: "inline-block",
    }}
  >
    {children}
  </span>
));
GradientText.displayName = "GradientText";

/* -------------------- CTA Button -------------------- */
const CTAButton = memo(({ primary, children, theme, colors }) => (
  <button
    className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
      primary ? "text-white shadow-xl" : ""
    }`}
    style={{
      background: primary
        ? "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)"
        : "transparent",
      border: primary ? "none" : "2px solid rgba(99,102,241,0.5)",
      color: primary
        ? undefined
        : theme === "dark"
        ? colors.whiteColor
        : colors.blackColor,
    }}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {primary && (
        <svg
          className="w-5 h-5 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      )}
    </span>
  </button>
));
CTAButton.displayName = "CTAButton";

/* -------------------- Stat Card -------------------- */
const StatCard = memo(({ value, label, theme, colors }) => (
  <div
    className="text-center p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-110"
    style={{
      backgroundColor:
        theme === "dark"
          ? "rgba(255,255,255,0.05)"
          : "rgba(0,0,0,0.04)",
      border:
        theme === "dark"
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.1)",
    }}
  >
    <div className="text-4xl md:text-5xl font-black mb-2">
      <GradientText gradient="linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)">
        {value}
      </GradientText>
    </div>
    <div
      className="text-sm font-medium uppercase tracking-wide"
      style={{
        color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
      }}
    >
      {label}
    </div>
  </div>
));
StatCard.displayName = "StatCard";

/* -------------------- Hero Text -------------------- */
const HeroText = () => {
  const { theme, colors } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  const stats = useMemo(
    () => [
      { value: "500+", label: "Clients Served" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "24/7", label: "Support Available" },
      { value: "15+", label: "Years Experience" },
    ],
    []
  );

  const orbs = useMemo(
    () => [
      {
        position: { top: "-10%", right: "15%" },
        color: theme === "dark" ? "#6366f1" : "#818cf8",
        delay: "0s",
        duration: "10s",
      },
      {
        position: { bottom: "-10%", left: "15%" },
        color: theme === "dark" ? "#8b5cf6" : "#a78bfa",
        delay: "2s",
        duration: "12s",
      },
    ],
    [theme]
  );

  const headingGradient =
    theme === "dark"
      ? "linear-gradient(135deg,#ffffff,#d1d5db)"
      : "linear-gradient(135deg,#111827,#4b5563)";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor:
          theme === "dark" ? colors.darkColor : colors.creamLightColor,
      }}
    >
      {/* Orbs */}
      {orbs.map((orb, i) => (
        <AnimatedOrb key={i} {...orb} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <StatusBadge theme={theme} colors={colors} />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
          <GradientText gradient={headingGradient}>Innovate.</GradientText>
          <br />
          <GradientText gradient="linear-gradient(135deg,#6366f1,#ec4899)">
            Integrate.
          </GradientText>
          <br />
          <GradientText gradient={headingGradient}>Accelerate.</GradientText>
        </h1>

        <p
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl"
          style={{
            color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
          }}
        >
          Enhance efficiency, optimize operations, and scale confidently with
          cutting-edge IT solutions built for growth.
        </p>

        <div className="flex justify-center gap-4 mt-12">
          <CTAButton primary>Get Started</CTAButton>
          <CTAButton theme={theme} colors={colors}>
            View Our Work
          </CTAButton>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} theme={theme} colors={colors} />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-40px) }
        }
      `}</style>
    </section>
  );
};

export default memo(HeroText);
