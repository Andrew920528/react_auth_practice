import React from "react";
import "./Buttons.scss";
function SmallButton() {
  return <button>Small</button>;
}

function BigButton() {
  return <button style={{ padding: "20px 40px" }}>Big</button>;
}

function RectButton({ text, onClick }) {
  return (
    <div className="rectButton rectButtonWithIcon" onClick={() => onClick()}>
      <div>{text}</div>
    </div>
  );
}

function RectButtonWithIcon({ icon, text, onClick }) {
  return (
    <div className="rectButton rectButtonWithIcon" onClick={() => onClick()}>
      {icon}
      <div>{text}</div>
    </div>
  );
}

export { SmallButton, BigButton, RectButtonWithIcon, RectButton };
