import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // <-- Import both icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; {currentYear} Mayank. All Rights Reserved.</p>
        
        {/* Container for contact info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-2 text-gray-400">
          
          {/* Phone Number */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            {/* Corrected the href to use your actual number */}
            <a href="tel:+919322492711" className="hover:text-white transition-colors duration-300">
              +91 93224 92711 
            </a>
          </div>

          {/* Email Address */}
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            {/* Added your email with a mailto link */}
            <a href="mayankrathod711@gmail.com" className="hover:text-white transition-colors duration-300">
              mayankrathod711@gmail.com
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;