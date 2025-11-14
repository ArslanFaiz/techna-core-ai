// Header.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // GET CURRENT ROUTE

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ACTIVE LINK FUNCTION
  const isActive = (path:string) =>
    location.pathname === path
      ? "text-[#0065CA] underline underline-offset-4 font-semibold"
      : "text-white";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500
      ${isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-black/30 backdrop-blur-0"}`}
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
            className={`${isActive("/")} hover:text-[#0065CA] transition`}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={`${isActive("/services")} hover:text-[#0065CA] transition`}
          >
            Services
          </Link>

          <Link
            to="/about"
            className={`${isActive("/about")} hover:text-[#0065CA] transition`}
          >
            About Us
          </Link>

          <Link
            to="/blog"
            className={`${isActive("/blog")} hover:text-[#0065CA] transition`}
          >
            Blog
          </Link>

        </nav>

        {/* Contact Button */}
        <Button className="hidden md:block">
          <Link
            to="/contact"
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
            className={`${isActive("/")} hover:text-[#0065CA] transition`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={`${isActive("/services")} hover:text-[#0065CA] transition`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/about"
            className={`${isActive("/about")} hover:text-[#0065CA] transition`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/blog"
            className={`${isActive("/blog")} hover:text-[#0065CA] transition`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          <Link
            to="/contact"
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
