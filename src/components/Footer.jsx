import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

const SOCIALS = [
  { label: "GitHub",    icon: "ri-github-fill",    url: "https://github.com/Basanta-khatri-0311" },
  { label: "LinkedIn",  icon: "ri-linkedin-fill",  url: "https://www.linkedin.com/in/basanta-khatri/" },
  { label: "Instagram", icon: "ri-instagram-line", url: "https://www.instagram.com/basant_khatri__11/" },
  { label: "Email",     icon: "ri-mail-line",      url: "mailto:khatribasanta.works09@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const { tokens } = useTheme();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer
        className="relative py-10 overflow-hidden transition-all duration-700"
        style={{
          background: tokens.footerBg,
          borderTop: `1px solid ${tokens.footerBorder}`,
        }}
      >
        {/* Gradient top edge accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: tokens.footerAccent }}
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
                <p className="font-bold text-sm transition-colors duration-500" style={{ color: tokens.text }}>
                  Basanta Khatri
                </p>
                <p className="text-[11px] transition-colors duration-500" style={{ color: tokens.textMuted }}>
                  Fullstack Developer
                </p>
              </div>
            </div>

            {/* Quick nav */}
            <nav className="flex items-center gap-5">
              {["home", "about", "projects", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-xs font-medium capitalize transition-colors duration-300"
                  style={{ color: tokens.textMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = tokens.linkHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = tokens.textMuted)}
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
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: tokens.socialBg,
                    border: `1px solid ${tokens.socialBorder}`,
                    color: tokens.textMuted,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = tokens.socialHover;
                    e.currentTarget.style.borderColor = tokens.activeBorder;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = tokens.textMuted;
                    e.currentTarget.style.borderColor = tokens.socialBorder;
                  }}
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-8 pt-6"
            style={{ borderTop: `1px solid ${tokens.footerBorder}` }}
          >
            <p className="text-xs transition-colors duration-500" style={{ color: tokens.textMuted }}>
              © {year} Basanta Khatri · All rights reserved
            </p>
            <p className="text-xs transition-colors duration-500" style={{ color: tokens.textMuted }}>
              Designed &amp; built with React · Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-20 right-7 z-40 w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm transition-all duration-300 ${
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