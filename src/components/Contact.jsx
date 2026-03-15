import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ─────────────────────────────────────────────────────────────────
// 🔑  Replace these three values with your own from emailjs.com
// ─────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_khiv61m";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_9cuwd5z";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "Jn0T_AcEBOlrgmt0U";   // e.g. "abcDEF123xyz"
// ─────────────────────────────────────────────────────────────────

const METHODS = [
  {
    icon: "ri-mail-send-line",
    label: "Email",
    value: "khatribasanta.works09@gmail.com",
    href: "mailto:khatribasanta.works09@gmail.com",
  },
  {
    icon: "ri-linkedin-fill",
    label: "LinkedIn",
    value: "linkedin.com/in/basanta-khatri",
    href: "https://linkedin.com/in/basanta-khatri",
  },
  {
    icon: "ri-github-fill",
    label: "GitHub",
    value: "Basanta-khatri-0311",
    href: "https://github.com/Basanta-khatri-0311",
  },
];

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(
            (el, i) => setTimeout(() => el.classList.add("visible"), i * 100)
          );
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  useReveal(sectionRef);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus("done");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-white text-sm font-medium placeholder-slate-600 focus:outline-none transition-all duration-200";
  const inputStyle = {
    background: "#111120",
    border: "1px solid rgba(255,255,255,0.07)",
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#08080f] relative overflow-hidden">
      {/* Ambient orb */}
      <div
        className="orb absolute -right-20 top-0 w-[480px] h-[480px] pointer-events-none"
        style={{ background: "rgba(37,99,235,0.06)" }}
        aria-hidden="true"
      />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="reveal mb-14">
          <p className="section-label mb-4">Get in touch</p>
          <h2
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            Let's build something{" "}
            <span className="text-gradient">great</span>
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-lg">
            Whether you have a project in mind, want to collaborate, or just want
            to say hello — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Left — Info ── */}
          <div className="lg:col-span-2 space-y-4 reveal-left">
            {METHODS.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-250"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                  e.currentTarget.style.background = "rgba(59,130,246,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(59,130,246,0.1)" }}
                >
                  <i className={`${m.icon} text-blue-400 text-lg`} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                    {m.label}
                  </p>
                  <p className="text-slate-200 text-sm font-medium truncate group-hover:text-blue-300 transition-colors">
                    {m.value}
                  </p>
                </div>
                <i className="ri-arrow-right-up-line text-slate-500 group-hover:text-blue-400 ml-auto shrink-0 transition-colors" />
              </a>
            ))}

            {/* Availability */}
            <div
              className="p-4 rounded-2xl border mt-2"
              style={{
                background: "rgba(34,197,94,0.04)",
                borderColor: "rgba(34,197,94,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">
                  Currently Available
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Open to freelance, contract & full-time roles.
              </p>
            </div>
          </div>

          {/* ── Right — Form ── */}
          <div className="lg:col-span-3 reveal-right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 md:p-8 space-y-5 border"
              style={{
                background: "rgba(255,255,255,0.018)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="msg-name"
                    className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="msg-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    htmlFor="msg-email"
                    className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="msg-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="msg-message"
                  className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="msg-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>

              {/* Status messages */}
              {status === "done" && (
                <div
                  className="flex items-center gap-2.5 p-3.5 rounded-xl text-sm"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <i className="ri-checkbox-circle-fill text-emerald-400" />
                  <span className="text-emerald-300 font-medium">
                    Message sent! I'll get back to you soon.
                  </span>
                </div>
              )}
              {status === "error" && (
                <div
                  className="flex items-center gap-2.5 p-3.5 rounded-xl text-sm"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <i className="ri-error-warning-fill text-red-400" />
                  <span className="text-red-300 font-medium">
                    Something went wrong. Please try emailing me directly.
                  </span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="ri-send-plane-line" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}