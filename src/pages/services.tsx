// HeroSection.jsx
import { useEffect, useState } from "react";
import { FaStar, FaCheckCircle, FaIndustry } from "react-icons/fa";
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
import { IndusSection, PremiumSection } from "../features";
import { Link, useNavigate } from "react-router-dom";
import ServicesSection from "../features/home/services";
const stats = [
  { id: 1, label: "Rated by Clients", value: 5, icon: <FaStar className="w-6 h-6 text-yellow-400" /> },
  { id: 2, label: "Successful Deployments", value: 50, icon: <FaCheckCircle className="w-6 h-6 text-white" /> },
  { id: 3, label: "Industries Trusted Us", value: 10, icon: <FaIndustry className="w-6 h-6 text-white" /> },
];
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
  const handleNavigate = () => {
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
        id="hero"
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
      <ServicesSection />
      {/* Industry Section */}
      <IndusSection industries={industries} />
      {/* Tools Section */}
      <ToolsTechnologies />
      {/* Premium Section */}
      <PremiumSection />


    </>
  );
};

export default HeroSection;
