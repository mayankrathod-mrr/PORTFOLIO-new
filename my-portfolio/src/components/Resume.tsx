import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          My Resume
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Interested in the full details of my professional journey? You can download a PDF version of my resume for your convenience.
        </p>
        <a 
          href="/Mayank-Rathod-Resume.pdf" // Make sure your PDF is in the /public folder
          download 
          className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition duration-300 inline-block"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
