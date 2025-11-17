// src/pages/BlogDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../constants";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    navigate("/blog");
    return null;
  }

  const publishedDate = "January 15, 2025";
  const author = "Admin";

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 dark:text-gray-100 py-16">
      <motion.div
        className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center mt-5 
          text-[#0A3D62] dark:text-[#79AFFF]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {blog.title}
        </motion.h1>

        {/* Published Info */}
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-10 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Published by{" "}
          <span className="font-semibold text-[#0065CA] dark:text-[#5CAEFF]">
            {author}
          </span>{" "}
          •{" "}
          <span className="text-[#0A3D62] dark:text-[#A5C9FF]">
            {publishedDate}
          </span>
        </motion.p>

        {/* Blog Image */}
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 sm:h-[480px] object-cover rounded-2xl shadow-lg mb-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Blog Description */}
        <motion.p
          className="text-lg sm:text-xl leading-relaxed 
          text-gray-700 dark:text-gray-300 
          border-l-4 border-[#0065CA] dark:border-[#5CAEFF] pl-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {blog.description}
        </motion.p>

        {/* Back Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/blog")}
            className="bg-[#0065CA] hover:bg-[#004A96] text-white font-semibold text-base 
            rounded-full py-3 px-10 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Back to Blogs
          </button>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* ----------------------  COMMENTS SECTION  ---------------------- */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3D62] dark:text-[#79AFFF] mb-6">
            Leave a Comment
          </h2>

          {/* Comment Form */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 
                text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#0065CA] outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 
                text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#0065CA] outline-none"
              />
            </div>

            <textarea
              placeholder="Write your comment..."
              rows={5}
              className="w-full mt-4 px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border 
              border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#0065CA] outline-none"
            ></textarea>

            <button
              className="mt-5 bg-[#0065CA] hover:bg-[#004A96] text-white font-semibold px-8 py-3 
              rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Post Comment
            </button>
          </div>

          {/* Divider */}
          <div className="my-10 border-b border-gray-300 dark:border-gray-700" />

          {/* Display Comments Section */}
          <h3 className="text-xl sm:text-2xl font-bold mb-5 text-[#0A3D62] dark:text-[#79AFFF]">
            Recent Comments
          </h3>

          {/* Sample Comments */}
          <div className="space-y-8">
            {/* Parent Comment */}
            <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-200 dark:bg-blue-900 rounded-full flex items-center justify-center text-xl font-bold text-blue-700 dark:text-blue-300">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Arslan</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">2 hours ago</p>
                </div>
              </div>

              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Amazing blog! Very informative and well-written.  
                I loved how the concepts were explained clearly.
              </p>

              {/* Reply Button */}
              <button className="mt-3 text-[#0065CA] dark:text-[#5CAEFF] font-medium hover:underline">
                Reply
              </button>

              {/* Reply Section */}
              <div className="mt-4 pl-6 border-l-2 border-gray-300 dark:border-gray-600">
                <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-200 dark:bg-purple-900 rounded-full flex items-center justify-center text-lg font-bold text-purple-700 dark:text-purple-300">
                      J
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">
                        John Doe
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        1 hour ago
                      </p>
                    </div>
                  </div>

                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Totally agree with you! The writing was very clean.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;
