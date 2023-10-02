import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeOutlined from "./HomeOutlined";
import MainPage from "./MainPage";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomeOutlined />} />
      </Routes>
    </div>
  );
}

export default App;
