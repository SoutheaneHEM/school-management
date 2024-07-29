import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { CiMenuFries } from "react-icons/ci";
import "../../../public/FontStyle/FontStyle.css";
import { setToggle } from "../../ReduxSlice/Toggle.Slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// const HorizontalNavbar = ({ toggle, setToggle }) => {
const HorizontalNavbar = () => {
  const dispatch = useDispatch();

  // State to hold the current style
  const [isClicked, setIsClicked] = useState(false);

  // Click handler
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const inputStyle = {
    opacity: isClicked ? 1 : 0,
    transition: "opacity 1s ease",
    width: isClicked ? "150px" : "0px",
    transition: "width 0.3s ease",
    color: "black",
  };

  return (
    <div className="flex items-center justify-between sm:justify-start w-full h-[60px] p-[20px] bg-[#2E236C] text-white">
      <div className="w-[50px] basis-[200px] p-[50px] sm:p-[0px] sm:basis-[50px]">
        <CiMenuFries
          className="text-[30px] font-extrabold cursor-pointer"
          onClick={() => dispatch(setToggle())}
        />
      </div>
      <div className="w-full flex items-center justify-center gap-[80px] sm:flex-col">
        <ul className="noto-serif-khmer flex gap-x-[80px] cursor-pointer sm:hidden">
          <Link to="/">
            <li>ទំព័រដើម</li>
          </Link>
          <Link to="/news">
            <li>ពត៏មាន</li>
          </Link>
        </ul>

        <Logo />

        <ul className="noto-serif-khmer flex gap-x-[80px] cursor-pointer sm:hidden">
          <Link to="/about">
            <li>អំពីយើង</li>
          </Link>
          <Link to="/connect">
            <li>ទំនាក់ទំនង</li>
          </Link>
        </ul>
      </div>
      <div className="relative  flex items-center">
        <FaSearch
          onClick={handleClick}
          className={`absolute text-[#ffff] cursor-pointer transition-ease ${
            isClicked ? "sm:left-[0px]" : "sm:left-[20px]"
          }`}
        />
        <input
          type="text"
          style={inputStyle}
          className={`ml-8 pl-2 border border-gray-300 rounded ${
            isClicked ? "sm:w-[80px]" : "sm:w-[0px]"
          }`}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default HorizontalNavbar;
