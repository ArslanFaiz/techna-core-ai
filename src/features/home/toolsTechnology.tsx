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

type ToolCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ToolCard = ({ icon: Icon, title }: ToolCardProps) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ scale: 1.12 }}
    className="relative flex flex-col items-center gap-4 p-8 rounded-3xl
               bg-white/60 backdrop-blur-xl 
               border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]
               hover:shadow-[0_10px_40px_rgba(0,101,202,0.25)]
               transition-all duration-300 group"
  >
    {/* Premium gradient ring behind icon */}
    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                    transition-all duration-500 blur-2xl
                    bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-3xl" />

    <Icon className="text-5xl text-[#0065ca] group-hover:text-blue-600 transition-all" />
    <p className="font-semibold text-gray-800 text-lg">{title}</p>
  </motion.div>
);

const ToolsTechSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Gradient Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 
                     bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent"
        >
          Tools & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
        >
          We use top-notch modern technologies to deliver high-performance, scalable, and
          future-ready digital solutions.
        </motion.p>

        {/* Frontend */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-semibold mb-8 text-gray-900"
        >
          Frontend
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20"
        >
          <ToolCard icon={FaVuejs} title="Vue JS" />
          <ToolCard icon={SiNextdotjs} title="Next JS" />
          <ToolCard icon={FaReact} title="React JS" />
          <ToolCard icon={SiTypescript} title="TypeScript" />
          <ToolCard icon={FaJs} title="JavaScript" />
          <ToolCard icon={FaHtml5} title="HTML 5" />
          <ToolCard icon={FaCss3Alt} title="CSS 3" />
        </motion.div>

        {/* Backend */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-semibold mb-8 text-gray-900"
        >
          Backend
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          <ToolCard icon={SiDjango} title="Django" />
          <ToolCard icon={SiRubyonrails} title="Ruby on Rails" />
          <ToolCard icon={SiNestjs} title="Nest JS" />
          <ToolCard icon={FaNodeJs} title="Node JS" />
          <ToolCard icon={FaPython} title="Python" />
          <ToolCard icon={SiFlask} title="Flask" />
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsTechSection;
