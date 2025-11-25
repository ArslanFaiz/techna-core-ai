import { motion } from "framer-motion";

import { services } from "../../constants";

const ServicesSection = () => {
  return (
    <section className="w-full py-28 bg-[#04294E] text-gray-900 font-poppins">
      {/* ================= HEADER ================= */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center font-extrabold mb-6 text-white hover:scale-105 transition-transform duration-500"
      >
        Our Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-300 text-center max-w-3xl mx-auto mb-20 text-lg"
      >
        We provide scalable, secure, and innovative solutions that transform ideas into high-performance products.
      </motion.p>

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
             className="bg-white shadow-[0_6px_25px_rgba(0,0,0,0.07)] 
             hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]
             transition-all duration-500 rounded-3xl p-10 border border-gray-200 
             group hover:border-indigo-600  /* <-- updated */
             hover:-translate-y-2 min-h-[470px] flex flex-col justify-between"
          >
            {/* Card Content */}
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full 
                         shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
