import React from "react";
import { useState } from "react";
import ToggleandNavbar from "../components/HorizontalNav/ToggleandNavbar";
import Hero from "../components/Hero/Hero";
import Footer from "./Footer";
const Home = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <ToggleandNavbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
