import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import LogoLoop from "../component/LogoLoop";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiRender,
  SiVercel,
  SiGithub,
  SiGit,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiNextdotjs,
  SiJsonwebtokens,
} from "react-icons/si";

import { FaJava, FaLock } from "react-icons/fa";

// -------------------------------------------------------------
//  DEVELOPMENT TOOLS (ICONS + URL + TITLE)
// -------------------------------------------------------------
const devTools = [
  {
    node: <SiHtml5 className=" text-[#8a2be2]" />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 className=" text-[#9932cc]" />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiTailwindcss className=" text-[#9400d3]" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiReact className=" text-[#663399]" />,
    title: "ReactJS",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className=" text-[#8a2be2]" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiFramer className=" text-[#9932cc]" />,
    title: "Framer Motion",
    href: "https://www.framer.com/motion",
  },
  {
    node: <SiJavascript className=" text-[#9400d3]" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript className=" text-[#663399]" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiRedux className=" text-[#8a2be2]" />,
    title: "Redux",
    href: "https://redux.js.org",
  },
  {
    node: <SiJsonwebtokens className=" text-[#9932cc]" />,
    title: "JWT",
    href: "https://jwt.io",
  },
  {
    node: <FaLock className=" text-[#9400d3]" />,
    title: "OAuth",
    href: "https://oauth.net",
  },
  {
    node: <SiNodedotjs className=" text-[#663399]" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpress className=" text-[#8a2be2]" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiGit className=" text-[#9932cc]" />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiGithub className=" text-[#9400d3]" />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiRender className=" text-[#663399]" />,
    title: "Render",
    href: "https://render.com",
  },
  {
    node: <SiVercel className=" text-[#8a2be2]" />,
    title: "Vercel",
    href: "https://vercel.com",
  },
];

// -------------------------------------------------------------
//  PROGRAMMING LANGUAGES (ICONS + URL + TITLE)
// -------------------------------------------------------------
const codingLanguages = [
  {
    node: <SiC className=" text-[#8a2be2]" />,
    title: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    node: <SiCplusplus className=" text-[#9932cc]" />,
    title: "C++",
    href: "https://isocpp.org",
  },
  {
    node: <SiPython className=" text-[#9400d3]" />,
    title: "Python",
    href: "https://python.org",
  },
  {
    node: <FaJava className=" text-[#8a2be2]" />,
    title: "Java",
    href: "https://www.java.com",
  },
  {
    node: <SiMysql className=" text-[#9932cc]" />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiMongodb className=" text-[#9400d3]" />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
];

// -------------------------------------------------------------
//  MAIN COMPONENT
// -------------------------------------------------------------
export default function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* ---------------- BACKGROUND DECOR ---------------- */}
        <div>
          <div className="absolute top-20 left-10 text-purple-400/30 text-6xl animate-float font-mono">
            &lt;/&gt;
          </div>

          <div className="absolute top-1/3 right-20 text-cyan-400/30 text-4xl animate-float animation-delay-1000 font-mono"></div>

          <div className="absolute bottom-1/4 left-1/4 text-pink-400/30 text-5xl animate-float animation-delay-2000 font-mono">
            ( )
          </div>

          <div className="absolute top-1/2 right-1/3 text-green-400/30 text-3xl animate-float animation-delay-3000 font-mono">
            []
          </div>

          {/* Mouse Glow */}
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-purple-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x - 192}px, ${
                mousePosition.y - 192
              }px)`,
              transition: "transform 0.4s ease-out",
            }}
          ></div>
        </div>

        {/* ----------------- HEADING ----------------- */}
        <div className="relative z-10 text-white font-mono flex flex-col items-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center pt-20 mb-5"
          >
            <h1 className="text-4xl p-2 md:text-5xl font-bold font-mono bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent relative">
              My Skills
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-400 mt-4 text-lg"
            >
              Technologies I work with
            </motion.p>
          </motion.div>
        </div>

        {/* ---------------- LOGO LOOPS ---------------- */}

        {/* DEVELOPMENT TOOLS LOOP */}
         <h1 className="text-2xl text-center p-2 md:text-3xl font-bold font-mono bg-gradient-to-r from-[#ca1f7b] via-[#cf3476] to-[#ff1dce] bg-clip-text text-transparent relative">
              DEVELOPMENT TOOLS
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            </h1>
        <div className="pt-10" style={{ height: "170px", overflow: "hidden" }}>
          <LogoLoop
            logos={devTools}
            speed={110}
            direction="left"
            logoHeight={50}
            gap={55}
            hoverSpeed={20}
            scaleOnHover
            fadeOut
            fadeOutColor="#663399"
          />
        </div>
      

      <h1 className="text-2xl text-center p-2 md:text-3xl font-bold font-mono bg-gradient-to-r from-[#ca1f7b] via-[#cf3476] to-[#ff1dce] bg-clip-text text-transparent relative">
              PROGRAMMING LANGUAGES
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            </h1>
        {/* PROGRAMMING LANGUAGES LOOP */}
        <div className="pt-10" style={{ height: "170px", overflow: "hidden" }}>
          <LogoLoop
            logos={codingLanguages}
            speed={110}
            direction="right"
            logoHeight={50}
            gap={55}
            hoverSpeed={20}
            scaleOnHover
            fadeOut
            fadeOutColor="#663399"
          />
        </div>
      </div>

      {/* ---------------- CSS ANIMATION ---------------- */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}
