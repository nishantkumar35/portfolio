import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Animated counter ─── */
function AnimatedCounter({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const educationData = [
  {
    title: "High School",
    duration: "2020",
    institution: "Utkramit M.S. Babhangama, Bihar",
    metric: "64%",
    metricLabel: "Score",
    color: "#2563EB",
    accent: "rgba(37,99,235,0.08)",
    icon: "🎓",
  },
  {
    title: "Intermediate (12th)",
    duration: "2021 – 2023",
    institution: "M.S. College Manjhaul, Bihar",
    metric: "61%",
    metricLabel: "Score",
    color: "#7C3AED",
    accent: "rgba(124,58,237,0.08)",
    icon: "📚",
  },
  {
    title: "B.Tech — Computer Science & Engineering",
    duration: "2023 – 2027",
    institution: "Lovely Professional University, Punjab",
    metric: "7.0",
    metricLabel: "CGPA",
    color: "#22C55E",
    accent: "rgba(34,197,94,0.07)",
    icon: "💻",
  },
];

const stats = [
  { value: 15,  suffix: "+", label: "Projects Built" },
  { value: 25,  suffix: "+", label: "Technologies" },
  { value: 400, suffix: "+", label: "Problems Solved" },
  { value: 3,   suffix: "+", label: "Years Learning" },
];

export default function About() {
  return (
    <section
      id="about-section"
      aria-label="About section"
      style={{
        padding: "96px 24px",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: 72 }}
      >
        <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>
          👤 About Me
        </span>
        <h2 className="section-heading" style={{ marginBottom: 16 }}>
          Who I <span>Am</span>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          A passionate Full Stack Developer crafting elegant, high-performance digital experiences.
        </p>
      </motion.div>

      {/* Two-column: bio + education */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{
          display: "flex",
          gap: 28,
          flexWrap: "wrap",
          alignItems: "flex-start",
          marginBottom: 60,
        }}
      >
        {/* Left — Bio card */}
        <motion.div
          variants={fadeUp}
          className="clay-card"
          style={{ flex: "1 1 320px", padding: 36 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                flexShrink: 0,
                boxShadow: "0 4px 16px rgba(37,99,235,0.25)",
              }}
            >
              👨‍💻
            </div>
            <div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#1E293B",
                  letterSpacing: "-0.02em",
                }}
              >
                My Story
              </h3>
              <p style={{ color: "#64748B", fontSize: 13, marginTop: 2 }}>
                Full Stack Developer & UI/UX Enthusiast
              </p>
            </div>
          </div>

          <p
            style={{
              color: "#475569",
              fontSize: 15.5,
              lineHeight: 1.8,
              marginBottom: 18,
            }}
          >
            I'm a Full-Stack Developer specializing in the MERN stack, Tailwind CSS, and Figma.
            I love building modern, responsive, and user-friendly web applications — from designing
            intuitive interfaces to developing secure, scalable backend systems.
          </p>
          <p
            style={{
              color: "#475569",
              fontSize: 15.5,
              lineHeight: 1.8,
              marginBottom: 28,
            }}
          >
            My focus is on crafting digital experiences that are functional, efficient, and visually
            engaging, while continuously learning and adapting to new technologies. Every project is
            an opportunity to push boundaries and create something amazing.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["React", "Node.js", "Express.js", "MongoDB", "Next.js", "Figma", "TypeScript", "Redis"].map(
              (skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Current Focus */}
          <div
            style={{
              marginTop: 28,
              padding: 18,
              borderRadius: 14,
              background: "rgba(37,99,235,0.05)",
              border: "1px solid rgba(37,99,235,0.12)",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 14, color: "#2563EB", marginBottom: 6 }}>
              🎯 Current Focus
            </div>
            <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
              Building production-grade microservices architectures & exploring cloud-native DevOps practices.
            </p>
          </div>

          {/* Career Goal */}
          <div
            style={{
              marginTop: 14,
              padding: 18,
              borderRadius: 14,
              background: "rgba(124,58,237,0.05)",
              border: "1px solid rgba(124,58,237,0.12)",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 14, color: "#7C3AED", marginBottom: 6 }}>
              🚀 Career Goal
            </div>
            <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>
              To join a product-first engineering team where I can build impactful, scalable software and grow as a senior full-stack engineer.
            </p>
          </div>
        </motion.div>

        {/* Right — Education Timeline */}
        <motion.div
          variants={fadeUp}
          className="clay-card"
          style={{ flex: "1 1 320px", padding: 36 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "linear-gradient(135deg, #2563EB, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                flexShrink: 0,
                boxShadow: "0 4px 16px rgba(37,99,235,0.25)",
              }}
            >
              🎓
            </div>
            <div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#1E293B",
                  letterSpacing: "-0.02em",
                }}
              >
                Education Journey
              </h3>
              <p style={{ color: "#64748B", fontSize: 13, marginTop: 2 }}>
                Academic milestones
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: 48 }}>
            <div className="timeline-line" />
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {educationData.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{ position: "relative" }}
                >
                  <div className="timeline-dot" />
                  <div
                    style={{
                      padding: "16px 20px",
                      background: item.accent,
                      border: `1px solid ${item.color}22`,
                      borderRadius: 14,
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(4px)";
                      e.currentTarget.style.boxShadow = `0 4px 16px ${item.color}18`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color: item.color,
                            letterSpacing: "-0.01em",
                            lineHeight: 1.3,
                            marginBottom: 4,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#64748B",
                            marginBottom: 3,
                            fontStyle: "italic",
                          }}
                        >
                          {item.institution}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: 12,
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          <span style={{ color: "#94A3B8" }}>📅 {item.duration}</span>
                          <span style={{ color: item.color }}>
                            {item.metricLabel}: {item.metric}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 20,
        }}
      >
        {stats.map(({ value, suffix, label }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="stat-card"
          >
            <div className="stat-number">
              <AnimatedCounter end={value} suffix={suffix} />
            </div>
            <div className="stat-label">{label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
