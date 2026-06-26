import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Award } from "lucide-react";

const certs = [
  {
    image: "/dsa_certificate.png",
    title: "Data Structures and Algorithms",
    platform: "LPU (iamneo)",
    date: "Dec 2024",
    link: "/dsa_certificate.png",
    description:
      "Completed a comprehensive 72-hour course on Data Structures and Algorithms covering key programming structures and algorithmic patterns.",
    color: "#4F46E5",
    platformBg: "rgba(79,70,229,0.08)",
  },
  {
    image: "/oop_certificate.png",
    title: "Object Oriented Programming",
    platform: "LPU (iamneo)",
    date: "Dec 2024",
    link: "/oop_certificate.png",
    description:
      "Completed a 72-hour specialized course covering core OOP principles, paradigms, design patterns, and application engineering.",
    color: "#EA580C",
    platformBg: "rgba(234,88,12,0.08)",
  },
  {
    image: "https://i.ibb.co/0yq7Szx0/72fc5a8e4821aa016d309b6a69176c75.png",
    title: "React JS Certification Course",
    platform: "GeeksforGeeks",
    date: "June 2025",
    link: "https://media.geeksforgeeks.org/courses/certificates/72fc5a8e4821aa016d309b6a69176c75.pdf",
    description:
      "Completed an 8-week React JS course covering hooks, components and modern frontend architecture.",
    color: "#2563EB",
    platformBg: "rgba(37,99,235,0.08)",
  },
  {
    image: "https://i.ibb.co/YFFpR0mB/1-25f6c0ee-e3ed-4a0c-ac22-89dec74763ac.png",
    title: "Introduction to Python",
    platform: "Infosys Springboard",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/1PD0Uym28YEo8fAc3gEWYp_LAGel_M5Iq/view",
    description:
      "Learned Python fundamentals including variables, loops, functions and problem solving.",
    color: "#7C3AED",
    platformBg: "rgba(124,58,237,0.08)",
  },
  {
    image: "https://i.ibb.co/Dg619XP5/sql-basic-certificate.png",
    title: "SQL (Basic) Certification",
    platform: "HackerRank",
    date: "June 2024",
    link: "https://www.hackerrank.com/certificates/ebb60b7e0426",
    description:
      "Validated SQL knowledge including joins, filtering, relational queries and database basics.",
    color: "#22C55E",
    platformBg: "rgba(34,197,94,0.08)",
  },
];

export default function Certifications() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const n = certs.length;
  const intervalRef = useRef(null);

  const go = (newIdx, dir) => {
    setDirection(dir);
    setActive(newIdx);
  };
  const prev = () => go((active - 1 + n) % n, -1);
  const next = () => go((active + 1) % n, 1);

  useEffect(() => {
    intervalRef.current = setInterval(() => next(), 5000);
    return () => clearInterval(intervalRef.current);
  }, [active]);

  // Touch swipe
  const touchStart = useRef(null);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.96, transition: { duration: 0.35 } }),
  };

  const cert = certs[active];

  return (
    <section
      aria-label="Certifications section"
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
          🏆 Certifications
        </span>
        <h2 className="section-heading" style={{ marginBottom: 16 }}>
          My <span>Certificates</span>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          Certified expertise across frontend development, Python, and databases
        </p>
      </motion.div>

      {/* Carousel */}
      <div
        style={{ maxWidth: 740, margin: "0 auto", position: "relative" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Nav buttons */}
        <button
          onClick={prev}
          aria-label="Previous certificate"
          style={{
            position: "absolute",
            left: -24,
            top: "50%",
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: 14,
            background: "rgba(255,255,255,0.90)",
            border: "1.5px solid rgba(37,99,235,0.18)",
            boxShadow: "0 4px 16px rgba(37,99,235,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#2563EB",
            transition: "all 0.25s",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(37,99,235,0.08)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.90)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          aria-label="Next certificate"
          style={{
            position: "absolute",
            right: -24,
            top: "50%",
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: 14,
            background: "rgba(255,255,255,0.90)",
            border: "1.5px solid rgba(37,99,235,0.18)",
            boxShadow: "0 4px 16px rgba(37,99,235,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#2563EB",
            transition: "all 0.25s",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(37,99,235,0.08)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.90)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Card */}
        <div style={{ overflow: "hidden", borderRadius: 20 }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1.5px solid rgba(255,255,255,0.95)",
                borderRadius: 20,
                boxShadow: `0 16px 56px ${cert.color}18, 0 4px 20px rgba(37,99,235,0.09), inset 0 1px 0 rgba(255,255,255,0.9)`,
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", height: 240 }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.95) 100%)",
                  }}
                />
                {/* Platform badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    padding: "5px 14px",
                    borderRadius: 99,
                    background: cert.platformBg,
                    border: `1px solid ${cert.color}28`,
                    fontSize: 12,
                    fontWeight: 700,
                    color: cert.color,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {cert.platform}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "28px 32px 32px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 4px 14px ${cert.color}30`,
                    }}
                  >
                    <Award size={20} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: "#1E293B",
                        letterSpacing: "-0.025em",
                        marginBottom: 4,
                      }}
                    >
                      {cert.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 12 }}>
                      📅 {cert.date}
                    </p>
                    <p
                      style={{
                        fontSize: 14.5,
                        color: "#64748B",
                        lineHeight: 1.7,
                        marginBottom: 20,
                      }}
                    >
                      {cert.description}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title} certificate`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "10px 20px",
                        borderRadius: 12,
                        background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
                        color: "white",
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                        boxShadow: `0 4px 14px ${cert.color}30`,
                        transition: "all 0.25s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 8px 22px ${cert.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 4px 14px ${cert.color}30`;
                      }}
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 28,
          }}
        >
          {certs.map((c, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 1 : -1)}
              aria-label={`Go to certificate ${i + 1}`}
              style={{
                height: 7,
                width: i === active ? 28 : 7,
                borderRadius: 99,
                background: i === active ? certs[i].color : "rgba(37,99,235,0.18)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}