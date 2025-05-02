// src/components/StickyScroll.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // We need to ensure the last card becomes active before reaching the end
    // This creates breakpoints with the last one being reachable before 100% scroll
    const cardsBreakpoints = content.map((_, index) => {
      // For the last item, set the breakpoint a bit earlier than 1.0
      // This ensures it becomes active before reaching the end of scroll
      if (index === cardLength - 1) {
        return 0.72; // Last card activates at 72% scroll instead of 100%
      }

      // For other items, distribute evenly but leave room for the last card
      // Scale down to 0.72 instead of 1.0 to match the last card's start point
      return (index / (cardLength - 1)) * 0.72;
    });

    // Find the closest breakpoint to the current scroll position
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const currentDistance = Math.abs(latest - breakpoint);
        const previousDistance = Math.abs(latest - cardsBreakpoints[acc]);

        if (currentDistance < previousDistance) {
          return index;
        }
        return acc;
      },
      0
    );

    // Special case: If we're past the last breakpoint, activate the last card
    if (latest > cardsBreakpoints[cardLength - 1]) {
      setActiveCard(cardLength - 1);
    } else {
      setActiveCard(closestBreakpointIndex);
    }
  });

  const backgroundColors = [
    "#1d2760", // slate-900
    "#1d2450", // black
    "#253068", // neutral-900
    "#2c3156", // slate-900 (repeated for more items)
    "#373b5b", // black (repeated for more items)
    "#485073", // neutral-900 (repeated for more items)
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #143e84)", // cyan-500 to emerald-500
    "linear-gradient(to bottom left, #06b6d4, #143e84)", // pink-500 to indigo-500
    "linear-gradient(to top left, #06b6d4, #143e84)", // orange-500 to yellow-500
    "linear-gradient(to top right, #06b6d4, #143e84", // cyan-500 to indigo-500
    "linear-gradient(to bottom right, #06b6d4, #143e84)", // pink-500 to yellow-500
    "linear-gradient(to bottom left, #06b6d4, #143e84)", // orange-500 to emerald-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
