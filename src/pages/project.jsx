import React, { useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Event Photography & Videography Website",
      description:
        "A professional event photography and videography website developed for a small business. Features a dynamic portfolio gallery, service showcase, and client-friendly contact section. Built with modern web technologies for an elegant, responsive experience.",
      github: "https://github.com/nishantkumar35/Aarsh_wedding_videography",
      demo: "https://aarsh-wedding-videography.vercel.app",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind",
        "Cloudinary",
      ],
      color: "purple",
    },
    {
      title: "PiggyPal - Personal Finance Dashboard",
      description:
        "A modern personal finance management app that helps users track incomes, savings, expenses, wishes, loans, and tasks. Features complete authentication, CRUD operations, and an intuitive responsive UI for effective money management.",
      github: "https://github.com/nishantkumar35/piggypal",
      demo: "https://piggypal-theta.vercel.app/",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind",
        "Framer Motion",
        "JWT",
      ],
      color: "blue",
    },
    {
      title: "DocMatch - AI Healthcare System",
      description:
        "An advanced healthcare platform leveraging AI to match patients with specialists based on symptom descriptions. Features a transformer-based specialty predictor, verified doctor profiles, and a robust review management system. Built with a premium glassmorphism UI for a seamless user experience.",
      github:
        "https://github.com/nishantkumar35/doctor_reviews_and_recommendations",
      demo: "https://doctor-reviews-and-recommendations.vercel.app/",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind",
        "Google Auth",
        "Transformers.js",
        "Cloudinary",
        "Framer Motion",
        "Nodemailer",
        "JWT",
      ],
      color: "cyan",
    },
  ];

  const colorClasses = {
    purple: {
      border: "border-purple-500/30 hover:border-purple-500/60",
      bg: "bg-purple-500/5 hover:bg-purple-500/10",
      text: "text-purple-400",
      button: "bg-purple-500 hover:bg-purple-600",
      outline: "border-purple-500/50 text-purple-400 hover:bg-purple-500/10",
    },
    blue: {
      border: "border-blue-500/30 hover:border-blue-500/60",
      bg: "bg-blue-500/5 hover:bg-blue-500/10",
      text: "text-blue-400",
      button: "bg-blue-500 hover:bg-blue-600",
      outline: "border-blue-500/50 text-blue-400 hover:bg-blue-500/10",
    },
    cyan: {
      border: "border-cyan-500/30 hover:border-cyan-500/60",
      bg: "bg-cyan-500/5 hover:bg-cyan-500/10",
      text: "text-cyan-400",
      button: "bg-cyan-500 hover:bg-cyan-600",
      outline: "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10",
    },
  };

  return (
    <div className="min-h-screen text-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work in full-stack web development
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8 flex flex-wrap gap-5 justify-center mx-auto">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color];
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  w-xl
                  relative border-2 rounded-2xl p-6 sm:p-8 
                  transition-all duration-300 ease-out
                  ${colors.border} ${colors.bg}
                  ${isHovered ? "transform scale-[1.02] shadow-2xl" : "shadow-lg"}
                `}
              >
                {/* Folder Icon */}
                <div className="flex items-start justify-between mb-6 ml-[90%]">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.text} hover:scale-110 transition-transform`}
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.text} hover:scale-110 transition-transform`}
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                      font-medium transition-all duration-200
                      ${colors.button} text-white
                    `}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                      font-medium transition-all duration-200 border-2
                      ${colors.outline}
                    `}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
