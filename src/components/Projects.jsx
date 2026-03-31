import React, { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "DharmaVerse",
    category: "Web App",
    year: "2024",
    description:
      "A spiritual verses reading app featuring full-text search, category filtering, dark mode and bookmarking — all without a backend.",
    image: "/projectimages/dharmaverse.png",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    live: "https://dharmaverse-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/dharmaverse",
  },
  {
    id: "02",
    title: "METAlab Studio",
    category: "Technical SEO Suite",
    year: "2024", 
    description:
      "A professional, industrial-grade SEO optimization suite built with React and Tailwind CSS v4. Features a 'True Dark' architecture for Meta Tag editing, JSON-LD Schema generation, XML Sitemaps, and Robots.txt protocols with live social simulations and local image upload processing.",
    image: "/projectimages/metataglab.png",
    tags: ["React", "Vite", "Tailwind v4", "Technical SEO"],
    live: "https://taglab-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/seo-meta-generator",
  },
  {
    id: "03",
    title: "ApplyFlow",
    category: "Productivity",
    year: "2024",
    description:
      "A job application tracker with Kanban-style status columns, analytics dashboard and fully persistent local storage.",
    image: "/projectimages/applyflow.png",
    tags: ["React", "Data Viz", "Tailwind CSS"],
    live: "https://applyflow-bk.netlify.app/",
    code: "https://github.com/Basanta-khatri-0311/CareerTrackr",
  },
];

function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const rowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  };

  return (
    <div
      ref={rowRef}
      className="reveal group relative"
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Hover background fill */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          background: "rgba(59,130,246,0.04)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Main row content */}
      <div
        className="relative flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 p-6 rounded-2xl border transition-colors duration-300"
        style={{
          borderColor: hovered ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.06)",
        }}
      >
        {/* Left: Number + Category */}
        <div className="flex items-center gap-4 shrink-0 lg:w-32">
          <span
            className="text-3xl font-black leading-none transition-colors duration-300"
            style={{ color: hovered ? "rgba(59,130,246,0.9)" : "rgba(255,255,255,0.08)" }}
          >
            {project.id}
          </span>
          <div className="lg:hidden">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              {project.category}
            </p>
            <p className="text-slate-600 text-xs">{project.year}</p>
          </div>
        </div>

        {/* Center: Title + Description */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <h3
              className="text-white font-bold text-xl transition-colors duration-200"
              style={{ color: hovered ? "#60a5fa" : "#f1f5f9" }}
            >
              {project.title}
            </h3>
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-slate-400 text-xs">· {project.year}</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg"
                style={{
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  color: "#93c5fd",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Image preview + Links */}
        <div className="flex flex-col items-start lg:items-end gap-4 shrink-0 lg:w-72">
          {/* Image preview */}
          <div
            className="w-full lg:w-64 h-36 rounded-xl overflow-hidden border transition-all duration-500"
            style={{
              borderColor: "rgba(255,255,255,0.07)",
              transform: hovered ? "scale(1.02)" : "scale(1)",
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} – preview`}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* CTA links */}
          <div className="flex gap-2.5">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs font-bold transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                boxShadow: hovered ? "0 0 20px rgba(59,130,246,0.35)" : "none",
              }}
            >
              <i className="ri-external-link-line text-[11px]" />
              Live Demo
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-300 hover:text-white text-xs font-semibold transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <i className="ri-github-fill text-[11px]" />
              Code
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
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

export default function Projects() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="projects" className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "#0b0b14" }}
    >
      {/* Ambient orb */}
      <div
        className="orb absolute -left-32 bottom-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.05)", animationDelay: "-5s" }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="section-label mb-4">Featured work</p>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Things I've <span className="text-gradient">built</span>
            </h2>
          </div>
          <a
            href="https://github.com/Basanta-khatri-0311"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0 self-start sm:self-auto"
          >
            <i className="ri-github-fill" />
            All on GitHub
          </a>
        </div>

        {/* ── Project rows ── */}
        <div className="space-y-4">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}