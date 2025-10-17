import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-64 md:h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-4 md:right-20 w-56 h-56 md:w-72 md:h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-screen flex items-center justify-center">
        <div className="text-center w-full max-w-4xl px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-6 md:mb-8">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm text-gray-300">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Basant Khatri
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Frontend Developer crafting fast, accessible & modern web experiences
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View My Work
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a
              href="#contact"
              className="border-2 border-white/20 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white/5 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto text-center"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-md mx-auto">
            <div className="bg-white/5 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">5+</div>
              <div className="text-xs md:text-sm text-gray-400">Projects</div>
            </div>
            <div className="bg-white/5 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">1+</div>
              <div className="text-xs md:text-sm text-gray-400">Years</div>
            </div>
            <div className="bg-white/5 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">100%</div>
              <div className="text-xs md:text-sm text-gray-400">Passionate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-xl md:text-2xl text-white/60"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;