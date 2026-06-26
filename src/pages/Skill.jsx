import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiFramer, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPostman, SiSpringboot, SiJsonwebtokens,
  SiMongodb, SiPostgresql, SiSupabase, SiRedis, SiRabbitmq,
  SiDocker, SiGithub, SiCloudinary, SiVercel, SiRender, SiMysql,
} from "react-icons/si";
import { FaJava, FaLock } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    emoji: "💻",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.07)",
    skills: [
      { icon: <SiPython />,    name: "Python",     color: "#3776AB" },
      { icon: <SiC />,         name: "C",          color: "#A8B9CC" },
      { icon: <SiCplusplus />, name: "C++",        color: "#00599C" },
      { icon: <FaJava />,      name: "Java",       color: "#ED8B00" },
      { icon: <SiJavascript />,name: "JavaScript", color: "#F7DF1E" },
      { icon: <SiTypescript />,name: "TypeScript", color: "#3178C6" },
    ],
  },
  {
    title: "Frontend",
    emoji: "🖥️",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.07)",
    skills: [
      { icon: <SiHtml5 />,      name: "HTML",          color: "#E34F26" },
      { icon: <SiCss3 />,       name: "CSS",           color: "#1572B6" },
      { icon: <SiTailwindcss />,name: "Tailwind CSS",  color: "#06B6D4" },
      { icon: <SiReact />,      name: "ReactJS",       color: "#61DAFB" },
      { icon: <SiFramer />,     name: "Framer Motion", color: "#EE4B96" },
      { icon: <SiNextdotjs />,  name: "NextJS",        color: "#000000" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.07)",
    skills: [
      { icon: <SiNodedotjs />,       name: "NodeJS",       color: "#68A063" },
      { icon: <SiExpress />,         name: "ExpressJS",    color: "#2563EB" },
      { icon: <SiPostman />,         name: "RESTful APIs", color: "#FF6C37" },
      { icon: <SiSpringboot />,      name: "Spring Boot",  color: "#6DB33F" },
      { icon: <SiJsonwebtokens />,   name: "JWT",          color: "#D63AEF" },
      { icon: <FaLock />,            name: "OAuth",        color: "#4285F4" },
    ],
  },
  {
    title: "Databases",
    emoji: "🗄️",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.07)",
    skills: [
      { icon: <SiMongodb />,   name: "MongoDB",    color: "#47A248" },
      { icon: <SiMysql />,     name: "MySQL",      color: "#4479A1" },
      { icon: <SiPostgresql />,name: "PostgreSQL", color: "#336791" },
      { icon: <SiSupabase />,  name: "Supabase",   color: "#3ECF8E" },
    ],
  },
  {
    title: "Tools & Platforms",
    emoji: "🛠️",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.07)",
    skills: [
      { icon: <SiRedis />,     name: "Redis",      color: "#DC382D" },
      { icon: <SiRabbitmq />,  name: "RabbitMQ",   color: "#FF6600" },
      { icon: <SiDocker />,    name: "Docker",     color: "#2496ED" },
      { icon: <SiGithub />,    name: "GitHub",     color: "#181717" },
      { icon: <SiCloudinary />,name: "Cloudinary", color: "#3448C5" },
      { icon: <SiVercel />,    name: "Vercel",     color: "#000000" },
      { icon: <SiRender />,    name: "Render",     color: "#46E3B7" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      aria-label="Skills section"
      style={{ padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: 72 }}
      >
        <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>
          🛠️ Skills & Stack
        </span>
        <h2 className="section-heading" style={{ marginBottom: 16 }}>
          Skills & <span>Technologies</span>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          The tools and technologies I use to bring ideas to life
        </p>
      </motion.div>

      {/* Categories */}
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: catIdx * 0.07 }}
          >
            {/* Category header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: cat.bg,
                  border: `1.5px solid ${cat.color}28`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                }}
              >
                {cat.emoji}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1E293B",
                  letterSpacing: "-0.02em",
                }}
              >
                {cat.title}
              </h3>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: `linear-gradient(to right, ${cat.color}28, transparent)`,
                }}
              />
            </div>

            {/* Skills grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                gap: 14,
              }}
            >
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="skill-card"
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  whileHover={{ y: -5, scale: 1.04 }}
                  aria-label={skill.name}
                >
                  <div
                    style={{
                      fontSize: 36,
                      marginBottom: 10,
                      color: skill.color,
                      transition: "transform 0.3s",
                      transform: hoveredSkill === skill.name ? "scale(1.12)" : "scale(1)",
                      lineHeight: 1,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: hoveredSkill === skill.name ? "#1E293B" : "#64748B",
                      transition: "color 0.3s",
                      lineHeight: 1.3,
                    }}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 64,
        }}
      >
        {[
          { val: "29",           label: "Technologies Mastered",   color: "#2563EB" },
          { val: "6",            label: "Programming Languages",   color: "#7C3AED" },
          { val: "Full Stack",   label: "Development Ready",       color: "#22C55E" },
        ].map(({ val, label, color }) => (
          <div
            key={label}
            className="clay-card"
            style={{ padding: "28px 24px", textAlign: "center" }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color,
                marginBottom: 6,
              }}
            >
              {val}
            </div>
            <div style={{ fontSize: 14, color: "#64748B", fontWeight: 500 }}>
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}