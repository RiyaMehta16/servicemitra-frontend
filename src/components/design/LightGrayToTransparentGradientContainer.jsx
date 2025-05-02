import React from "react";
import { BackgroundBeams } from "./BackgroundBeams";

const LightGrayToTransparentGradientContainer = ({ children, className }) => {
  return (
    <div
      className={`max-w-screen min-h-[52em] rounded-3xl bg-gradient-to-b from-blue-200/80 via-blue-50/40 to-blue-50/10 pt-10 relative overflow-hidden ${className}`}
    >
      <BackgroundBeams />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default LightGrayToTransparentGradientContainer;
