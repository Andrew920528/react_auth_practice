import React from "react";
import VerticalNavBar from "./verticalNavBar/VerticalNavBar";
import { SidebarData } from "./verticalNavBar/navBarData";
import AddConfig from "./addConfig/AddConfig";
import PeopleFlowChart from "./peopleFlowChart/PeopleFlowChart";
const PlayGround = () => {
  return (
    <div className="playground">
      <div>
        {" "}
        <VerticalNavBar vbData={SidebarData} />
      </div>

      {/* <div className="configContainer">
        <AddConfig />
      </div> */}

      <PeopleFlowChart></PeopleFlowChart>
    </div>
  );
};

export default PlayGround;
