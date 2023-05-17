import React, { useState } from "react";
import Header from "./Header";
import ConfigRow from "./configTable/ConfigRow";
import Building from "../models/Building";
import InsertCard from "./configTable/InsertCard";
import UpdateCard from "./configTable/UpdateCard";
import DeleteCard from "./configTable/DeleteCard";
import { useNavigate } from "react-router-dom";
const ConfigTablePage = ({ setSignedIn }) => {
  const b1 = new Building(
    "SBT",
    "CBM Office",
    "Office",
    "SBT-B1-M01",
    "Office Female Room"
  );
  const b2 = new Building(
    "KingCenter",
    "KingCenter",
    "2",
    "KC-2F-M01",
    "2F Make Room 01"
  );
  const b3 = new Building(
    "SBT2",
    "CBM Office",
    "Office",
    "SBT-B1-M01",
    "Office Female Room"
  );
  const b4 = new Building(
    "KingCenter2",
    "KingCenter",
    "2",
    "KC-2F-M01",
    "2F Make Room 01"
  );

  const [configData, setConfigData] = useState([b1, b2, b3, b4]);

  const [openInsert, setOpenInsert] = useState(null);
  const [openDelete, setOpenDelete] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(null);
  const navigate = useNavigate();
  const headerEntries = [
    "Building Id",
    "Buidling Description",
    "Floor",
    "Room Id",
    "Room Description",
  ];
  function logOut() {
    setSignedIn(false);
    navigate("/sign-in");
    return;
  }
  return (
    <div className="content">
      <div className="options">
        <button onClick={() => navigate("/user-table")}>User Table</button>
        <button onClick={() => logOut()}>Log Out</button>
      </div>

      <div className="table">
        <table>
          <Header entries={headerEntries} />
          <tbody>
            {configData.map((element, index) => {
              return (
                <ConfigRow
                  key={index + "tableData"}
                  rowData={element}
                  index={index}
                  setOpenDelete={setOpenDelete}
                  setOpenUpdate={setOpenUpdate}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="btn">
        <button onClick={() => setOpenInsert(true)}> Insert</button>
      </div>
      <InsertCard
        openInsert={openInsert}
        setOpenInsert={setOpenInsert}
        tableData={configData}
        setTableData={setConfigData}
      />
      <UpdateCard
        openUpdate={openUpdate}
        setOpenUpdate={setOpenUpdate}
        tableData={configData}
        setTableData={setConfigData}
      />
      <DeleteCard
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        tableData={configData}
        setTableData={setConfigData}
      />
    </div>
  );
};

export default ConfigTablePage;
