import React from "react";

const Header = ({ entries }) => {
  return (
    <thead>
      <tr>
        {Object.keys(entries).map((element, index) => {
          return <th key={index + "headerEntry"}>{entries[element]}</th>;
        })}
      </tr>
    </thead>
  );
};

export default Header;
