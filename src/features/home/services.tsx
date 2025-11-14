// ServicesSection.jsx
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { services } from "../../constants";

const cardDirections = ["bottom", "left", "right", "top", "bottom"];

  const ServicesSection = () => {
    const [_animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const getCardInitial = (idx: number) => {
    const dir = cardDirections[idx % cardDirections.length];
    switch (dir) {
      case "bottom":
        return { opacity: 0, y: 60, x: 0, scale: 0.95 };
      case "left":
        return { opacity: 0, x: -60, y: 0, scale: 0.95 };
      case "right":
        return { opacity: 0, x: 60, y: 0, scale: 0.95 };
      case "top":
        return { opacity: 0, y: -60, x: 0, scale: 0.95 };
      default:
        return { opacity: 0, y: 60, x: 0, scale: 0.95 };
    }
  };

  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-28"
      >
        <p className="text-indigo-500 font-semibold text-lg md:text-xl uppercase tracking-wider">
          What We Do
        </p>
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 relative inline-block"
        >
          Services
          <span className="absolute left-0 bottom-[-12px] w-full h-2 rounded-full bg-gradient-to-r from-blue-500 to-black"></span>
        </motion.h2>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={getCardInitial(idx)}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-blue-500 to-black rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-500 overflow-hidden flex flex-col justify-between min-h-[550px] group"
          >
            {/* Decorative gradient circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-300/20 filter blur-3xl transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-black/20 filter blur-3xl transition-all duration-500 group-hover:scale-110"></div>

            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl pointer-events-none"></div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/90 text-base md:text-lg">{service.description}</p>
              </div>

              <ul className="flex flex-col gap-3 mt-4">
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center gap-3 text-white/90 font-medium hover:text-blue-300 transition-colors duration-300"
                  >
                    <FaCheckCircle className="w-5 h-5 text-blue-300 animate-pulse-slow" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-black text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default ServicesSection;
