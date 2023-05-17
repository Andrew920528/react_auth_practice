import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const ConfigRow = ({ rowData, setOpenUpdate, setOpenDelete, index }) => {
  return (
    rowData && (
      <tr>
        {Object.keys(rowData).map((data, ind) => {
          if (data == "password") return;
          return <td key={ind + "dataEntry"}>{rowData[data]}</td>;
        })}
        <td>
          <div>
            <AiFillEdit
              className="btnInTable"
              onClick={() => setOpenUpdate(index)}
            ></AiFillEdit>
          </div>
        </td>
        <td>
          <div className="btn">
            <MdDeleteForever
              className="btnInTable"
              onClick={() => setOpenDelete(index)}
            ></MdDeleteForever>
          </div>
        </td>
      </tr>
    )
  );
};

export default ConfigRow;
