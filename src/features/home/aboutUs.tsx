import { Phone } from "lucide-react";
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion, useInView } from "framer-motion"

export default function About() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdownItems = [
    {
      title: '01. Our History',
      content: 'Alter is a Framer template designed to help you build professional, enterprise-ready AI agent websites quickly and efficiently.'
    },
    {
      title: '02. Our Mission',
      content: 'Our mission is to empower businesses with cutting-edge AI solutions that drive innovation and growth.'
    },
    {
      title: '03. Our Vision',
      content: 'We envision a future where AI seamlessly integrates with human creativity to unlock unprecedented possibilities.'
    }
  ];
const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (

 <div className="min-h-screen bg-[#19242f] overflow-hidden">
  <section className="px-4 sm:px-6 md:px-12" ref={sectionRef}>
    <div className="max-w-6xl mx-auto">

      {/* Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          whileHover={{
            scale: 1.07,
            rotate: 1,
            boxShadow: "0 0 20px rgba(255,255,255,0.25)"
          }}
          className="inline-flex items-center justify-center gap-2 bg-gray-800 rounded-full px-4 py-2 shadow-sm mb-6"
        >
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-white font-medium">Hey There</span>
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        whileHover={{
          scale: 1.03,
          textShadow: "0 0 18px rgba(255,255,255,0.6)"
        }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-light mb-4 text-white">
          About Us
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">Welcome to Tomorrowbyte!</p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* Left Card (Fade From Left) */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            rotateX: 3,
            rotateY: -3,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10"
        >
          <button className="bg-white/10 px-4 py-2 rounded-full text-sm mb-4 sm:mb-6 flex items-center gap-2 border border-white/20 text-gray-200 hover:shadow-[0_0_25px_rgba(0,123,255,0.6)]">
            <div className="w-4 h-4 rounded-full border-2 border-blue-400"></div>
            Who we are
          </button>

          <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 flex items-center gap-2 text-white">
            <span className="text-blue-400 text-xl sm:text-2xl">📊</span>
            About our Company
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            Let's get acquainted! We're not your average digital marketing agency - we're a team of passionate individuals who eat, sleep, and breathe creativity, innovation, and all things digital. At Tomorrowbyte, we're on a mission to make your online dreams come true, one pixel at a time!
          </p>
        </motion.div>

        {/* Right Dropdown Section (Fade From Right) */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          {dropdownItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                rotateX: 3,
                rotateY: 3,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 overflow-hidden transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleDropdown(index)}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.25)"
                }}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-white/20 transition-colors text-white text-sm sm:text-base"
              >
                <span className="font-light">{item.title}</span>
                {openDropdown === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </motion.button>

              <AnimatePresence>
                {openDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-4 sm:px-6 pb-4 text-gray-300 text-sm sm:text-base"
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  </section>
</div>


  );
}
