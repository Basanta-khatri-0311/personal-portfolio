
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="about w-screen min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-8 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        
        {/* Left Side: Profile Image */}
        <div className="flex justify-center items-center mb-10 md:mb-0 md:w-1/2 mt-9">
          <img
            src="/profile.jpg" 
            alt="Profile"
            className="w-56 h-56 md:w-96 md:h-96 md:rounded-full rounded-lg border-4 border-teal-400 shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Right Side: Profile Description */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 md:mr-16 text-center md:text-left">
          <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn animate-bounce">Basanta Khatri</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 animate-slideInLeft delay-200">
            Frontend Developer dedicated to crafting immersive web experiences.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-6 animate-slideInLeft delay-400">
            Currently enhancing my skills in React and Tailwind CSS to build seamless and responsive applications.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Journey Section */}
      <div className="mt-16 text-center w-full">
        <h3 className="text-4xl font-bold text-white mb-4 animate-fadeIn underline">My Journey</h3>
        <div className="flex flex-col items-center md:flex-row justify-center md:space-x-10">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Item Component
const TimelineItem = ({ item }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 animate-fadeInUp">
      <i className={`ri-${item.icon} text-teal-500 text-4xl mb-2`}></i>
      <div className="bg-gray-800 rounded-lg p-5 shadow-lg">
        <h4 className="text-xl font-semibold text-white">{item.year}</h4>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </div>
  );
};

// Timeline data
const timelineItems = [
  {
    year: "2021 - Started Coding",
    description: "Began my journey into coding, exploring HTML, CSS, and JavaScript.",
    icon: "code-s-slash-line",
  },
  {
    year: "2023 - Built Projects",
    description: "Worked on web projects, from simple sites to interactive applications.",
    icon: "macbook-line",
  },
  {
    year: "2024 - React Enthusiast",
    description: "Deepened my knowledge of React and component-based architecture.",
    icon: "reactjs-line",
  },
];

export default About;
