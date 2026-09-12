import React, { useEffect, useRef } from "react";

const SOCIALS = [
  { label: "GitHub", icon: "ri-github-fill", url: "https://github.com/Basanta-khatri-0311" },
  { label: "LinkedIn", icon: "ri-linkedin-fill", url: "https://linkedin.com/in/basanta-khatri" },
  { label: "Email", icon: "ri-mail-line", url: "mailto:khatribasanta.works09@gmail.com" },
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-h]");
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "none";
      }, 150 + i * 100);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent mt-10"
    >
      {/* Subtle ambient orbs */}
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

            {/* Status badge */}
            <div
              data-h
              className="inline-flex items-center gap-2.5 self-start mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition: "opacity .6s ease, transform .6s ease",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/80 text-xs font-semibold tracking-wide uppercase">
                Available for new opportunities
              </span>
            </div>

            {/* Headline */}
            <div
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
            >
              <h1 className="font-extrabold leading-[1.1] tracking-tight text-white text-5xl md:text-6xl lg:text-7xl mb-6">
                Building modern web products that <span className="text-gradient">actually work.</span>
              </h1>
            </div>

            {/* Bio */}
            <p
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-[500px] mb-10"
            >
              I am a Full-Stack Developer specializing in the MERN stack. I build robust web applications, powerful APIs, and seamless interfaces from end to end.
            </p>

            {/* CTA buttons */}
            <div
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#work" className="btn-primary py-3 px-6 text-base shadow-lg shadow-blue-500/20">
                View Projects
              </a>
              <a href="#contact" className="btn-outline py-3 px-6 text-base">
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div
              data-h
              style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity .6s ease, transform .6s ease" }}
              className="flex items-center gap-4"
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 bg-white/[0.02]"
                >
                  <i className={`${s.icon} text-lg`} />
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
            <div className="relative group">
              {/* Main image card */}
              <div
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5"
                style={{
                  width: "clamp(280px, 38vw, 420px)",
                  height: "clamp(340px, 46vw, 520px)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Basanta Khatri – Full-Stack Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  fetchpriority="high"
                  decoding="async"
                />
                {/* Gradient overlay bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,15,0.9) 0%, transparent 60%)",
                  }}
                />
                {/* Name tag at bottom */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Basanta Khatri</h3>
                    <p className="text-blue-400 text-sm font-medium">Full-Stack Developer</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <i className="ri-code-s-slash-line text-blue-400" />
                  </div>
                </div>
              </div>

              {/* Decorative background blur */}
              <div
                className="absolute inset-0 -z-10 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <i className="ri-arrow-down-line text-slate-500 text-xl" />
      </div>
    </section>
  );
}