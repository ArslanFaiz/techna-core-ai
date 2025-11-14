// Blog.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How AI is Transforming Everyday Business Operations",
    description:
      "Artificial Intelligence (AI) has moved from being a futuristic concept to an everyday reality.",
    image: "assets/blog-bg.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "The Future of Automation in Tech",
    description:
      "Automation is reshaping industries, creating smarter workflows, and improving efficiency.",
    image: "assets/blog-bg.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Top AI Tools for Small Businesses",
    description:
      "Discover AI tools that can help small businesses optimize operations and growth.",
    image: "assets/blog-bg.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "How AI is Transforming Everyday Business Operations",
    description:
      "Artificial Intelligence (AI) has moved from being a futuristic concept to an everyday reality.",
    image: "assets/blog-bg.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "The Future of Automation in Tech",
    description:
      "Automation is reshaping industries, creating smarter workflows, and improving efficiency.",
    image: "assets/blog-bg.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Top AI Tools for Small Businesses",
    description:
      "Discover AI tools that can help small businesses optimize operations and growth.",
    image: "assets/blog-bg.jpg",
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full relative flex items-center justify-center h-[calc(100vh-80px)] sm:h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('assets/blog-bg.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#131546] opacity-60"></div>

        {/* Content */}
        <div className="relative px-6 sm:px-10 md:px-16 text-center text-white max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Read our latest blogs and articles
          </p>
          <Link to={'/form'}>
          <button className="bg-[#0065CA] hover:bg-[#00408A] text-white text-base sm:text-lg font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300">
            Book A Consultation
          </button>
</Link>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Latest Blogs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 sm:h-52 md:h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{blog.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">{blog.description}</p>
                <button
                  onClick={() => window.location.href = blog.link}
                  className="bg-[#0065CA] text-white font-semibold text-sm sm:text-base rounded-full hover:bg-[#00408A] transition duration-300 py-2 px-6 sm:py-3 sm:px-8 mx-auto"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
