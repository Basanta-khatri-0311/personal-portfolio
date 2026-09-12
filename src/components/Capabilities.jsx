import React, { useEffect, useRef } from "react";

const CAPABILITIES = [
  {
    title: "Frontend Engineering",
    icon: "ri-macbook-line",
    description: "Responsive interfaces, dynamic dashboards, reusable component architectures, state management, and performance-focused UI.",
  },
  {
    title: "Backend Architecture",
    icon: "ri-server-line",
    description: "RESTful APIs, secure authentication (JWT/OAuth), role-based authorization, robust business logic, and database design.",
  },
  {
    title: "Full Stack Systems",
    icon: "ri-stack-line",
    description: "End-to-end application development, SaaS platforms, internal admin panels, and scalable infrastructure integration.",
  },
  {
    title: "AI & Automation",
    icon: "ri-robot-3-line",
    description: "LLM integrations, RAG systems, workflow automation, and building AI-assisted applications for real-world use cases.",
  },
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

export default function Capabilities() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="capabilities" className="py-24 md:py-36 bg-transparent relative overflow-hidden scroll-mt-20 border-t border-white/5">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Header Area */}
          <div className="lg:col-span-5 reveal">
            <p className="section-label mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              What I can <span className="text-gradient">build</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              My engineering approach is practical and product-driven. I focus on creating systems that are secure, scalable, and easy to maintain.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap) => (
              <div 
                key={cap.title}
                className="reveal p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors group"
              >
                <i className={`${cap.icon} text-3xl text-blue-400 mb-6 block`} />
                <h3 className="text-xl font-bold text-white mb-4">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
