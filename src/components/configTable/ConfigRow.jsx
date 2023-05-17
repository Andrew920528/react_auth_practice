import React from "react";

const ConfigRow = ({ rowData, setOpenUpdate, setOpenDelete, index }) => {
  return (
    rowData && (
      <tr>
        {Object.keys(rowData).map((data, ind) => {
          return <td key={ind + "dataEntry"}>{rowData[data]}</td>;
        })}
        <td>
          <div className="btn">
            <button
              onClick={() => {
                setOpenUpdate(index);
              }}
            >
              Update
            </button>
          </div>
        </td>
        <td>
          <div className="btn">
            <button
              onClick={() => {
                setOpenDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    )
  );
};

export default ConfigRow;
