// HeroSection.jsx
import { useEffect, useState } from "react";
import { FaStar, FaCheckCircle, FaIndustry } from "react-icons/fa";
import { motion } from "framer-motion";
import { services } from "../constants";
import {
  FaRobot,
  FaChartLine,
  FaCamera,
  FaMicrophone,
  FaLanguage,
  FaCogs,
  FaShieldAlt,
  FaBullhorn,
} from "react-icons/fa";
import ToolsTechnologies from "../features/home/toolsTechnology";
import { PremiumSection } from "../features";
import { Link, useNavigate } from "react-router-dom";
const stats = [
  { id: 1, label: "Rated by Clients", value: 5, icon: <FaStar className="w-6 h-6 text-yellow-400" /> },
  { id: 2, label: "Successful Deployments", value: 50, icon: <FaCheckCircle className="w-6 h-6 text-white" /> },
  { id: 3, label: "Industries Trusted Us", value: 10, icon: <FaIndustry className="w-6 h-6 text-white" /> },
];

const cardDirections = ["bottom", "left", "right", "top", "bottom"];
interface Industry {
  name: string;
  icon: React.ComponentType<{ size?: string | number; color?: string }>;
}
const industries: Industry[] = [
  { name: "AI Chatbots & Virtual Assistants", icon: FaRobot },
  { name: "Predictive Analytics & Forecasting", icon: FaChartLine },
  { name: "Computer Vision & Image Recognition", icon: FaCamera },
  { name: "Voice-Activated Applications", icon: FaMicrophone },
  { name: "NLP for Text Analysis & Translation", icon: FaLanguage },
  { name: "AI Process Automation", icon: FaCogs },
  { name: "Fraud Detection & Risk Scoring", icon: FaShieldAlt },
  { name: "AI-Powered Marketing Optimization", icon: FaBullhorn },
];
const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
const navigate = useNavigate();
const handleNavigate = ()=>{
    navigate("/", { state: { scrollTo: "project" } });
}

  useEffect(() => {
    setAnimate(true);

    
    // Animate counters
    const intervals = stats.map((stat, idx) => {
      const increment = stat.value / 100;
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[idx] < stat.value) {
            newCounters[idx] = Math.min(newCounters[idx] + increment, stat.value);
          }
          return newCounters;
        });
      }, 15);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-12 py-20 text-center"
        style={{ backgroundImage: "url('/assets/services-section.svg')" }}
      >
        {/* Headings */}
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-small text-white font-poppins transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          From Concept to Code —
        </h1>
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-poppins transition-all duration-700 delay-150 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          We Turn Ideas Into Impact
        </h2>

        {/* Paragraph */}
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-[850px] text-center mt-6 transition-all duration-700 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          We design, build, and optimize custom software, web platforms, and digital solutions for businesses across industries — delivering speed, scalability, and measurable impact.
        </p>

        {/* Stats */}
        <div
          className={`flex flex-row items-center justify-center gap-8 sm:gap-12 mt-12 transition-all duration-700 delay-400 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {stats.map((stat, idx) => (
            <div key={stat.id} className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center h-[64px]">
                {stat.id === 1 ? (
                  <img src="/assets/star-rating.svg" alt="rating" width={150} height={20} className="object-contain" />
                ) : (
                  <span className="text-[48px] sm:text-[54px] md:text-[64px] font-bold text-white">{Math.round(counters[idx])}+</span>
                )}
              </div>
              <p className="text-[16px] sm:text-[17px] md:text-[19px] text-white/80 text-center">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          
          <button 
          onClick={handleNavigate} 
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00000078] border border-[#0065c1] text-white rounded-full font-poppins font-semibold hover:bg-[#0065ca] w-auto transition-all duration-300">
            Estimate My Project
          </button>
<Link to={'/form'}>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0065ca] text-white rounded-full font-poppins font-semibold hover:bg-[#005bb5] w-auto transition-all duration-300">
            Book a Consultation
          </button>
</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24"
        >
          <p className="text-indigo-500 font-semibold text-lg md:text-xl uppercase tracking-wider">What We Do</p>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 relative inline-block"
          >
            Services
            <span className="absolute left-0 bottom-[-12px] w-full h-2 rounded-full bg-gradient-to-r from-blue-500 to-black"></span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={cardDirections[idx % cardDirections.length] === "bottom" ? { opacity: 0, y: 60, x: 0, scale: 0.95 } : {}}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-blue-500 to-black rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-500 overflow-hidden flex flex-col justify-between min-h-[550px]"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-300/20 filter blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-black/20 filter blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/90 text-base md:text-lg">{service.description}</p>
                </div>

                <ul className="flex flex-col gap-3 mt-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-white/90 font-medium hover:text-blue-300 transition-colors duration-300">
                      <FaCheckCircle className="w-5 h-5 text-blue-300 animate-pulse-slow" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-black text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      </section>
{/* Industry Section */}
 {/* Industry Section */}
<section className="py-24 px-4 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">

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
<ToolsTechnologies />
<PremiumSection />
      
      
    </>
  );
};

export default HeroSection;
