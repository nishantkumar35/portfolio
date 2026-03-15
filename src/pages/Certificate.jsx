import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
/* ---------------- Certificates ---------------- */

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
  }
];

/* ---------------- Card Positions ---------------- */

const SIZES = {
  "-1": { scale: 0.8, opacity: 0.6 },
  "0": { scale: 1, opacity: 1 },
  "1": { scale: 0.8, opacity: 0.6 },
};

function getSlots(active, total) {
  return [-1, 0, 1].map((pos) => ({
    idx: (active + pos + total) % total,
    pos,
  }));
}

/* ---------------- Card ---------------- */

function CertCard({ cert, pos, onClick }) {
  const { scale, opacity } = SIZES[String(pos)];
  const isCenter = pos === 0;

  return (
    <div
      onClick={onClick}
      style={{
        transform: `translateX(${pos * 260}px) scale(${scale})`,
        opacity,
        zIndex: isCenter ? 10 : 5,
      }}
      className="absolute transition-all duration-500 cursor-pointer"
    >
      <div className="w-[340px] md:w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 bg-[#0b061c]">

        {/* Image */}
        <div className="relative">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-[220px] object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b061c] via-[#0b061c]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">

          <h3 className="text-white text-lg font-semibold mb-1">
            {cert.title}
          </h3>

          <p className="text-purple-300 text-sm mb-2">
            {cert.platform}
          </p>

          <p className="text-gray-300 text-sm mb-4">
            {cert.description}
          </p>

          <div className="flex justify-between items-center">

            <span className="text-xs text-gray-400">
              {cert.date}
            </span>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-500/40 transition"
            >
              View Certificate
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------------- Main Carousel ---------------- */

export default function CertCarousel() {

  const [active, setActive] = useState(0);
  const n = certs.length;

  const prev = () => setActive((a) => (a - 1 + n) % n);
  const next = () => setActive((a) => (a + 1) % n);

  /* autoplay */

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  const slots = getSlots(active, n);

  return (
    <section>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Certificates
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of certifications demonstrating my skills in
            full-stack development and programming.
          </p>

        </div>

        {/* Carousel */}

        <div className="relative flex items-center justify-center h-[360px]">

          {/* prev */}

          <button
            onClick={prev}
            className="absolute left-0 md:left-[-40px] z-20 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xl flex items-center justify-center hover:bg-purple-500/40"
          >
            <ChevronLeft size={21} />
          </button>

          {/* next */}

          <button
            onClick={next}
            className="absolute right-0 md:right-[-40px] z-20 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xl flex items-center justify-center hover:bg-purple-500/40"
          >
            <ChevronRight size={21} />
          </button>

          {/* cards */}

          {slots.map(({ idx, pos }) => (
            <CertCard
              key={idx}
              cert={certs[idx]}
              pos={pos}
              onClick={() => {
                if (pos === -1) prev();
                if (pos === 1) next();
              }}
            />
          ))}

        </div>

        {/* indicators */}

        <div className="flex justify-center mt-10 gap-3">

          {certs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-purple-400"
                  : "w-2 bg-gray-500"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}