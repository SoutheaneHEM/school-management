import React from "react";
import "../../../public/FontStyle/FontStyle.css";
import ButtonTemplate from "../Template/Button.Template";

const AboutHero = () => {
  return (
    <div
      className="w-full h-[100vh] bg-no-repeat bg-center bg-cover flex  bg-abouthero-pattern "
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="w-[50%] noto-serif-khmer flex flex-col justify-center items-center ml-auto mr-auto text-center gap-5 sm:w-[90%]">
        <h1 className="font-semibold text-[80px] text-[#2E236C] box-border sm:text-[60px]">
          អំពីពួកយើង
        </h1>

        <p className="text-[20px] font-extralight text-[#F5F7F8] sm:text-[15px]">
          កម្មវិធីសិក្សាចំណេះទូទៅខ្មែរត្រូវបានទទួលស្គាល់ដោយក្រសួងអប់រំ យុវជន
          និងកីឡា នៃព្រះរាជាណាចក្រកម្ពុជា ហើយសិស្សានុសិស្សសាលារៀនសាធារណៈ
          និងសាលារៀនឯកជនដទៃទៀត អាចផ្ទេរការសិក្សា
          មកចូលរៀននៅសាលារៀនសុវណ្ណភូមិណាមួយក៏បាន។
        </p>
        <ButtonTemplate btnTitle="អានបន្ថែមទៀត" />
      </div>
    </div>
  );
};

export default AboutHero;
