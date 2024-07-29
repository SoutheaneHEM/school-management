import React from "react";
import "../../../public/FontStyle/FontStyle.css";
import ButtonTemplate from "../Template/Button.Template";

const Hero = () => {
  return (
    <div
      className="w-full h-[100vh] bg-no-repeat bg-center bg-cover flex flex-row-reverse items-center bg-hero-pattern "
      style={{ height: "calc(100vh - 60px)" }}
    >
      <div className="w-[35%] flex flex-col gap-[30px] items-center text-justify bg-slate-100 p-[30px] border rounded-md shadow-2xl mr-[100px] sm:ml-auto sm:mr-auto  sm:w-[85%] ">
        <h1 className="noto-serif-khmer font-semibold text-[50px] text-[#2E236C] box-border sm:text-[35px] sm:text-center  ">
          សូមស្វាគមន៏មកកាន់គេហទំព័រ
        </h1>
        <span className="noto-serif-khmer text-[15px] text-[#2E236C] sm:text-[12px]">
          សាលារៀនជំនាន់ថ្មី នៃវិទ្យាល័យព្រះស៊ីសុវត្ថិ (NGS)
          បាននឹងកំពុងអនុវត្តកម្មវិធីសិក្សាថ្មី ឆ្លើយតប
          និងតម្រូវការរបស់សិស្សា​នុសិស្សក្នុងសតវត្សទី​២១
          ដែលការសិក្សាផ្សារភ្ជាប់និងការអនុវត្ត ពិសោធន៏
          ស្រាវជ្រាវរកប្រភពធនធានពីខាងក្រៅសៀវភៅសិក្សាគោល។
          សិស្សអាចស្វែងយល់ពីការងារចំបងៗក្រៅពីស្ដាប់គ្រូក្នុងថ្នាក់ដូចជាចេះប្រើប្រាស់បច្ចេកវិទ្យា(ICT)
          បំរើឱ្យការ ស្រាវជ្រាវនិងអនុវត្តន៏។ក្រៅពីការសិក្សាជាមួយគ្រូ
          សិស្សក៏បានបង្កើតក្លឹបសិក្សា ជាច្រើនដូចជា៖ ក្លឹបវិទ្យាសាស្ត្រ
          ក្លឹបវីដេអូ ក្លឹបកាសែត ....។
        </span>
        <div className="flex flex-row w-full ">
          <ButtonTemplate btnTitle="ស្វែងយល់បន្ថែម" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
