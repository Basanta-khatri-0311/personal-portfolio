import React, { useState, useEffect } from "react";

const LINKS = ["home", "about", "work", "contact"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const RESUME = "/resume.pdf";

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
      // Update active state
      setActive(id);
      // Close mobile menu
      setOpen(false);
      // Clean URL (optional: remove the hash from URL if it exists)
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
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) cur = id;
        }
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Main Navbar ──────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#08080f]/95 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
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
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white transition-colors duration-200"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)" }}
            >
              BK
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block opacity-80 group-hover:opacity-100 transition-opacity">
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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                  active === id
                    ? "text-white bg-white/8"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
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
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] bg-slate-300 transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-[6px]" : "w-5"}`} />
            <span className={`block h-[1.5px] bg-slate-300 transition-all duration-200 ${open ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-[1.5px] bg-slate-300 transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-[6px]" : "w-5"}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────────────────── */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-[#0e0e1a]  flex flex-col transition-transform duration-350 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-5">
            <span className="text-white font-semibold text-sm">Menu</span>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {LINKS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold capitalize transition-all ${
                  active === id
                    ? "bg-blue-500/12 text-blue-400 border border-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
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
          <div className="mt-auto p-5 ">
            <p className="text-slate-400 text-xs mb-3">Find me on</p>
            <div className="flex gap-2">
              {[
                { i: "ri-github-fill", u: "https://github.com/Basanta-khatri-0311", label: "GitHub" },
                { i: "ri-linkedin-fill", u: "https://linkedin.com/in/basanta-khatri", label: "LinkedIn" },
                { i: "ri-mail-line", u: "mailto:khatribasanta.works09@gmail.com", label: "Email" },
              ].map((s) => (
                <a key={s.label} href={s.u} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center text-slate-500 hover:text-blue-400 transition-colors">
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