import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../lib/utils";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 500 });

  useEffect(() => {
    if (!isMobile) {
      addAnimation();
    }
  }, [isMobile]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return isMobile ? (
    <div className={cn("px-4", className)}>
      <Swiper spaceBetween={16} slidesPerView={1.2}>
        {items.map((item, idx) => (
          <SwiperSlide key={idx} className="h-full flex">
            <li
              className={cn(
                "relative shrink-0 rounded-2xl border border-b-0 px-6 py-4",
                "bg-[linear-gradient(180deg,#007700,#007700)] border-green-700",
                "w-[220px] h-[400px] flex flex-col justify-between"
              )}
            >
              <blockquote>
                <span className="text-sm leading-relaxed text-neutral-100 ">
                  {item.quote}
                </span>
                <div className="mt-4">
                  <span className="text-sm font-semibold text-neutral-300">
                    {item.name}
                  </span>
                  <br />
                  <span className="text-xs text-neutral-400">{item.title}</span>
                </div>
              </blockquote>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "relative shrink-0 rounded-2xl border border-b-0 px-8 py-6",
              "bg-[linear-gradient(180deg,#007700,#007700)] border-green-700",
              "w-[350px] md:w-[450px] max-xl:w-[400px] max-lg:w-[350px] max-md:w-[300px] max-sm:w-[250px]"
            )}
          >
            <blockquote>
              <span className="text-md max-md:text-sm leading-[1.6] font-normal text-neutral-100">
                {item.quote}
              </span>
              <div className="mt-6 flex flex-col">
                <span className="text-sm font-normal text-neutral-300">
                  {item.name}
                </span>
                <span className="text-sm text-neutral-400">{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
