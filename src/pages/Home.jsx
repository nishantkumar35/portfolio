import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiGithub, SiSpringboot,
} from "react-icons/si";
import MorphingPhotoBox from "../comps/MorphingPhotoBox";

/* ─── Typewriter hook ─── */
function useTypewriter(text, speed = 55, startDelay = 1600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) { setDone(true); return; }
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [displayed, started, text, speed]);

  return { displayed, done };
}

/* ─── Tech icon orbit data ─── */
const techIcons = [
  { Icon: FaReact,       color: "#61DAFB", label: "React",       size: 22 },
  { Icon: FaNodeJs,      color: "#68A063", label: "Node.js",     size: 22 },
  { Icon: SiExpress,     color: "#2563EB", label: "Express.js",  size: 20 },
  { Icon: SiSpringboot,  color: "#6DB33F", label: "Spring Boot", size: 20 },
  { Icon: SiMongodb,     color: "#47A248", label: "MongoDB",     size: 20 },
  { Icon: SiPostgresql,  color: "#336791", label: "PostgreSQL",  size: 20 },
  { Icon: FaDocker,      color: "#2496ED", label: "Docker",      size: 22 },
  { Icon: FaGitAlt,      color: "#F05032", label: "Git",         size: 20 },
  { Icon: SiGithub,      color: "#1E293B", label: "GitHub",      size: 20 },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind",    size: 20 },
];

/* ─── Single orbiting icon ─── */
function OrbitIcon({ Icon, color, label, size, angle, radius, pause }) {
  const [hovered, setHovered] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      animate={{ x, y }}
      style={{ position: "absolute", top: "50%", left: "50%", marginTop: -18, marginLeft: -18, zIndex: hovered ? 50 : 5 }}
      onHoverStart={() => { setHovered(true); setTooltip(true); }}
      onHoverEnd={() => { setHovered(false); setTooltip(false); }}
    >
      <motion.div
        whileHover={{ scale: 1.25 }}
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.92)",
          border: `1.5px solid ${color}33`,
          boxShadow: hovered
            ? `0 4px 20px ${color}40, 0 0 0 4px ${color}18`
            : "0 2px 10px rgba(37,99,235,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "default",
          transition: "box-shadow 0.3s",
          position: "relative",
        }}
      >
        <Icon style={{ color, fontSize: size }} />
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              top: -34,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#1E293B",
              color: "white",
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 9px",
              borderRadius: 6,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              zIndex: 10,
            }}
          >
            {label}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export default function Home() {
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [pauseOrbit, setPauseOrbit] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const rafRef = useRef(null);
  const lastTime = useRef(null);

  const { displayed, done } = useTypewriter("Full Stack Developer", 60, 1600);

  /* Orbit animation via rAF */
  useEffect(() => {
    const tick = (ts) => {
      if (!lastTime.current) lastTime.current = ts;
      const delta = ts - lastTime.current;
      lastTime.current = ts;
      if (!pauseOrbit) {
        setOrbitAngle((a) => (a + delta * 0.018) % 360);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pauseOrbit]);

  /* Parallax */
  useEffect(() => {
    const onMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width  - 0.5) * 20,
        y: ((e.clientY - rect.top)  / rect.height - 0.5) * 14,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const ORBIT_RADIUS_LG = 170;
  const ORBIT_RADIUS_SM = 130;

  return (
    <section
      ref={heroRef}
      id="home-section"
      aria-label="Hero section"
      style={{
        minHeight: "100vh",
        paddingTop: 80,
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "40px 24px 60px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* ── Top badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ marginBottom: 40 }}
        >
          <span className="section-tag">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
            Available for opportunities
          </span>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 80,
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT: Text */}
          <div style={{ flex: "1 1 340px", maxWidth: 520 }}>
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                fontSize: 17,
                color: "#64748B",
                fontWeight: 500,
                marginBottom: 12,
                letterSpacing: "0.01em",
              }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                fontSize: "clamp(38px, 5.5vw, 68px)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#1E293B",
                marginBottom: 18,
              }}
            >
              NISHANT{" "}
              <span className="gradient-text">KUMAR</span>
            </motion.h1>

            {/* Subtitle: typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.55, duration: 0.5 }}
              style={{
                fontSize: "clamp(18px, 2.5vw, 26px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 24,
                minHeight: 36,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <span className={done ? "gradient-text-animate" : "gradient-text"}>
                {displayed}
              </span>
              {!done && <span className="typewriter-cursor" />}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.7 }}
              style={{
                fontSize: 16,
                color: "#64748B",
                lineHeight: 1.75,
                marginBottom: 36,
                maxWidth: 460,
              }}
            >
              I build scalable, secure, and high-performance full-stack web applications with modern technologies — from pixel-perfect UIs to robust backend systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={600}
                offset={-64}
              >
                <button className="btn-primary btn-ripple" style={{ cursor: "pointer" }}>
                  View Projects →
                </button>
              </Link>

              <a
                href="/Nishant_general_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-ripple"
              >
                Download Resume ↗
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-64}
              >
                <button
                  className="btn-ripple"
                  style={{
                    padding: "12px 24px",
                    borderRadius: 14,
                    background: "rgba(124,58,237,0.09)",
                    border: "1.5px solid rgba(124,58,237,0.22)",
                    color: "#7C3AED",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(124,58,237,0.16)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(124,58,237,0.09)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Contact Me ✉
                </button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}
            >
              {[
                { href: "https://www.linkedin.com/in/nishantkumar35/", Icon: FaLinkedin, label: "LinkedIn", color: "#0A66C2" },
                { href: "https://github.com/nishantkumar35", Icon: FaGithub, label: "GitHub", color: "#1E293B" },
                {
                  href: "https://codolio.com/profile/TZGtOMBe",
                  label: "Codolio",
                  color: "#2563EB",
                  img: "https://i.ibb.co/Nn1ssp7d/idi-QOXRYwr-logos-removebg-preview.png",
                },
              ].map(({ href, Icon, label, color, img }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "8px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(37,99,235,0.12)",
                    color: "#64748B",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(37,99,235,0.07)",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = `${color}44`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(37,99,235,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#64748B";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.12)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(37,99,235,0.07)";
                  }}
                >
                  {img ? (
                    <img src={img} alt={label} style={{ width: 18, height: 18, objectFit: "contain" }} />
                  ) : (
                    <Icon style={{ fontSize: 18, color: color }} />
                  )}
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Orbital circle + photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              flex: "0 0 auto",
              position: "relative",
              width: 380,
              height: 380,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={() => setPauseOrbit(true)}
            onMouseLeave={() => setPauseOrbit(false)}
          >
            {/* Glow behind circle */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)",
                animation: "pulse-glow 3s ease-in-out infinite",
              }}
            />

            {/* Ring 1 */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                width: 340,
                height: 340,
                borderRadius: "50%",
                border: "1.5px solid rgba(37,99,235,0.18)",
                animation: "orbit-rotate 22s linear infinite",
              }}
            />
            {/* Ring 2 */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                width: 290,
                height: 290,
                borderRadius: "50%",
                border: "1px solid rgba(124,58,237,0.14)",
                animation: "orbit-rotate 32s linear infinite reverse",
              }}
            />
            {/* Ring 3 */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                width: 240,
                height: 240,
                borderRadius: "50%",
                border: "1px dashed rgba(37,99,235,0.10)",
                animation: "orbit-rotate 18s linear infinite",
              }}
            />

            {/* Orbiting tech icons */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 20,
              }}
            >
              {techIcons.map((tech, i) => {
                const angle = orbitAngle + (i / techIcons.length) * 360;
                const radius = i % 2 === 0 ? ORBIT_RADIUS_LG : ORBIT_RADIUS_SM;
                return (
                  <OrbitIcon
                    key={tech.label}
                    {...tech}
                    angle={angle}
                    radius={radius}
                    pause={pauseOrbit}
                  />
                );
              })}
            </div>

            {/* Center: Photo */}
            <motion.div
              animate={{ x: mousePos.x * 0.08, y: mousePos.y * 0.08 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              style={{
                position: "absolute",
                zIndex: 10,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                width: 220,
                height: 220,
                borderRadius: "50%",
                overflow: "visible",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MorphingPhotoBox photoUrl="https://i.ibb.co/KpQ9pn4L/img.jpg" />
            </motion.div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500, letterSpacing: "0.08em" }}>
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 24,
              height: 38,
              borderRadius: 12,
              border: "2px solid rgba(37,99,235,0.25)",
              display: "flex",
              justifyContent: "center",
              paddingTop: 5,
            }}
          >
            <div
              style={{
                width: 4,
                height: 10,
                borderRadius: 2,
                background: "linear-gradient(to bottom, #2563EB, #7C3AED)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
