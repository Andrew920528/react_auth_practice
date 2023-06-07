import { React, useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./verticalNavBar.scss";
import { GoDashboard } from "react-icons/go";
import { AiOutlineTable } from "react-icons/ai";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
const VerticalNavBar = ({ vbData }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div
        className={`navbarBackground ${sidebar ? "expanded" : "closed"}`}
      ></div>
      <div
        className={`nav-menu ${sidebar ? "expanded" : "closed"}`}
        style={sidebar ? { width: "221px" } : { width: "70px" }}
      >
        <div className="nav-menu-items">
          {vbData.map((item, index) => {
            return (
              <div key={"navItem" + index} className="itemWrapper">
                <div className={item.cName}>
                  <div className="nav-icon">{item.icon}</div>
                  <span>{item.title}</span>
                </div>
              </div>
            );
          })}

          <div className="itemWrapper toggle">
            <div
              className="navbar-toggle nav-item"
              onClick={toggleSidebar}
              style={sidebar ? { width: "221px" } : { width: "70px" }}
            >
              {sidebar ? (
                <HiOutlineArrowLeftCircle className="nav-icon" />
              ) : (
                <RxHamburgerMenu className="nav-icon" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalNavBar;
