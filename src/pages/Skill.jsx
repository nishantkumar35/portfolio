import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiRender,
  SiVercel,
  SiGithub,
  SiGit,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiNextdotjs,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaJava, FaLock } from "react-icons/fa";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: <SiHtml5 />, name: "HTML5", color: "text-orange-500" },
        { icon: <SiCss3 />, name: "CSS3", color: "text-blue-500" },
        { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
        { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
        { icon: <SiReact />, name: "React", color: "text-cyan-400" },
        { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
        { icon: <SiRedux />, name: "Redux", color: "text-purple-500" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
        { icon: <SiFramer />, name: "Framer Motion", color: "text-pink-500" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
        { icon: <SiExpress />, name: "Express.js", color: "text-gray-400" },
        { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
        { icon: <SiJsonwebtokens />, name: "JWT", color: "text-pink-500" },
        { icon: <FaLock />, name: "OAuth", color: "text-blue-400" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { icon: <SiC />, name: "C", color: "text-blue-600" },
        { icon: <SiCplusplus />, name: "C++", color: "text-blue-500" },
        { icon: <SiPython />, name: "Python", color: "text-yellow-400" },
        { icon: <FaJava />, name: "Java", color: "text-red-500" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        { icon: <SiGit />, name: "Git", color: "text-orange-500" },
        { icon: <SiGithub />, name: "GitHub", color: "text-white" },
        { icon: <SiVercel />, name: "Vercel", color: "text-white" },
        { icon: <SiRender />, name: "Render", color: "text-purple-400" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Skills & Technologies
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                {category.title}
              </h2>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="group"
                  >
                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                      {/* Icon */}
                      <div className={`text-5xl mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                        {skill.icon}
                      </div>
                      
                      {/* Name */}
                      <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </p>

                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 rounded-xl transition-all duration-300 pointer-events-none`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              17+
            </div>
            <p className="text-gray-400">Development Tools</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              6
            </div>
            <p className="text-gray-400">Programming Languages</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
              Full Stack
            </div>
            <p className="text-gray-400">Development Ready</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}