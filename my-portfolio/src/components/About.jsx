import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="about  w-screen min-h-screen pb-36 bg-gradient-to-r from-gray-900 to-gray-800 p-6 md:p-10 flex items-center justify-center"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Description with Image */}   
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <img
            src="./src/assets/profile.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-48 md:h-48  rounded-full mb-6 border-4 border-teal-400 shadow-lg"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
            Basanta Khatri
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-4 animate-slideInLeft delay-200">
            I'm a passionate Frontend Developer with a love for crafting
            engaging, interactive web experiences. Exploring new technologies
            and learning every day.
          </p>
          <p className="text-gray-300 text-base md:text-lg mb-6 animate-slideInLeft delay-400">
            Currently diving deeper into React and Tailwind CSS to create
            seamless, scalable user interfaces. My goal is to create impactful
            web solutions that deliver value.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full shadow-lg hover:bg-opacity-80 transform hover:scale-105 transition-transform duration-500 ease-in-out animate-fadeInUp delay-600">
            Get in Touch
          </button>
        </div>

        {/* Right Side: Timeline / Journey */}
        <div className="flex flex-col justify-center space-y-8 text-white animate-fadeInUp">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h3>

          {/* Timeline Item 1 */}
          <div className="flex items-start space-x-4">
            <i className="ri-code-s-slash-line text-teal-400 text-3xl"></i>
            <div>
              <h4 className="text-xl font-semibold">2020 - Started Coding</h4>
              <p className="text-gray-300 text-sm md:text-base">
                I began my journey into coding, exploring HTML, CSS, and
                JavaScript, and developed a strong foundation in frontend
                development.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex items-start space-x-4">
            <i className="ri-macbook-line text-teal-400 text-3xl"></i>
            <div>
              <h4 className="text-xl font-semibold">2021 - Built Projects</h4>
              <p className="text-gray-300 text-sm md:text-base">
                Worked on multiple web projects, from simple websites to more
                interactive applications. Gained experience in responsive design
                and accessibility.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex items-start space-x-4">
            <i className="ri-reactjs-line text-teal-400 text-3xl"></i>
            <div>
              <h4 className="text-xl font-semibold">2023 - React Enthusiast</h4>
              <p className="text-gray-300 text-sm md:text-base">
                Deepened my knowledge of React and explored component-based
                architectures to build more scalable and maintainable
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
