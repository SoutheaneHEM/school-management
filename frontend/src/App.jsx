import { useState } from "react";

import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import News from "./Pages/News";
import Connect from "./Pages/Connect";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/connect" element={<Connect />} /> */}
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
