import React from "react";
import VerticalNavBar from "./verticalNavBar/VerticalNavBar";
import { SidebarData } from "./verticalNavBar/navBarData";
import AddConfig from "./addConfig/AddConfig";
import PeopleFlowChart from "./peopleFlowChart/PeopleFlowChart";
import CurrentEvent from "./table/CurrentEvent";
import RoomInfo from "./table/RoomInfo";
const PlayGround = () => {
  return (
    <div className="playground">
      <div>
        <VerticalNavBar vbData={SidebarData} />
      </div>

      {/* <div className="configContainer">
        <AddConfig />
      </div>

      <PeopleFlowChart></PeopleFlowChart> */}

      {/* <div style={{ width: "60%" }}>
        <CurrentEvent />
      </div> */}

      <div style={{ width: "60%" }}>
        <RoomInfo />
      </div>
    </div>
  );
};

export default PlayGround;
