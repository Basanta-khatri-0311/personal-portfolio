import React from "react"


export const projectData = [
    {
      title: "FootFashion",
      description: "A shoe website built with laravel and mySql.",
      link: "https://github.com/Basanta-khatri-0311/shoeshopmanagementsystem.git",
      image: "./public/projectimages/footfashion.png", 
    },
    {
      title: "Voice Assistant",
      description: "Face Detection enabled voice assistant created using the python with eel for connecting python with HTML,CSS,JS.",
      link: "https://github.com/Basanta-khatri-0311/finalyearproject-voiceassistant.git",
      image: "./public/projectimages/echo.png",  
    },
    {
      title: "Personal Portfolio",
      description: "Responsive Personal portfolio created using React and tailwindcss.",
      link: "https://github.com/Basanta-khatri-0311/personal-portfolio.git",
      image: "./public/projectimages/portfolio.jpg",  
    },
  ];
  


const Projects = () => {
    return (
        <section id="projects" className="w-screen min-h-screen bg-gray-900 text-white py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-indigo-500 underline">
              Projects
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {projectData.map((project, index) => (
                <div
                  key={index}
                  className="relative w-full h-80 perspective"
                >
                  <div className="relative w-full h-full transform-style-preserve flip-card duration-700">
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between transform rotate-y-0 backface-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h3 className="text-2xl font-semibold text-indigo-400">{project.title}</h3>
                    </div>
    
                    {/* Back Side */}
                    <div className="absolute inset-0 bg-indigo-700 rounded-lg shadow-lg p-6 flex flex-col justify-end items-center transform rotate-y-180 backface-hidden">
                      <p className="text-gray-100 mb-4">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-200 hover:text-white font-bold"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
      
  export default Projects;