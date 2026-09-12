import React, { useEffect, useRef } from "react";

const EXPERIENCES = [
  {
    role: "Full-Stack Developer",
    company: "Tech Solutions Inc.",
    date: "2024 - Present",
    description: "Architected and developed a full-stack SaaS platform using the MERN stack. Designed scalable databases, implemented robust authentication, and led frontend development for the main application dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    role: "Frontend Engineer",
    company: "Creative Web Agency",
    date: "2023 - 2024",
    description: "Built responsive and highly interactive web interfaces for various clients. Optimized frontend performance, reducing load times by 40%, and collaborated closely with designers to implement pixel-perfect UI.",
    technologies: ["React", "TypeScript", "Redux", "Figma"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2022 - 2023",
    description: "Delivered end-to-end web applications for small businesses. Managed everything from initial client consultations to deployment and server maintenance.",
    technologies: ["JavaScript", "HTML/CSS", "Firebase", "React"],
  }
];

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 150)
          );
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

export default function Experience() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="experience" className="py-24 md:py-36 bg-transparent relative overflow-hidden scroll-mt-20 border-t border-white/5">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <div className="reveal text-center mb-16 md:mb-24">
          <p className="section-label justify-center mb-4">Experience</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal">
              
              {/* Icon Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#08080f] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 text-blue-400">
                <i className="ri-briefcase-line text-lg" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h3 className="font-bold text-white text-xl">{exp.role}</h3>
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20 whitespace-nowrap w-fit">
                    {exp.date}
                  </span>
                </div>
                <h4 className="text-white/60 font-medium mb-4">{exp.company}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
