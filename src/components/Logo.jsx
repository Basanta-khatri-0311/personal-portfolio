import React from "react";

const Logo = () => {
  return (
    <a 
      href="#home" 
      className="group relative"
    >
      <div className="relative">
        {/* Main Logo Text */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transform transition-transform duration-300">
          BK
        </h1>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm group-hover:blur-0 scale-110"></div>
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 via-blue-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 scale-110"></div>
      </div>
    </a>
  );
};

export default Logo;