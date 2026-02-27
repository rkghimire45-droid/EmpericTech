import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

/* ── Category Pill ─────────────────────────────────────────── */
const categoryColors = {
  "Artificial Intelligence": { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20" },
  "Cloud Infrastructure":    { bg: "bg-sky-500/10",    text: "text-sky-500",    border: "border-sky-500/20" },
  Cybersecurity:             { bg: "bg-rose-500/10",   text: "text-rose-500",   border: "border-rose-500/20" },
  DevOps:                    { bg: "bg-emerald-500/10",text: "text-emerald-500",border: "border-emerald-500/20" },
  Strategy:                  { bg: "bg-amber-500/10",  text: "text-amber-500",  border: "border-amber-500/20" },
  "Data Engineering":        { bg: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/20" },
};

const defaultColor = { bg: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/20" };

export const CategoryPill = memo(({ category }) => {
  const c = categoryColors[category] ?? defaultColor;
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase border ${c.bg} ${c.text} ${c.border}`}
    >
      {category}
    </span>
  );
});
CategoryPill.displayName = "CategoryPill";

/* ── Author Avatar Initials ─────────────────────────────────── */
const AuthorAvatar = memo(({ name }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-xs font-bold flex-shrink-0">
      {initials}
    </span>
  );
});
AuthorAvatar.displayName = "AuthorAvatar";

/* ── BlogCard ──────────────────────────────────────────────── */
const BlogCard = ({ blog, index = 0 }) => {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const isDark = theme === "dark";

  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className={`
          h-full flex flex-col rounded-2xl overflow-hidden
          transition-all duration-500
          ${hovered ? "shadow-2xl -translate-y-2" : "shadow-md translate-y-0"}
          ${isDark
            ? "bg-white/[0.04] border border-white/[0.08] hover:border-indigo-500/40"
            : "bg-white border border-black/[0.07] hover:border-indigo-400/50"
          }
        `}
        style={{
          boxShadow: hovered
            ? isDark
              ? "0 24px 48px rgba(99,102,241,0.15), 0 8px 16px rgba(0,0,0,0.3)"
              : "0 24px 48px rgba(99,102,241,0.12), 0 8px 24px rgba(0,0,0,0.08)"
            : isDark
            ? "0 2px 12px rgba(0,0,0,0.3)"
            : "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Category in image */}
          <div className="absolute top-4 left-4">
            <CategoryPill category={blog.category} />
          </div>

          {/* Read time badge */}
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/40 text-white backdrop-blur-sm border border-white/10">
              {blog.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Date */}
          <time className={`text-xs font-medium mb-3 ${isDark ? "text-white/40" : "text-black/40"}`}>
            {blog.date}
          </time>

          {/* Title */}
          <h3
            className={`text-lg font-bold leading-snug mb-3 line-clamp-2 transition-colors duration-300
              ${isDark ? "text-white group-hover:text-indigo-300" : "text-slate-900 group-hover:text-indigo-600"}
            `}
          >
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p
            className={`text-sm leading-relaxed line-clamp-3 flex-1 mb-5
              ${isDark ? "text-white/50" : "text-slate-500"}
            `}
          >
            {blog.excerpt}
          </p>

          {/* Divider */}
          <div className={`h-px mb-4 ${isDark ? "bg-white/[0.07]" : "bg-black/[0.06]"}`} />

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Author */}
            <div className="flex items-center gap-2.5 min-w-0">
              <AuthorAvatar name={blog.author} />
              <div className="min-w-0">
                <p className={`text-xs font-semibold truncate ${isDark ? "text-white/80" : "text-slate-700"}`}>
                  {blog.author}
                </p>
                <p className={`text-[10px] truncate ${isDark ? "text-white/35" : "text-slate-400"}`}>
                  {blog.authorRole}
                </p>
              </div>
            </div>

            {/* Read More */}
            <span
              className={`
                flex items-center gap-1.5 text-xs font-bold shrink-0 ml-3
                transition-all duration-300
                ${hovered ? "gap-2.5 text-indigo-400" : "text-indigo-500"}
              `}
            >
              Read More
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default memo(BlogCard);