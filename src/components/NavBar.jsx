import React, { useState, useEffect } from "react";
import Logo from "./Logo";

// ✅ FIXED: NavLink MOVED TO TOP
const NavLink = ({ href, children, isActive }) => {
  return (
    <a
      href={href}
      className={`relative py-2 px-3 font-medium transition-all duration-300 group rounded-lg ${
        isActive
          ? "text-teal-400 bg-teal-400/10 border border-teal-400/20"
          : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
      }`}
    >
      {children}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
      )}
    </a>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ FIXED: Scroll lock (LOCKS WHEN MENU OPEN)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["home", "about", "projects", "contact"];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10"
          : "bg-gradient-to-br from-gray-900/80 via-purple-900/80 to-gray-900/80 backdrop-blur-xl py-6"
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item}`}
                isActive={activeSection === item}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-teal-400/20 transform hover:scale-105 transition-all duration-300"
            >
              Resume <i className="ri-download-line text-sm ml-1"></i>
            </a>
          </div>

          <button
            className="md:hidden p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-teal-400/40 transition-all duration-300"
            onClick={toggleMenu}
          >
            <i className={`ri-${isOpen ? "close-line" : "menu-line"} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/*Mobile Menu OVERLAY */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-10 h-full w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 backdrop-blur-3xl">
            <div className="flex flex-col items-center justify-center h-full space-y-6 p-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`text-2xl font-medium transition-all duration-300 py-4 px-8 rounded-2xl w-full text-center border ${
                    activeSection === item
                      ? "bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-400 border-teal-400/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5 border-white/10"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full text-lg font-medium w-full text-center hover:shadow-2xl hover:shadow-teal-400/20 transform hover:scale-105 transition-all duration-300"
                onClick={toggleMenu}
              >
                Download Resume
              </a>

              <div className="flex gap-4 pt-8 border-t border-white/10">
                {[
                  { icon: "ri-linkedin-fill", url: "https://linkedin.com/in/basanta-khatri" },
                  { icon: "ri-github-fill", url: "https://github.com/Basanta-khatri-0311" },
                  { icon: "ri-instagram-line", url: "https://instagram.com/basant_khatri__11" },
                  { icon: "ri-mail-line", url: "mailto:khatribasanta.works09@gmail.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-teal-400/40 hover:bg-teal-400/10 transition-all duration-300"
                  >
                    <i className={`${social.icon} text-xl text-gray-400 hover:text-teal-400`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;