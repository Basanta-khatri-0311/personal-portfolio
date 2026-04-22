import React, { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "CAB Digital Portal",
    category: "Full-Stack System",
    year: "2024",
    description:
      "A full-stack platform designed to digitize operations of a regional cricket association. Includes a financial ledger system, role-based authentication, and a dynamic CMS for managing players, projects, and organizational content.",
    image: "/projectimages/cab.png",
    tags: [
      "MERN Stack",
      "RBAC",
      "JWT Auth",
      "MongoDB",
      "Cloudinary",
      "Performance Optimization"
    ],
    live: "https://ca-bhaluhi.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/cab",
  },
  {
    id: "02",
    title: "KHATA",
    category: "Full-Stack PWA",
    year: "2026",
    description:
      "A digital bookkeeping platform for small businesses to manage income, expenses, and credit sales. Built with an offline-first architecture and integrated payment reminders for improved financial tracking.",
    image: "/projectimages/khata.png",
    tags: [
      "MERN Stack",
      "PWA",
      "Offline Sync",
      "State Management"
    ],
    live: "https://khata-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/khata-saas"
  },

  {
    id: "03",
    title: "MetaTagLab",
    category: "Developer Tool",
    year: "2025",
    description:
      "A web-based SEO toolkit that generates meta tags, sitemaps, robots.txt, and schema markup with real-time previews for search engines and social platforms.",
    image: "/projectimages/metataglab.png",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Technical SEO"
    ],
    live: "https://taglab-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/seo-meta-generator"
  },
  {
    id: "04",
    title: "DharmaVerse",
    category: "Web App",
    year: "2025",
    description:
      "A spiritual verses reading app featuring full-text search, category filtering, dark mode and bookmarking — all without a backend.",
    image: "/projectimages/dharmaverse.png",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    live: "https://dharmaverse-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/dharmaverse",
  },
  {
    id: "04",
    title: "ApplyFlow",
    category: "Productivity Tool",
    year: "2025",
    description:
      "A job application tracker featuring Kanban-style workflow management, application status tracking, and persistent local storage for seamless user experience.",
    image: "/projectimages/applyflow.png",
    tags: [
      "React",
      "State Management",
      "Tailwind CSS",
      "LocalStorage"
    ],
    live: "https://applyflow-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/CareerTrackr"
  }
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal flex-shrink-0 w-full group relative"
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="h-full flex flex-col lg:flex-row gap-8 p-6 md:p-10 rounded-[2.5rem] border transition-all duration-500 overflow-hidden relative"
        style={{
          background: hovered ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.02)",
          borderColor: hovered ? "rgba(59, 130, 246, 0.3)" : "rgba(255,255,255,0.06)",
          boxShadow: hovered ? "0 40px 80px -30px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {/* Background Accent */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-opacity duration-700"
          style={{ opacity: hovered ? 1 : 0.2 }}
        />

        {/* Project Image - Large for full width layout */}
        <div className="relative w-full lg:w-[55%] aspect-[16/10] lg:aspect-auto rounded-3xl overflow-hidden border border-white/5 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
             <div className="flex flex-col gap-1">
               <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">{project.category}</span>
               <h4 className="text-white text-2xl font-bold">{project.title}</h4>
             </div>
             <span className="text-white/60 text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {project.year}
             </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex-1 flex flex-col justify-center py-2">
          <div className="flex items-center justify-between mb-6">
            <span className="text-5xl font-black text-white/5">{project.id}</span>
            <div className="flex gap-2">
               {project.tags.slice(0, 2).map((t) => (
                <span key={t} className="px-3 py-1 text-[10px] font-bold text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
                  {t}
                </span>
               ))}
            </div>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {project.title}
          </h3>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 text-xs font-medium rounded-xl bg-white/5 border border-white/10 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-white text-sm font-bold transition-all duration-300 bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3"
            >
              <i className="ri-external-link-line text-lg" />
              Launch Live Application
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-3 font-bold text-sm"
            >
              <i className="ri-github-fill text-xl" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


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

export default function Work() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  useReveal(ref);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="py-24 md:py-36 relative overflow-hidden scroll-mt-20"
      style={{ background: "#08080f" }}
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Selected <span className="text-gradient">Projects</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
             <button 
                onClick={() => scroll('left')}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all active:scale-95 group/btn"
                aria-label="Previous project"
              >
                <i className="ri-arrow-left-s-line text-2xl group-hover/btn:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all active:scale-95 group/btn"
                aria-label="Next project"
              >
                <i className="ri-arrow-right-s-line text-2xl group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
              <div className="w-[1px] h-10 bg-white/10 mx-2 hidden md:block" />
              <a
                href="https://github.com/Basanta-khatri-0311"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-4 rounded-2xl"
              >
                <i className="ri-github-fill text-lg" />
                <span>Github</span>
              </a>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-x-auto pb-12 pt-4 px-[4vw] md:px-[7.5vw] no-scrollbar snap-x snap-mandatory"
        >
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="w-[88vw] md:w-[75vw] max-w-5xl flex-shrink-0 snap-center">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
          
          {/* View more card - Matching width */}
          <div 
            className="reveal flex-shrink-0 w-[88vw] md:w-[75vw] max-w-5xl snap-center"
            style={{ transitionDelay: `${PROJECTS.length * 80}ms` }}
          >
            <div className="h-[500px] min-h-[400px] flex flex-col items-center justify-center p-8 md:p-12 rounded-[2.5rem] border-2 border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all text-center group">
               <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <i className="ri-github-fill text-4xl md:text-5xl text-blue-400" />
               </div>
               <h4 className="text-2xl md:text-4xl font-bold text-white mb-4">Want to see more?</h4>
               <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 max-w-lg">I have many more projects, experiments, and contributions available on my GitHub profile.</p>
               <a 
                href="https://github.com/Basanta-khatri-0311" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-blue-600 text-white font-bold text-base md:text-lg flex items-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20"
               >
                 Explore Repositories <i className="ri-arrow-right-line" />
               </a>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}