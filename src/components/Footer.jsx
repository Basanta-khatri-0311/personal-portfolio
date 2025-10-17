import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/basanta-khatri/",
      icon: "ri-linkedin-fill"
    },
    {
      name: "GitHub",
      url: "https://github.com/Basanta-khatri-0311",
      icon: "ri-github-fill"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/basant_khatri__11/",
      icon: "ri-instagram-line"
    },
    {
      name: "Email",
      url: "mailto:khatribasanta.works09@gmail.com",
      icon: "ri-mail-line"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-400 py-12 mt-auto border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              © {currentYear} <span className="text-white font-semibold">Basanta Khatri</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              Build using React & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-teal-400/40 hover:bg-teal-400/10 transition-all duration-300 relative"
                aria-label={link.name}
              >
                <i className={`${link.icon} text-xl text-gray-400 group-hover:text-teal-400 transition-colors`}></i>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {link.name}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-500 italic bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            "Building the web, one component at a time."
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#home"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full p-3 shadow-2xl hover:shadow-teal-400/20 hover:scale-110 transform transition-all duration-300 z-40 group border border-teal-400/30"
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-line text-xl group-hover:-translate-y-0.5 transition-transform"></i>
      </a>
    </footer>
  );
};

export default Footer;