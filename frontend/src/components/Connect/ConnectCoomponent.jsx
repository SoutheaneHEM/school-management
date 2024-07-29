import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ButtonTemplate from "../Template/Button.Template";

const ConnectCoomponent = () => {
  const [phone, setPhone] = useState("");

  return (
    <div
      className="w-[70%] min-h-[80vh] flex justify-between ml-auto mr-auto shadow-[0px_5px_15px_rgba(0,0,0,0.35)] my-[50px] bg-[#2E236C] 
    rounded-xl text-[#fff] sm:flex-col sm:w-[100%] sm:my-0 sm:border-none sm:rounded-none"
    >
      <div className="flex items-center justify-center flex-col basis-[50%] noto-serif-khmer leading-[50px] sm:pt-[80px]">
        <h1 className="text-[30px] sm:text-[25px]">
          ភ្ជាប់ទំនាក់ទំនងជាមួយពួកយើង
        </h1>
        <h3>បង្កើតទំនាក់ទំនងថ្មីៗដើម្បីទទួលបានពត័មានថ្មីៗ</h3>
      </div>
      <div className="flex items-center justify-center flex-col basis-[50%] noto-serif-khmer box-border  ">
        <form className="w-full box-border p-[50px] text-center text-[black]">
          <h1 className="text-[30px] pb-[20px] text-[#fff]">ពត៏មានរបស់អ្នក</h1>
          <input
            type="text"
            placeholder="ឈ្មោះរបស់អ្នក ..."
            className="w-full box-border p-[10px] rounded-lg mb-[20px] noto-serif-khmer"
          />
          <div className="flex mb-[10px]">
            <PhoneInput
              country={"kh"}
              value={phone}
              onChange={setPhone}
              enableSearch={true}
              containerStyle={{
                width: "100%",
                borderRadius: "0.5rem",
                marginBottom: "10px",
              }}
              inputStyle={{
                width: "calc(100%)",
                height: "45px",
                borderRadius: "0.5rem",
              }}
            />
          </div>

          <input
            type="text"
            placeholder="អ៊ីមែលរបស់អ្នក ..."
            className="w-full box-border p-[10px] rounded-lg mb-[20px]"
          />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="សូមវាយបញ្ចូលសាររបស់អ្នកមកកាន់យើងខ្ញុំ....."
            className="w-full box-border p-[10px] rounded-lg mb-[20px] noto-serif-khmer resize-none"
          ></textarea>
          <button className="bg-white p-[10px] w-full rounded-lg text-[#2E236C] font-bold text-[20px] hover:bg-[#2E236C] hover:text-[#fff] border">
            ដាក់ផ្ញើរ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectCoomponent;
