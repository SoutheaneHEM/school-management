import React from "react";

const TitleTemplate = (props) => {
  return (
    <div
      className="w-full h-[500px] noto-serif-khmer flex justify-center items-center flex-col "
      style={{
        background: `${props?.bgColor}`,
        color: `${props?.textColor}`,
        height: `${props?.height}`,
      }}
    >
      <h1 className="text-[30px]">{props.Maintitle}</h1>
      <h3 className="text-[20px]">{props.SubTitle}</h3>
    </div>
  );
};

export default TitleTemplate;
