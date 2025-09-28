"use client"; // <-- This is the important update

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation'; // <-- This is also new

const Hero = () => {
  return (
    <section id="home" className="py-24 md:py-40">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column (Text Content) */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-4">
            Hi, I&apos;m{' '}
            {/* --- THIS IS THE UPDATED PART --- */}
            <TypeAnimation
              sequence={[
                'Mayank Rathod',
                1500,
                '',
              ]}
              wrapper="span"
              speed={1}
              repeat={Infinity}
              cursor={true}
              className="text-blue-500"
            />
            {/* ------------------------------- */}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            I&apos;m a passionate MERN Stack Developer with expertise in Next.js, Node.js , Express.js , MongoDB . focused on building scalable backend systems and modern full-stack applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link 
              href="#projects" 
              className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
            >
              View My Work
            </Link>
            <Link 
              href="#contact" 
              className="bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-gray-300 transition duration-300 w-full sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center items-center order-first md:order-last">
          <div className="w-80 h-80 md:w-96 md:h-96 relative">
            <Image
              src="/images/img.2.png"
              alt="A picture of Mayank Rathod, Developer"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full shadow-2xl shadow-blue-400/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

