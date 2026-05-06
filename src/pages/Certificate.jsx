import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certs = [
  {
    image: "https://i.ibb.co/0yq7Szx0/72fc5a8e4821aa016d309b6a69176c75.png",
    title: "React JS Certification Course",
    platform: "GeeksforGeeks",
    date: "June 2025",
    link: "https://media.geeksforgeeks.org/courses/certificates/72fc5a8e4821aa016d309b6a69176c75.pdf",
    description:
      "Completed an 8-week React JS course covering hooks, components and modern frontend architecture.",
  },
  {
    image: "https://i.ibb.co/YFFpR0mB/1-25f6c0ee-e3ed-4a0c-ac22-89dec74763ac.png",
    title: "Introduction to Python",
    platform: "Infosys Springboard",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/1PD0Uym28YEo8fAc3gEWYp_LAGel_M5Iq/view",
    description:
      "Learned Python fundamentals including variables, loops, functions and problem solving.",
  },
  {
    image: "https://i.ibb.co/Dg619XP5/sql-basic-certificate.png",
    title: "SQL (Basic) Certification",
    platform: "HackerRank",
    date: "June 2024",
    link: "https://www.hackerrank.com/certificates/ebb60b7e0426",
    description:
      "Validated SQL knowledge including joins, filtering, relational queries and database basics.",
  },
];

export default function CertCarousel() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const n = certs.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const prev = () => setActive((a) => (a - 1 + n) % n);
  const next = () => setActive((a) => (a + 1) % n);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  // Touch swipe support
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section style={{ overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
            Certificates
          </h1>
          <p style={{ color: "#9ca3af", maxWidth: 520, margin: "0 auto", fontSize: 15, lineHeight: 1.6 }}>
            A selection of certifications demonstrating my skills in full-stack development and programming.
          </p>
        </div>

        {/* ── MOBILE: single card + swipe ── */}
        {isMobile ? (
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ position: "relative" }}
          >
            <MobileCard cert={certs[active]} />

            {/* nav buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
              <NavBtn onClick={prev}><ChevronLeft size={18} /></NavBtn>
              <NavBtn onClick={next}><ChevronRight size={18} /></NavBtn>
            </div>
          </div>
        ) : (
          /* ── DESKTOP: 3-card fan ── */
          <DesktopCarousel certs={certs} active={active} prev={prev} next={next} setActive={setActive} />
        )}

        {/* Indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 28 }}>
          {certs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                height: 7,
                width: i === active ? 28 : 7,
                borderRadius: 99,
                background: i === active ? "#a855f7" : "#374151",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Mobile: one card, full width ── */
function MobileCard({ cert }) {
  return (
    <div style={{
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid rgba(168,85,247,0.3)",
      background: "#0b061c",
      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      width: "100%",
    }}>
      <div style={{ position: "relative" }}>
        <img src={cert.image} alt={cert.title}
          style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 30%, #0b061c 100%)"
        }} />
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{cert.title}</h3>
        <p style={{ color: "#c084fc", fontSize: 13, marginBottom: 8 }}>{cert.platform}</p>
        <p style={{ color: "#d1d5db", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{cert.description}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#9ca3af", fontSize: 12 }}>{cert.date}</span>
          <a href={cert.link} target="_blank" rel="noreferrer" style={{
            fontSize: 12, padding: "5px 14px", borderRadius: 99,
            background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)",
            color: "#c084fc", textDecoration: "none",
          }}>View Certificate</a>
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: 3-up carousel ── */
function DesktopCarousel({ certs, active, prev, next, setActive }) {
  const n = certs.length;
  const slots = [-1, 0, 1].map((pos) => ({ idx: (active + pos + n) % n, pos }));

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: 400 }}>
      <NavBtn onClick={prev} style={{ position: "absolute", left: 0, zIndex: 20 }}>
        <ChevronLeft size={20} />
      </NavBtn>
      <NavBtn onClick={next} style={{ position: "absolute", right: 0, zIndex: 20 }}>
        <ChevronRight size={20} />
      </NavBtn>

      {slots.map(({ idx, pos }) => {
        const isCenter = pos === 0;
        return (
          <div
            key={idx}
            onClick={() => { if (pos === -1) prev(); if (pos === 1) next(); }}
            style={{
              position: "absolute",
              transform: `translateX(${pos * 300}px) scale(${isCenter ? 1 : 0.8})`,
              opacity: isCenter ? 1 : 0.55,
              zIndex: isCenter ? 10 : 5,
              transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
              cursor: isCenter ? "default" : "pointer",
              width: 400,
            }}
          >
            <div style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid rgba(168,85,247,0.3)",
              background: "#0b061c",
              boxShadow: isCenter ? "0 24px 80px rgba(0,0,0,0.6)" : "none",
            }}>
              <div style={{ position: "relative" }}>
                <img src={certs[idx].image} alt={certs[idx].title}
                  style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 30%, #0b061c 100%)"
                }} />
              </div>
              <div style={{ padding: "16px 20px 20px" }}>
                <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{certs[idx].title}</h3>
                <p style={{ color: "#c084fc", fontSize: 13, marginBottom: 8 }}>{certs[idx].platform}</p>
                <p style={{ color: "#d1d5db", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{certs[idx].description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#9ca3af", fontSize: 12 }}>{certs[idx].date}</span>
                  <a href={certs[idx].link} target="_blank" rel="noreferrer" style={{
                    fontSize: 12, padding: "5px 14px", borderRadius: 99,
                    background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)",
                    color: "#c084fc", textDecoration: "none",
                  }}>View Certificate</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Reusable nav button ── */
function NavBtn({ onClick, children, style = {} }) {
  return (
    <button onClick={onClick} style={{
      width: 40, height: 40, borderRadius: "50%",
      background: "rgba(168,85,247,0.15)",
      border: "1px solid rgba(168,85,247,0.4)",
      color: "#c084fc", cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "background 0.2s",
      flexShrink: 0,
      ...style,
    }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(168,85,247,0.35)"}
      onMouseLeave={e => e.currentTarget.style.background = "rgba(168,85,247,0.15)"}
    >
      {children}
    </button>
  );
}