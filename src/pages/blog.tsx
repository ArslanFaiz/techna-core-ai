// Blog.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { blogs } from "../constants";
import { User } from "lucide-react";

const Blog = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.min(Math.ceil(filteredBlogs.length / itemsPerPage), 4); // max 4 pages
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

  // Sidebar latest 2-3 blogs
  const latestBlogs = blogs.slice(0, 6);

  return (
    <div className="w-full" id="hero">
      {/* Hero Section */}
      <div className="w-full relative flex items-center justify-center h-[calc(100vh-80px)] sm:h-[600px]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('assets/blog-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#131546] opacity-60"></div>
        <div className="relative px-6 sm:px-10 md:px-16 text-center text-white max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Read our latest blogs and articles
          </p>
          <Link to={"/form"}>
            <button className="bg-[#0065CA] hover:bg-[#00408A] text-white text-base sm:text-lg font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300">
              Book A Consultation
            </button>
          </Link>
        </div>
      </div>

      {/* Blogs + Sidebar Section */}
<div className="py-16 px-4 sm:px-6 md:px-12 lg:px-20">
  {/* Section Heading */}
  <motion.div
  className="text-center mb-12"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Latest Blogs</h2>
  <p className="text-base sm:text-lg text-gray-600">
    Stay updated with our latest blogs, tips, and industry insights.<br />
    Explore topics that help you grow and make informed decisions.
  </p>
</motion.div>

  <div className="flex flex-col lg:flex-row gap-12">
    {/* Blog Cards */}
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {currentBlogs.map((blog) => (
        <motion.div
  key={blog.id}
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
  whileHover={{ scale: 1.05 }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-48 sm:h-52 md:h-56 object-cover"
  />

  <div className="p-6 flex flex-col justify-between flex-1 text-left">
    {/* Published Info on left */}
    <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm">
      <User className="w-4 h-4" />
      <span>Published by Admin</span>
    </div>

    <h3 className="text-xl sm:text-2xl font-bold mb-4">{blog.title}</h3>
    <p className="text-sm sm:text-base text-gray-600 mb-6">{blog.description}</p>
    <Link to={`/blog/${blog.id}`}>
      <button className="bg-[#0065CA] text-white font-semibold text-sm sm:text-base rounded-full hover:bg-[#00408A] transition duration-300 py-2 px-6 sm:py-3 sm:px-8">
        Read More
      </button>
    </Link>
  </div>
</motion.div>

      ))}

      {/* Pagination */}
      {filteredBlogs.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-12 gap-3 col-span-full h-auto">
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${
              currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${
                currentPage === i + 1 ? "bg-[#0065CA] text-white" : "hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${
              currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>

    {/* Sidebar */}
    <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-8">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0065CA] transition"
        />
      </div>

      {/* Latest Blogs */}
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-bold mb-4">Latest Blogs</h3>
        {latestBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="flex gap-4 items-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <p className="text-sm font-semibold">{blog.title}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Blog;
