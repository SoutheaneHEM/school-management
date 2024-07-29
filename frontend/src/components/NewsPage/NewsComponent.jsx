import React from "react";
import { NewsData } from "../../DummyData/News";

const NewsComponent = () => {
  return (
    <div className="flex items-center ml-auto mr-auto justify-center pt-[50px] pb-[50px] ">
      <ul className="grid grid-cols-3 gap-[50px] sm:grid-cols-1 ">
        {NewsData.map((news, index) => {
          return (
            <div
              key={index}
              className="w-auto h-auto shadow-2xl  p-3 m-[10px] flex items-center justify-center rounded-lg cursor-pointer "
            >
              <div className="noto-serif-khmer flex flex-col items-center text-center gap-4">
                <li>
                  <img
                    src={news.postPicture}
                    alt={news.postTitile}
                    className="w-[400px] h-[480px] object-cover rounded-md sm:w-[350px]"
                  />
                </li>
                <li className="w-[400px] h-fit sm:w-[350px]">
                  {news.postContent}
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsComponent;
