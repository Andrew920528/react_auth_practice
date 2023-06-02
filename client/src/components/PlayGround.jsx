import React, { useState } from "react";
import VerticalNavBar from "./verticalNavBar/VerticalNavBar";
import { SidebarData } from "./verticalNavBar/navBarData";
import AddConfig from "./addConfig/AddConfig";
import PeopleFlowChart from "./peopleFlowChart/PeopleFlowChart";
import CurrentEvent from "./table/CurrentEvent";
import RoomInfo from "./table/RoomInfo";
import TopBanner from "./topBanner/TopBanner";

import Dropdown from "./dropdown/Dropdown";

import { BsFillPersonFill } from "react-icons/bs";
import TopNavBar from "./topBanner/TopNavBar";

const PlayGround = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <div className="playground" style={{ width: "100vw", height: "100vh" }}>
      {/* <div
        style={{
          position: "fixed",
          backgroundColor: "red",
          width: "992px",
          height: "500px",
          borderRadius: "50px",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          backgroundColor: "yellow",
          width: "768px",
          height: "500px",
          borderRadius: "50px",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          backgroundColor: "green",
          width: "576px",
          height: "500px",
          borderRadius: "50px",
        }}
      ></div> */}
      <div>
        <VerticalNavBar vbData={SidebarData} />
      </div>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          width: "100%",
          overflowY: "auto",
        }}
        onScroll={handleScroll}
      >
        <TopNavBar shadow={scrollTop != 0}></TopNavBar>
        <div>
          <TopBanner></TopBanner>

          <div
            style={{ backgroundColor: "", height: "1000px", padding: "20px" }}
          >
            <PeopleFlowChart></PeopleFlowChart>
            <div style={{ width: "60%" }}>
              <CurrentEvent />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="configContainer">
        <AddConfig />
      </div> */}

      {/* <div style={{ width: "60%" }}>
        <RoomInfo />
      </div> */}
    </div>
  );
};

export default PlayGround;
