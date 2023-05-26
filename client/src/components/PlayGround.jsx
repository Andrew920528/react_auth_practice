import React from "react";
import VerticalNavBar from "./verticalNavBar/VerticalNavBar";
import { SidebarData } from "./verticalNavBar/navBarData";
import AddConfig from "./addConfig/AddConfig";
const PlayGround = () => {
  return (
    <div className="playground">
      <div>
        {" "}
        <VerticalNavBar vbData={SidebarData} />
      </div>

      <div className="configContainer">
        <AddConfig />
      </div>
    </div>
  );
};

export default PlayGround;
