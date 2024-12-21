import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white w-full px-4 md:px-6 py-3 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-20">
        {/* Left Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/events"
            className="hover:text-red-600 transition duration-300 ease-in-out font-bold text-sm uppercase text-red-600"
          >
            Events
          </Link>
          <Link
            to="/fighters"
            className="pl-14 hover:text-red-600 transition duration-300 ease-in-out font-bold text-sm uppercase text-red-600"
          >
            Fighters
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-wide uppercase font-sans text-white"
        >
          Aturto
        </Link>

        {/* Right Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/about"
            className="pr-14 hover:text-red-600 transition duration-300 ease-in-out font-bold text-sm uppercase text-red-600"
          >
            About
          </Link>
          <Link
            to="/shop"
            className="hover:text-red-600 transition duration-300 ease-in-out font-bold text-sm uppercase text-red-600"
          >
            Shop
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            to="/events"
            className="block text-center hover:text-red-600 transition duration-300 ease-in-out font-bold text-sm uppercase text-red-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/fighters"
            className="block text-center hover:text-red-600 transition duration-300 ease-in-out font-bold text-sm uppercase text-red-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fighters
          </Link>
          <Link
            to="/about"
            className="block text-center hover:text-red-600 transition duration-300 ease-in-out font-bold text-sm uppercase text-red-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/shop"
            className="block text-center hover:text-red-600 transition duration-300 ease-in-out font-bold text-sm uppercase text-red-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
