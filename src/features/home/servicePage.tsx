import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { serviceses } from "../../constants";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// Animated Feature Component
const AnimatedFeature = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <motion.div
    className="flex items-center gap-3 mt-4 text-white"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}

  >


    <motion.div


      className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 via-cyan-400 to-white text-white shadow-lg"
      animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0], scale: [1, 1.25, 1] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <Icon className="w-5 h-5" />
    </motion.div>
    <span className="font-medium text-white hover:text-cyan-400 transition-colors">{text}</span>


  </motion.div>
);

const ServicesSection = () => (

  <section className="relative w-full py-24 bg-gradient-to-b from-black to-blue-900 overflow-hidden">
    {/* Background Blobs */}
    <motion.div
      className="absolute -top-40 left-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 blur-[180px] pointer-events-none"
      animate={{ rotate: [0, 20, 0], x: [0, 30, -20], y: [0, 15, -10] }}
      transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-36 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-800 to-purple-500 opacity-15 blur-[180px] pointer-events-none"
      animate={{ rotate: [0, -20, 0], x: [0, -25, 10], y: [0, -10, 20] }}
      transition={{ repeat: Infinity, duration: 32, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-700 opacity-15 blur-[120px] pointer-events-none"
      animate={{ rotate: [0, 15, -15, 0], x: [0, -10, 10, 0], y: [0, 5, -5, 0] }}
      transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
    />

    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-500"
      >
        Our Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-300 max-w-3xl mx-auto mb-20 text-lg"
      >
        We provide scalable, secure, and innovative solutions that transform ideas into high-performance products.
      </motion.p>

      <div className="space-y-10">
        {serviceses.map((service, idx) => (
          <motion.div
            key={service.id}
            className={`flex flex-col md:flex-row items-center justify-evenly gap-12  ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Glassmorphic Floating Icon */}
            <motion.div
              className="flex-shrink-0 p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-blue-400 shadow-lg cursor-pointer hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
              animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <service.Icon className="w-16 h-16 text-cyan-400" />
            </motion.div>

            {/* Text Content */}
            <motion.div className="max-w-xl text-left" variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-cyan-400 transition-colors duration-300 hover:scale-105">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {service.description.split(" ").map((word, i) =>
                  i % 7 === 0 ? (
                    <span key={i} className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-white">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </p>

              {/* Features */}
              <div className="mt-6 space-y-3">
                {service.features.map((f, i) => (
                  <AnimatedFeature key={i} icon={FaCheckCircle} text={f} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>


  </section>
);

export default ServicesSection;
