import React from "react";
import ToggleandNavbar from "../components/HorizontalNav/ToggleandNavbar";
import Login from "../components/LoginComponent/Login";
import Footer from "./Footer";

const LoginPage = () => {
  return (
    <div>
      <ToggleandNavbar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
