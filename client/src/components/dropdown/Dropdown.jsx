import { React, useEffect, useState } from "react";
import "./Dropdown.scss";
const Dropdown = ({ setValue, forceClose }) => {
  // for dropdown
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (forceClose) setOpen(false);
  }, [forceClose]);
  const DropdownItem = ({ text }) => {
    return (
      <li
        className="dropdownItem"
        onClick={() => {
          setOpen(false);
          setSelected(text);
        }}
      >
        <a> {text} </a>
      </li>
    );
  };
  return (
    <div className="dropdownWrapper">
      <div
        className="dropdownTrigger"
        style={
          open
            ? {
                backgroundColor: "rgb(227, 255, 125)",
                fontSize: "170%",
              }
            : { backgroundColor: "white", fontSize: "100%" }
        }
        onClick={() => setOpen(!open)}
      >
        <div style={selected ? { color: "black" } : { color: "gray" }}>
          {selected ? selected : "Select Building"}
        </div>
        <div
          className="triangle"
          style={
            open
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(180deg)" }
          }
        ></div>
      </div>
      <div
        className={`dropdown-menu ${
          !forceClose && open ? "active" : "inactive"
        }`}
      >
        <ul>
          <DropdownItem text={"Option 1"}></DropdownItem>
          <DropdownItem text={"Option 2"}></DropdownItem>
          <DropdownItem text={"Option 3"}></DropdownItem>
          <DropdownItem text={"Option 4"}></DropdownItem>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
