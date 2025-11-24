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
setCurrentIndex(prev => (prev + 1) % totalLogos);
}, 2000);


return () => clearInterval(interval);


}, []);

useEffect(() => {
if (!sliderRef.current) return;


const logoWidth = sliderRef.current.children[0].clientWidth + 32; // 32px space for smaller icons
const x = -currentIndex * logoWidth;

controls.start({
  x,
  transition: { duration: 1, ease: "easeInOut" },
});


}, [currentIndex, controls]);

return ( 
<section className="relative w-full h-20 md:h-40 overflow-hidden bg-gray-100 flex items-center">
<motion.div
ref={sliderRef}
className="flex items-center space-x-7 md:space-x-8"
animate={controls}
>
{[...techLogos, ...techLogos].map((logo, idx) => ( <img
         key={idx}
         src={logo.src}
         alt={logo.alt}
         className="w-12 h-12 md:w-16 md:h-16 object-contain"
       />
))}
</motion.div> 
</section>
);
};

export default ContinuousTechStackSection;
