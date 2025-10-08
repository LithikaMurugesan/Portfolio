import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="/Logo-1.png"
            alt="Logo"
            className="w-12 h-12 mr-4 rounded-full object-cover border-2 border-blue-900"
          />
          <div className="text-xl font-semibold">
            <Link to="/" className="text-white hover:text-blue-300 font-serif">
              Lithika Murugesan
            </Link>
          </div>
        </div>

        <div className="hidden md:flex space-x-6 font-serif">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-300">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-300">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-blue-300">
            Skills
          </Link>
          <Link to="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center ">
          <button
            className="text-white focus:outline-none"
            onClick={() =>
              document.getElementById("mobileMenu").classList.toggle("hidden")
            }
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      <div
        id="mobileMenu"
        className="hidden md:hidden flex-col items-center space-y-4 bg-blue-800 text-white p-4 space-x-6"
      >
        <Link to="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-300">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-300">
          Projects
        </Link>
        <Link to="/skills" className="hover:text-blue-300">
          Skills
        </Link>
        <Link to="/contact" className="hover:text-blue-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
