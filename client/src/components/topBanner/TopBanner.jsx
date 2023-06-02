import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import {
  BsFillPeopleFill,
  BsExclamationTriangleFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdThumbUp, MdThumbDown, MdAccountCircle } from "react-icons/md";
import { HiExclamationTriangle } from "react-icons/hi2";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
function Summary(mostUse, highestRating, highestRatingCount, recentComplaints) {
  this.mostUse = mostUse;
  this.highestRating = highestRating;
  this.highestRatingCount = highestRatingCount;
  this.recentComplaints = recentComplaints;
}

const TopBanner = () => {
  const dummyBuildings = ["King Center", "Taipei Office", "Building 3"];
  const dummySummary = new Summary("Male Toilet 1", "Male Toilet 2", 20, 14);
  const dummyAccount = { name: "admin71b072" };
  const [building, setBuilding] = useState(dummyBuildings[0]);

  const [summary, setSummary] = useState(dummySummary);
  return (
    <div className="topBanner">
      <div className="title">{building}</div>
      <div className="summaryWrapper">
        <div className="summaryHeader">Summary</div>
        <div className="summaryRow">
          <SummaryItem
            title={"Most Usage Toilet"}
            data={summary.mostUse}
            icon={<BsFillPeopleFill />}
          />
          <SummaryItem
            title={"Highest Rating Toilet"}
            data={`${summary.highestRating} | ${summary.highestRatingCount} people`}
            icon={<MdThumbUp />}
          />
          <SummaryItem
            title={"Recent Complaints"}
            data={`${summary.recentComplaints} complaints | `}
            icon={<HiExclamationTriangle />}
            inspect={true}
          />
        </div>
      </div>
    </div>
  );
};

const SummaryItem = ({ title, data, icon, inspect }) => {
  return (
    <div className="summaryItem">
      <div className="icon">
        <IconContext.Provider value={{ size: "100%" }}>
          {icon}
        </IconContext.Provider>
      </div>
      <div>
        <div className="sumTitle">{title}</div>
        <div className="sumData">
          {inspect ? (
            <>
              {data}
              <a className="inspect">inspect</a>
            </>
          ) : (
            data
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
