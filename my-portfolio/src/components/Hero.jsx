import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero w-screen h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-4"
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white animate-slideInLeft ">
          Hi, I'm Basanta Khatri
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mt-4 mb-8 animate-bounce">
          Frontend Developer and Data Enthusiast
        </p>
        <a
          href="#projects"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full shadow-lg hover:bg-opacity-80 hover:shadow-xl transform hover:scale-125 transition-transform duration-500 ease-in-out"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
