import React from "react";

const Hero = () => {
  return (
    <section className="w-screen h-screen bg-purple-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-semibold text-pink-200 font-sans">
          Hi, I'm Basanta Khatri
        </h1>
        <p className="text-lg text-white mt-4">
          A passionate Frontend Developer and Data Enthusiast
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-400  text-white  rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition duration-300">
          View my Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
