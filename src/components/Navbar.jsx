import React, { useState } from 'react';
import Button from './Button';
import "./styles.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    li: 'hover:text-[#FF7F49] transition-colors duration-200 cursor-pointer',
  };

  return (
    <nav className="Navbar container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b-2 border-gray-100 shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <p className="Logo text-2xl font-bold text-[#FF7F49] tracking-wide">Digiket</p>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <Button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-800 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>

        {/* Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          <li className={styles.li}>All Pages</li>
          <li className={styles.li}>About</li>
          <li className={styles.li}>Services</li>
          <li className={styles.li}>Case Studies</li>
          <li className={styles.li}>Careers</li>
        </ul>

        {/* Button - Desktop */}
        <div className="hidden lg:block">
          <Button variant="primary" size="md">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 animate-slide-down transition-all duration-300">
          <ul className="flex flex-col gap-4 text-sm font-semibold">
            <li className={styles.li}>All Pages</li>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Services</li>
            <li className={styles.li}>Case Studies</li>
            <li className={styles.li}>Careers</li>
          </ul>

          <div className="mt-4">
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
