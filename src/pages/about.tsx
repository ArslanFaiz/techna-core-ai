import { useEffect, useState } from "react";
import { AboutUs, ApartSection, PremiumSection, ServiceSection } from "../features";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const [animate, setAnimate] = useState(false);
const navigate = useNavigate();
const handleNavigate = ()=>{
  navigate('/', { state: { scrollTo: "project" } });
}

  useEffect(() => {
    setAnimate(true);
    }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-12 py-20 text-center"
        style={{ backgroundImage: "url('/assets/about.svg')" }}
      >
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-white font-poppins transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Innovating Technology —
        </h1>
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-poppins transition-all duration-700 delay-150 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Empowering Businesses
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-[850px] text-center mt-6 transition-all duration-700 delay-300 ${
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

{/* Our Services Section */}
<ServiceSection/>
{/* Our Premium Section */}
<PremiumSection />
    </>
  );
};

export default About;
