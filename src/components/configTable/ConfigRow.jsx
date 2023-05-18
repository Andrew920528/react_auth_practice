import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { format } from "date-fns";
const ConfigRow = ({ rowData, setOpenUpdate, setOpenDelete, index }) => {
  return (
    rowData && (
      <tr>
        {Object.keys(rowData).map((data, ind) => {
          if (data == "password") return;
          if (data == "_id") return;
          if (data == "sensor_component_list") return;
          if (data == "device_ip") return;
          let display;
          if (data == "lastModified") {
            display = format(rowData[data], "hh:mm:ss - yyyy/MM/dd (EEE)");
          } else {
            display = rowData[data];
          }
          return <td key={ind + "dataEntry"}>{display}</td>;
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
