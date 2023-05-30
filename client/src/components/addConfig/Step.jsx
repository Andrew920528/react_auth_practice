import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
const Step = ({ currStep, index, title, result, children }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef();
  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight);
  }, []);
  return (
    <div className="stepWrapper">
      <div className="progressWrapper">
        <div className="progressIndicator">
          {currStep > index ? <FaCheck /> : index + 1}
        </div>
        <div
          className="progressLine"
          style={
            currStep >= index
              ? { backgroundPosition: "top" }
              : { backgroundPosition: "bottom" }
          }
        ></div>
      </div>
      <div className="step">
        <div className="stepHeader">
          <div className="stepTitle">{title}</div>
          <div className="stepResult">{currStep != index ? result : ""}</div>
        </div>
        <div
          className={"stepContent"}
          ref={contentRef}
          style={
            currStep === index
              ? { height: contentHeight + "px" }
              : { height: "0px" }
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Step;
