// import React from "react";
// import Logo from "./Logo"

// const NavBar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-lg z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <Logo/>
//         <div className="space-x-24">
//           <a href="#home" className="text-gray-300 relative group">
//             Home
//             <span className="absolute left-0 right-0 bottom-0 top-10 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
//           </a>
//           <a href="#about" className="text-gray-300 relative group">
//             About
//             <span className="absolute left-0 right-0 bottom-0 top-10  h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
//           </a>
//           <a href="#projects" className="text-gray-300 relative group">
//             Projects
//             <span className="absolute left-0 right-0 bottom-0 top-10  h-1  bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
//           </a>
//           <a href="#contact" className="text-gray-300 relative group">
//             Contact
//             <span className="absolute left-0 right-0 bottom-0 top-10  h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
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
        <Logo />
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

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
      <span className="absolute left-0 right-0 bottom-0 top-10 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out md:group-hover:scale-x-100 md:block hidden"></span>
    </a>
  );
};

export default NavBar;
