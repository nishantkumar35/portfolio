import React, { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const contactInfo = [
  {
    icon: <EnvelopeIcon style={{ width: 22, height: 22 }} />,
    title: "Email",
    value: "nk0090807@gmail.com",
    href: "mailto:nk0090807@gmail.com",
    color: "#2563EB",
    accent: "rgba(37,99,235,0.07)",
  },
  {
    icon: <PhoneIcon style={{ width: 22, height: 22 }} />,
    title: "Phone",
    value: "+91 9508619804",
    href: "tel:+919508619804",
    color: "#7C3AED",
    accent: "rgba(124,58,237,0.07)",
  },
  {
    icon: <MapPinIcon style={{ width: 22, height: 22 }} />,
    title: "Location",
    value: "Begusarai, Bihar, India",
    href: null,
    color: "#22C55E",
    accent: "rgba(34,197,94,0.07)",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [focusedField, setFocusedField] = useState(null);
  const [showBackTop, setShowBackTop] = useState(true);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  return (
    <>
      <section
        aria-label="Contact section"
        style={{ padding: "96px 24px 48px", maxWidth: 1280, margin: "0 auto" }}
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
            ✉️ Get In Touch
          </span>
          <h2 className="section-heading" style={{ marginBottom: 16 }}>
            Let's <span>Connect</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div
          style={{
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {/* Left — Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="clay-card"
            style={{ flex: "1 1 320px", padding: 36 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
                }}
              >
                💬
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#1E293B", letterSpacing: "-0.02em" }}>
                  Send a Message
                </h3>
                <p style={{ color: "#64748B", fontSize: 13 }}>I'll get back to you within 24 hours</p>
              </div>
            </div>

            <motion.form
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {[
                { field: "name",    placeholder: "Your full name",        label: "Name" },
                { field: "email",   placeholder: "your@email.com",        label: "Email" },
                { field: "subject", placeholder: "What is this regarding?",label: "Subject" },
              ].map(({ field, placeholder, label }) => (
                <motion.div key={field} variants={fadeUp}>
                  <label
                    htmlFor={`contact-${field}`}
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#475569",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </label>
                  <input
                    id={`contact-${field}`}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={placeholder}
                    className="form-input"
                    style={{
                      boxShadow: focusedField === field
                        ? "0 0 0 3px rgba(37,99,235,0.10), 0 2px 8px rgba(37,99,235,0.08)"
                        : undefined,
                    }}
                  />
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <label
                  htmlFor="contact-message"
                  style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 6 }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  required
                  placeholder="Tell me about your project or idea..."
                  className="form-input"
                  style={{
                    resize: "none",
                    boxShadow: focusedField === "message"
                      ? "0 0 0 3px rgba(37,99,235,0.10)"
                      : undefined,
                  }}
                />
              </motion.div>

              <motion.button
                variants={fadeUp}
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02, y: status === "loading" ? 0 : -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary btn-ripple"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "14px 24px",
                  borderRadius: 14,
                  fontSize: 15,
                  opacity: status === "loading" ? 0.75 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading" ? (
                  <>
                    <svg style={{ width: 16, height: 16, animation: "spin-slow 1s linear infinite" }} fill="none" viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <PaperAirplaneIcon style={{ width: 16, height: 16, marginLeft: 4 }} />
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: "14px 18px",
                    borderRadius: 12,
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.25)",
                    color: "#16a34a",
                    fontSize: 14,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: "14px 18px",
                    borderRadius: 12,
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.22)",
                    color: "#dc2626",
                    fontSize: 14,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}
            </motion.form>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* Contact cards */}
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="clay-card"
                style={{ padding: "20px 24px" }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <ContactIconBox icon={info.icon} color={info.color} accent={info.accent} />
                    <ContactDetails title={info.title} value={info.value} color={info.color} />
                  </a>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <ContactIconBox icon={info.icon} color={info.color} accent={info.accent} />
                    <ContactDetails title={info.title} value={info.value} color={info.color} />
                  </div>
                )}
              </div>
            ))}

            {/* Social links */}
            <div
              className="clay-card"
              style={{ padding: "20px 24px" }}
            >
              <p style={{ fontSize: 13, fontWeight: 600, color: "#64748B", marginBottom: 14 }}>
                CONNECT ON SOCIAL
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { href: "https://github.com/nishantkumar35", Icon: FaGithub, label: "GitHub", color: "#1E293B" },
                  { href: "https://www.linkedin.com/in/nishantkumar35/", Icon: FaLinkedin, label: "LinkedIn", color: "#0A66C2" },
                  { href: "mailto:nk0090807@gmail.com", icon: <EnvelopeIcon style={{ width: 18, height: 18 }} />, label: "Email", color: "#2563EB" },
                ].map(({ href, Icon, icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.70)",
                      border: "1.5px solid rgba(37,99,235,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#64748B",
                      fontSize: 18,
                      textDecoration: "none",
                      transition: "all 0.25s",
                      boxShadow: "0 2px 8px rgba(37,99,235,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.borderColor = `${color}44`;
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 6px 18px ${color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#64748B";
                      e.currentTarget.style.borderColor = "rgba(37,99,235,0.12)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(37,99,235,0.07)";
                    }}
                  >
                    {Icon ? <Icon /> : icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="clay-card"
              style={{
                padding: "20px 24px",
                background: "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(124,58,237,0.06))",
                border: "1.5px solid rgba(37,99,235,0.14)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22C55E",
                    display: "inline-block",
                    boxShadow: "0 0 0 3px rgba(34,197,94,0.25)",
                  }}
                />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#16a34a" }}>
                  Available for Opportunities
                </span>
              </div>
              <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>
                Open to full-time roles, internships, and exciting freelance projects.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(37,99,235,0.10)",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 16,
            color: "#64748B",
            fontWeight: 500,
            marginBottom: 6,
            lineHeight: 1.7,
          }}
        >
          Thanks for visiting.{" "}
          <span className="gradient-text" style={{ fontWeight: 700 }}>
            Let's build something amazing together.
          </span>
        </p>
        <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 4 }}>
          © {new Date().getFullYear()} Nishant Kumar — Made with ❤️ in India
        </p>
      </footer>

      {/* ── Back to top ── */}
      <Link to="home" smooth={true} duration={700} offset={-64}>
        <button
          className="back-to-top"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </Link>
    </>
  );
}

function ContactIconBox({ icon, color, accent }) {
  return (
    <div
      style={{
        width: 46,
        height: 46,
        borderRadius: 13,
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexShrink: 0,
        boxShadow: `0 4px 14px ${color}28`,
      }}
    >
      {icon}
    </div>
  );
}

function ContactDetails({ title, value, color }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", letterSpacing: "0.05em", marginBottom: 2 }}>
        {title.toUpperCase()}
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 600, color: "#1E293B" }}>{value}</div>
    </div>
  );
}
