import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="text-center">
        {/* Animated gradient logo (matches your BK logo style) */}
        <div className="mx-auto mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            BK
          </h1>
        </div>

        {/* Animated progress bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto mb-6">
          <div 
            className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-progress"
            style={{
              animation: 'progress 2s ease-in-out infinite',
              width: '0%'
            }}
          ></div>
        </div>

        {/* Loading text with animation */}
        <p className="text-gray-300 text-lg animate-pulse">
          Loading portfolio...
        </p>

        {/* Social links (optional) */}
        <div className="flex justify-center space-x-4 mt-8">
          {['ri-github-fill', 'ri-linkedin-fill', 'ri-instagram-line'].map((icon) => (
            <div key={icon} className="text-2xl text-gray-500 animate-bounce" style={{ animationDelay: `${icon.length * 0.1}s` }}>
              <i className={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;