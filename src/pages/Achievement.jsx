import React from "react";
import { motion } from "framer-motion";
import { Code, Flame } from "lucide-react";

const achievements = [
  {
    icon: <Code size={22} />,
    title: "350+ Coding Problems Solved",
    description:
      "Solved over 350 coding problems across LeetCode and GeeksforGeeks, strengthening problem-solving skills and algorithmic thinking.",
    date: "October 2025",
    color: "#0EA5E9",
    accent: "rgba(14,165,233,0.08)",
    tag: "DSA & Algorithms",
  },
  {
    icon: <Flame size={22} />,
    title: "100-Day LeetCode Streak Badge",
    description:
      "Achieved the 100-day LeetCode badge by solving coding problems daily, demonstrating strong consistency and discipline in DSA practice.",
    date: "September 2025",
    color: "#F59E0B",
    accent: "rgba(245,158,11,0.08)",
    tag: "Consistency",
  },
];

const cardVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Achievements() {
  return (
    <section
      aria-label="Achievements section"
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
          🏅 Achievements
        </span>
        <h2 className="section-heading" style={{ marginBottom: 16 }}>
          Key <span>Achievements</span>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          Milestones reflecting dedication to problem solving, consistent practice, and continuous learning
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.15 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {achievements.map((item, i) => (
          <motion.article
            key={i}
            variants={cardVariant}
            className="clay-card"
            style={{ padding: 32 }}
            aria-label={item.title}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  flexShrink: 0,
                  boxShadow: `0 6px 20px ${item.color}30`,
                }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#1E293B",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                      flex: 1,
                    }}
                  >
                    {item.title}
                  </h3>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: item.color,
                      background: item.accent,
                      border: `1px solid ${item.color}28`,
                      padding: "3px 10px",
                      borderRadius: 99,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.date}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: "#64748B",
                    lineHeight: 1.7,
                    marginBottom: 14,
                  }}
                >
                  {item.description}
                </p>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "4px 12px",
                    borderRadius: 99,
                    background: item.accent,
                    border: `1px solid ${item.color}22`,
                    fontSize: 12,
                    fontWeight: 600,
                    color: item.color,
                  }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}