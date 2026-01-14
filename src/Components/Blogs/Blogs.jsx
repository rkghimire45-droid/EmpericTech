// import WebDev from "../../assets/WebDev.png";
// import SEO from "../../assets/SEO.png";
// import DigitalMarketing from "../../assets/DigitalMarketing.png";

// const blogs = [
//   {
//     id: 1,
//     category: "Web Development Focus",
//     title: "Mobile ready and SEO smart",
//     image: WebDev,
//   },
//   {
//     id: 2,
//     category: "SEO Optimization",
//     title: "Improve rankings and boost organic traffic",
//     image: SEO,
//   },
//   {
//     id: 3,
//     category: "Digital Marketing",
//     title: "Grow your brand with data-driven marketing",
//     image: DigitalMarketing,
//   },
// ];


// const Blog = () => {
//   return (
//     // <section className="bg-white py-16 px-6 md:px-12">
//     //   {/* Header */}
//     //   <div className="max-w-7xl mx-auto mb-12">
//     //     <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//     //       Blogs
//     //     </h2>
//     //     <p className="mt-3 text-gray-600 text-lg">
//     //       We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
//     //     </p>
//     //   </div>

//     //   {/* Grid */}
//     //   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
//     //     {blogs.map((blog) => (
//     //       <div
//     //         key={blog.id}
//     //         className="group relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg"
//     //       >
//     //         {/* Image */}
//     //         <img
//     //           src={blog.image}
//     //           alt={blog.title}
//     //           className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
//     //         />

//     //         {/* Overlay */}
//     //         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//     //         {/* Content */}
//     //         <div className="absolute bottom-0 p-6">
//     //           <span className="text-xs uppercase tracking-wider text-gray-300">
//     //             {blog.category}
//     //           </span>

//     //           <h3 className="mt-2 text-lg md:text-xl font-semibold text-white leading-snug">
//     //             {blog.title}
//     //           </h3>

//     //           <div className="mt-3 flex items-center text-teal-300 font-medium">
//     //             <span>Read more</span>
//     //             <span className="ml-2 text-xl transition-transform group-hover:translate-x-1">
//     //               →
//     //             </span>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </section>


//     <div className="relative group rounded-2xl overflow-hidden shadow-lg">
//     {/* Image */}
//     <img
//         src={blogs.image}
//         alt={blogs.title}
//         className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
//     />

//     {/* Dark overlay for text clarity */}
//     <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

//     {/* Text content */}
//     <div className="absolute bottom-0 p-6 z-10">
//         <p className="text-sm md:text-base font-semibold tracking-wide text-purple-300 uppercase mb-2">
//         {blogs.category}
//         </p>

//         <h3 className="text-lg md:text-2xl font-bold text-white leading-snug">
//         {blogs.title}
//         </h3>
//     </div>
//     </div>


//   );
// };

// export default Blog;


// import WebDev from "../../assets/WebDev.png";
// import SEO from "../../assets/SEO.png";
// import DigitalMarketing from "../../assets/DigitalMarketing.png";

// const blogs = [
//   {
//     id: 1,
//     category: "Web Development Focus",
//     title: "Mobile-ready and SEO-smart websites",
//     image: WebDev,
//   },
//   {
//     id: 2,
//     category: "SEO Optimization",
//     title: "Improve rankings and boost organic traffic",
//     image: SEO,
//   },
//   {
//     id: 3,
//     category: "Digital Marketing",
//     title: "Grow your brand with data-driven marketing",
//     image: DigitalMarketing,
//   },
// ];

// const Blog = () => {
//   return (
//     <section className="bg-white py-16 px-6 md:px-12">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Insights & Blogs
//         </h2>
//         <p className="mt-3 text-gray-600 text-lg max-w-2xl">
//           Expert insights on web development, SEO, and digital growth to help
//           your business scale effectively.
//         </p>
//       </div>

//       {/* Blog Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="group relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg"
//           >
//             {/* Image */}
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

//             {/* Text */}
//             <div className="absolute bottom-0 p-6 z-10">
//               <p className="text-sm md:text-base font-semibold tracking-wide text-purple-300 uppercase mb-2">
//                 {blog.category}
//               </p>

//               <h3 className="text-lg md:text-2xl font-bold text-white leading-snug">
//                 {blog.title}
//               </h3>

//               <span className="inline-block mt-3 text-sm font-medium text-white/80 group-hover:text-white">
//                 Read more →
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Blog;



import WebDev from "../../assets/WebDev.png";
import SEO from "../../assets/SEO.png";
import DigitalMarketing from "../../assets/DigitalMarketing.png";

const blogs = [
  {
    id: 1,
    category: "Web Development Focus",
    title: "Mobile-ready and SEO-smart websites",
    image: WebDev,
  },
  {
    id: 2,
    category: "SEO Optimization",
    title: "Improve rankings and boost organic traffic",
    image: SEO,
  },
  {
    id: 3,
    category: "Digital Marketing",
    title: "Grow your brand with data-driven marketing",
    image: DigitalMarketing,
  },
];

const Blog = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Insights & Blogs
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Expert insights on web development, SEO, and digital growth to help
          your business scale effectively.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[450px]"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition"></div>

            {/* Text content */}
            <div className="absolute bottom-0 p-6 z-10">
              <p className="text-sm md:text-base font-semibold tracking-wide text-purple-300 uppercase mb-2">
                {blog.category}
              </p>

              <h3 className="text-lg md:text-2xl font-bold text-white leading-snug">
                {blog.title}
              </h3>

              <div className="mt-3 flex items-center text-teal-300 font-medium cursor-pointer">
                <span>Read more</span>
                <span className="ml-2 text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
