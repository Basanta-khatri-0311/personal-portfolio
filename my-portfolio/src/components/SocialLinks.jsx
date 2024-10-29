import React from "react";

const Links = () => {
  return (
    <section className="hidden fixed top-1/2 right-4 transform -translate-y-1/2 lg:flex flex-col space-y-4 ">
      <a
        href="https://www.linkedin.com/in/basanta-khatri/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-white bg-gray-800 hover:bg-blue-600 transition duration-300 p-2 rounded-full shadow-lg"
      >
        <i className="ri-linkedin-fill"></i>
      </a>
      <a
        href="https://github.com/Basanta-khatri-0311"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-white bg-gray-800 hover:bg-gray-900 transition duration-300 p-2 rounded-full shadow-lg"
      >
        <i className="ri-github-fill"></i>
      </a>
      <a
        href="https://www.instagram.com/basant_khatri__11/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-white hover:bg-gradient-to-br from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 transition duration-300 p-2 rounded-full shadow-lg flex items-center justify-center"
      >
        <i className="ri-instagram-line"></i>
      </a>
    </section>
  );
};

export default Links;
