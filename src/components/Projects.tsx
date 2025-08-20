import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// ==================================================================
//  1. ProjectCard COMPONENT
// ==================================================================
type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink?: string; // Made liveLink optional
  isReversed?: boolean;
};

const ProjectCard = ({ title, description, image, tags, githubLink, liveLink, isReversed = false }: ProjectCardProps) => {
  const flexDirection = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${flexDirection} items-center gap-8 md:gap-12`}>
      
      {/* Project Image */}
      <div className="w-full md:w-1/2">
        <div className="relative group bg-gray-100 rounded-lg shadow-lg p-8 h-full flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="object-contain max-h-48"
          />
          {/* The overlay for links */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center space-x-6">
            <Link href={githubLink} target="_blank" className="text-white hover:text-blue-400">
              <FaGithub size={40} />
            </Link>
            {/* The live link icon will only show if a liveLink is provided */}
            {liveLink && (
              <Link href={liveLink} target="_blank" className="text-white hover:text-blue-400">
                <FaExternalLinkAlt size={36} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Project Details (Text) */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


// ==================================================================
//  2. The Main Projects Section
// ==================================================================
const projectsData = [
  {
    title: "Personal Portfolio Website",
    description: "A modern personal portfolio website showcasing my skills, projects, and certifications. Built with Next.js for server-side rendering, Tailwind CSS for responsive design, and deployed as a fast, SEO-friendly, and professional platform to highlight my profile and work.",
    image: "/images/github-placeholder.png",
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/mayankrathod-mrr/PORTFOLIO-new",
  },
  {
    title: "Media Platform Simulation (Backend)",
    description: "A backend-only simulation of a media-sharing platform with secure user auth, role-based access, and RESTful endpoints for users, media items (metadata), likes/comments, and admin operations. Includes DTOs, validation, pagination/sorting, centralized exception handling, and API docs via Swagger.",
    image: "/images/github-placeholder.png",
    tags: ["Java", "Spring Boot", "REST API", "Spring Security", "JWT Authentication", "Hibernate/JPA", "PostgreSQL", "Docker", "Maven", "Swagger/OpenAPI"],
    githubLink: "https://github.com/mayankrathod-mrr/Backend-Media-Platform-Simulation",
  },
  {
    title: "Flappy Bird Game",
    description: "A desktop-based 2D arcade game built using Java, inspired by the classic Flappy Bird. Implements real-time game loop, event handling, collision detection, and scoring system with a simple GUI using Swing and AWT.",
    image: "/images/github-placeholder.png",
    tags: ["Java", "Swing (GUI)", "AWT (Graphics)", "OOP (Encapsulation, Inheritance, Polymorphism)", "Game Loop", "Event Handling", "Collision Detection", "React", "Node.js", "API"],
    githubLink: "https://github.com/mayankrathod-mrr/FlappyBird-Game",
  },
  {
    title: "Admin Panel",
    description: "A responsive admin dashboard with secure login, CRUD operations for users and products, and data management features like search and pagination. Built during my internship at Educron (Remote, Nagpur).",
    image: "/images/github-placeholder.png",
    tags: ["PHP","MYSQL(Xampp)","HTML","CSS","Javascript",],
    githubLink: "https://github.com/mayankrathod-mrr/Admin-panel",
  },
  {
    title: "BSC AgriPreneur Website (Full Stack Project)",
    description: "Currently developing a real-world website for a BSc AgriPreneur business, integrating a Java Spring Boot backend with Next.js frontend. The project involves building scalable APIs, secure authentication, and a responsive UI. Designed to manage product listings, customer interactions, and business operations efficiently.",
    image: "/images/github-placeholder.png",
    tags: ["Java", "Spring Boot", "Next.js", "React", "PostgreSQL", "Docker", "REST API", "etc",],
    githubLink: "https://github.com/mayankrathod-mrr",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-20">
          Things I&apos;ve Built
        </h2>
        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              isReversed={index % 2 === 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
