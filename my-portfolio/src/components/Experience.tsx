import React from "react";

const experienceData = [
  {
    role: "Learning & Freelancing",
    company: "Self-Employed / Freelance",
    date: "Jun 2025 - Present",
    description:
      "Currently enhancing my skills in MERN Stack Development with a strong focus on MongoDB, Node.js, Express.js, and Next.js. Alongside, working on a real-world freelancing project – building a full-stack website for a client’s company (BSc Agripreneur) using MERN, simulating professional freelancing experience.",
  },
  {
    role: "Web Developer Intern",
    company: "Educron, Nagpur (Remote)",
    date: "Aug 2024 - Nov 2024",
    description:
      "Worked as a Web Developer intern where I developed an Admin Panel using PHP, MySQL (XAMPP), HTML, CSS, and JavaScript. Gained hands-on experience in backend integration, database management, and frontend design.",
  },
  {
    role: "Bachelor of Science in Computer Science",
    company: "Sant Gadge Baba Amravati University, Amravati",
    date: "2022 - 2025",
    description:
      "Completed my degree where I gained strong foundations in programming, databases, data structures, and software development.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-black mb-16">
          My Journey
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 w-1 h-full bg-blue-500/40 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full relative"
              >
                {/* Left Side */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : ""}`}>
                  {index % 2 === 0 && (
                    <div className="p-6 bg-white rounded-xl shadow-lg border border-blue-100 text-right">
                      <p className="text-sm text-blue-600 font-semibold">
                        {item.date}
                      </p>
                      <h3 className="text-xl font-bold text-black">
                        {item.role}
                      </h3>
                      {item.company && (
                        <p className="text-md text-gray-700 mb-2">
                          {item.company}
                        </p>
                      )}
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>

                {/* Right Side */}
                <div className={`w-1/2 ${index % 2 !== 0 ? "pl-8" : ""}`}>
                  {index % 2 !== 0 && (
                    <div className="p-6 bg-white rounded-xl shadow-lg border border-blue-100 text-left">
                      <p className="text-sm text-blue-600 font-semibold">
                        {item.date}
                      </p>
                      <h3 className="text-xl font-bold text-black">
                        {item.role}
                      </h3>
                      {item.company && (
                        <p className="text-md text-gray-700 mb-2">
                          {item.company}
                        </p>
                      )}
                      <p className="text-gray-600">{item.description}</p>
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
