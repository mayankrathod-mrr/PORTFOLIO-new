import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaGithub, FaBootstrap, FaDocker, FaAws } from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiMysql, SiVsco, SiSpringboot, SiIntellijidea, SiMongodb, SiTypescript, SiRedis, SiPostman, SiTailwindcss } from 'react-icons/si';
import { TbApi } from "react-icons/tb";

const frontendSkills = [
  { name: 'HTML5', icon: <FaHtml5 size={48} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={48} className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={48} className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript size={48} className="text-blue-500" /> },
  { name: 'React / Next.js', icon: <FaReact size={48} className="text-sky-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} className="text-teal-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={48} className="text-purple-600" /> },
];
const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs size={48} className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress size={48} className="text-gray-600" /> },
  { name: 'Java', icon: <FaJava size={48} className="text-red-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={48} className="text-green-600" /> },
  { name: 'REST APIs', icon: <TbApi size={48} className="text-gray-700" /> },
];
const databaseSkills = [
    { name: 'MongoDB', icon: <SiMongodb size={48} className="text-green-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={48} className="text-blue-700" /> },
    { name: 'MySQL', icon: <SiMysql size={48} className="text-blue-500" /> },
];
const deploymentAndTools = [
  { name: 'Docker', icon: <FaDocker size={48} className="text-sky-500" /> },
  { name: 'Cloud (AWS)', icon: <FaAws size={48} className="text-orange-400" /> },
  { name: 'Postman', icon: <SiPostman size={48} className="text-orange-500" /> },
  { name: 'Git & GitHub', icon: <FaGithub size={48} className="text-gray-800" /> },
  { name: 'IntelliJ IDEA', icon: <SiIntellijidea size={48} className="text-purple-600" /> },
  { name: 'VS Code', icon: <SiVsco size={48} className="text-sky-500" /> },
];

const SkillCard = ({ name, icon }: { name: string, icon: React.ReactNode }) => (
  <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-400/30 hover:scale-110">
    {icon}
    <p className="mt-4 text-lg font-semibold text-gray-700 text-center">{name}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          My Tech Stack
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center md:text-left">Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {frontendSkills.map((skill) => <SkillCard key={skill.name} {...skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center md:text-left">Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {backendSkills.map((skill) => <SkillCard key={skill.name} {...skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center md:text-left">Databases</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {databaseSkills.map((skill) => <SkillCard key={skill.name} {...skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center md:text-left">Deployment & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {deploymentAndTools.map((skill) => <SkillCard key={skill.name} {...skill} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
