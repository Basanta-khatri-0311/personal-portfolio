import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "khatribasanta.works09@gmail.com",
    url: "mailto:khatribasanta.works09@gmail.com",
    icon: "ri-mail-send-line",
  },
  {
    label: "GitHub",
    value: "Basanta-khatri-0311",
    url: "https://github.com/Basanta-khatri-0311",
    icon: "ri-github-fill",
  },
  {
    label: "LinkedIn",
    value: "basanta-khatri",
    url: "https://linkedin.com/in/basanta-khatri",
    icon: "ri-linkedin-fill",
  },
  {
    label: "Resume",
    value: "View / Download",
    url: "#",
    icon: "ri-file-text-line",
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

export default function Contact() {
  const ref = useRef(null);
  useReveal(ref);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, done, error
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("done");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => {
            setIsModalOpen(false);
            setStatus("idle");
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-transparent relative overflow-hidden scroll-mt-20 border-t border-white/5">
      
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-500/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div ref={ref} className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Have a product in mind? <br />
            <span className="text-gradient">Let's build it.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            I'm currently available for new opportunities. Whether you have a question, a project idea, or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 reveal">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <i className={`${link.icon} text-2xl`} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">{link.label}</p>
                <p className="text-white font-bold">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/30"
          >
            <i className="ri-mail-send-line text-lg" />
            Send a direct message
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#08080f]/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0e0e1a] border border-white/10 rounded-3xl p-6 md:p-8 relative shadow-2xl animate-fade-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <i className="ri-close-line text-xl" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Send a message</h3>
            <p className="text-slate-400 text-sm mb-6">I usually respond within 24 hours.</p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="msg-name" className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                  <input
                    id="msg-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="msg-email" className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Your Email</label>
                  <input
                    id="msg-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="msg-message" className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                <textarea
                  id="msg-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all resize-none"
                />
              </div>

              {status === "done" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <i className="ri-checkbox-circle-fill" />
                  Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <i className="ri-error-warning-fill" />
                  Something went wrong. Please try emailing directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending" || status === "done"}
                className="w-full btn-primary justify-center py-3 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "done" ? (
                  "Sent"
                ) : (
                  <>
                    Send Message <i className="ri-send-plane-line" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}