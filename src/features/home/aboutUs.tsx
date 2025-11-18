// aboutUs.tsx
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
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
  {/* Client logos */}
  <div className="flex -space-x-3">
    {["profile01.jpg", "profile02.jpeg", "profile03.jpeg", "profile04.jpeg"].map((img, i) => (
      <motion.div
        key={i}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white shadow-lg overflow-hidden"
        whileHover={{ scale: 1.2, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={`/assets/${img}`} // make sure images are in public/assets
          alt={`Client ${i + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
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
    </>
  );
};

export default AboutUs;
