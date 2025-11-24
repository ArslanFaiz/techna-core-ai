// PremiumCTASection.jsx
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PremiumCTASection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-black via-gray-900 to-blue-600 overflow-hidden py-24 px-6 md:px-12">
      {/* Top curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ctaTopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#131b2b" />
              <stop offset="50%" stopColor="#1d2838" />
              <stop offset="100%" stopColor="#040814" /> {/* blue-600 */}
            </linearGradient>
          </defs>
          <path
            d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z"
            fill="url(#ctaTopGradient)"
          />
        </svg>
      </div>

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

       <motion.button
  whileHover={{ scale: 1.05 }}
  className="mt-6 inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-black via-blue-500 to-blue-600 text-white font-semibold rounded-full transition-all duration-300"
>
  Book a Free Strategy Call <FaArrowRight />
</motion.button>

      </motion.div>
      <div className="w-full h-20 -mt-1">
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#050916"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PremiumCTASection;
