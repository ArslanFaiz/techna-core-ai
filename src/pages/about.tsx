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
<section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
  <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-0"></div>
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 relative z-10">
    {/* Left Content */}
    <div className="flex-1 space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="inline-block mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full tracking-wide uppercase">
            About Us
          </span>
        </motion.div>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 font-poppins leading-tight">
          Who We Are
        </h3>
      </motion.div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
          Technacore AI is a well-established technology solutions provider specializing in AI integration and full-stack software development.
          From concept to deployment, we help businesses transform their ideas into scalable, intelligent digital products that drive measurable results.
        </p>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
          With years of experience across multiple industries — including finance, healthcare, retail, and logistics — we've built a reputation for delivering projects on time, on budget, and beyond expectations.
        </p>
      </motion.div>

      <motion.div
        className="flex items-center gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white shadow-lg"
              whileHover={{ scale: 1.2, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
        <p className="text-slate-600 font-medium">Trusted by 200+ clients worldwide</p>
      </motion.div>
    </div>

    {/* Right Content - Mission & Vision Cards */}
    <div className="flex-1 grid grid-cols-1 gap-8">
      <motion.div
        className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10">
          <motion.div
            className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
          <h5 className="text-2xl font-bold mb-3 text-slate-900 font-poppins">Our Mission</h5>
          <p className="text-base text-slate-600 leading-relaxed">
            To empower businesses with future-ready technology by combining AI-driven intelligence, robust engineering, and user-centric design. Technology should be practical, profitable, and powerful — not just trendy.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10">
          <motion.div
            className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </motion.div>
          <h5 className="text-2xl font-bold mb-3 text-slate-900 font-poppins">Our Vision for the Future</h5>
          <p className="text-base text-slate-600 leading-relaxed">
            We see a future where every business, regardless of size, can leverage AI to gain a competitive edge. Our goal is to make enterprise-level AI and software innovation accessible for all.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* What Sets Us Apart Section */}
<section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <motion.div
      className="text-center mb-16 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        className="inline-block text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full tracking-wide uppercase mb-4"
        whileHover={{ scale: 1.05 }}
      >
        Our Competitive Edge
      </motion.span>
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-poppins mb-6 leading-tight">
        What Sets Us Apart
      </h3>
      <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
        We combine technical mastery, AI integration, and a client-first approach to deliver impactful digital solutions across industries.
      </p>
    </motion.div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "End-to-End Expertise",
          description: "We cover the entire development lifecycle: planning, design, development, AI model integration, testing, deployment, and optimization.",
          color: "from-blue-500 to-cyan-500",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          delay: 0
        },
        {
          title: "AI as a Core Strength",
          description: "From chatbots to predictive analytics and computer vision, AI isn't an add-on — it's part of our DNA.",
          color: "from-violet-500 to-fuchsia-500",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ),
          delay: 0.1
        },
        {
          title: "Full-Stack Development Mastery",
          description: "Frontend, backend, APIs, databases, and cloud — we build complete, integrated solutions.",
          color: "from-emerald-500 to-teal-500",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          delay: 0.2
        },
        {
          title: "Client-First Approach",
          description: "We work closely with you to ensure your vision is translated into functional, high-impact technology.",
          color: "from-orange-500 to-red-500",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          delay: 0.3
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: feature.delay }}
          whileHover={{ y: -10, scale: 1.02 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

          <div className="relative z-10">
            <motion.div
              className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl text-white`}
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {feature.icon}
            </motion.div>

            <h5 className="text-xl font-bold mb-4 text-white font-poppins group-hover:text-blue-400 transition-colors duration-300">
              {feature.title}
            </h5>

            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              {feature.description}
            </p>

            <motion.div
              className={`mt-6 w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: feature.delay + 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Our Services Section */}
<section className="w-full bg-gradient-to-br from-white via-slate-50 to-blue-50 py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <motion.div
      className="text-center mb-20 max-w-3xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-5 py-2 rounded-full tracking-wide uppercase mb-5"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        What We Offer
      </motion.span>
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 font-poppins mb-4 leading-tight">
        Our Services at a Glance
      </h3>
      <motion.div
        className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 mx-auto rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "AI Integration & Automation",
          description: "Implement AI features such as natural language processing, computer vision, and intelligent recommendation engines.",
          gradient: "from-blue-500 via-blue-600 to-cyan-600",
          icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          delay: 0
        },
        {
          title: "Web & Mobile Applications",
          description: "Scalable, secure, and performance-driven apps for businesses of all sizes.",
          gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
          icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
          delay: 0.15
        },
        {
          title: "Custom Software Solutions",
          description: "Fully tailored platforms designed for your specific operational needs.",
          gradient: "from-emerald-500 via-green-600 to-teal-600",
          icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          delay: 0.3
        },
        {
          title: "Ongoing Optimization & Support",
          description: "Continuous monitoring, performance tuning, and feature enhancements.",
          gradient: "from-orange-500 via-red-600 to-pink-600",
          icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          delay: 0.45
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          className="group relative"
          initial={{ opacity: 0, y: 50, rotateY: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: service.delay, type: "spring" }}
          whileHover={{ y: -12, transition: { duration: 0.3 } }}
        >
          <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 h-full overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 group-hover:scale-150 group-hover:rotate-90 transition-all duration-700"></div>

            <div className="relative z-10">
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white`}
                whileHover={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>

              <h5 className="text-xl font-bold mb-4 text-slate-900 font-poppins group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h5>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <motion.div
                className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300"
                whileHover={{ x: 8 }}
              >
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>

            <motion.div
              className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${service.gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: service.delay + 0.2 }}
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA */}
    <motion.div
      className="text-center mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <p className="text-slate-600 text-lg mb-6">Need a custom solution? We're here to help.</p>
      <motion.button
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
        whileTap={{ scale: 0.95 }}
      >
        Schedule a Consultation
      </motion.button>
    </motion.div>
  </div>
</section>

<PremiumSection />
    </>
  );
};

export default About;
