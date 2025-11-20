import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { services } from "../../constants";

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const serviceVariants = (direction: "left" | "right") => ({
hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
});

const ServicesSection = () => {
const sectionRef = useRef<HTMLDivElement>(null);

return ( <section ref={sectionRef} className="relative w-full bg-white font-poppins overflow-hidden py-20 md:py-10">
{/* HEADER */}
<motion.div
className="text-center max-w-2xl mx-auto px-6 md:px-0 mb-10"
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
> <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm md:text-base">What We Do</p> <h2 className="text-4xl md:text-5xl font-extrabold mt-2 relative inline-block">
Our Services <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 md:w-36 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md"></span> </h2> <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
We deliver modern, high-quality solutions designed to help your business grow. </p>
</motion.div>


  {/* SERVICES */}
  <motion.div
    className="max-w-6xl mx-auto px-6 flex flex-col gap-16 relative"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {/* Timeline line */}
    <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 flex-col items-center">
      <div className="w-1 h-full bg-gray-300/30 rounded-full relative overflow-hidden">
        <motion.div
          className="absolute top-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full shadow-lg shadow-indigo-300/50 origin-top"
          style={{ height: "100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
    <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gray-300/50 rounded-full z-0" />

    {services.map((service, idx) => {
      const isLeft = idx % 2 === 0;
      const itemRef = useRef<HTMLDivElement>(null);
      const inView = useInView(itemRef, { once: false, margin: "-50% 0px -50% 0px" });

      return (
        <motion.div key={service.id} ref={itemRef} variants={serviceVariants(isLeft ? "left" : "right")} className="relative flex items-start gap-6 md:gap-12">
          {/* Timeline Ball */}
          <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 flex-col items-center z-10">
            <motion.div
              className={`w-4 h-4 rounded-full mb-16 shadow-lg shadow-indigo-400/50 transition-colors duration-500 ${
                inView ? "bg-indigo-500 animate-pulse-glow" : "bg-gray-400"
              }`}
              animate={{
                scale: inView ? [1, 1.5, 1] : 1,
                boxShadow: inView
                  ? "0 0 20px 5px rgba(99, 102, 241, 0.6)"
                  : "0 0 0px 0px rgba(0,0,0,0)",
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className={`flex-1 flex ${isLeft ? "justify-start" : "justify-end"}`}>
            <div className={`flex flex-col items-${isLeft ? "start" : "end"} space-y-4 max-w-md`}>
              {/* Floating Icon */}
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 text-indigo-600 text-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                animate={{ y: ["0%", "-15%", "0%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <FaCheckCircle className="w-6 h-6 md:w-8 md:h-8" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 transition-all duration-300">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  >
                    <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-indigo-500 flex-shrink-0 animate-pulse-slow" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      );
    })}
  </motion.div>

  {/* Premium Background Blobs */}
  <motion.div
    className="absolute -top-32 -left-32 w-80 h-80 md:w-96 md:h-96 bg-indigo-300/20 rounded-full blur-[160px] pointer-events-none"
    animate={{ rotate: 15, y: [0, 15, 0], x: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute -bottom-32 -right-32 w-80 h-80 md:w-96 md:h-96 bg-pink-300/20 rounded-full blur-[160px] pointer-events-none"
    animate={{ rotate: -15, y: [0, -15, 0], x: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
  />
</section>

);
};

export default ServicesSection;
