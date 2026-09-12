import React, { useEffect, useRef } from "react";

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

export default function CurrentlyBuilding() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="currently-building" className="py-20 md:py-28 bg-transparent relative overflow-hidden scroll-mt-20 border-t border-white/5">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        
        <div className="reveal bg-blue-500/[0.03] border border-blue-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 relative z-10">
            
            {/* Left side text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                  Currently Building
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Always learning and expanding my technical boundaries.
              </h2>
              <p className="text-slate-400 leading-relaxed">
                I'm actively exploring advanced concepts to bring more value to the products I build. Right now, I'm heavily focused on integrating AI into standard web workflows.
              </p>
            </div>

            {/* Right side tags */}
            <div className="flex-1 w-full flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <i className="ri-brain-line text-purple-400 text-xl" />
                <span className="text-white font-medium text-sm">AI Engineering & RAG</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <i className="ri-server-line text-emerald-400 text-xl" />
                <span className="text-white font-medium text-sm">System Design & Scalability</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <i className="ri-flow-chart text-blue-400 text-xl" />
                <span className="text-white font-medium text-sm">Workflow Automation</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
