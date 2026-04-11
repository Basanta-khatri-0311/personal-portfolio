import React, { useState, useEffect } from "react";

const SOCIALS = [
  { label: "GitHub", icon: "ri-github-fill", url: "https://github.com/Basanta-khatri-0311" },
  { label: "LinkedIn", icon: "ri-linkedin-fill", url: "https://www.linkedin.com/in/basanta-khatri/" },
  { label: "Instagram", icon: "ri-instagram-line", url: "https://www.instagram.com/basant_khatri__11/" },
  { label: "Email", icon: "ri-mail-line", url: "mailto:khatribasanta.works09@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer
        className="relative border-t py-10 overflow-hidden"
        style={{ background: "#07070f", borderColor: "rgba(255,255,255,0.05)" }}
      >
        {/* Gradient top edge accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white"
                style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)" }}
              >
                BK
              </div>
              <div>
                <p className="text-white font-bold text-sm">Basanta Khatri</p>
                <p className="text-slate-600 text-[11px]">Fullstack Developer</p>
              </div>
            </div>

            {/* Quick nav */}
            <nav className="flex items-center gap-5">
              {["home", "about", "projects", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-slate-500 hover:text-slate-200 text-xs font-medium capitalize transition-colors"
                >
                  {id}
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-400 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-8 pt-6 border-t"
            style={{ borderColor: "rgba(255,255,255,0.04)" }}
          >
            <p className="text-slate-500 text-xs">
              © {year} Basanta Khatri · All rights reserved
            </p>
            <p className="text-slate-500 text-xs">
              Designed & built with React · Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top — appears after scroll */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-7 right-7 z-50 w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
          boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
        }}
      >
        <i className="ri-arrow-up-line" />
      </button>
    </>
  );
}