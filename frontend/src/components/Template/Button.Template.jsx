import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../../../public/FontStyle/FontStyle.css";
const ButtonTemplate = ({ btnTitle }) => {
  return (
    <div>
      <button
        className="noto-serif-khmer h-[40px] w-[200px] border border-slate-500 bg-[#2E236C] rounded-lg text-lg 
           text-[#fff] hover:bg-white hover:text-[#2E236C] flex items-center justify-center gap-3"
      >
        {btnTitle}
        <HiOutlineArrowNarrowRight />
      </button>
    </div>
  );
};

export default ButtonTemplate;
