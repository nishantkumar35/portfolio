import React from "react";
import { Code, Flame } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: "350+ Coding Problems Solved",
      description:
        "Solved over 350 coding problems across LeetCode and GeeksforGeeks, strengthening problem-solving skills and algorithmic thinking.",
      date: "October 2025 ",
    },
    {
      icon: <Flame className="w-6 h-6 text-orange-400" />,
      title: "100-Day LeetCode Streak Badge",
      description:
        "Achieved the 100-day LeetCode badge by solving coding problems daily, demonstrating strong consistency and discipline in DSA practice.",
      date: "September 2025",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
           Achievements
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones reflecting my dedication to problem solving, consistent coding practice, and continuous learning in Data Structures and Algorithms.
          </p>
        </div>

        {/* Cards */}

        <div className="space-y-6">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="
              flex items-start gap-6 p-6 rounded-xl
              border border-slate-700
              bg-slate-900/60 backdrop-blur
              hover:border-purple-500/40
              transition-all duration-300
              shadow-lg hover:shadow-purple-500/20
              "
            >
              {/* Icon */}

              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 border border-slate-700">
                {item.icon}
              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="flex justify-between items-center flex-wrap gap-2">

                  <h3 className="text-lg font-semibold text-gray-100">
                    {item.title}
                  </h3>

                  <span className="text-sm text-purple-400 font-medium">
                    {item.date}
                  </span>

                </div>

                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}