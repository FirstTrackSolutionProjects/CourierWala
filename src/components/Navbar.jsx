import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="shadow-md w-full fixed top-0 left-0 z-50" style={{ backgroundColor: "#FAF6E9" }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo wrapped with Link */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="./image/logoo.png"
                  alt="Logo"
                  className="h-20 w-auto object-contain -translate-x-8"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <Link to="/trc" className="hover:text-blue-600">Tracking</Link>
              <Link to="/price" className="hover:text-blue-600">Pricing</Link>
              <Link to="/about" className="hover:text-blue-600">About Us</Link>
              <Link to="/blog" className="hover:text-blue-600">Blog</Link>
              <Link to="/contect" className="hover:text-blue-600">Contact Us</Link>
              <Link to="/signin" className="hover:text-blue-600">Sign In</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Slide-in Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-[60%] w-64 bg-[#183B4E] text-white transform transition-transform duration-300 ease-in-out z-40 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col px-6 space-y-4 text-base font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-400">Home</Link>
            <Link to="/trc" onClick={toggleMenu} className="hover:text-blue-400">Tracking</Link>
            <Link to="/price" onClick={toggleMenu} className="hover:text-blue-400">Pricing</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-blue-400">About Us</Link>
            <Link to="/blog" onClick={toggleMenu} className="hover:text-blue-400">Blog</Link>
            <Link to="/contect" onClick={toggleMenu} className="hover:text-blue-400">Contact Us</Link>
            <Link to="/signin" onClick={toggleMenu} className="hover:text-blue-400">Sign In</Link>
          </div>
        </div>
      </nav>

      {/* Push content below the fixed navbar */}
      <div className="pt-20" />
    </>
  );
};

export default Navbar;
