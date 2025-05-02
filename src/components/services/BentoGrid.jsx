// BentoGrid.jsx
import React from "react";

// Simple utility function to replace cn
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl ",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-blue-600 ">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600">
          {description}
        </div>
      </div>
    </div>
  );
};

// Skeleton component for the header
export const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export const BentoImg = ({ source, className }) => {
  return (
    <img
      src={source}
      className={`object-cover max-h-[8rem] rounded-lg ${className}`}
    />
  );
};
