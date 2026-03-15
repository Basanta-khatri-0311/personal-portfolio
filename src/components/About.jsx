import React, { useEffect, useRef } from "react";

// Simple tech tag list — no bars, no percentages, no heavy cards
const STACK = [
  "React", "JavaScript", "Tailwind CSS",
  "HTML", "CSS", "Git",
  "Responsive Design", "REST APIs", "Figma",
];

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(
              (el, i) => setTimeout(() => el.classList.add("visible"), i * 100)
            );
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, delay]);
}

export default function About() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="about" className="py-24 md:py-36 bg-[#08080f] relative overflow-hidden">
      {/* Faint right-side ambient */}
      <div
        className="orb absolute -right-32 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "rgba(37,99,235,0.05)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="reveal mb-14">
          <p className="section-label mb-4">About me</p>
          <h2
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            A bit about{" "}
            <span className="text-gradient">who I am</span>
          </h2>
        </div>

        {/* ── Content grid: 60 / 40 ── */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Left — Bio text (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="reveal text-slate-300 text-base md:text-lg leading-relaxed">
              I'm Basanta — a self-taught frontend developer based in Nepal with a genuine
              passion for building things on the web. Over the past year, I've worked on
              projects ranging from spiritual reading apps to productivity tools,
              always focusing on clean code and polished user experiences.
            </p>
            <p className="reveal text-slate-400 text-base leading-relaxed">
              I believe good design and good code go hand in hand. I care deeply about
              accessibility, performance and the little interactions that make an interface
              feel alive. When I'm not coding, I explore design systems or contribute to
              open source.
            </p>

            {/* Quick facts row */}
            <div className="reveal grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: "ri-map-pin-2-line", text: "Nepal" },
                { icon: "ri-time-line", text: "1+ yr Experience" },
                { icon: "ri-graduation-cap-line", text: "Self-taught" },
                { icon: "ri-code-s-slash-line", text: "5+ Projects" },
                { icon: "ri-heart-line", text: "Open to Work" },
                { icon: "ri-translate-2", text: "English / Nepali/ Hindi" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2">
                  <i className={`${f.icon} text-blue-400 text-sm shrink-0`} />
                  <span className="text-slate-400 text-sm">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Tech stack tags (2 cols) */}
          <div className="lg:col-span-2 reveal-right">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-5">
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg border text-slate-300 hover:text-blue-300 hover:border-blue-500/30 transition-colors duration-200 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Currently learning */}
            <div
              className="mt-8 p-4 rounded-2xl border"
              style={{
                background: "rgba(59,130,246,0.05)",
                borderColor: "rgba(59,130,246,0.15)",
              }}
            >
              <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                Currently Learning
              </p>
              <p className="text-slate-300 text-sm">
                TypeScript · Next.js · Node.js
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}