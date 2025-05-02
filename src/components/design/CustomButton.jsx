import React from "react";

const CustomButton = ({ children, className }) => {
  return (
    <button
      className={` font-bold px-5 py-2 rounded-md shadow-white/20 shadow-lg transition-colors duration-300 hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
