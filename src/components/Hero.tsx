import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    // Increased vertical padding for more space
    <section id="home" className="py-24 md:py-40">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column (Text Content) */}
        <div className="text-center md:text-left">
          {/* Larger heading with new colors */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 dark:text-black-100 leading-tight mb-4">
            Hi, I'm <span className="text-blue-500">Mayank Rathod</span>
          </h1>
          {/* Larger paragraph text with new, darker color */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-black-300 mb-8">
            I’m a passionate Java Backend & Full Stack Developer with expertise in Java, Spring Boot, Next.js, PostgreSQL, and Docker, focused on building scalable backend systems and modern full-stack applications.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#projects" className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
              View My Work
            </Link>
            <Link href="#contact" className="bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-gray-300 transition duration-300">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center items-center order-first md:order-last">
          {/* Larger image container */}
          <div className="w-80 h-80 md:w-96 md:h-96 relative">
            <Image
              src="/images/img.2.png" 
              alt="A picture of Mayank Rathod"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full shadow-2xl shadow-black-400/40" // Bolder shadow
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;