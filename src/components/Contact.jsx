import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-72 md:h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Ready to start your next project? Let's talk!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center lg:text-left">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                  I'm always interested in new opportunities, whether it's a freelance project, 
                  collaboration, or just a friendly chat about web development.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3 md:space-y-4">
                {[
                  { 
                    icon: 'ri-mail-line', 
                    label: 'Email', 
                    value: 'khatribasanta.works09@gmail.com', 
                    href: 'mailto:khatribasanta.works09@gmail.com' 
                  },
                  { 
                    icon: 'ri-linkedin-fill', 
                    label: 'LinkedIn', 
                    value: 'Basanta Khatri', 
                    href: 'https://linkedin.com/in/basanta-khatri' 
                  },
                  { 
                    icon: 'ri-github-fill', 
                    label: 'GitHub', 
                    value: 'Basanta-khatri-0311', 
                    href: 'https://github.com/Basanta-khatri-0311' 
                  }
                ].map((contact, index) => (
                  <a 
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 text-gray-300 hover:text-teal-400 transition-colors group bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10 hover:border-teal-400/30 w-full"
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-teal-400/10 rounded-lg flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                      <i className={`${contact.icon} text-teal-400 text-lg md:text-xl`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm md:text-base">{contact.label}</div>
                      <div className="text-xs md:text-sm text-gray-400 truncate">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-colors text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-colors text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-colors resize-none text-sm md:text-base"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="ri-send-plane-line"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;