import React from "react";
import ToggleandNavbar from "../components/HorizontalNav/ToggleandNavbar";
import Footer from "./Footer";
import ConnectCoomponent from "../components/Connect/ConnectCoomponent";

const Connect = () => {
  return (
    <div>
      <ToggleandNavbar />
      <ConnectCoomponent />
      <Footer />
    </div>
  );
};

export default Connect;
