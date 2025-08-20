import React from 'react';

const About = () => {
  return (
    // Increased vertical padding
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Larger heading - Kept this centered for a strong visual anchor */}
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        {/* Changed text-center to text-left */}
        <div className="max-w-5xl mx-auto text-left text-gray-600 text-xl">
          <p className="mb-6">
            I&apos;m Mayank R. Rathod, a dedicated and enthusiastic developer with a Bachelor’s degree in Computer Science (2025) from Sant Gadge Baba Amravati University, Amravati. Throughout my academic journey, I developed a strong foundation in computer science and a keen interest in building scalable, real-world applications.
          </p>
          <p className="mb-6">
            My primary passion lies in Java Backend Development and Full Stack Java Development. I enjoy working with technologies like Spring Boot, Next.js, PostgreSQL, and Docker, and I&apos;m always eager to explore new tools that can make applications faster, smarter, and more efficient.
          </p>
          <p className="mb-6">
            Currently, I&apos;m working on a full-stack web platform for the agripreneur sector, a project that allows me to combine my backend expertise with frontend skills to create a practical solution for a real-world client.
          </p>
          <p>
            Beyond coding, I&apos;m passionate about continuous learning and enjoy taking on challenges that push me to grow as a developer. My long-term goal is to contribute to innovative software solutions that make an impact in people’s lives while advancing my career as a Backend & Full Stack Developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
