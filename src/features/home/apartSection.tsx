import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, Linkedin, Facebook, Instagram, Phone } from 'lucide-react';

export default function ApartSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const teamMembers = [
    { name: 'James Andrews', title: 'Founder, Marketing Expert' },
    { name: 'James Andrews', title: 'Founder, Marketing Expert' },
    { name: 'James Andrews', title: 'Founder, Marketing Expert' },
    { name: 'James Andrews', title: 'Founder, Marketing Expert' },
    { name: 'James Andrews', title: 'Founder, Marketing Expert' },
    { name: 'James Andrews', title: 'Founder, Marketing Expert' }
  ];

  // === Motion Variants (same as AboutSection) ===
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-[#19242f] overflow:hidden">

      <section className="py-5 px-4">
        <div className="max-w-6xl mx-auto">

          {/* === TOP BADGE ANIMATION === */}
<motion.div
  className="text-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <div
    className="inline-flex items-center justify-center gap-2 bg-gray-800 rounded-full
    px-4 py-2 shadow-sm mb-6 transition-all duration-300 
    hover:scale-105 hover:shadow-[0_0_20px_rgba(0,150,255,0.4)] hover:bg-gray-700/80"
  >
    <div
      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white 
      transition-all duration-300 hover:rotate-12 hover:bg-gray-600"
    >
      <Phone className="w-4 h-4" />
    </div>
    <span
      className="text-white font-medium transition-all duration-300
      hover:text-blue-300"
    >
      Team
    </span>
  </div>
</motion.div>

{/* === HEADING + PARAGRAPH ANIMATION === */}
<motion.div
  className="text-center mb-16"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <h1
    className="text-6xl font-light mb-4 text-white transition-all duration-500
    hover:scale-105 hover:text-blue-300 hover:drop-shadow-[0_0_10px_rgba(0,150,255,0.4)]"
  >
    Meet Our Team
  </h1>

  <p
    className="text-gray-300 transition-all duration-500
    hover:text-blue-200 hover:translate-y-1"
  >
    The talented individuals behind our success
  </p>
</motion.div>


          {/* === TEAM GRID === */}
          <div className="grid md:grid-cols-3 gap-8">
  {teamMembers.map((member, index) => {
    // left card = fadeLeft, middle = fadeUp, right = fadeRight
    const animation =
      index % 3 === 0 ? fadeLeft :
      index % 3 === 1 ? fadeUp :
      fadeRight;

    return (
      <motion.div
        key={index}
        variants={animation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/10 
          rounded-3xl overflow-hidden shadow-2xl transition-all duration-300
          hover:scale-105 hover:rotate-[1deg] hover:shadow-[0_20px_40px_rgba(0,150,255,0.25)]"
      >
        <div
          className={`relative ${
            activeCard === index 
              ? 'bg-blue-600/20 backdrop-blur-lg'
              : 'bg-white/5'
          } transition-colors duration-300`}
        >
          <div className="pt-8 px-8 pb-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt={member.name}
              className={`w-full aspect-square object-cover rounded-2xl 
                ${activeCard === index ? 'opacity-100' : 'opacity-50 grayscale'}
                transition-all duration-300 hover:opacity-100`}
            />
          </div>

          <button
            onClick={() => toggleCard(index)}
            className="absolute bg-white/20 border border-blue-400/50 
              bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 shadow-xl 
              hover:scale-110 transition-transform backdrop-blur-lg"
          >
            {activeCard === index ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Plus className="w-5 h-5 text-blue-400" />
            )}
          </button>

          {activeCard === index && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 mb-12">
              <button className="bg-white/20 rounded-full p-3 border border-white/30 backdrop-blur-lg shadow-lg hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-blue-300" />
              </button>
              <button className="bg-white/20 rounded-full p-3 border border-white/30 backdrop-blur-lg shadow-lg hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-blue-300" />
              </button>
              <button className="bg-white/20 rounded-full p-3 border border-white/30 backdrop-blur-lg shadow-lg hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-pink-400" />
              </button>
            </div>
          )}
        </div>

        <div
          className={`p-6 text-center ${
            activeCard === index
              ? 'bg-blue-600/20 border-t border-blue-300/30 text-white'
              : 'text-white'
          }`}
        >
          <h3 className="text-xl font-bold mb-1 transition-all duration-300 hover:text-blue-300">
            {member.name}
          </h3>
          <p className={`text-sm transition-all duration-300 hover:text-blue-200 ${activeCard === index ? 'text-blue-200' : 'text-gray-300'}`}>
            {member.title}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>

        </div>
      </section>

    </div>
  );
}
