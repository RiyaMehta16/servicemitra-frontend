import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import navItems from "../constants";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu after navigation (for mobile)
  };

  return (
    <div className="py-2 px-6 md:px-10 shadow-md shadow-neutral-300/20 bg-white fixed top-0 left-0 w-full z-50 ">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => handleNavigate("/")} className="cursor-pointer">
          <img src="/servicemitralogo.png" alt="logo" className="h-10" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-x-10 max-lg:gap-x-5 text-blue-800">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavigate(item.path)}
              className="text-xl hover:text-blue-500 hover:font-bold transition-all duration-300 cursor-pointer max-lg:text-lg "
            >
              {item.title}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <IconX size={28} className="text-blue-800" />
            ) : (
              <IconMenu2 size={28} className="text-blue-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigate(item.path)}
              className="block text-lg text-blue-800 hover:text-blue-500 font-medium cursor-pointer"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
