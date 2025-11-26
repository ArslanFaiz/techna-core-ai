// Header.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const isActive = (path: string) => {
  const base = "underline underline-offset-4 font-semibold";
 if (location.pathname.startsWith("/blog/")) {
    return "text-[#0065CA]";
  }
  if (location.pathname === path) {
    return "text-[#0065CA] " + base; // always blue
  }
  return "text-white"; // non-active links
};

  // 🔥 Reusable underline animation classes
  const underlineAnim =
    "relative group after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 " +
    "group-hover:after:w-full";

  return (
    <header
  className={`fixed top-0 w-full z-50 transition-all duration-500
    ${
      isScrolled
        ? "bg-black/40 backdrop-blur-xl shadow-lg"
        : "bg-transparent"
    }
  `}
>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="object-contain"
            style={{ width: "200px", height: "40px" }}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">

          <Link
            to="/"
            className={`${isActive("/")} ${isScrolled ? "hover:text-[#0065CA]" : "hover:text-[#0065CA]"} transition ${underlineAnim}`}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={`${isActive("/services")} ${isScrolled ? "hover:text-[#0065CA]" : "hover:text-[#0065CA]"} transition ${underlineAnim}`}
          >
            Services
          </Link>

          <Link
            to="/about"
            className={`${isActive("/about")} ${isScrolled ? "hover:text-[#0065CA]" : "hover:text-[#0065CA]"} transition ${underlineAnim}`}
          >
            About Us
          </Link>

          <Link
            to="/blog"
            className={`${isActive("/blog")} ${isScrolled ? "hover:text-[#0065CA]" : "hover:text-[#0065CA]"} transition ${underlineAnim}`}
          >
            Blog
          </Link>

        </nav>

        {/* Contact Button */}
        <Button className="hidden md:block">
          <Link
            to="/form"
            className="
              bg-[#0065CA] text-white font-semibold
              px-6 py-3 min-w-[120px] text-center rounded-full
              hover:bg-[#0050a0] hover:scale-105 transition-all duration-300
            "
          >
            Contact Us
          </Link>
        </Button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-black/90 backdrop-blur-md px-6 py-4 flex flex-col gap-4 font-medium animate-fade-in">

          <Link
            to="/"
            className={`${isActive("/")} hover:text-[#0065CA] transition ${underlineAnim}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={`${isActive("/services")} hover:text-[#0065CA] transition ${underlineAnim}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/about"
            className={`${isActive("/about")} hover:text-[#0065CA] transition ${underlineAnim}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/blog"
            className={`${isActive("/blog")} hover:text-[#0065CA] transition ${underlineAnim}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          <Link
            to="/form"
            className="bg-[#0065CA] text-white text-center px-5 py-2 rounded-full
                       hover:bg-[#0050a0] hover:scale-105 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

        </div>
      )}
    </header>
  );
};

export default Header;
