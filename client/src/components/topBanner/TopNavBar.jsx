import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";

import { BsFillPersonFill } from "react-icons/bs";

const TopNavBar = ({ shadow }) => {
  const dummyBuildings = ["King Center", "Taipei Office", "Building 3"];
  const dummyAccount = { name: "admin71b072" };
  const [building, setBuilding] = useState(dummyBuildings[0]);

  return (
    <div className={`veryTop ${shadow && "shadow"}`}>
      <div className="smallScreenNavBar">
        <RxHamburgerMenu />
      </div>
      <div className="buildingDropdown">
        <Dropdown
          options={dummyBuildings}
          placeHolder="Select Building"
          selected={building}
          setSelected={setBuilding}
          styleContext={"topBannerDropdown"}
        ></Dropdown>
      </div>
      <div className="accountBlock">
        <div className="account">
          <BsFillPersonFill size={"80%"} color="gray" />
        </div>
        <div className="accountName">{dummyAccount.name}</div>
        <div className="accountTriangle"></div>
      </div>
    </div>
  );
};

export default TopNavBar;
