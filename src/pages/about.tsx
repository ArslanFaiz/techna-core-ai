import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PremiumSection } from "../features";
import { Link, useNavigate } from "react-router-dom";


const About = () => {
  const [animate, setAnimate] = useState(false);
const navigate = useNavigate();
const handleNavigate = ()=>{
  navigate('/', { state: { scrollTo: "project" } });
}
  // Trigger animation on mount
  useEffect(() => {
    setAnimate(true);
    }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-12 py-20 text-center"
        style={{ backgroundImage: "url('/assets/about.svg')" }}
      >
        {/* Headings */}
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-small text-white font-poppins transition-all duration-700 ${
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

        {/* Paragraph */}
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-[850px] text-center mt-6 transition-all duration-700 delay-300 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
We design, build, and optimize custom software, web platforms, and digital solutions for businesses across industries — delivering speed, scalability, and measurable impact.        </p>
        {/* Buttons */}
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
<section className="w-full bg-white py-20 px-4 sm:px-6 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
    {/* Left Content */}
    <div className="flex-1 space-y-6">
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-poppins"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        About Us
      </motion.h3>

      <motion.h4
        className="text-2xl sm:text-3xl font-semibold text-gray-700 font-poppins"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Who We Are
      </motion.h4>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Technacore AI is a well-established technology solutions provider specializing in AI integration and full-stack software development.
        From concept to deployment, we help businesses transform their ideas into scalable, intelligent digital products that drive measurable results.
      </motion.p>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        With years of experience across multiple industries — including finance, healthcare, retail, and logistics — we’ve built a reputation for delivering projects on time, on budget, and beyond expectations.
      </motion.p>
    </div>

    {/* Right Content - Mission & Vision Cards */}
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h5 className="text-xl font-bold mb-2 font-poppins">Our Mission</h5>
        <p className="text-sm sm:text-base font-light font-poppins">
          To empower businesses with future-ready technology by combining AI-driven intelligence, robust engineering, and user-centric design. Technology should be practical, profitable, and powerful — not just trendy.
        </p>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h5 className="text-xl font-bold mb-2 font-poppins">Our Vision for the Future</h5>
        <p className="text-sm sm:text-base font-light font-poppins">
          We see a future where every business, regardless of size, can leverage AI to gain a competitive edge. Our goal is to make enterprise-level AI and software innovation accessible for all.
        </p>
      </motion.div>
    </div>
  </div>
</section>

{/* What Sets Us Apart Section */}
<section className="w-full bg-gray-50 py-20 px-4 sm:px-6 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
    
    {/* Left Side - Heading */}
    <div className="flex-1 space-y-6">
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-poppins"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h3>

      <motion.h4
        className="text-2xl sm:text-3xl font-semibold text-gray-700 font-poppins"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        What Sets Us Apart
      </motion.h4>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        We combine technical mastery, AI integration, and a client-first approach to deliver impactful digital solutions across industries.
      </motion.p>
    </div>

    {/* Right Side - Features List */}
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Feature 1 */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h5 className="text-lg font-bold mb-2 font-poppins">End-to-End Expertise</h5>
        <p className="text-gray-600 text-sm sm:text-base">
          We cover the entire development lifecycle: planning, design, development, AI model integration, testing, deployment, and optimization.
        </p>
      </motion.div>

      {/* Feature 2 */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h5 className="text-lg font-bold mb-2 font-poppins">AI as a Core Strength</h5>
        <p className="text-gray-600 text-sm sm:text-base">
          From chatbots to predictive analytics and computer vision, AI isn’t an add-on — it’s part of our DNA.
        </p>
      </motion.div>

      {/* Feature 3 */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h5 className="text-lg font-bold mb-2 font-poppins">Full-Stack Development Mastery</h5>
        <p className="text-gray-600 text-sm sm:text-base">
          Frontend, backend, APIs, databases, and cloud — we build complete, integrated solutions.
        </p>
      </motion.div>

      {/* Feature 4 */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h5 className="text-lg font-bold mb-2 font-poppins">Client-First Approach</h5>
        <p className="text-gray-600 text-sm sm:text-base">
          We work closely with you to ensure your vision is translated into functional, high-impact technology.
        </p>
      </motion.div>
    </div>
  </div>
</section>
{/* Our Services Section */}
<section className="w-full bg-gray-100 py-20 px-4 sm:px-6 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
    
    {/* Section Header */}
    <motion.div
      className="text-center space-y-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-poppins">
        About Us
      </h3>
      <h4 className="text-2xl sm:text-3xl font-semibold text-gray-700 font-poppins">
        Our Services at a Glance
      </h4>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      
      {/* Service 1 */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h5 className="text-lg font-bold mb-2 font-poppins">AI Integration & Automation</h5>
        <p className="text-gray-600 text-sm sm:text-base">
          Implement AI features such as natural language processing, computer vision, and intelligent recommendation engines.
        </p>
      </motion.div>

      {/* Service 2 */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h5 className="text-lg font-bold mb-2 font-poppins">Web & Mobile Applications</h5>
        <p className="text-gray-600 text-sm sm:text-base">
          Scalable, secure, and performance-driven apps for businesses of all sizes.
        </p>
      </motion.div>

      {/* Service 3 */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h5 className="text-lg font-bold mb-2 font-poppins">Custom Software Solutions</h5>
        <p className="text-gray-600 text-sm sm:text-base">
          Fully tailored platforms designed for your specific operational needs.
        </p>
      </motion.div>

      {/* Service 4 */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h5 className="text-lg font-bold mb-2 font-poppins">Ongoing Optimization & Support</h5>
        <p className="text-gray-600 text-sm sm:text-base">
          Continuous monitoring, performance tuning, and feature enhancements.
        </p>
      </motion.div>

    </div>
  </div>
</section>
<PremiumSection />
    </>
  );
};

export default About;
