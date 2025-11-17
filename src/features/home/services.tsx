// ServicesSection.tsx
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { services } from "../../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <section className="w-full py-28 bg-white text-gray-900 font-poppins">
      {/* ================= HEADER ================= */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-20"
      >
        <p className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
          What We Do
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-3 relative inline-block">
          Our Services
          <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          We deliver modern, high-quality solutions designed to help your business grow.
        </p>
      </motion.div>

      {/* ================= SERVICES GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: idx * 0.15 },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white shadow-[0_6px_25px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                       transition-all duration-500 rounded-3xl p-10 border border-gray-200 hover:border-indigo-300
                       hover:-translate-y-2 group min-h-[470px] flex flex-col justify-between"
          >
            {/* Card Title */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                {service.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="flex flex-col gap-3 mt-6">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <FaCheckCircle className="w-5 h-5 text-indigo-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full 
                               shadow-md hover:bg-indigo-700 transition duration-300">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
