import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    // Removed dark:bg-gray-900
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Removed dark:text-white */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            .
          </Link>
          {/* REMOVED the <ThemeSwitcher /> button */}
        </div>
        
        <div className="hidden md:flex space-x-6 text-lg">
          {/* Removed all dark: variant classes from the links */}
          <Link href="#about" className="text-gray-600 hover:text-blue-500 transition duration-300">
            About
          </Link>
          <Link href="#skills" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Skills
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Projects
          </Link>
          <Link href="#experience" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Experience
          </Link>
          <Link href="#resume" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Resume
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
