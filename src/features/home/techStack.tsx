// ContinuousTechStackSection.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const techLogos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "Redux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", alt: "Vite" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", alt: "GraphQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
];

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
