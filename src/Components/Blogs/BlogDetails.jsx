import { useTheme } from "../../context/ThemeContext";
import { memo, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "./blogData";
import BlogCard, { CategoryPill } from "./BlogCard";

const BlogDetails = () => {
  const { theme, colors } = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const blog = useMemo(
    () => blogData.find((b) => b.id === Number(id)),
    [id]
  );

  const relatedPosts = useMemo(() => {
    if (!blog) return [];
    return blogData
      .filter((b) => b.category === blog.category && b.id !== blog.id)
      .slice(0, 3);
  }, [blog]);

  useEffect(() => {
    if (!blog) {
      navigate("/blogs", { replace: true });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blog, navigate, id]);

  if (!blog) return null;

  return (
    <article
      className="min-h-screen py-24 transition-colors duration-500"
      style={{
        backgroundColor: isDark ? colors.darkColor : colors.creamLightColor,
      }}
    >
      {/* Top accent line */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 z-50"
        style={{
          background: "linear-gradient(to right, #6366f1, #8b5cf6, #a78bfa)",
        }}
      />

      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        {/* ── Back Button ── */}
        <button
          onClick={() => navigate("/blogs")}
          className={`
            group inline-flex items-center gap-2 mb-10 text-sm font-semibold
            transition-all duration-300 hover:-translate-x-1
            ${isDark ? "text-white/50 hover:text-white" : "text-slate-400 hover:text-slate-800"}
          `}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </button>

        {/* ── Hero Image ── */}
        <div className="rounded-2xl overflow-hidden mb-10 shadow-xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-[420px] object-cover"
          />
        </div>

        {/* ── Big Bold Excerpt (top subtitle like screenshot) ── */}
        <p
          className="text-xl sm:text-2xl md:text-3xl font-black leading-snug mb-8 tracking-tight"
          style={{
            color: isDark ? colors.whiteColor : colors.blackColor,
          }}
        >
          {blog.excerpt}
        </p>

        {/* ── Meta Row: Author · Date · Read Time ── */}
        <div
          className={`flex flex-wrap items-center gap-5 mb-5 text-sm font-medium ${
            isDark ? "text-white/45" : "text-slate-400"
          }`}
        >
          {/* Author */}
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {blog.author}
          </span>

          {/* Date */}
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {blog.date}
          </span>

          {/* Read Time */}
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {blog.readTime}
          </span>
        </div>

        {/* ── Tags Row ── */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className={`text-sm font-semibold mr-1 ${isDark ? "text-white/40" : "text-slate-400"}`}>
            Tags:
          </span>
          <CategoryPill category={blog.category} />
          {blog.tags && blog.tags.map((tag) => (
            <span
              key={tag}
              className={`
                px-3 py-1 rounded-full text-xs font-semibold border
                ${isDark
                  ? "bg-white/[0.05] border-white/[0.1] text-white/60"
                  : "bg-black/[0.04] border-black/[0.08] text-slate-500"
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Divider ── */}
        <div
          className="h-px mb-10"
          style={{
            background: isDark
              ? "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)"
              : "linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent)",
          }}
        />

        {/* ── Article Body (dangerouslySetInnerHTML) ── */}
        <div
          className="blog-content"
          style={{
            color: isDark ? colors.grayColor2 : colors.grayColor,
          }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* ── Divider ── */}
        <div
          className="h-px mt-16 mb-14"
          style={{
            background: isDark
              ? "linear-gradient(to right, transparent, rgba(99,102,241,0.3), transparent)"
              : "linear-gradient(to right, transparent, rgba(99,102,241,0.2), transparent)",
          }}
        />

        {/* ── Related Posts ── */}
        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6 bg-indigo-500" />
              <h2
                className="text-2xl font-black"
                style={{ color: isDark ? colors.whiteColor : colors.blackColor }}
              >
                Related Articles
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* ── Back to Top ── */}
        <div className="text-center pb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95"
            style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>

      {/* ── Blog Content Styles ── */}
      <style>{`
        .blog-content h1 {
          font-size: 1.875rem;
          font-weight: 900;
          line-height: 1.25;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          color: ${isDark ? colors.whiteColor : colors.blackColor};
        }
        .blog-content h2 {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          color: ${isDark ? colors.whiteColor : colors.blackColor};
        }
        .blog-content h3 {
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.5;
          margin-top: 1.5rem;
          margin-bottom: 0.4rem;
          color: ${isDark ? colors.whiteColor : colors.blackColor};
        }
        .blog-content p {
          font-size: 1rem;
          line-height: 1.85;
          margin-bottom: 1.1rem;
          color: ${isDark ? colors.grayColor2 : colors.grayColor};
        }
        .blog-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.1rem;
        }
        .blog-content ol {
          list-style: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.1rem;
        }
        .blog-content li {
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 0.35rem;
          color: ${isDark ? colors.grayColor2 : colors.grayColor};
        }
        .blog-content strong {
          font-weight: 700;
          color: ${isDark ? colors.whiteColor : colors.blackColor};
        }
        .blog-content a {
          color: #6366f1;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-content a:hover {
          color: #8b5cf6;
        }
        .blog-content blockquote {
          border-left: 3px solid #6366f1;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: ${isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"};
        }
        .blog-content h2:first-child,
        .blog-content h3:first-child {
          margin-top: 0;
        }
      `}</style>
    </article>
  );
};

export default memo(BlogDetails);