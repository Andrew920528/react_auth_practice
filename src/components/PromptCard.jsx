import React, { useEffect } from "react";

const PromptCard = ({
  id,
  width,
  height,
  padding,
  promptCardData,
  children,
}) => {
  useEffect(() => {
    if (promptCardData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [promptCardData]);
  return (
    promptCardData && (
      <div className="prompt-card-fit-div">
        <div
          className="prompt-card"
          id={id}
          style={{
            width: `${width}vw`,
            height: `${height}vh`,
            padding: padding,
          }}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default PromptCard;
