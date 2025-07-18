import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const PageContainer = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="px-10 pt-20 flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default PageContainer;
