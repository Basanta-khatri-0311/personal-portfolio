import React from "react";

export const projectData = [
  {
    title: "Personal Portfolio",
    description:
      "Responsive Personal portfolio created using React and tailwindcss.",
    link: "https://github.com/Basanta-khatri-0311/personal-portfolio.git",
    image: "/projectimages/portfolio.jpg",
    live: "",
  },

  {
    title: "Active scroll",
    description:
      "A dynamic and interactive card scrolling effect created using plain html css and js",
    link: "https://github.com/Basanta-khatri-0311/activescroll.git",
    image: "/projectimages/scroll.png",
    live: "https://scrolltask-bk.netlify.app/",
  },

  {
    title: "CareerOrbit",
    description:
      "A jod opening website opened using react and tailwind as a frontend task.",
    link: "https://github.com/Basanta-khatri-0311/CareerOrbit.git",
    image: "/projectimages/careerorbit.png",
    live: "https://careerorbit-bk.netlify.app/",
  },

  {
    title: "KanbanBoard-FlowBoard",
    description:
      "Todo planner/Task planner created using React and tailwindcss with drag and drop functionality.",
    link: "https://github.com/Basanta-khatri-0311/kanban.git",
    image: "/projectimages/kanban.png",
    live: "https://flowboard-bk.netlify.app/",
  },
  {
    title: "Random user and password generator",
    description:
      "A random password and username generator created uisng tailwindcss and react with some optimizations using hooks like usecallback useeffect usestate and useRef",
    link: "https://github.com/Basanta-khatri-0311/reactlearning/tree/main/05passwordGenerator",
    image:"/projectimages/randomgenerator.png",
    live:"https://random-generator-bk.netlify.app/"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-screen min-h-screen bg-gray-900 text-white py-12 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-500 underline">
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div key={index} className="relative w-full h-80 perspective">
              <div className="relative w-full h-full transform-style-preserve flip-card duration-700">
                {/* Front Side */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between transform rotate-y-0 backface-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-indigo-400">
                    {project.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-indigo-700 rounded-lg shadow-lg p-6 flex flex-col justify-end items-center transform rotate-y-180 backface-hidden">
                  <p className="text-gray-100 mb-4">{project.description}</p>
                  <div className="flex w-full justify-between items-center ">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-200 hover:text-white font-bold"
                    >
                      View Project →
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-200 hover:text-white font-bold"
                    >
                      View Live →
                    </a>
                  </div>
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
