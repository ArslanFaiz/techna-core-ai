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
    <section className="relative py-28 bg-white text-gray-800 overflow-hidden">
      {/* Decorative gradient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-cyan-300 via-teal-300 to-violet-300 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-cyan-300 via-teal-300 to-violet-300 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-teal-500 to-violet-500">
          Testimonial
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">What clients say about Us</p>
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
              className="rounded-3xl p-10 shadow-xl relative z-10 text-white bg-gradient-to-r from-teal-800 via-cyan-700 to-violet-800"
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
                <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-cyan-200 mb-3">{testimonials[currentIndex].project}</p>
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
