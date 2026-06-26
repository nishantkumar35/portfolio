import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "home",          label: "Home" },
  { to: "about",         label: "About" },
  { to: "skills",        label: "Skills" },
  { to: "projects",      label: "Projects" },
  { to: "certifications",label: "Certs" },
  // { to: "achievements",  label: "Wins" },
  { to: "contact",       label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeSection, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Desktop Top Nav ── */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          style={{
            background: scrolled ? "rgba(238,242,247,0.88)" : "rgba(238,242,247,0.60)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: scrolled ? "1px solid rgba(37,99,235,0.12)" : "1px solid transparent",
            boxShadow: scrolled ? "0 4px 24px rgba(37,99,235,0.08)" : "none",
            transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 24px",
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={600}
              offset={-64}
              style={{ cursor: "pointer", textDecoration: "none" }}
              aria-label="Go to Home"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(37,99,235,0.30)",
                    color: "white",
                    fontWeight: 800,
                    fontSize: 15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  NK
                </div>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#1E293B",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Nishant<span style={{ color: "#2563EB" }}>.</span>
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <nav
              className="hidden md:flex"
              style={{ gap: 4 }}
              aria-label="Section links"
            >
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-64}
                  onSetActive={() => setActive(to)}
                  activeClass="nav-active-pill"
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    color: activeSection === to ? "#2563EB" : "#64748B",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    position: "relative",
                    textDecoration: "none",
                    userSelect: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== to) e.currentTarget.style.color = "#1E293B";
                    e.currentTarget.style.background = "rgba(37,99,235,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== to) e.currentTarget.style.color = "#64748B";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex" style={{ alignItems: "center", gap: 10 }}>
              <a
                href="/Nishant_general_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-ripple"
                style={{ fontSize: 14, padding: "8px 20px", borderRadius: 10 }}
                aria-label="Download Resume"
              >
                Resume ↗
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(255,255,255,0.80)",
                border: "1px solid rgba(37,99,235,0.15)",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                color: "#1E293B",
                fontSize: 20,
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
                transition: "all 0.2s",
              }}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(30,41,59,0.35)",
              backdropFilter: "blur(4px)",
              zIndex: 998,
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ── Mobile Sidebar ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: 280,
              background: "rgba(238,242,247,0.96)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(37,99,235,0.12)",
              boxShadow: "-8px 0 40px rgba(37,99,235,0.12)",
              zIndex: 999,
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Sidebar Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 800,
                    fontSize: 13,
                  }}
                >
                  NK
                </div>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#1E293B" }}>
                  Nishant<span style={{ color: "#2563EB" }}>.</span>
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "rgba(37,99,235,0.07)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#64748B",
                  fontSize: 18,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(37,99,235,0.13)";
                  e.currentTarget.style.color = "#1E293B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(37,99,235,0.07)";
                  e.currentTarget.style.color = "#64748B";
                }}
              >
                <FiX />
              </button>
            </div>

            {/* Sidebar Links */}
            <nav
              style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}
              aria-label="Mobile navigation links"
            >
              {navLinks.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={to}
                    smooth={true}
                    duration={600}
                    offset={-64}
                    spy={true}
                    onSetActive={() => setActive(to)}
                    onClick={() => setIsOpen(false)}
                    activeClass="nav-active-pill"
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: 12,
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#64748B",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textDecoration: "none",
                      userSelect: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(37,99,235,0.07)";
                      e.currentTarget.style.color = "#1E293B";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#64748B";
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Sidebar Footer */}
            <div style={{ paddingTop: 24, borderTop: "1px solid rgba(37,99,235,0.10)" }}>
              <a
                href="/Nishant_general_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-ripple"
                style={{ width: "100%", justifyContent: "center", borderRadius: 12 }}
                aria-label="Download Resume"
              >
                Download Resume ↗
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
