import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Animated logo */}
        <div className="mx-auto mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-2xl font-bold text-white">BK</span>
          </div>
        </div>

        {/* Loading text */}
        <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Loading Portfolio
        </h3>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-teal-400 rounded-full animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-progress"
            style={{
              animation: 'progress 2s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Social preview */}
        <div className="flex justify-center gap-4 mt-8">
          {['ri-reactjs-line', 'ri-tailwind-css-fill', 'ri-javascript-fill'].map((icon, index) => (
            <div 
              key={icon}
              className="text-2xl text-gray-400 animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <i className={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;