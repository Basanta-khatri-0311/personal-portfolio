import React, { useEffect, useRef, useState } from "react";

const ROLES = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWi((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 35 : 75
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, wi, words]);

  return text;
}

const SOCIALS = [
  { label: "GitHub", icon: "ri-github-fill", url: "https://github.com/Basanta-khatri-0311" },
  { label: "LinkedIn", icon: "ri-linkedin-fill", url: "https://linkedin.com/in/basanta-khatri" },
  { label: "Instagram", icon: "ri-instagram-line", url: "https://instagram.com/basant_khatri__11" },
  { label: "Email", icon: "ri-mail-line", url: "mailto:khatribasanta.works09@gmail.com" },
];

const STATS = [
  { value: "5+", label: "Projects" },
  { value: "1+", label: "Years Exp." },
  { value: "100%", label: "Committed" },
];

export default function Hero() {
  const role = useTypewriter(ROLES);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-h]");
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "none";
      }, 200 + i * 130);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#08080f]"
    >
      {/* Subtle ambient orbs — keep them very faint */}
      <div
        className="orb absolute top-[-100px] right-[-80px] w-[600px] h-[600px] pointer-events-none"
        style={{ background: "rgba(37, 99, 235, 0.07)" }}
        aria-hidden="true"
      />
      <div
        className="orb absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] pointer-events-none"
        style={{ background: "rgba(99, 102, 241, 0.05)", animationDelay: "-7s" }}
        aria-hidden="true"
      />

      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-28 pb-16 lg:pt-24 lg:min-h-screen lg:items-center flex flex-col lg:flex-row"
      >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">

          {/* ── LEFT COLUMN ────────────────────────────────────────── */}
          <div className="flex flex-col">

            {/* Available badge */}
            <div
              data-h
              className="inline-flex items-center gap-2.5 self-start mb-8 px-4 py-2 rounded-full"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity .6s ease, transform .6s ease",
                background: "rgba(34, 197, 94, 0.07)",
                border: "1px solid rgba(34, 197, 94, 0.2)",
              }}
            >
              <span className="w-2 h-2  rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide">
                Available for new projects
              </span>
            </div>

            {/* Name */}
            <div
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
            >
              <h1
                className="font-extrabold leading-[1] tracking-tight"
                style={{ fontSize: "clamp(44px, 7vw, 82px)" }}
              >
                <span className="block text-white mb-2">Basanta</span>
                <span
                  className="block mb-6"
                  style={{
                    background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Khatri.
                </span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
              className="flex items-center gap-1.5 mb-5"
            >
              <span className="text-slate-300 text-lg sm:text-xl font-semibold">{role}</span>
              <span className="cursor text-blue-400 text-xl font-light">|</span>
            </div>

            {/* Bio */}
            <p
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
              className="text-slate-400 text-base leading-relaxed max-w-[420px] mb-8"
            >
              I craft clean, fast, and accessible web interfaces that users actually
              enjoy. Focused on React, modern CSS and the small details that make
              everything feel polished.
            </p>

            {/* CTA buttons */}
            <div
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#projects" className="btn-primary">
                View My Work <i className="ri-arrow-right-line" />
              </a>
              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
            </div>

            {/* Stats */}
            <div
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
              className="flex items-center divide-x divide-white/8 border-t border-white/6 pt-8"
            >
              {STATS.map((s) => (
                <div key={s.label} className="pr-6 first:pl-0 pl-6">
                  <div className="text-white font-extrabold text-2xl leading-tight">{s.value}</div>
                  <div className="text-slate-400 text-xs font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
              className="flex items-center gap-3 mt-6"
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-white/7 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Profile Image ──────────────────────── */}
          <div
            data-h
            style={{ opacity: 0, transform: "translateX(24px)", transition: "opacity .8s ease, transform .8s ease" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main image card */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "clamp(260px, 36vw, 400px)",
                  height: "clamp(320px, 44vw, 490px)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Basanta Khatri – Frontend Developer"
                  className="w-full h-full object-cover object-center"
                  fetchpriority="high"
                  decoding="async"
                />
                {/* Gradient overlay bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,15,0.7) 0%, transparent 50%)",
                  }}
                />
                {/* Name tag at bottom */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-base">Basanta Khatri</p>
                  <p className="text-blue-400 text-xs font-medium mt-0.5">Frontend Developer</p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl -z-10"
                style={{ background: "rgba(59,130,246,0.15)" }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-10 h-10 rounded-xl -z-10"
                style={{ background: "rgba(167,139,250,0.12)" }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
        <i className="ri-arrow-down-s-line text-slate-600 text-sm" />
      </div>
    </section>
  );
}