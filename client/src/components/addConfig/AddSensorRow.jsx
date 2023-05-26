import React, { useEffect, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit, AiTwotoneSave } from "react-icons/ai";
import { format, set } from "date-fns";
const AddSensorRow = ({
  sensors,
  setSensors,
  rowData,

  setOpenDelete,
  index,
}) => {
  // id, name, type fields are initialize as the inserted value
  const [senId, setSenId] = useState(sensors[index].id);
  const [senName, setSenName] = useState(sensors[index].name);
  const [senType, setSenType] = useState(sensors[index].type);
  const [openUpdate, setOpenUpdate] = useState(true);

  const idRef = useRef();
  // whenever field value is updated, update the actual list
  useEffect(() => {
    let temp = [...sensors];
    temp[index].id = senId;
    temp[index].name = senName;
    temp[index].type = senType;
    setSensors(temp);
  }, [senId, senName, senType]);

  useEffect(() => {
    if (index == sensors.length - 1) return;
    setOpenUpdate(false);
  }, [sensors.length]);

  useEffect(() => {
    if (openUpdate) idRef.current.focus();
  }, [openUpdate]);

  return (
    rowData && (
      <tr
        style={
          openUpdate
            ? { backgroundColor: "#F0F0F0" }
            : { backgroundColor: "white" }
        }
      >
        <td>
          <input
            ref={idRef}
            type="text"
            value={senId}
            onChange={(e) => setSenId(e.target.value)}
            disabled={!openUpdate}
          />
        </td>
        <td>
          <input
            type="text"
            value={senName}
            onChange={(e) => setSenName(e.target.value)}
            disabled={!openUpdate}
          />
        </td>
        <td>
          <input
            type="text"
            value={senType}
            onChange={(e) => setSenType(e.target.value)}
            disabled={!openUpdate}
          />
        </td>
        <td>
          <div>
            {!openUpdate ? (
              <AiFillEdit
                className="btnInTable"
                onClick={() => {
                  setOpenUpdate(true);
                }}
              ></AiFillEdit>
            ) : (
              <AiTwotoneSave
                className="btnInTable"
                onClick={() => setOpenUpdate(false)}
              />
            )}
          </div>
        </td>
        <td>
          <div className="btn">
            <MdDeleteForever
              className="btnInTable"
              onClick={() => {
                let newTableData = [...sensors];
                newTableData.splice(index, 1);
                setSensors(newTableData);
              }}
            ></MdDeleteForever>
          </div>
        </td>
      </tr>
    )
  );
};

export default AddSensorRow;
