import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

const LINKS = ["home", "about", "work", "contact"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");
  const [open,     setOpen]     = useState(false);
  const { tokens, mode }        = useTheme();

  const RESUME = "/resume.pdf";

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      setActive(id);
      setOpen(false);
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = "home";
      LINKS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Main Navbar ───────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: scrolled ? "16px 0" : "24px 0",
          background: scrolled ? tokens.navBg : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${tokens.navBorder}` : "none",
          transition: "padding 0.4s ease, background 0.4s ease, border-color 0.6s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3 group"
            aria-label="Basanta Khatri – Home"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white transition-colors duration-500"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)" }}
            >
              BK
            </div>
            <span
              className="font-semibold text-sm hidden sm:block opacity-80 group-hover:opacity-100 transition-all duration-500"
              style={{ color: tokens.text }}
            >
              Basanta Khatri
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {LINKS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300"
                style={
                  active === id
                    ? {
                        color: tokens.activeText,
                        background: tokens.activePill,
                        border: `1px solid ${tokens.activeBorder}`,
                      }
                    : {
                        color: tokens.textMuted,
                        border: "1px solid transparent",
                      }
                }
                onMouseEnter={(e) => {
                  if (active !== id) e.currentTarget.style.color = tokens.linkHover;
                }}
                onMouseLeave={(e) => {
                  if (active !== id) e.currentTarget.style.color = tokens.textMuted;
                }}
              >
                {id}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href={RESUME}
              download="Basanta_Khatri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <i className="ri-download-2-line text-xs" />
              Resume
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ background: open ? tokens.activePill : "transparent" }}
          >
            <span
              className={`block h-[1.5px] transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-[6px]" : "w-5"}`}
              style={{ background: tokens.text }}
            />
            <span
              className={`block h-[1.5px] transition-all duration-200 ${open ? "w-0 opacity-0" : "w-4"}`}
              style={{ background: tokens.text }}
            />
            <span
              className={`block h-[1.5px] transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-[6px]" : "w-5"}`}
              style={{ background: tokens.text }}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────── */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-72 flex flex-col transition-transform duration-350 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: tokens.navBg,
            backdropFilter: "blur(24px)",
            borderLeft: `1px solid ${tokens.navBorder}`,
          }}
        >
          <div className="flex items-center justify-between px-5 py-5">
            <span className="font-semibold text-sm" style={{ color: tokens.text }}>Menu</span>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {LINKS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="px-4 py-3 rounded-xl text-sm font-semibold capitalize transition-all"
                style={
                  active === id
                    ? { background: tokens.activePill, color: tokens.activeText, border: `1px solid ${tokens.activeBorder}` }
                    : { color: tokens.textMuted, border: "1px solid transparent" }
                }
              >
                {id}
              </a>
            ))}
            <a
              href={RESUME}
              download="Basanta_Khatri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 justify-center"
            >
              <i className="ri-download-2-line" /> Resume
            </a>
          </nav>
          <div className="mt-auto p-5">
            <p className="text-xs mb-3" style={{ color: tokens.textMuted }}>Find me on</p>
            <div className="flex gap-2">
              {[
                { i: "ri-github-fill",   u: "https://github.com/Basanta-khatri-0311",          label: "GitHub"   },
                { i: "ri-linkedin-fill", u: "https://linkedin.com/in/basanta-khatri",           label: "LinkedIn" },
                { i: "ri-mail-line",     u: "mailto:khatribasanta.works09@gmail.com",           label: "Email"    },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.u}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: tokens.socialBg, border: `1px solid ${tokens.socialBorder}`, color: tokens.textMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = tokens.socialHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = tokens.textMuted)}
                >
                  <i className={`${s.i} text-sm`} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}