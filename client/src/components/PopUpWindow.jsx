import React, { useEffect } from "react";

const PopUpWindow = ({ id, width, height, minWidth, switchOn, children }) => {
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
          minWidth: `${minWidth}px`,
          opacity: switchOn ? "1" : "0",
          overflow: switchOn ? "hidden" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PopUpWindow;
