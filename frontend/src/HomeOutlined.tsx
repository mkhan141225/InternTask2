import React from "react";



import Sidemenu from "./components/Sidemenu";
import Header from "./components/Header";
import HomeOutlineContent from "./components/HomeOutlineContent";

const HomeOutlined: React.FC = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F9FAFF",
          flex: 1,
          height: "100vh",
        }}
      >
        <Sidemenu />
        <div>
          <Header />
          <HomeOutlineContent />
        </div>
      </div>
    </div>
  );
};

export default HomeOutlined;
