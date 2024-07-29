import React from "react";
import "../../../public/FontStyle/FontStyle.css";
const Login = () => {
  return (
    <div
      className="noto-serif-khmer w-full h-[100vh] flex items-center justify-center"
      style={{ height: "calc(100vh - 7vh)" }}
    >
      <form className="w-[50vh] h-fit border  leading-[50px] box-border p-[20px] overflow-hidden bg-[#2E236C] text-[#fff]  rounded-2xl">
        <div>
          <h1 className="text-[40px] box-border text-center my-[30px] underline">
            ចូលប្រើប្រាស់គណនី
          </h1>
        </div>
        <div>
          <label className="block ">លេខសម្គាល់សិស្ស</label>
          <input
            type="text"
            placeholder="SID-XXX XXX"
            className="block w-full rounded-md pl-[10px] text-[#000]"
          />
          <label className="block ">លេខសម្ងាត់</label>
          <input
            type="password"
            className="block w-full rounded-md pl-[10px] text-[#000]"
          />
          <button className="w-full self-center my-[30px] bg-[#4C3BCF] rounded-md">
            ចូលគណនី
          </button>
        </div>
        <div>
          <h1 className="flex flex-divider items-center text-center text-[20px] font-bold">
            ឬ
          </h1>
        </div>
        <div>
          <button className="w-full self-center my-[30px] bg-[#4C3BCF] rounded-md">
            ចូលប្រើប្រាស់ជាគ្រូ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
