import React, { useEffect } from "react";

const PopUpWindow = ({ id, width, height, padding, switchOn, children }) => {
  return (
    <div
      className="prompt-card-fit-div"
      style={{
        opacity: switchOn ? "1" : "0",
        zIndex: switchOn ? "10" : "-1",
      }}
    >
      <div
        className="prompt-card"
        id={id}
        style={{
          width: `${width}vw`,
          height: `${height}vh`,
          padding: padding,
          opacity: switchOn ? "1" : "0",
          overflow: switchOn ? "auto" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PopUpWindow;
