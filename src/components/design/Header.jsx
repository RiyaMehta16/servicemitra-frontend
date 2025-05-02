import React from "react";

const Header = ({ children, className }) => {
  return (
    <div
      className={`text-3xl font-semibold  font-primary bg-clip-text  text-blue-900 flex justify-center align-middle py-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Header;
