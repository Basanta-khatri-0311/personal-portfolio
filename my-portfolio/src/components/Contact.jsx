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
    // Here you can handle form submission logic (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-screen h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white py-32 px-6 ">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 text-black font-medium border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="johndoe@example.com"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-2 px-4  rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-110 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
