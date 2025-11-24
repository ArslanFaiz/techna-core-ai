// TestimonialsSection.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../../constants";
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // slide every 5s
    return () => resetTimeout();
  }, [currentIndex]);

  return (
 <section className="relative py-15 md:py-0 bg-[#050916] text-white overflow-hidden">
<div className="w-full">
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0A0A0A"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
  {/* Section Header */}
  <div className="text-center mb-16 relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-teal-500 to-violet-500">
      Testimonial
    </h2>
    <p className="text-gray-300 max-w-xl mx-auto">What clients say about Us</p>
  </div>

  {/* Testimonial Card Slider */}
  <div className="flex justify-center items-center relative">
    <div className="w-full max-w-3xl px-8 text-center relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.96 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-10 shadow-xl relative z-10 text-white bg-[#0f1e45]"
        >
          <FaQuoteLeft className="text-4xl mb-6 mx-auto text-cyan-300 opacity-80" />

          <p className="text-lg italic leading-relaxed mb-8">
            “{testimonials[currentIndex].text}”
          </p>

          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white mb-4"
            />

            <h4 className="text-xl font-semibold">
              {testimonials[currentIndex].name}
            </h4>

            <p className="text-cyan-200 mb-3">
              {testimonials[currentIndex].project}
            </p>

            <div className="flex justify-center text-yellow-300">
              {Array(testimonials[currentIndex].rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="mx-1" />
                ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  {/* Navigation Dots */}
  <div className="flex justify-center mt-10 space-x-3 relative z-10">
    {testimonials.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentIndex(i)}
        className={`w-3 h-3 rounded-full transition ${
          i === currentIndex
            ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-violet-500"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
      ></button>
    ))}
  </div>
</section>

  );
};

export default TestimonialsSection;
