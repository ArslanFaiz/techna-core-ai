// PremiumCTASection.jsx
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PremiumCTASection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-black via-gray-900 to-blue-600 overflow-hidden py-24 px-6 md:px-12">
      {/* Optional animated gradient shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500 via-black to-gray-800 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-800 via-black to-blue-500 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-6"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight md:leading-snug">
          Your Next Big Idea Deserves{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
            World-Class Execution
          </span>
        </h2>

        {/* Subheading / Description */}
        <p className="text-white/90 text-lg md:text-xl max-w-2xl">
          Get your project back on track.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255,255,255,0.4)" }}
          className="mt-6 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-black via-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          Book a Free Strategy Call <FaArrowRight />
        </motion.button>
      </motion.div>

      {/* Optional subtle overlay for premium depth */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
    </section>
  );
};

export default PremiumCTASection;
