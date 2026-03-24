import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Event Photography & Videography Website",
      description:
        "A professional event photography and videography website developed for a small business. Features a dynamic portfolio gallery, service showcase, and client-friendly contact section.",
      github: "https://github.com/nishantkumar35/Aarsh_wedding_videography",
      demo: "https://aarsh-wedding-videography.vercel.app",
      image: "https://i.ibb.co/XrPG9mKK/Screenshot-2025-08-16-231710.png",
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
        "A modern personal finance management app that helps users track incomes, savings, expenses, wishes, loans, and tasks.",
      github: "https://github.com/nishantkumar35/piggypal",
      demo: "https://piggypal-theta.vercel.app/",
      image: "https://i.ibb.co/hRrtrv3S/Screenshot-2026-03-15-222427.png",
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
        "An advanced healthcare platform leveraging AI to match patients with specialists based on symptoms.",
      github:
        "https://github.com/nishantkumar35/doctor_reviews_and_recommendations",
      demo: "https://doctor-reviews-and-recommendations.vercel.app/",
      image: "https://i.ibb.co/HTSPMVpJ/Screenshot-2026-03-15-222643.png",
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
        "JWT",
      ],
      color: "cyan",
    },
    {
      title: "Scalable Microservices Social Hub",
      description:
        "A production-ready social media platform built with a distributed microservices architecture. It features secure user authentication, post management with multimedia support, real-time search indexing, and a centralized API Gateway, all synchronized via RabbitMQ and containerized for high availability.",
      github: "https://github.com/nishantkumar35/micro-service-social-media",
      demo: "#",
      image:"https://i.ibb.co/DPMLwvhs/Screenshot-2026-03-24-205138.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "RabbitMQ (amqplib)",
        "Tailwind CSS",
        "Cloudinary",
        "API Gateway (express-http-proxy)",
        "JWT (jsonwebtoken)",
        "Argon2",
        "Joi (Validation)",
        "Multer",
        "Axios",
        "Winston (Logging)",
        "Helmet (Security)",
        "Express Rate Limit",
      ],
      color: "indigo",
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
    indigo: {
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      bg: "bg-indigo-500/5 hover:bg-indigo-500/10",
      text: "text-indigo-400",
      button: "bg-indigo-500 hover:bg-indigo-600",
      outline: "border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10",
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

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color];
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative border rounded-2xl overflow-hidden
                  transition-all duration-300
                  ${colors.border} ${colors.bg}
                  ${isHovered ? "scale-[1.02] shadow-2xl" : "shadow-lg"}
                `}
              >
                {/* Image Section */}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Right Icons */}

                  <div className="absolute top-3 right-3 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/60 backdrop-blur border border-white/20 hover:bg-black/80 transition"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/60 backdrop-blur border border-white/20 hover:bg-black/80 transition"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>

                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-xs border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${colors.button}`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border ${colors.outline}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
