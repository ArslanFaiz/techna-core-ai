import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiDjango,
  SiRubyonrails,
  SiNestjs,
  SiFlask,
} from "react-icons/si";

const tools = {
  frontend: [
    { icon: FaVuejs, title: "Vue JS" },
    { icon: SiNextdotjs, title: "Next JS" },
    { icon: FaReact, title: "React JS" },
    { icon: SiTypescript, title: "TypeScript" },
    { icon: FaJs, title: "JavaScript" },
    { icon: FaHtml5, title: "HTML 5" },
    { icon: FaCss3Alt, title: "CSS 3" },
  ],
  backend: [
    { icon: SiDjango, title: "Django" },
    { icon: SiRubyonrails, title: "Ruby on Rails" },
    { icon: SiNestjs, title: "Nest JS" },
    { icon: FaNodeJs, title: "Node JS" },
    { icon: FaPython, title: "Python" },
    { icon: SiFlask, title: "Flask" },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ToolsTechSection = () => {
  return (<section className="w-full py-20 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"> <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold mb-6
bg-gradient-to-r from-blue-600 via-purple-600 to-black bg-clip-text text-transparent"
    >
      Tools & Technologies
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-gray-600 max-w-3xl mx-auto mb-16 md:mb-10 text-lg"
    >
      We leverage modern technologies to build high-performance, scalable, and future-ready solutions.
    </motion.p>

    {Object.entries(tools).map(([category, items]) => (
      <motion.div key={category} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.h3
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-semibold mb-10 text-gray-900 capitalize"
        >
          {category}
        </motion.h3>
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {items.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative flex flex-col items-center justify-center gap-3 p-5 rounded-full
                         bg-white/40 backdrop-blur-md shadow-lg
                         hover:shadow-[0_20px_40px_rgba(0,101,202,0.25)]
                         transition-all duration-500 cursor-default"
            >
              {/* Floating Icon */}
              <motion.div
                animate={{ y: ["0%", "-6%", "0%"], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="p-4 rounded-full bg-gradient-to-tr from-blue-100 to-purple-200 text-[#0065ca] text-4xl md:text-5xl shadow-md"
              >
                <tool.icon />
              </motion.div>
              <p className="text-sm md:text-base font-semibold text-gray-800">{tool.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    ))}
  </div>

    {/* Background Glowing Blobs */}
    <motion.div
      className="absolute -top-40 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-[180px] pointer-events-none"
      animate={{ rotate: [0, 15, 0], y: [0, 20, 0], x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-40 -right-32 w-96 h-96 bg-purple-200/20 rounded-full blur-[180px] pointer-events-none"
      animate={{ rotate: [0, -15, 0], y: [0, -20, 0], x: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 26, ease: "easeInOut" }}
    />
  </section>

  );
};

export default ToolsTechSection;
