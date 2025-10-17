import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "DharmaVerse",
      description: "Spiritual verses web app with search, filtering, and dark mode",
      image: "/projectimages/dharmaverse.png",
      live: "https://dharmaverse-bk.netlify.app/",
      code: "https://github.com/Basanta-khatri-0311/dharmaverse",
      tags: ["React", "Tailwind", "LocalStorage"]
    },
    {
      title: "SEO MetaTagLab",
      description: "SEO meta tag generator tool for website optimization",
      image: "/projectimages/metataglab.png",
      live: "https://taglab-bk.netlify.app/",
      code: "https://github.com/Basanta-khatri-0311/seo-meta-generator",
      tags: ["React", "SEO", "Tools"]
    },
    {
      title: "ApplyFlow",
      description: "Job application tracker with statistics and local storage",
      image: "/projectimages/applyflow.png",
      live: "https://applyflow-bk.netlify.app/",
      code: "https://github.com/Basanta-khatri-0311/CareerTrackr",
      tags: ["React", "Tailwind", "Tracking"]
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-4 md:left-10 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-4 md:right-10 w-56 h-56 md:w-72 md:h-72 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Featured <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            A selection of my recent work showcasing modern web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/30 transition-all duration-500 hover:transform hover:-translate-y-1 md:hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Project screenshot`}
                  width={400}
                  height={250}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 md:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-teal-400/10 text-teal-400 text-xs md:text-sm rounded-full border border-teal-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 md:gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center py-2 px-3 md:py-2 md:px-4 rounded-lg font-medium text-xs md:text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2"
                  >
                    <i className="ri-external-link-line text-xs md:text-sm"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-white/20 text-gray-300 text-center py-2 px-3 md:py-2 md:px-4 rounded-lg font-medium text-xs md:text-sm hover:border-teal-400 hover:text-teal-400 transition-colors flex items-center justify-center gap-1 md:gap-2"
                  >
                    <i className="ri-github-fill text-xs md:text-sm"></i>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-8 md:mt-12">
          <a
            href="https://github.com/Basanta-khatri-0311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-teal-400 text-teal-400 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-teal-400 hover:text-white transition-all duration-300"
          >
            View All Projects
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;