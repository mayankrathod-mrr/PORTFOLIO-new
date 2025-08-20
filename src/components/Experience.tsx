import React from 'react';

const experienceData = [
  {
    role: "Present – Learning & Freelancing (2025)",
    date: "Jun 2025 - Present",
    description: "Currently enhancing my skills in Java Full Stack Development with a strong focus on Spring Boot, PostgreSQL, and Next.js. Alongside, working on a real-world freelancing project – building a full-stack website for a client’s company (BSc Agripreneur) using Java + Next.js + PostgreSQL, simulating professional freelancing experience.",
  },
  {
    role: "Web Developer Intern",
    company: "– Educron, Nagpur (Remote).",
    date: "Aug 2024 - Nov 2024",
    description: "Worked as a Web Developer intern where I developed an Admin Panel using PHP, MySQL (XAMPP), HTML, CSS, and JavaScript. Gained hands-on experience in backend integration, database management, and frontend design while working in a real-world environment.",
  },
  {
    role: "Bachelor of Science in Computer Science",
    company: "Sant Gadge Baba Amravati University, Amravati",
    date: "2022 - 2025",
    description: "Completed my degree from Sant Gadge Baba Amravati University, Amravati, where I gained strong foundations in programming, databases, data structures, and software development.",
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          My Journey
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-blue-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="flex justify-between items-center w-full">
                
                {/* Left Side Content (or Spacer) */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : ''}`}>
                  {/* We only render content here if the index is EVEN (0, 2, 4...) */}
                  {index % 2 === 0 && (
                    <div className="p-6 bg-white rounded-lg shadow-lg text-right">
                      <p className="text-sm text-blue-500 font-semibold">{item.date}</p>
                      <h3 className="text-xl font-bold text-gray-800">{item.role}</h3>
                      <p className="text-md text-gray-600 mb-2">{item.company}</p>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* The dot on the timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10"></div>

                {/* Right Side Content (or Spacer) */}
                <div className={`w-1/2 ${index % 2 !== 0 ? 'pl-8' : ''}`}>
                  {/* We only render content here if the index is ODD (1, 3, 5...) */}
                  {index % 2 !== 0 && (
                    <div className="p-6 bg-white rounded-lg shadow-lg text-left">
                      <p className="text-sm text-blue-500 font-semibold">{item.date}</p>
                      <h3 className="text-xl font-bold text-gray-800">{item.role}</h3>
                      <p className="text-md text-gray-600 mb-2">{item.company}</p>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;