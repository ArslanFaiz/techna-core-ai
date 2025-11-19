// IndusSection.tsx
import { motion } from "framer-motion";

interface Industry {
  name: string;
  icon: React.ComponentType;
}

interface IndusSectionProps {
  industries: Industry[];
}

const IndusSection: React.FC<IndusSectionProps> = ({ industries }) => {
  return (
 <section className="py-10 md:py-24 px-4 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">

      {/* Soft Background Lights */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-md"
        >
          Industries We Serve
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto"
        >
          Our cross-industry expertise means we understand your challenges and can
          tailor solutions that fit your world.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6 }
                  }
                }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0px 10px 35px rgba(0,0,0,0.15)"
                }}
                className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/40 transition-all duration-300 cursor-pointer hover:-translate-y-2"
              >
                {/* Icon */}
                <motion.div
                  className="text-indigo-600 dark:text-indigo-400 mb-6 text-6xl"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2.2,
                    ease: "easeInOut",
                    delay: i * 0.15
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Icon />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white leading-snug"
                  whileHover={{ y: -3 }}
                >
                  {industry.name}
                </motion.h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IndusSection;
