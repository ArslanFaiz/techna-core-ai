import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const fadeUp = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0 },
};

const handleScroll = (sectionId: string) => {
const element = document.getElementById(sectionId);
if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
return ( <footer className="bg-[#0a0a0a] text-gray-300 font-poppins"> <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
{/* Brand & Description */}
<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
<img
src="/assets/logo.png"
alt="Logo"
className="object-contain mx-auto sm:mx-0"
style={{ width: "200px", height: "40px" }}
/> <h2 className="text-[20px] sm:text-[22px] text-[#ffff] font-poppins font-bold mt-6 sm:mt-10 text-center sm:text-left">
Software Development Agency </h2> <p className="text-gray-400 leading-relaxed mt-4 text-center sm:text-left">
For innovative solutions, strategies to operational excellence, we provide expert </p>
</motion.div>


    {/* Explore & Menu in a row on mobile */}
    <div className="grid grid-cols-2 gap-6">
      {/* Explore */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Explore</h3>
        <ul className="space-y-3 text-center sm:text-left">
          <li
            className="hover:text-white transition-all hover:translate-x-1 hover:opacity-100 opacity-80 cursor-pointer"
            onClick={() => handleScroll("hero")}
          >
            Resources
          </li>
          <li className="hover:text-white transition-all hover:translate-x-1 hover:opacity-100 opacity-80 cursor-pointer">
            <Link to="/blog">Blogs</Link>
          </li>
          <li
            className="hover:text-white transition-all hover:translate-x-1 hover:opacity-100 opacity-80 cursor-pointer"
            onClick={() => handleScroll("hero")}
          >
            Documents
          </li>
        </ul>
      </motion.div>

      {/* Menu */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Menu</h3>
        <ul className="space-y-3 text-center sm:text-left">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
          ].map((item) => (
            <li
              key={item.name}
              className="hover:text-white transition-all hover:translate-x-1 hover:opacity-100 opacity-80 cursor-pointer"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* Address & Email + Newsletter */}
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Address & Email</h3>
      <ul className="space-y-3 mb-6 text-center sm:text-left">
        <li className="opacity-80 hover:opacity-100 transition-all">info@technacoreai.com</li>
        <li className="opacity-80 hover:opacity-100 transition-all">Canada</li>
      </ul>

      {/* Newsletter */}
      <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">News Letter</h3>
      <div className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full px-4 py-3 rounded-md bg-[#111] border border-gray-700 text-gray-200 focus:ring-2 focus:ring-gray-500 outline-none"
        />
        <button className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-300 transition-all">
          Submit
        </button>
      </div>
    </motion.div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-800"></div>

  {/* Footer Bottom */}
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
    {/* Left */}
    <p className="text-sm text-center md:text-left">© 2025 • All Rights Reserved.</p>

    {/* Center Social Icons */}
    <div className="flex items-center gap-5 text-lg justify-center md:justify-start">
      <FaFacebookF className="hover:text-white hover:scale-110 transition-all cursor-pointer" />
      <FaInstagram className="hover:text-white hover:scale-110 transition-all cursor-pointer" />
      <FaLinkedinIn className="hover:text-white hover:scale-110 transition-all cursor-pointer" />
      <FaXTwitter className="hover:text-white hover:scale-110 transition-all cursor-pointer" />
    </div>

    {/* Right */}
    <div className="flex items-center gap-4 text-sm justify-center md:justify-end">
      <span className="hover:text-white hover:underline cursor-pointer transition-all">
        Privacy Policy
      </span>
      <span className="opacity-70">|</span>
      <span className="hover:text-white hover:underline cursor-pointer transition-all">
        Terms of Use
      </span>
    </div>
  </div>
</footer>


);
}
