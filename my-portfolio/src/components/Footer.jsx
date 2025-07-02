import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-auto"> {/* `mt-auto` pushes footer to bottom */}
      <div className="container mx-auto text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Basanta Khatri. All rights reserved.
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/basanta-khatri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 mx-2"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/Basanta-khatri-0311"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 mx-2"
            aria-label="GitHub"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://www.instagram.com/basant_khatri__11/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 mx-2"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </p>
      </div>
      {/* Back-to-top button (positioned separately) */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 lg:right-10 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full p-2 shadow-lg hover:scale-125 transition-transform duration-300 ease-in-out"
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-line text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;