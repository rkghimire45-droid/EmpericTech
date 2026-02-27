import { useTheme } from "../../context/ThemeContext";
import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "./Blogdata";
import BlogCard, { CategoryPill } from "./BlogCard";

/* ── Filter Tab ──────────────────────────────────────────────── */
const FilterTab = memo(({ active, onClick, theme, children }) => {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onClick}
      className={`
        relative px-5 py-2.5 rounded-xl text-sm font-semibold
        transition-all duration-300 hover:scale-105 active:scale-95
        ${active
          ? "text-white shadow-lg shadow-indigo-500/25"
          : isDark
          ? "text-white/50 hover:text-white/80 bg-white/[0.04] hover:bg-white/[0.07]"
          : "text-slate-500 hover:text-slate-800 bg-black/[0.04] hover:bg-black/[0.07]"
        }
      `}
      style={
        active
          ? { background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }
          : {}
      }
    >
      {children}
    </button>
  );
});
FilterTab.displayName = "FilterTab";

/* ── Featured Hero Card ─────────────────────────────────────── */
const FeaturedHeroCard = memo(({ blog, theme }) => {
  const isDark = theme === "dark";
  const [hovered, setHovered] = useState(false);

  if (!blog) return null;

  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className={`
          relative rounded-3xl overflow-hidden transition-all duration-500
          ${hovered ? "shadow-2xl" : "shadow-lg"}
          ${isDark
            ? "bg-white/[0.04] border border-white/[0.08] hover:border-indigo-500/30"
            : "bg-white border border-black/[0.07] hover:border-indigo-300/60"
          }
        `}
        style={{
          boxShadow: hovered
            ? isDark
              ? "0 32px 64px rgba(99,102,241,0.18), 0 8px 24px rgba(0,0,0,0.4)"
              : "0 32px 64px rgba(99,102,241,0.14), 0 8px 24px rgba(0,0,0,0.1)"
            : isDark
            ? "0 4px 24px rgba(0,0,0,0.3)"
            : "0 4px 24px rgba(0,0,0,0.07)",
        }}
      >
        <div className="grid lg:grid-cols-[1fr_1fr] min-h-[400px]">
          {/* Image Side */}
          <div className="relative overflow-hidden min-h-[260px] lg:min-h-[400px]">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Featured label */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold tracking-widest uppercase shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Featured
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-5">
              <CategoryPill category={blog.category} />
              <span className={`text-xs font-medium ${isDark ? "text-white/35" : "text-slate-400"}`}>
                {blog.readTime}
              </span>
            </div>

            <h2
              className={`text-2xl lg:text-3xl xl:text-4xl font-black leading-tight mb-5 transition-colors duration-300
                ${isDark ? "text-white group-hover:text-indigo-200" : "text-slate-900 group-hover:text-indigo-700"}
              `}
            >
              {blog.title}
            </h2>

            <p className={`text-base leading-relaxed mb-8 ${isDark ? "text-white/55" : "text-slate-500"}`}>
              {blog.excerpt}
            </p>

            {/* Divider */}
            <div className={`h-px mb-6 ${isDark ? "bg-white/[0.07]" : "bg-black/[0.06]"}`} />

            {/* Author + CTA Row */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-sm font-bold">
                  {blog.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className={`text-sm font-semibold ${isDark ? "text-white/85" : "text-slate-700"}`}>
                    {blog.author}
                  </p>
                  <p className={`text-xs ${isDark ? "text-white/40" : "text-slate-400"}`}>
                    {blog.date}
                  </p>
                </div>
              </div>

              <span
                className={`
                  inline-flex items-center gap-2 text-sm font-bold
                  transition-all duration-300
                  ${hovered ? "gap-3 text-indigo-400" : "text-indigo-500"}
                `}
              >
                Read Full Article
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${hovered ? "translate-x-1.5" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
});
FeaturedHeroCard.displayName = "FeaturedHeroCard";

/* ── Decorative Background ──────────────────────────────────── */
const BackgroundDecor = memo(({ isDark }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Gradient orbs */}
    <div
      className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
    />
    <div
      className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
      style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
    />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `
          linear-gradient(${isDark ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"} 1px, transparent 1px),
          linear-gradient(90deg, ${isDark ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"} 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
      }}
    />

    {/* Horizontal accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: isDark
          ? "linear-gradient(to right, transparent, rgba(99,102,241,0.4), transparent)"
          : "linear-gradient(to right, transparent, rgba(99,102,241,0.25), transparent)",
      }}
    />
  </div>
));
BackgroundDecor.displayName = "BackgroundDecor";

/* ── Section Header ─────────────────────────────────────────── */
const SectionHeader = memo(({ isDark }) => (
  <div className="text-center mb-16 max-w-2xl mx-auto">
    {/* Top Label */}
    <div className="inline-flex items-center gap-2 mb-5">
      <div className="h-px w-8 bg-indigo-500" />
      <span className="text-indigo-500 text-xs font-bold tracking-[0.2em] uppercase">
        Our Blog
      </span>
      <div className="h-px w-8 bg-indigo-500" />
    </div>

    {/* Main Heading */}
    <h2
      className={`text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.08] mb-5 tracking-tight
        ${isDark ? "text-white" : "text-slate-900"}
      `}
    >
      Insights &{" "}
      <span
        className="relative inline-block"
        style={{
          backgroundImage: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Technology
      </span>
      <br />Trends
    </h2>

    {/* Description */}
    <p className={`text-base lg:text-lg leading-relaxed ${isDark ? "text-white/50" : "text-slate-500"}`}>
      Expert perspectives on enterprise IT, cloud transformation, AI adoption, and the future of
      global technology outsourcing — curated by our team of industry specialists.
    </p>
  </div>
));
SectionHeader.displayName = "SectionHeader";

/* ── Stats Bar ──────────────────────────────────────────────── */
const StatsBar = memo(({ isDark }) => {
  const stats = [
    { value: "120+", label: "Articles Published" },
    { value: "40K+", label: "Monthly Readers" },
    { value: "18",   label: "Expert Contributors" },
    { value: "6",    label: "Tech Domains" },
  ];

  return (
    <div
      className={`
        flex flex-wrap justify-center gap-0 rounded-2xl overflow-hidden mb-16
        ${isDark ? "border border-white/[0.06]" : "border border-black/[0.06]"}
      `}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`
            flex-1 min-w-[120px] text-center py-5 px-6
            ${i !== stats.length - 1
              ? isDark
                ? "border-r border-white/[0.06]"
                : "border-r border-black/[0.06]"
              : ""}
            ${isDark ? "bg-white/[0.02]" : "bg-white/60"}
          `}
        >
          <p
            className="text-2xl font-black mb-1"
            style={{
              backgroundImage: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {s.value}
          </p>
          <p className={`text-xs font-medium ${isDark ? "text-white/40" : "text-slate-500"}`}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
});
StatsBar.displayName = "StatsBar";

/* ── Main Blog Section ──────────────────────────────────────── */
const Blogs = () => {
  const { theme, colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");
  const isDark = theme === "dark";

  const categories = useMemo(
    () => ["All", ...new Set(blogData.map((b) => b.category))],
    []
  );

  const featuredBlog = useMemo(
    () => (activeFilter === "All" ? blogData[0] : null),
    [activeFilter]
  );

  const gridBlogs = useMemo(() => {
    if (activeFilter === "All") return blogData.slice(1);
    return blogData.filter((b) => b.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: isDark ? colors.darkColor : colors.creamLightColor,
      }}
    >
      <BackgroundDecor isDark={isDark} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <SectionHeader isDark={isDark} />

        {/* Stats Bar */}
        <StatsBar isDark={isDark} />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <FilterTab
              key={cat}
              active={activeFilter === cat}
              theme={theme}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </FilterTab>
          ))}
        </div>

        {/* Featured Hero Post */}
        {featuredBlog && (
          <div className="mb-12">
            <FeaturedHeroCard blog={featuredBlog} theme={theme} />
          </div>
        )}

        {/* Grid Posts */}
        {gridBlogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {gridBlogs.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        ) : (
          <div className={`text-center py-20 ${isDark ? "text-white/30" : "text-slate-400"}`}>
            <p className="text-lg font-medium">No articles found in this category.</p>
          </div>
        )}

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95"
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))"
                : "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#6366f1",
            }}
          >
            Explore All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Blogs);