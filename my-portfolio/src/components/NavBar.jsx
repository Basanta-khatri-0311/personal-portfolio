import React, { useState } from "react";
import Logo from "./Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Centered Navigation Links */}
          <Logo />
          <div className="hidden md:flex  justify-center space-x-20 mr-10 animate-slideInRight">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-4xl text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-auto bg-gray-800 p-4 shadow-lg">
          <button
            className="absolute right-4 top-5 text-gray-300 text-4xl"
            onClick={toggleMenu}
          >
            <i className="ri-close-line"></i>
          </button>
          <div className="flex flex-col mt-10 space-y-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 relative group block"
    >
      {children}
      <span className="md:top-10 md:absolute md:left-0 md:right-0 md:bottom-0 md:h-1 md:bg-white md:scale-x-0 md:group-hover:scale-x-100 md:transition-transform md:duration-500 md:ease-in-out hidden md:block"></span>
    </a>
  );
};


export default NavBar;
