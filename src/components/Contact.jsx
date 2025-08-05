
import React, { useState } from "react";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for reaching out!");
  };

  return (
    <section id="contact" className="w-screen min-h-screen  bg-gradient-to-br from-gray-800 to-gray-900 text-white md:py-8 py-8 px-6">
      <div className="max-w-2xl w-full mx-auto bg-opacity-80 bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-white tracking-wide underline">
          Get in Touch
        </h2>

        <form 
        action="https://formspree.io/f/mkgnjaee"
        method="POST"
        onSubmit={handleSubmit} 
        className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-300"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-300"
              placeholder="johndoe@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-300"
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
