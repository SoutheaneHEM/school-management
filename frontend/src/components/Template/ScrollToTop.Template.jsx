import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopTemplate = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuad" });
  };
  return (
    <div className="w-[100px] h-[100px] rounded-full text-blue-700 float-right fixed bottom-0 right-0 flex items-center justify-center">
      <FaArrowCircleUp
        className=" text-[60px] cursor-pointer sm:text-[50px] "
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollToTopTemplate;
