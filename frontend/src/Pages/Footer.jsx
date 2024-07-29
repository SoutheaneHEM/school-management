import React from "react";
import { CiYoutube } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center w-full h-full bg-[#2E236C] sm:flex-col">
      <div
        className="2xl:w-[35%] h-[50%] text-white inline text-[6rem] leading-[90px] font-[600] py-[3%] px-[5%]  2xl:border-r border-white mt-[50px] mb-[50px] 
        sm:py-[0%] sm:px-[0%] sm:text-[3rem] sm:border-b sm:w-[80%] "
      >
        <p>WE</p>
        <p>ARE</p>
        <p>SOCIAL</p>
      </div>
      <div
        className="2xl:w-[35%] h-[50%]  text-white inline text-[1rem] 2xl:border-r border-white py-[3%] px-[5%]  2xl:mt-[50px] 
        2xl:mb-[50px] sm:py-[0%] sm:px-[0%] sm:border-b sm:w-[80%] "
      >
        <div className="h-full box-border">
          <h2 className="text-[25px] font-bold noto-serif-khmer pb-[10px] ">
            សាលារៀនជំនាន់ថ្មី​ - កណ្តាលក្រុងភ្នំពេញ
          </h2>
        </div>
        <div>
          <div>
            <h4 className="noto-serif-khmer py-[10px]">លេខទូរសព្ទ</h4>
            <p className="noto-serif-khmer">
              (+855) 89 899 632 លោកនាយករង សម្យ កំសាន្ត
            </p>
            <p className="noto-serif-khmer">
              (+855) 70 399 606 លោកនាយករង ហួត ស៊ាងហៃ
            </p>
            <p className="noto-serif-khmer">
              (+855) 12 926 656 លោកនាយិកា ទ្រី​ វុិច
            </p>
          </div>
          <div className="sm:pb-[50px]">
            <h4 className="noto-serif-khmer py-[10px] ">អ៊ីមែល</h4>
            <p className="">info@preahsisowath.edu.kh</p>
            <p className="">preahsisowath@gmail.com.kh</p>
          </div>
        </div>
      </div>
      <div className="w-100% h-[50%]  text-white inline text-[1rem]  py-[5%] px-[5%]  mt-[50px] mb-[50px] justify-center items-center ">
        <Link to="https://www.youtube.com/watch?v=a-YEGFZtQFc">
          <button className="flex items-center noto-serif-khmer bg-[#FF0000] py-[10px] px-[20px] gap-4 mb-4 w-full">
            <CiYoutube className="text-[50px]" />
            <span className="text-[25px]">ទស្សនាវីដេអូរពួកយើង</span>
          </button>
        </Link>

        <Link to="https://www.w3schools.com/">
          <button className="flex items-center noto-serif-khmer bg-[#180161] py-[10px] px-[20px] gap-4 mb-4 w-full">
            <AiOutlineFacebook className="text-[50px]" />
            <span className="text-[25px]">តាមដានក្នុងហ្ចេសបុក</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
