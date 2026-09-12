import React, { useEffect, useRef } from "react";

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.querySelectorAll(".reveal").forEach(
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
    <section id="about" className="py-24 md:py-36 bg-transparent relative overflow-hidden scroll-mt-20 border-t border-white/5">
      {/* Background ambient */}
      <div
        className="orb absolute -right-40 top-20 w-[600px] h-[600px] pointer-events-none opacity-50"
        style={{ background: "rgba(37,99,235,0.03)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="reveal">
              <p className="section-label mb-4">Introduction</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Engineering <span className="text-gradient">Products</span> End-to-End
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="reveal text-slate-300 text-lg leading-relaxed">
                I build modern web applications, APIs, dashboards, SaaS products, automation systems, and AI-powered applications. My expertise lies in the MERN stack, bridging the gap between complex backend logic and intuitive, high-performance frontend interfaces.
              </p>
              <p className="reveal text-slate-400 text-base leading-relaxed">
                I focus on writing clean, maintainable code and building architectures that scale. From designing relational and non-relational database structures to implementing secure authentication systems and integrating third-party APIs, I handle product development from concept to deployment.
              </p>
            </div>

            <div className="reveal flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
                <i className="ri-database-2-line text-blue-400 text-xl" />
                <span className="text-white font-medium text-sm">Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
                <i className="ri-layout-masonry-line text-blue-400 text-xl" />
                <span className="text-white font-medium text-sm">Product-Oriented</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
                <i className="ri-robot-line text-blue-400 text-xl" />
                <span className="text-white font-medium text-sm">AI & Automation</span>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="reveal relative flex justify-center lg:justify-end h-full">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative Tech Circle Pattern */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
              
              {/* Central Box */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl shadow-blue-500/10 max-w-xs text-center z-10">
                  <i className="ri-terminal-box-line text-5xl text-blue-400 mb-4 inline-block" />
                  <h3 className="text-white font-bold text-xl mb-2">Systems over syntax.</h3>
                  <p className="text-slate-400 text-sm">Focusing on architecture, security, and scalable business logic.</p>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-sm text-blue-400">
                <i className="ri-reactjs-line text-2xl" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-sm text-emerald-400">
                <i className="ri-nodejs-line text-2xl" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-sm text-yellow-400">
                <i className="ri-database-line text-2xl" />
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-sm text-purple-400">
                <i className="ri-brain-line text-2xl" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}