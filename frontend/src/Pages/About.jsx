import React from "react";
import ToggleandNavbar from "../components/HorizontalNav/ToggleandNavbar";
import AboutHero from "../components/AboutPage/AboutHero";
import AboutMission from "../components/AboutPage/AboutMission";
import TitleTemplate from "../components/Template/Title.Template";
import AboutFooter from "../components/AboutPage/AboutFooter";
import ScrollToTopTemplate from "../components/Template/ScrollToTop.Template";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <ToggleandNavbar />
      <AboutHero />
      <TitleTemplate
        Maintitle="យើងមានបេសកម្ម"
        SubTitle="ការផ្តល់ជូននូវការអប់រំកម្រិតអន្តរជាតិ"
      />
      <AboutMission />
      <TitleTemplate
        Maintitle="ចក្ខុវិស័យរបស់ពួកយើង"
        SubTitle="ចំពោះការសិក្សាគឺសមស្របទៅតាមក្រសួងអប់រំ"
        bgColor="#2E236C"
        textColor="#fff"
      />
      <AboutFooter />
      <ScrollToTopTemplate />
      <Footer />
    </div>
  );
};

export default About;
