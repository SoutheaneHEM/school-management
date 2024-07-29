import React from "react";
import englishGEP from "../../../public/assets/program1.jpg";
import businessGEP from "../../../public/assets/program2.jpg";
import scholarshipGEP from "../../../public/assets/program3.jpg";

const AboutMission = () => {
  return (
    <div className="w-[90%] flex items-center justify-between  noto-serif-khmer ml-auto mr-auto pb-[100px] box-border basis-[30%] gap-[20px] cursor-pointer sm:flex-col">
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-100 group">
        <img
          src={englishGEP}
          alt="Description"
          className="w-full h-auto object-cover"
        />
        <h1
          className="w-full h-full text-center  absolute text-[35px] text-white font-bold  pt-[100%] opacity-0 group-hover:pt-[60%]  
        group-hover:opacity-100 transition-all duration-1000 bg-gradient-to-b from-black/30 to-black/80"
        >
          ភាសាអង់គ្លេសទូទៅ
        </h1>
      </div>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-100 group">
        <img
          src={businessGEP}
          alt="Description"
          className="w-full h-auto object-cover"
        />
        <h1
          className="w-full h-full text-center  absolute text-[35px] text-white font-bold  pt-[100%] opacity-0 group-hover:pt-[60%]  
        group-hover:opacity-100 transition-all duration-1000 bg-gradient-to-b from-black/30 to-black/80"
        >
          ភាសាអង់គ្លេសសម្រាប់កុមារ
        </h1>
      </div>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-100 group">
        <img
          src={scholarshipGEP}
          alt="Description"
          className="w-full h-auto object-cover"
        />
        <h1
          className="w-full h-full text-center  absolute text-[35px] text-white font-bold  pt-[100%] opacity-0 group-hover:pt-[60%]  
        group-hover:opacity-100 transition-all duration-1000 bg-gradient-to-b from-black/30 to-black/80"
        >
          អាហារូបករណ៍
        </h1>
      </div>
    </div>
  );
};

export default AboutMission;
