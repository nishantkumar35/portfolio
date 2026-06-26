import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Projects from "./pages/project";
import Skills from "./pages/Skill";
import Nav from "./pages/Nav";
import { Element } from "react-scroll";
import Certifications from "./pages/Certificate";
// import Achievements from "./pages/Achievement";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor Glow */}
      <div ref={cursorRef} className="cursor-glow" />

      {/* Animated Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0, background: "#EEF2F7" }}
      >
        {/* Animated gradient blobs */}
        <div
          className="bg-blob animate-blob"
          style={{
            width: 700,
            height: 700,
            top: "-15%",
            left: "-10%",
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.06) 50%, transparent 70%)",
          }}
        />
        <div
          className="bg-blob animate-blob delay-300"
          style={{
            width: 600,
            height: 600,
            bottom: "10%",
            right: "-8%",
            background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, rgba(37,99,235,0.05) 50%, transparent 70%)",
            animationDelay: "4s",
          }}
        />
        <div
          className="bg-blob animate-blob"
          style={{
            width: 400,
            height: 400,
            top: "40%",
            left: "40%",
            background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 60%)",
            animationDelay: "8s",
          }}
        />
        <div
          className="bg-blob animate-blob delay-700"
          style={{
            width: 350,
            height: 350,
            top: "20%",
            right: "20%",
            background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%)",
            animationDelay: "2s",
          }}
        />

        {/* Subtle dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />

        <Element name="home">
          <Home />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="certifications">
          <Certifications />
        </Element>

        {/* <Element name="achievements">
          <Achievements />
        </Element> */}

        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </>
  );
}

export default App;