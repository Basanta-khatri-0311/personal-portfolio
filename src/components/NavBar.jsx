import React, { useState, useEffect } from "react";
import Logo from "./Logo";

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

  // Resume file path
  const resumeFile = "/resume.pdf";
  const resumeFileName = "Basanta_Khatri_Resume.pdf";

  // Simple toggle function that works
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu function
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle body scroll
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
              href={resumeFile}
              download={resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-teal-400/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <i className="ri-download-line"></i>
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-teal-400/40 transition-all duration-300"
            onClick={toggleMenu}
          >
            <i className={`ri-${isOpen ? "close-line" : "menu-line"} text-2xl transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Always rendered but hidden with opacity/transform */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-400 ease-out ${
        isOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-400 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 -top-10 h-full w-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 backdrop-blur-3xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-4 p-6">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-xl border border-white/20 text-white hover:bg-teal-400/20 hover:border-teal-400/40 transition-all duration-300"
              onClick={closeMenu}
            >
              <i className="ri-close-line text-xl"></i>
            </button>

            {/* Navigation Items */}
            <div className="w-full space-y-3 mt-16">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block text-lg font-medium transition-all duration-500 py-3 px-6 rounded-2xl w-full text-center border transform ${
                    isOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                  } ${
                    activeSection === item
                      ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white border-teal-400/50 shadow-lg"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href={resumeFile}
              download={resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-medium hover:shadow-xl transform transition-all duration-500 ${
                isOpen 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-4 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: isOpen ? '400ms' : '0ms'
              }}
              onClick={closeMenu}
            >
              <i className="ri-download-line mr-2"></i>
              Download Resume
            </a>

            {/* Social Links */}
            <div className={`flex gap-3 pt-6 border-t border-white/10 w-full justify-center transition-all duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? '500ms' : '0ms'
            }}>
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
                  className={`p-2 bg-white/5 rounded-xl border border-white/10 hover:border-teal-400/40 hover:bg-teal-400/10 transition-all duration-300 transform ${
                    isOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${600 + (index * 100)}ms` : '0ms'
                  }}
                  onClick={closeMenu}
                >
                  <i className={`${social.icon} text-lg text-gray-400 hover:text-teal-400`}></i>
                </a>
              ))}
            </div>

            {/* Footer text */}
            <div className={`text-center transition-all duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? '1000ms' : '0ms'
            }}>
              <p className="text-gray-500 text-xs mt-4">
                Made using React & Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;