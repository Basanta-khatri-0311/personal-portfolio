import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen  bg-gray-900 text-gray-400 py-6 mt-8">
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
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/Basanta-khatri-0311"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 mx-2"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://www.instagram.com/basant_khatri__11/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 mx-2"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
