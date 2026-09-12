import React, { useEffect, useRef } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "CMS / CRM Platform",
    category: "Full-Stack System",
    year: "2025",
    description:
      "A production-level CRM system built for real-world business workflows and finance management for consultancies. Features role-based access control, RESTful APIs, reusable React components, and centralized error handling with MongoDB-backed business logic.",
    image: "/projectimages/fms.png",
    tags: ["MERN Stack", "RBAC", "JWT Auth", "REST API", "Tailwind CSS"],
    live: "https://fms-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/fms",
  },
  {
    id: "02",
    title: "KHATA Bookkeeping",
    category: "Full-Stack PWA",
    year: "2026",
    description:
      "A digital bookkeeping platform for small businesses to manage income, expenses, and credit sales. Built with an offline-first architecture and integrated payment reminders for improved financial tracking.",
    image: "/projectimages/khata.png",
    tags: ["MERN Stack", "PWA", "Offline Sync", "State Management"],
    live: "https://khata-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/khata-saas"
  },
  {
    id: "03",
    title: "CAB Digital Portal",
    category: "Full-Stack System",
    year: "2024",
    description:
      "A full-stack platform designed to digitize operations of a regional cricket association. Includes a financial ledger system, role-based authentication, and a dynamic CMS for managing players, projects, and organizational content.",
    image: "/projectimages/cab.png",
    tags: ["MERN Stack", "RBAC", "MongoDB", "Cloudinary"],
    live: "https://ca-bhaluhi.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/cab",
  },
  {
    id: "04",
    title: "MetaTagLab",
    category: "Developer Tool",
    year: "2025",
    description:
      "A web-based SEO toolkit that generates meta tags, sitemaps, robots.txt, and schema markup with real-time previews for search engines and social platforms.",
    image: "/projectimages/metataglab.png",
    tags: ["React", "Vite", "Tailwind CSS", "Technical SEO"],
    live: "https://taglab-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/seo-meta-generator"
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

export default function Work() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="work" className="py-24 md:py-36 bg-transparent relative overflow-hidden scroll-mt-20 border-t border-white/5">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="reveal mb-16 md:mb-24">
          <p className="section-label mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Vertical Stack */}
        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="reveal group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              
              {/* Image Side */}
              <div className={`relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[16/10] lg:aspect-auto lg:h-[500px] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080f]/80 via-[#08080f]/20 to-transparent opacity-80" />
                
                {/* Overlay details */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-bold border border-white/20">
                    {project.id}
                  </span>
                  <span className="text-white/80 font-medium text-sm tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <i className="ri-external-link-line" />
                    Live Project
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <i className="ri-github-fill" />
                    Source
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View More */}
        <div className="reveal mt-32 text-center">
          <p className="text-slate-400 mb-6">Want to see more of my work and experiments?</p>
          <a
            href="https://github.com/Basanta-khatri-0311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors"
          >
            View GitHub Profile <i className="ri-arrow-right-line" />
          </a>
        </div>

      </div>
    </section>
  );
}