// import { useTheme } from "../../context/ThemeContext";
// import { memo, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { blogData } from "./blogData";

// // Category Badge Component
// const CategoryBadge = memo(({ category, theme, colors }) => (
//   <span
//     className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-110"
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

// // Blog Card Component
// const BlogCard = memo(({ blog, theme, colors, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Link
//       to={`/blog/${blog.id}`}
//       className="group block h-full"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         animationDelay: `${index * 100}ms`,
//       }}
//     >
//       <article
//         className="h-full rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
//         style={{
//           backgroundColor: theme === "dark"
//             ? "rgba(255, 255, 255, 0.05)"
//             : "rgba(255, 255, 255, 0.8)",
//           border: `1px solid ${
//             theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
//           }`,
//           boxShadow: theme === "dark"
//             ? "0 8px 32px rgba(0, 0, 0, 0.3)"
//             : "0 8px 32px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         {/* Image Container */}
//         <div className="relative h-56 overflow-hidden">
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-full object-cover transition-transform duration-700"
//             style={{
//               transform: isHovered ? "scale(1.1)" : "scale(1)",
//             }}
//           />
//           {/* Gradient Overlay */}
//           <div
//             className="absolute inset-0 transition-opacity duration-500"
//             style={{
//               background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
//               opacity: isHovered ? 0.8 : 0.6,
//             }}
//           />
//           {/* Category Badge on Image */}
//           <div className="absolute top-4 left-4">
//             <CategoryBadge category={blog.category} theme={theme} colors={colors} />
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           {/* Date */}
//           <time
//             className="block text-sm font-medium mb-3 transition-colors duration-300"
//             style={{
//               color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//             }}
//           >
//             {blog.date}
//           </time>

//           {/* Title */}
//           <h3
//             className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 transition-colors duration-300"
//             style={{
//               color: theme === "dark" ? colors.whiteColor : colors.blackColor,
//             }}
//           >
//             {blog.title}
//           </h3>

//           {/* Excerpt */}
//           <p
//             className="text-sm md:text-base line-clamp-3 mb-4 transition-colors duration-300"
//             style={{
//               color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//             }}
//           >
//             {blog.excerpt}
//           </p>

//           {/* Read More Link */}
//           <div className="flex items-center gap-2 group/link">
//             <span
//               className="text-sm font-semibold transition-colors duration-300"
//               style={{
//                 color: "#6366f1",
//               }}
//             >
//               Read More
//             </span>
//             <svg
//               className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2"
//               fill="none"
//               stroke="#6366f1"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 7l5 5m0 0l-5 5m5-5H6"
//               />
//             </svg>
//           </div>
//         </div>
//       </article>
//     </Link>
//   );
// });

// BlogCard.displayName = "BlogCard";

// // Featured Blog Card
// const FeaturedBlogCard = memo(({ blog, theme, colors }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Link
//       to={`/blog/${blog.id}`}
//       className="group block"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <article
//         className="rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:scale-[1.01]"
//         style={{
//           backgroundColor: theme === "dark"
//             ? "rgba(255, 255, 255, 0.05)"
//             : "rgba(255, 255, 255, 0.8)",
//           border: `1px solid ${
//             theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"
//           }`,
//           boxShadow: theme === "dark"
//             ? "0 20px 60px rgba(0, 0, 0, 0.4)"
//             : "0 20px 60px rgba(0, 0, 0, 0.15)",
//         }}
//       >
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Image */}
//           <div className="relative h-64 md:h-full overflow-hidden">
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-full object-cover transition-transform duration-700"
//               style={{
//                 transform: isHovered ? "scale(1.1)" : "scale(1)",
//               }}
//             />
//             <div
//               className="absolute inset-0 transition-opacity duration-500"
//               style={{
//                 background: "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.3) 100%)",
//                 opacity: isHovered ? 0.6 : 0.3,
//               }}
//             />
//             <div className="absolute top-6 left-6">
//               <span
//                 className="inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase backdrop-blur-md"
//                 style={{
//                   backgroundColor: "rgba(255, 255, 255, 0.9)",
//                   color: "#6366f1",
//                 }}
//               >
//                 Featured
//               </span>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-8 flex flex-col justify-center">
//             <CategoryBadge category={blog.category} theme={theme} colors={colors} />
            
//             <time
//               className="block text-sm font-medium mt-4 mb-3 transition-colors duration-300"
//               style={{
//                 color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//               }}
//             >
//               {blog.date}
//             </time>

//             <h2
//               className="text-3xl md:text-4xl font-black mb-4 transition-colors duration-300"
//               style={{
//                 color: theme === "dark" ? colors.whiteColor : colors.blackColor,
//               }}
//             >
//               {blog.title}
//             </h2>

//             <p
//               className="text-base md:text-lg mb-6 transition-colors duration-300"
//               style={{
//                 color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//               }}
//             >
//               {blog.excerpt}
//             </p>

//             <div className="flex items-center gap-2">
//               <span
//                 className="text-base font-bold transition-colors duration-300"
//                 style={{
//                   color: "#6366f1",
//                 }}
//               >
//                 Read Full Article
//               </span>
//               <svg
//                 className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
//                 fill="none"
//                 stroke="#6366f1"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13 7l5 5m0 0l-5 5m5-5H6"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </article>
//     </Link>
//   );
// });

// FeaturedBlogCard.displayName = "FeaturedBlogCard";

// // Filter Button Component
// const FilterButton = memo(({ active, children, onClick, theme }) => (
//   <button
//     onClick={onClick}
//     className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
//     style={{
//       backgroundColor: active
//         ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
//         : theme === "dark"
//         ? "rgba(255, 255, 255, 0.05)"
//         : "rgba(0, 0, 0, 0.05)",
//       background: active
//         ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
//         : undefined,
//       color: active
//         ? "#ffffff"
//         : theme === "dark"
//         ? "#ffffff"
//         : "#000000",
//       border: `1px solid ${
//         active
//           ? "transparent"
//           : theme === "dark"
//           ? "rgba(255, 255, 255, 0.1)"
//           : "rgba(0, 0, 0, 0.1)"
//       }`,
//     }}
//   >
//     {children}
//   </button>
// ));

// FilterButton.displayName = "FilterButton";

// const Blog = () => {
//   const { theme, colors } = useTheme();
//   const [activeFilter, setActiveFilter] = useState("All");

//   // Get unique categories
//   const categories = useMemo(() => {
//     const cats = ["All", ...new Set(blogData.map(blog => blog.category))];
//     return cats;
//   }, []);

//   // Filter blogs
//   const filteredBlogs = useMemo(() => {
//     if (activeFilter === "All") return blogData;
//     return blogData.filter(blog => blog.category === activeFilter);
//   }, [activeFilter]);

//   // Featured blog (first one)
//   const featuredBlog = useMemo(() => blogData[0], []);
//   const regularBlogs = useMemo(() => 
//     activeFilter === "All" ? blogData.slice(1) : filteredBlogs,
//     [activeFilter, filteredBlogs]
//   );

//   return (
//     <section
//       className="relative py-20 md:py-32 overflow-hidden transition-colors duration-500"
//       style={{
//         backgroundColor: theme === "dark" ? colors.darkColor : colors.creamLightColor,
//       }}
//     >
//       {/* Background Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
//           style={{
//             background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
//             animationDuration: "8s",
//           }}
//         />
//         <div
//           className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
//           style={{
//             background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
//             animationDuration: "10s",
//             animationDelay: "2s",
//           }}
//         />
//       </div>

//       {/* Grid Pattern */}
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

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in-down">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border mb-6 transition-all duration-300 hover:scale-105"
//             style={{
//               backgroundColor: theme === "dark" 
//                 ? "rgba(255, 255, 255, 0.08)" 
//                 : "rgba(0, 0, 0, 0.06)",
//               borderColor: theme === "dark"
//                 ? "rgba(255, 255, 255, 0.15)"
//                 : "rgba(0, 0, 0, 0.15)",
//             }}
//           >
//             <span className="text-sm font-semibold tracking-wider" style={{ color: "#6366f1" }}>
//               OUR INSIGHTS
//             </span>
//           </div>

//           <h1
//             className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 transition-colors duration-500"
//             style={{
//               color: theme === "dark" ? colors.whiteColor : colors.blackColor,
//             }}
//           >
//             Latest <span style={{ color: "#6366f1" }}>Blog</span> Posts
//           </h1>

//           <p
//             className="text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-500"
//             style={{
//               color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//             }}
//           >
//             Stay updated with the latest trends, insights, and innovations in enterprise IT solutions
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
//           {categories.map((category) => (
//             <FilterButton
//               key={category}
//               active={activeFilter === category}
//               onClick={() => setActiveFilter(category)}
//               theme={theme}
//             >
//               {category}
//             </FilterButton>
//           ))}
//         </div>

//         {/* Featured Blog */}
//         {activeFilter === "All" && (
//           <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
//             <FeaturedBlogCard blog={featuredBlog} theme={theme} colors={colors} />
//           </div>
//         )}

//         {/* Blog Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
//           {regularBlogs.map((blog, index) => (
//             <BlogCard
//               key={blog.id}
//               blog={blog}
//               theme={theme}
//               colors={colors}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* No Results */}
//         {filteredBlogs.length === 0 && (
//           <div className="text-center py-20">
//             <p
//               className="text-xl font-medium"
//               style={{
//                 color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
//               }}
//             >
//               No posts found in this category.
//             </p>
//           </div>
//         )}
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

//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
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
//     </section>
//   );
// };

// export default memo(Blog);



import { useTheme } from "../../context/ThemeContext";
import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "./blogData";

/* -------------------- Category Badge -------------------- */
const CategoryBadge = memo(({ category, theme }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-110"
    style={{
      backgroundColor:
        theme === "dark"
          ? "rgba(99,102,241,0.15)"
          : "rgba(99,102,241,0.1)",
      color: "#6366f1",
      border: "1px solid rgba(99,102,241,0.3)",
    }}
  >
    {category}
  </span>
));

/* -------------------- Blog Card -------------------- */
const BlogCard = memo(({ blog, theme, colors, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/blog/${blog.id}`}
      className="group block h-full animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className="h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
        style={{
          background:
            theme === "dark"
              ? "rgba(255,255,255,0.05)"
              : "rgba(255,255,255,0.8)",
          border:
            theme === "dark"
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
          />
          <div className="absolute top-4 left-4">
            <CategoryBadge category={blog.category} theme={theme} />
          </div>
        </div>

        <div className="p-6">
          <time
            className="block text-sm mb-2"
            style={{
              color:
                theme === "dark" ? colors.grayColor2 : colors.grayColor,
            }}
          >
            {blog.date}
          </time>

          <h3
            className="text-xl font-bold mb-3 line-clamp-2"
            style={{
              color:
                theme === "dark" ? colors.whiteColor : colors.blackColor,
            }}
          >
            {blog.title}
          </h3>

          <p
            className="text-sm mb-4 line-clamp-3"
            style={{
              color:
                theme === "dark" ? colors.grayColor2 : colors.grayColor,
            }}
          >
            {blog.excerpt}
          </p>

          <span className="text-sm font-semibold text-indigo-500">
            Read More →
          </span>
        </div>
      </article>
    </Link>
  );
});

/* -------------------- Featured Blog -------------------- */
const FeaturedBlogCard = memo(({ blog, theme, colors }) => {
  if (!blog) return null;

  return (
    <Link to={`/blog/${blog.id}`} className="block">
      <article
        className="rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
        style={{
          background:
            theme === "dark"
              ? "rgba(255,255,255,0.05)"
              : "rgba(255,255,255,0.85)",
          border:
            theme === "dark"
              ? "1px solid rgba(255,255,255,0.15)"
              : "1px solid rgba(0,0,0,0.15)",
        }}
      >
        <div className="grid md:grid-cols-2">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-72 md:h-full object-cover"
          />

          <div className="p-8 flex flex-col justify-center">
            <CategoryBadge category={blog.category} theme={theme} />

            <h2
              className="text-3xl font-black mt-4 mb-4"
              style={{
                color:
                  theme === "dark"
                    ? colors.whiteColor
                    : colors.blackColor,
              }}
            >
              {blog.title}
            </h2>

            <p
              className="mb-6"
              style={{
                color:
                  theme === "dark"
                    ? colors.grayColor2
                    : colors.grayColor,
              }}
            >
              {blog.excerpt}
            </p>

            <span className="font-bold text-indigo-500">
              Read Full Article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
});

/* -------------------- Filter Button -------------------- */
const FilterButton = memo(({ active, onClick, theme, children }) => (
  <button
    onClick={onClick}
    className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
    style={{
      background: active
        ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
        : theme === "dark"
        ? "rgba(255,255,255,0.05)"
        : "rgba(0,0,0,0.05)",
      color: active ? "#fff" : theme === "dark" ? "#fff" : "#000",
      border: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    {children}
  </button>
));

/* -------------------- Blog Page -------------------- */
const Blog = () => {
  const { theme, colors } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(blogData.map((b) => b.category))],
    []
  );

  const featuredBlog = useMemo(() => {
    return activeFilter === "All" ? blogData[0] : null;
  }, [activeFilter]);

  const regularBlogs = useMemo(() => {
    if (activeFilter === "All") return blogData.slice(1);
    return blogData.filter((b) => b.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      className="py-20"
      style={{
        background:
          theme === "dark"
            ? colors.darkColor
            : colors.creamLightColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1
          className="text-5xl font-black text-center mb-6 animate-fade-in-down"
          style={{
            color:
              theme === "dark"
                ? colors.whiteColor
                : colors.blackColor,
          }}
        >
          Latest <span className="text-indigo-500">Blogs</span>
        </h1>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              active={activeFilter === cat}
              theme={theme}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </div>

        {featuredBlog && (
          <div className="mb-16">
            <FeaturedBlogCard
              blog={featuredBlog}
              theme={theme}
              colors={colors}
            />
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs.map((blog, i) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              theme={theme}
              colors={colors}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Blog);
