import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WebDev from "../../assets/WebDev.png";
import SEO from "../../assets/SEO.png";
import DigitalMarketing from "../../assets/DigitalMarketing.png";

export const blogs = [
  {
    id: "1",
    category: "Web Development Focus",
    title: "Mobile-ready and SEO-smart websites",
    image: WebDev,
    content:
      "Learn how responsive design and SEO-friendly architecture help businesses grow faster.",
  },
  {
    id: "2",
    category: "SEO Optimization",
    title: "Improve rankings and boost organic traffic",
    image: SEO,
    content:
      "Proven SEO techniques to increase visibility, traffic, and conversions.",
  },
  {
    id: "3",
    category: "Digital Marketing",
    title: "Grow your brand with data-driven marketing",
    image: DigitalMarketing,
    content:
      "Smart digital marketing strategies backed by analytics and performance data.",
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
          Expert insights on web development, SEO, and digital growth.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/blogs/${blog.id}`}
              className="group relative block h-[420px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 z-10">
                <p className="text-sm uppercase font-semibold tracking-wide text-purple-600 mb-2">
                  {blog.category}
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {blog.title}
                </h3>

                <div className="mt-4 flex items-center text-purple-600 font-medium">
                  <span className="group-hover:text-purple-500 transition">
                    Read more
                  </span>
                  <span className="ml-2 text-xl group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
