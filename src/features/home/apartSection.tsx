// apartSection.tsx
import { motion } from "framer-motion";

const ApartSection = () => {
  return (
<section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
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
  );
};

export default ApartSection;
