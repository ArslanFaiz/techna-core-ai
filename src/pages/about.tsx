import { useEffect, useState,useRef } from "react";
import { AboutUs, ApartSection, FAQ, PremiumSection} from "../features";
import { Link, useNavigate } from "react-router-dom";
import { steps } from "../constants";
import { motion, useViewportScroll, useTransform } from "framer-motion";
const About = () => {
  const [animate, setAnimate] = useState(false);
const navigate = useNavigate();
const handleNavigate = ()=>{
  navigate('/', { state: { scrollTo: "project" } });
}

  useEffect(() => {
    setAnimate(true);
    }, []);
const { scrollY } = useViewportScroll();
  const containerRef = useRef<HTMLDivElement | null>(null); // ✅ specify type
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerTop(containerRef.current.offsetTop); // ✅ optional chaining not needed
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef]);

  const scaleY = useTransform(
    scrollY,
    [containerTop, containerTop + containerHeight],
    [0, 1]
  );
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover
         bg-center px-4 sm:px-6 md:px-12 pt-40 pb-50 md:pb-80 text-center"
        style={{ backgroundImage: "url('/assets/about.svg')" }}
      >
        <div className="w-full">
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#19242f"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl mb-2 lg:text-7xl font-normal text-white font-poppins transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Innovating Technology —
        </h1>
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl mb-2 lg:text-7xl font-bold text-white font-poppins transition-all duration-700 delay-150 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Empowering Businesses
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl mb-2 lg:text-2xl text-white max-w-[850px] text-center mt-6 transition-all duration-700 delay-300 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
We design, build, and optimize custom software, web platforms, and digital solutions for businesses across industries — delivering speed, scalability, and measurable impact.        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button onClick={handleNavigate} className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00000078] border border-[#0065c1] text-white rounded-full font-poppins font-semibold hover:bg-[#0065ca] w-auto transition-all duration-300">
            Work with Us
          </button>
          <Link to={'/form'}>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0065ca] text-white rounded-full font-poppins font-semibold hover:bg-[#005bb5] w-auto transition-all duration-300">
            Book Consultation
          </button>
          </Link>
        </div>
      </section>

{/* About Us Section */}
<AboutUs/>

{/* What Sets Us Apart Section */}
<ApartSection/>
{/* How Work Section */}
<div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-gray-100 
    to-gray-200 py-6 px-4">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center">
        <button className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-blue-600">🤝</span>
          How we work
        </button>

        <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
          Our 4 Stage Process
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          How we transform ideas into exceptional digital experiences through our proven methodology
        </p>
      </div>

      {/* Steps Timeline */}
      <div className="space-y-12 mt-12 flex flex-col items-center">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-12 md:gap-30 items-center md:items-start justify-center w-full max-w-5xl"
          >
            {/* Step Number + Animated Vertical Line */}
            <div className="flex-shrink-0 flex flex-col items-center">
              {/* Step Number */}
              <div className="text-8xl font-bold text-blue-600">{item.step}</div>

              {/* Animated vertical line */}
              {index !== steps.length - 1 && (
                <motion.div
                  className="hidden md:block w-0.5 bg-gradient-to-b from-blue-600 to-blue-400 origin-top"
                  style={{
                    height: '12rem',
                    scaleY: scaleY
                  }}
                />
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 pt-4 text-center md:text-left">
              <div className="text-sm text-gray-500 mb-2 tracking-wider">
                STEP {item.step}
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-20 -mt-1">
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3e6a86"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
{/* Our Services Section */}
<FAQ/>
{/* Our Premium Section */}
<PremiumSection />
    </>
  );
};

export default About;
