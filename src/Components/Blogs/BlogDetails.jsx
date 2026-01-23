import { useParams, Link } from "react-router-dom";
import { blogs } from "./blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p className="text-center py-20">Blog not found</p>;
  }

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <Link
        to="/blogs"
        className="text-purple-600 font-medium mb-6 inline-block"
      >
        ← Back to Blogs
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {blog.title}
      </h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-2xl mb-8 shadow-lg"
      />

      <p className="text-gray-600 text-lg leading-relaxed">
        {blog.content}
      </p>
    </section>
  );
};

export default BlogDetails;
