import { Server, ArrowUpRight, Rocket, Network, Target } from 'lucide-react';
import { motion } from "framer-motion";
import { FaMobileAlt, FaGlobe, FaDatabase, FaPalette, FaServer } from 'react-icons/fa';
import { SiReact, SiSwift, SiIos, SiAndroid, SiFlutter, SiCss3, SiHtml5, SiPython, 
    SiJavascript, SiDocker, SiTypescript, SiNodedotjs, SiPostgresql, SiFigma, SiAdobeillustrator, 
    SiInvision, SiFramer, SiNotion, SiWebflow, SiShopify, SiWordpress } from 'react-icons/si';
function Services() {

const services = [
  {
    icon: <FaMobileAlt className="w-6 h-6" />,
    title: 'Mobile Development',
    description: 'Build scalable, high-performance mobile apps to reach users on the devices they use most.',
    technologies: [
      { name: 'React', icon: <SiReact className="w-5 h-5" />, color: 'bg-cyan-400' },
      { name: 'Swift', icon: <SiSwift className="w-5 h-5" />, color: 'bg-orange-500' },
      { name: 'iOS', icon: <SiIos className="w-5 h-5" />, color: 'bg-gray-800' },
      { name: 'Android', icon: <SiAndroid className="w-5 h-5" />, color: 'bg-green-500' },
      { name: 'Flutter', icon: <SiFlutter className="w-5 h-5" />, color: 'bg-blue-500' }
    ]
  },
  {
    icon: <FaGlobe className="w-6 h-6" />,
    title: 'Website Development',
    description: 'Create fast, responsive, and conversion-focused websites that deliver strong digital presence and user trust.',
    technologies: [
      { name: 'CSS', icon: <SiCss3 className="w-5 h-5" />, color: 'bg-blue-500' },
      { name: 'HTML', icon: <SiHtml5 className="w-5 h-5" />, color: 'bg-orange-600' },
      { name: 'Python', icon: <SiPython className="w-5 h-5" />, color: 'bg-blue-400' },
      { name: 'React', icon: <SiReact className="w-5 h-5" />, color: 'bg-cyan-400' },
      { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5" />, color: 'bg-yellow-400' }
    ]
  },
  {
    icon: <FaDatabase className="w-6 h-6" />,
    title: 'SaaS Applications',
    description: 'Launch powerful SaaS platforms with flexible architecture to serve users at scale and drive recurring revenue.',
    technologies: [
      { name: 'Docker', icon: <SiDocker className="w-5 h-5" />, color: 'bg-blue-500' },
      { name: 'Typescript', icon: <SiTypescript className="w-5 h-5" />, color: 'bg-blue-600' },
      { name: 'React', icon: <SiReact className="w-5 h-5" />, color: 'bg-cyan-400' },
      { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" />, color: 'bg-green-600' },
      { name: 'Postgresql', icon: <SiPostgresql className="w-5 h-5" />, color: 'bg-blue-700' }
    ]
  },
  {
    icon: <FaPalette className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Transform complex ideas into intuitive, user-friendly interfaces that boost engagement and retention.',
    technologies: [
      { name: 'Figma', icon: <SiFigma className="w-5 h-5" />, color: 'bg-purple-500' },
      { name: 'Illustrator', icon: <SiAdobeillustrator className="w-5 h-5" />, color: 'bg-orange-700' },
      { name: 'InVision', icon: <SiInvision className="w-5 h-5" />, color: 'bg-pink-600' },
      { name: 'Framer', icon: <SiFramer className="w-5 h-5" />, color: 'bg-blue-400' },
      { name: 'Notion', icon: <SiNotion className="w-5 h-5" />, color: 'bg-gray-800' }
    ]
  },
  {
    icon: <FaServer className="w-6 h-6" />,
    title: 'CMS Development',
    description: 'Control over your website content with a custom or CMS-based solution tailored for easy updates and growth.',
    technologies: [
      { name: 'Webflow', icon: <SiWebflow className="w-5 h-5" />, color: 'bg-blue-600' },
      { name: 'Shopify', icon: <SiShopify className="w-5 h-5" />, color: 'bg-green-600' },
      { name: 'Ecommerce', icon: <FaGlobe className="w-5 h-5" />, color: 'bg-purple-600' },
      { name: 'Framer', icon: <SiFramer className="w-5 h-5" />, color: 'bg-blue-400' },
      { name: 'Wordpress', icon: <SiWordpress className="w-5 h-5" />, color: 'bg-blue-800' }
    ]
  }
];


  const testimonials = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: 'We have built a reputation as a trusted and reliable partner in achieving business success.'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Tailored Solutions',
      description: 'We offer personalized solutions tailored to your specific goals, audience, and industry.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Your success is our priority. We prioritize understanding your business goals.'
    }
  ];

  return (

<div className="relative min-h-screen bg-[#19242f]">
 <section className="px-4 sm:px-6 lg:px-8">
   <div className="w-full">
        <svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f2f3f6"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 shadow-sm mb-6">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
          <Server className="w-4 h-4" />
        </div>
        <span className="text-white font-medium">Services</span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 text-white">
        Discover Our Services
      </h1>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto">
        Custom-built digital solutions from apps to SaaS, designed to move your business forward
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="bg-[#2b3644] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group"
        >
          <div className="flex justify-between items-start mb-6">
            {/* Floating Card Icon */}
            <motion.div
              className="w-12 h-12 bg-[#3a4758] rounded-xl flex items-center justify-center text-white"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              {service.icon}
            </motion.div>

            <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>

          {/* Tech Icons */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {service.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -6,
                  rotate: [0, 5, -5, 0], // slight wobble on hover
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-white shadow-md text-xl`}
                >
                  {tech.icon}
                </div>
                <span className="text-xs text-gray-200 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


  {/* Testimonials Section */}
  <section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 shadow-sm mb-6">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
          <Target className="w-4 h-4" />
        </div>
        <span className="text-white font-medium">Testimonials</span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 text-white">
        What Our Users Say
      </h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto">
        Hear from businesses who've transformed their workflows with our solutions
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 },
          }}
          className="relative overflow-hidden bg-[#2b3644] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
        >
          {/* Floating Icon */}
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm relative z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            {testimonial.icon}
          </motion.div>

          <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">{testimonial.title}</h3>
          <p className="text-gray-300 leading-relaxed relative z-10">{testimonial.description}</p>

          {/* Shine effect overlay */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-30 bg-gradient-to-r from-white/30 via-white/10 to-white/30 transform -rotate-12 transition-all duration-500"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

</div>

  );
}

export default Services;
