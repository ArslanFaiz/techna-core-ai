import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { serviceses } from "../../constants";

const fadeInLeft = {
hidden: { opacity: 0, x: -60 },
show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const fadeInRight = {
hidden: { opacity: 0, x: 60 },
show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const AnimatedFeature = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
<motion.div
className="flex items-center gap-3 mt-4 text-white"
initial={{ opacity: 0, x: -10 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}

>

<motion.div

  className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg"
  animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0], scale: [1, 1.25, 1] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
>
  <Icon className="w-5 h-5" />
</motion.div>
<span className="font-medium text-white hover:text-cyan-400 transition-colors">{text}</span>


</motion.div>
);

const ServicesSection = () => (

  <section className="relative w-full pt-0 pb-10 bg-[#04294E] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 text-white hover:scale-105 transition-transform duration-500"
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
      className={`flex flex-row-reverse items-center gap-4 md:flex-row md:items-center md:justify-evenly md:gap-12 ${
        idx % 2 === 0 ? "" : "md:flex-row-reverse"
      }`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Icon */}
      <motion.div
        className="flex-shrink-0 p-4 md:p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-cyan-500/50 shadow-cyan-600/40 shadow-lg cursor-pointer hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300 w-fit h-fit"
        animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <service.Icon className="w-8 h-8 md:w-16 md:h-16 text-cyan-400" />
      </motion.div>

      {/* Text + Features */}
      <motion.div
        className="flex-1 text-left md:text-left md:max-w-xl"
        variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-white hover:text-cyan-400 transition-colors duration-300 hover:scale-105">
          {service.title}
        </h3>

        <p className="mt-4 text-gray-300">{service.description}</p>

        <div className="mt-6 flex flex-col items-start space-y-3 flex-wrap gap-x-2">
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
