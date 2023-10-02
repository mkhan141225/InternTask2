import React from "react";
import './App.css';

import Sidemenu from './components/Sidemenu';

const MainPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidemenu />
      <div>
        <h1>This is main page.<span style={{display:"block"}}>Click on Home icon to navigate to the Home Screen.</span></h1>
      </div>
    </div>
  );
}

export default MainPage;
