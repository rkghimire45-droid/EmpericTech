// import { useTheme } from "../../context/ThemeContext";
// import { memo, useMemo, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { blogData } from "./blogData";

// // Category Badge Component
// const CategoryBadge = memo(({ category, theme }) => (
//   <span
//     className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300"
//     style={{
//       backgroundColor: theme === "dark" 
//         ? "rgba(99, 102, 241, 0.15)" 
//         : "rgba(99, 102, 241, 0.1)",
//       color: "#6366f1",
//       border: "1px solid rgba(99, 102, 241, 0.3)",
//     }}
//   >
//     {category}
//   </span>
// ));

// CategoryBadge.displayName = "CategoryBadge";

// // Back Button Component
// const BackButton = memo(({ theme, colors }) => {
//   const navigate = useNavigate();

//   return (
//     <button
//       onClick={() => navigate("/blog")}
//       className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
//       style={{
//         backgroundColor: theme === "dark"
//           ? "rgba(255, 255, 255, 0.05)"
//           : "rgba(0, 0, 0, 0.05)",
//         border: `1px solid ${
//           theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
//         }`,
//         color: theme === "dark" ? colors.whiteColor : colors.blackColor,
//       }}
//     >
//       <svg
//         className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M15 19l-7-7 7-7"
//         />
//       </svg>
//       Back to Blog
//     </button>
//   );
// });

// BackButton.displayName = "BackButton";

// // Related Blog Card
// const RelatedBlogCard = memo(({ blog, theme, colors }) => (
//   <Link
//     to={`/blog/${blog.id}`}
//     className="group block h-full"
//     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//   >
//     <article
//       className="h-full rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:scale-105"
//       style={{
//         backgroundColor: theme === "dark"
//           ? "rgba(255, 255, 255, 0.05)"
//           : "rgba(255, 255, 255, 0.8)",
//         border: `1px solid ${
//           theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
//         }`,
//       }}
//     >
//       <div className="relative h-40 overflow-hidden">
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>
//       <div className="p-4">
//         <h4
//           className="text-lg font-bold mb-2 line-clamp-2 transition-colors duration-300"
//           style={{
//             color: theme === "dark" ? colors.whiteColor : colors.blackColor,
//           }}
//         >
//           {blog.title}
//         </h4>
//         <time
//           className="text-sm transition-colors duration-300"
//           style={{
//             color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//           }}
//         >
//           {blog.date}
//         </time>
//       </div>
//     </article>
//   </Link>
// ));

// RelatedBlogCard.displayName = "RelatedBlogCard";

// const BlogDetails = () => {
//   const { theme, colors } = useTheme();
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Find the blog post
//   const blog = useMemo(() => {
//     return blogData.find((b) => b.id === parseInt(id));
//   }, [id]);

//   // Get related posts (same category, exclude current)
//   const relatedPosts = useMemo(() => {
//     if (!blog) return [];
//     return blogData
//       .filter((b) => b.category === blog.category && b.id !== blog.id)
//       .slice(0, 3);
//   }, [blog]);

//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [id]);

//   // If blog not found, redirect
//   useEffect(() => {
//     if (!blog) {
//       navigate("/blog");
//     }
//   }, [blog, navigate]);

//   if (!blog) return null;

//   return (
//     <article
//       className="relative min-h-screen py-20 md:py-32 transition-colors duration-500"
//       style={{
//         backgroundColor: theme === "dark" ? colors.darkColor : colors.creamLightColor,
//       }}
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
//           style={{
//             background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
//           }}
//         />
//       </div>

//       <div
//         className="absolute inset-0 opacity-[0.02] pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(${theme === "dark" ? colors.whiteColor : colors.blackColor} 1px, transparent 1px),
//             linear-gradient(90deg, ${theme === "dark" ? colors.whiteColor : colors.blackColor} 1px, transparent 1px)
//           `,
//           backgroundSize: "64px 64px",
//         }}
//       />

//       <div className="relative z-10 max-w-4xl mx-auto px-6">
//         {/* Back Button */}
//         <div className="mb-8 animate-fade-in-down">
//           <BackButton theme={theme} colors={colors} />
//         </div>

//         {/* Featured Image */}
//         <div className="mb-8 rounded-3xl overflow-hidden animate-fade-in-up" style={{ animationDelay: "100ms" }}>
//           <div className="relative h-64 md:h-96 overflow-hidden">
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-full object-cover"
//             />
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
//               }}
//             />
//           </div>
//         </div>

//         {/* Article Header */}
//         <header className="mb-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
//           <div className="flex flex-wrap items-center gap-4 mb-6">
//             <CategoryBadge category={blog.category} theme={theme} />
//             <time
//               className="text-sm font-medium transition-colors duration-300"
//               style={{
//                 color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//               }}
//             >
//               {blog.date}
//             </time>
//           </div>

//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight transition-colors duration-300"
//             style={{
//               color: theme === "dark" ? colors.whiteColor : colors.blackColor,
//             }}
//           >
//             {blog.title}
//           </h1>

//           <p
//             className="text-lg md:text-xl leading-relaxed transition-colors duration-300"
//             style={{
//               color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//             }}
//           >
//             {blog.excerpt}
//           </p>
//         </header>

//         {/* Article Content */}
//         <div
//           className="prose prose-lg max-w-none mb-16 animate-fade-in-up"
//           style={{ animationDelay: "300ms" }}
//         >
//           <div
//             className="leading-relaxed space-y-6 transition-colors duration-300"
//             style={{
//               color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//             }}
//           >
//             {blog.content.split('\n\n').map((paragraph, index) => (
//               <p key={index} className="text-base md:text-lg leading-relaxed">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         <div
//           className="h-px w-full mb-16"
//           style={{
//             background: theme === "dark"
//               ? "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)"
//               : "linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)",
//           }}
//         />

//         {/* Related Posts */}
//         {relatedPosts.length > 0 && (
//           <section className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
//             <h2
//               className="text-2xl md:text-3xl font-bold mb-8 transition-colors duration-300"
//               style={{
//                 color: theme === "dark" ? colors.whiteColor : colors.blackColor,
//               }}
//             >
//               Related Articles
//             </h2>

//             <div className="grid md:grid-cols-3 gap-6">
//               {relatedPosts.map((relatedBlog) => (
//                 <RelatedBlogCard
//                   key={relatedBlog.id}
//                   blog={relatedBlog}
//                   theme={theme}
//                   colors={colors}
//                 />
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Back to Top Button */}
//         <div className="mt-16 text-center">
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
//             style={{
//               background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//               color: "#ffffff",
//             }}
//           >
//             Back to Top
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 10l7-7m0 0l7 7m-7-7v18"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes fade-in-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-down {
//           animation: fade-in-down 0.8s ease-out forwards;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .animate-fade-in-down,
//           .animate-fade-in-up {
//             animation: none;
//           }
//         }
//       `}</style>
//     </article>
//   );
// };

// export default memo(BlogDetails);




import { useTheme } from "../../context/ThemeContext";
import { memo, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "./blogData";

const CategoryBadge = memo(({ category, theme }) => (
  <span
    className="px-4 py-2 rounded-full text-sm font-semibold uppercase"
    style={{
      background:
        theme === "dark"
          ? "rgba(99,102,241,0.15)"
          : "rgba(99,102,241,0.1)",
      color: "#6366f1",
    }}
  >
    {category}
  </span>
));

const BlogDetails = () => {
  const { theme, colors } = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = useMemo(
    () => blogData.find((b) => b.id === Number(id)),
    [id]
  );

  useEffect(() => {
    if (!blog) {
      navigate("/blog", { replace: true });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blog, navigate]);

  if (!blog) return null;

  return (
    <article
      className="py-20"
      style={{
        background:
          theme === "dark"
            ? colors.darkColor
            : colors.creamLightColor,
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => navigate("/blog")}
          className="mb-8 font-semibold text-indigo-500"
        >
          ← Back to Blog
        </button>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-3xl mb-8"
        />

        <CategoryBadge category={blog.category} theme={theme} />

        <h1
          className="text-4xl font-black mt-4 mb-6"
          style={{
            color:
              theme === "dark"
                ? colors.whiteColor
                : colors.blackColor,
          }}
        >
          {blog.title}
        </h1>

        <p
          className="mb-8"
          style={{
            color:
              theme === "dark"
                ? colors.grayColor2
                : colors.grayColor,
          }}
        >
          {blog.excerpt}
        </p>

        <div
          className="space-y-6"
          style={{
            color:
              theme === "dark"
                ? colors.grayColor2
                : colors.grayColor,
          }}
        >
          {blog.content.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default memo(BlogDetails);
