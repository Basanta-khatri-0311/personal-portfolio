// import React from "react";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="about  w-screen min-h-screen pb-36 bg-gradient-to-r from-gray-900 to-gray-800 p-6 md:p-10 flex items-center justify-center"
//     >
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
//         {/* Left Side: Description with Image */}   
//         <div className="flex flex-col justify-center items-center text-center md:text-left">
//           <img
//             src="./src/assets/profile.jpg"
//             alt="Profile"
//             className="w-40 h-40 md:w-48 md:h-48  rounded-full mb-6 border-4 border-teal-400 shadow-lg"
//           />
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
//             Basanta Khatri
//           </h2>
//           <p className="text-gray-300 text-lg md:text-xl mb-4 animate-slideInLeft delay-200">
//             I'm a passionate Frontend Developer with a love for crafting
//             engaging, interactive web experiences. Exploring new technologies
//             and learning every day.
//           </p>
//           <p className="text-gray-300 text-base md:text-lg mb-6 animate-slideInLeft delay-400">
//             Currently diving deeper into React and Tailwind CSS to create
//             seamless, scalable user interfaces. My goal is to create impactful
//             web solutions that deliver value.
//           </p>
//           <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full shadow-lg hover:bg-opacity-80 hover:shadow-xl transform hover:scale-125 transition-transform duration-500 ease-in-out " >
//             Get in Touch
//           </a>
//         </div>

//         {/* Right Side: Timeline / Journey */}
//         <div className="flex flex-col justify-center space-y-8 text-white animate-fadeInUp">
//           <h3 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h3>

//           {/* Timeline Item 1 */}
//           <div className="flex items-start space-x-4 px-5">
//             <i className="ri-code-s-slash-line text-teal-400 text-3xl"></i>
//             <div>
//               <h4 className="text-xl font-semibold">2021 - Started Coding</h4>
//               <p className="text-gray-300 text-sm md:text-base">
//                 I began my journey into coding, exploring HTML, CSS, and
//                 JavaScript, and developed a strong foundation in frontend
//                 development.
//               </p>
//             </div>
//           </div>

//           {/* Timeline Item 2 */}
//           <div className="flex items-start space-x-4 px-5">
//             <i className="ri-macbook-line text-teal-400 text-3xl"></i>
//             <div>
//               <h4 className="text-xl font-semibold">2023 - Built Projects</h4>
//               <p className="text-gray-300 text-sm md:text-base">
//                 Worked on multiple web projects, landing pages, from simple websites to more
//                 interactive applications. Gained experience in responsive design
//                 and accessibility.
//               </p>
//             </div>
//           </div>

//           {/* Timeline Item 3 */}
//           <div className="flex items-start space-x-4 px-5">
//             <i className="ri-reactjs-line text-teal-400 text-3xl"></i>
//             <div>
//               <h4 className="text-xl font-semibold">2024 - React Enthusiast</h4>
//               <p className="text-gray-300 text-sm md:text-base">
//                 Deepened my knowledge of React and explored component-based
//                 architectures to build more scalable and maintainable
//                 applications.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="about w-screen min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-8 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        
        {/* Left Side: Profile Image */}
        <div className="flex justify-center mb-10 md:mb-0 md:w-1/2">
          <img
            src="./src/assets/profile.jpg"
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-teal-400 shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Right Side: Profile Description */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn">Hi, I'm Basanta Khatri</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 animate-slideInLeft delay-200">
            A passionate Frontend Developer dedicated to crafting immersive web experiences.
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
        <h3 className="text-4xl font-bold text-white mb-4 animate-fadeIn">My Journey</h3>
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
