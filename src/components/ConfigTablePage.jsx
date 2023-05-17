import React, { useState } from "react";
import Header from "./Header";
import ConfigRow from "./configTable/ConfigRow";
import Building from "../models/Building";
import InsertCard from "./configTable/InsertCard";
import UpdateCard from "./configTable/UpdateCard";
import DeleteCard from "./configTable/DeleteCard";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BiTable } from "react-icons/bi";

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
        <h1>Config Table</h1>
        <div className="rightBtns">
          <div className="btn rectBtn" onClick={() => navigate("/user-table")}>
            <BiTable className="icon" />
            <div>User Table</div>
          </div>
          <div className="btn rectBtn" onClick={() => logOut()}>
            <RiLogoutCircleRLine className="icon" />
            <div>Log Out</div>
          </div>
        </div>
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
      <div
        className="btn rectBtn insertBtn"
        onClick={() => setOpenInsert(true)}
      >
        <IoIosAddCircleOutline className="icon"></IoIosAddCircleOutline>
        <div>Add new entry</div>
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
