// ContinuousTechStackSection.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { techLogos } from "../../constants";

const ContinuousTechStackSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalLogos = techLogos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // calculate next index
      setCurrentIndex(prev => (prev + 1) % totalLogos);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;

    const logoWidth = sliderRef.current.children[0].clientWidth + 48; // 48px is space-x-12
    const x = -currentIndex * logoWidth;

    controls.start({
      x,
      transition: { duration: 1, ease: "easeInOut" }, // smooth slide
    });
  }, [currentIndex, controls]);

  return (
    <section className="relative w-full h-40 overflow-hidden bg-gray-100 flex items-center">
      <motion.div
        ref={sliderRef}
        className="flex items-center space-x-12"
        animate={controls}
      >
        {/* Render logos twice for seamless loop */}
        {[...techLogos, ...techLogos].map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="w-16 h-16 object-contain"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ContinuousTechStackSection;
