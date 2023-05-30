import React from "react";

const DisplayTable = ({ headers, data }) => {
  return (
    <table className="displayTable">
      <thead>
        <tr>
          {headers.map((element, index) => {
            return <th key={index + "headerEntry"}>{element}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((element, index) => {
          return (
            <tr key={index + "dataEntry"}>
              {Object.keys(element).map((key, i) => (
                <td key={"data" + i}>{element[key]}</td>
              ))}
            </tr>
          );
        })}
        <tr>
          {headers.map((ele, i) => (
            <td key={"lastRowFiller" + i}></td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
