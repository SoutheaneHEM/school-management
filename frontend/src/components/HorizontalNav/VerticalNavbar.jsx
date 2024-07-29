import React, { useEffect, useState } from "react";
import "../../../public/FontStyle/FontStyle.css";
import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// const VerticalNavbar = ({ toggle }) => {
const VerticalNavbar = () => {
  const toggle = useSelector((state) => state.toggle.value);
  const [hideVerBar, sethideVerBar] = useState(false);

  //set scroll to check when scroll hide the vertical bar
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? sethideVerBar(true) : sethideVerBar(false);
    });
    console.log(hideVerBar);
  }, [hideVerBar]);
  return (
    <div
      className={`absolute w-[200px] bg-[#2E236C] ${
        hideVerBar || !toggle ? `left-[-200px]` : `left-[0px]`
      }`}
      style={{
        height: "calc(100% - 60px)",
        transition: "200ms",
        zIndex: "10",
      }}
    >
      <div className="flex flex-col h-full justify-between ">
        <div className="noto-serif-khmer p-4 mt-[50px]">
          <ul className="flex flex-col items-start justify-center text-white space-y-5 cursor-pointer">
            <Link to="/login">
              <li className="flex items-center justify-between gap-4">
                <CgProfile className="text-[20px]" />
                គណនី
              </li>
            </Link>
            <li className="flex items-center justify-between gap-4">
              <SiGoogleclassroom className="text-[20px]" />
              អំពីថ្នាក់រៀន
            </li>
            <li className="flex items-center justify-between gap-4">
              <VscGitPullRequestNewChanges className="text-[20px]" />
              ដាក់សំណើរ
            </li>
            <li className="flex items-center justify-between gap-4">
              <IoPersonRemoveSharp className="text-[20px]" />
              អវត្តិមាន
            </li>
            <button className="flex items-center justify-between gap-4">
              <MdOutlineSettings className="text-[20px]" />
              ធ្វើការកែប្រែ
            </button>
          </ul>
        </div>

        <div className="w-full  items-center justify-center gap-[80px] sm:flex-col box-border ml-0 hidden sm:flex">
          <ul className="noto-serif-khmer w-full items-center flex gap-y-[20px] cursor-pointer sm:flex-col  box-border text-[#2E236C]">
            <Link
              to="/"
              className="bg-[#fff] w-[150px] border rounded-md text-center"
            >
              <li>ទំព័រដើម</li>
            </Link>
            <Link
              to="/news"
              className="bg-[#fff] w-[150px] border rounded-md text-center"
            >
              <li>ពត៏មាន</li>
            </Link>
            <Link
              to="/about"
              className="bg-[#fff] w-[150px] border rounded-md text-center"
            >
              <li>អំពីយើង</li>
            </Link>
            <Link
              to="/connect"
              className="bg-[#fff] w-[150px] border rounded-md text-center"
            >
              <li>ទំនាក់ទំនង</li>
            </Link>
          </ul>
        </div>

        <div className="bg-white p-4 noto-serif-khmer text-[10px] text-center font-semibold">
          <h1>កំណែប្រែលើកទីមួយ</h1>
          <span>Version 1.0 &#169; 2024</span>
        </div>
      </div>
    </div>
  );
};

export default VerticalNavbar;
