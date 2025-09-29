import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          I&apos;m currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
        </p>
        <div className="flex justify-center items-center space-x-8">
          <Link href="https://github.com/mayankrathod-mrr" target="_blank" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaGithub size={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/mayank-rathod-4173142ba/" target="_blank" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin size={40} />
          </Link>
          <a href="mailto:mayankrathod711@gmail.com" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
