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
        <a
          href="#"
          className="fixed bottom-24 right-6 lg:right-10 lg:bottom-10 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full p-1  shadow-lg hover:bg-opacity-80 hover:shadow-xl transform hover:scale-125 transition-transform duration-300 ease-in-out"
          title="Go to Top"
        >
          <i className="ri-arrow-up-line text-4xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
