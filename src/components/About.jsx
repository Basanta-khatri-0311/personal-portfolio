import React from 'react';

const About = () => {
  const skills = [
    { name: 'React', level: 90, icon: 'ri-reactjs-line' },
    { name: 'JavaScript', level: 85, icon: 'ri-javascript-line' },
    { name: 'Tailwind CSS', level: 88, icon: 'ri-tailwind-css-line' },
    { name: 'HTML/CSS', level: 92, icon: 'ri-html5-line' },
    { name: 'Git', level: 80, icon: 'ri-git-branch-line' },
    { name: 'Responsive Design', level: 90, icon: 'ri-layout-line' },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-4 md:right-1/4 w-48 h-48 md:w-64 md:h-64 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-4 md:left-1/4 w-56 h-56 md:w-72 md:h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            About <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Passionate developer with a focus on creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Basanta Khatri - Frontend Developer"
                width={300}
                height={300}
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-xl md:rounded-2xl shadow-2xl border-4 border-teal-400/20 object-cover"
              />
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl md:rounded-2xl opacity-20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center lg:text-left">Crafting digital experiences that matter</h3>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
                I'm a frontend developer passionate about building fast, accessible, and user-friendly 
                web applications. With over 2 years of experience, I specialize in React and modern 
                CSS frameworks.
              </p>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white-10">
                I believe in writing clean, maintainable code and creating interfaces that not only 
                look great but also provide exceptional user experiences across all devices.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center lg:text-left">Skills & Technologies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="bg-white/5 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10 hover:border-teal-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <i className={`${skill.icon} text-teal-400 text-sm md:text-base`}></i>
                        <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                      </div>
                      <span className="text-xs md:text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-400 to-blue-500 h-1.5 md:h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;