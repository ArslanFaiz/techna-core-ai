import { useEffect, useState } from "react";
import { FaStar, FaCheckCircle, FaIndustry } from "react-icons/fa";

// Hero Section Stats
const stats = [
  { id: 1, label: "Rated by Clients", value: 5, icon: <FaStar className="w-6 h-6 text-yellow-400" /> },
  { id: 2, label: "Successful Deployments", value: 50, icon: <FaCheckCircle className="w-6 h-6 text-white" /> },
  { id: 3, label: "Industries Trusted Us", value: 10, icon: <FaIndustry className="w-6 h-6 text-white" /> },
];

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    setAnimate(true);

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
        className="w-full min-h-screen flex flex-col items-center justify-center
        bg-cover bg-center px-4 sm:px-6 md:px-12 py-15
        text-center relative overflow-hidden"
        // style={{ backgroundImage: "url('/assets/ai_web.mp4')" }}
      >

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/assets/ai_web.mp4" type="video/mp4" />
        </video>

        {/* Headings */}
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
          font-normal text-white font-poppins 
          transition-all duration-700 
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          The Core Of
        </h1>

        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-bold text-white font-poppins 
          transition-all duration-700 delay-150 
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Intelligent Transformation
        </h2>

        {/* Paragraph */}
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl 
          text-white max-w-[850px] text-center mt-6 
          transition-all duration-700 delay-300 
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          From custom websites to enterprise-grade AI software, we engineer solutions
          that help businesses scale faster, work smarter, and stay ahead in the digital age.
        </p>

        {/* Stats */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center 
          gap-8 sm:gap-12 mt-12 
          transition-all duration-700 delay-400 
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div
            className={`flex flex-row items-center justify-center gap-8 sm:gap-12 mt-12 transition-all duration-700 delay-400 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {stats.map((stat, idx) => (
              <div key={stat.id} className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center h-[64px]">
                  {stat.id === 1 ? (
                    <img src="/assets/star-rating.svg" alt="rating" width={150} height={20} className="object-contain" />
                  ) : (
                    <span className="text-[48px] sm:text-[54px] md:text-[64px] font-bold text-white">
                      {Math.round(counters[idx])}+
                    </span>
                  )}
                </div>
                <p className="text-[16px] sm:text-[17px] md:text-[19px] text-white/80 text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          className={`mt-10 px-6 sm:px-8 py-3 sm:py-4 
          bg-blue-600 text-white rounded-full 
          font-poppins font-semibold 
          hover:bg-blue-700 w-auto
          transition-all duration-300 
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Get Your Free Consultation
        </button>

      </section>
    </>
  );
};

export default Hero;
