import React, { useEffect, useRef } from "react";

const TECH_GROUPS = [
  {
    title: "Frontend",
    icon: "ri-layout-4-line",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    techs: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: "ri-server-line",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    techs: ["Node.js", "Express", "REST APIs", "Authentication", "JWT"],
  },
  {
    title: "Database",
    icon: "ri-database-2-line",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    techs: ["MongoDB", "PostgreSQL", "SQL", "Mongoose"],
  },
  {
    title: "AI & Automation",
    icon: "ri-robot-2-line",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    techs: ["LLM Integrations", "RAG", "n8n", "Workflow Automation"],
  },
  {
    title: "Tools & DevOps",
    icon: "ri-tools-line",
    color: "text-slate-400",
    bg: "bg-slate-400/10",
    border: "border-slate-400/20",
    techs: ["Git", "GitHub", "Docker", "Postman", "Vite"],
  },
];

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

export default function TechStack() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="tech-stack" className="py-24 md:py-36 bg-transparent relative overflow-hidden scroll-mt-20 border-t border-white/5">
      {/* Background ambient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16 md:mb-24">
          <p className="section-label justify-center mb-4">Tech Stack</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TECH_GROUPS.map((group, index) => (
            <div 
              key={group.title} 
              className="reveal p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all duration-300 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${group.bg} ${group.border} border`}>
                  <i className={`${group.icon} ${group.color} text-2xl group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-white/20 hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Empty state filler for grid alignment if needed, or promotional card */}
          <div className="reveal p-8 rounded-3xl border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center text-center">
            <i className="ri-lightbulb-flash-line text-4xl text-slate-500 mb-4" />
            <p className="text-slate-400 text-sm">Always learning and exploring new technologies to build better products.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
