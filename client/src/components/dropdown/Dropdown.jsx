import { React, useEffect, useState } from "react";
import "./Dropdown.scss";
const Dropdown = ({
  selected,
  setSelected,
  options,
  forceClose,
  placeHolder,
  styleContext,
}) => {
  // for dropdown
  const [open, setOpen] = useState(false);

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
    <div
      className={`dropdownWrapper ${styleContext} ${
        !forceClose && open ? "open" : "close"
      }`}
    >
      <div className={"dropdownTrigger"} onClick={() => setOpen(!open)}>
        <div className="display">{selected ? selected : placeHolder}</div>
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
          {options.map((value, ind) => (
            <DropdownItem key={"dropdown" + ind} text={value}></DropdownItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
