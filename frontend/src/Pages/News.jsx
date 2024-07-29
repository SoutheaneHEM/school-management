import React from "react";
import ToggleandNavbar from "../components/HorizontalNav/ToggleandNavbar";
import NewsComponent from "../components/NewsPage/NewsComponent";
import TitleTemplate from "../components/Template/Title.Template";
import Footer from "./Footer";
import ButtonTemplate from "../components/Template/Button.Template";
import ScrollToTopTemplate from "../components/Template/ScrollToTop.Template";

const News = () => {
  return (
    <div>
      <ToggleandNavbar />
      <TitleTemplate
        Maintitle="ពត៏មានថ្មីៗ"
        SubTitle="ការផ្តល់ជូននូវការអប់រំកម្រិតអន្តរជាតិ"
        height="250px"
      />
      <NewsComponent />
      <div className="flex flex-col items-center">
        <ButtonTemplate btnTitle="មើលបន្ថែមទៀត" />
        <div className="pt-[100px]"></div>
      </div>
      <Footer />
      <ScrollToTopTemplate />
    </div>
  );
};

export default News;
