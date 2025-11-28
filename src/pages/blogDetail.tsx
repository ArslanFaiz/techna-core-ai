import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchBlogs } from "../Api/blog";
import type { Blog } from "../types";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([
    {
      name: "Arslan",
      text: "Amazing blog! Very informative...",
      time: "2 hours ago",
      replies: [
        { name: "John Doe", text: "Totally agree!", time: "1 hour ago" },
      ],
    },
  ]);

  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const getBlog = async () => {
      try {
        setLoading(true);
        const blogs = await fetchBlogs();
        const foundBlog = blogs.find((b) => b.id === id);
        if (!foundBlog) {
          navigate("/blog");
          return;
        }
        setBlog(foundBlog);
      } catch (err) {
        console.error("Error fetching blog:", err);
        navigate("/blog");
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, [id, navigate]);

  const handlePostComment = () => {
    if (!commentName || !commentText) return;

    const newComment = {
      name: commentName,
      text: commentText,
      time: "Just now",
      replies: [],
    };

    setComments([newComment, ...comments]);
    setCommentName("");
    setCommentEmail("");
    setCommentText("");
  };

  if (loading || !blog) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16">
  <motion.div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16">
    {/* Blog Title */}
    <motion.h1
      className="text-4xl sm:text-5xl font-extrabold mb-4 text-center mt-5 text-gray-900 dark:text-gray-100 tracking-tight"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {blog.title}
    </motion.h1>

    {/* Published Info */}
    <motion.p
      className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm sm:text-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Published by{" "}
      <span className="font-semibold text-blue-600 dark:text-blue-400">Admin</span> •{" "}
      <span className="text-gray-700 dark:text-gray-300">
        {new Date(blog.createdAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </motion.p>

    {/* Blog Image */}
    <motion.img
      src={blog.images[0]?.imageUrl || "/assets/placeholder.jpg"}
      alt={blog.title}
      className="w-full h-96 sm:h-[500px] object-cover rounded-3xl shadow-lg mb-12 transition-transform duration-500 hover:scale-105"
    />

    {/* Blog Description */}
    <motion.div
      className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-16"
      dangerouslySetInnerHTML={{ __html: blog.description }}
    />

    {/* Comment Form */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mb-12 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Leave a Comment</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Full Name"
          value={commentName}
          onChange={(e) => setCommentName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={commentEmail}
          onChange={(e) => setCommentEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>
      <textarea
        placeholder="Write your comment..."
        rows={5}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
      />
      <button
        onClick={handlePostComment}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-shadow duration-300 shadow hover:shadow-lg"
      >
        Post Comment
      </button>
    </div>

    {/* Comments Section */}
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Recent Comments</h3>
      {comments.map((c, idx) => (
        <div
          key={idx}
          className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xl font-bold text-blue-600 dark:text-blue-300">
              {c.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{c.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{c.time}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{c.text}</p>

          {/* Replies */}
          {c.replies.length > 0 && (
            <div className="pl-6 border-l-2 border-gray-300 dark:border-gray-600 space-y-3">
              {c.replies.map((r, rIdx) => (
                <div
                  key={rIdx}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-lg font-bold text-purple-600 dark:text-purple-300">
                      {r.name.charAt(0)}
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{r.name}</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </motion.div>
</div>

  );
};

export default BlogDetail;
