import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BiTable } from "react-icons/bi";
import Header from "./Header";
import ConfigRow from "./configTable/ConfigRow";
import "../style/tablePage.scss";
import UpdateCard from "./userTable/UpdateCard";
import DeleteCard from "./configTable/DeleteCard";
const UserTablePage = ({ users, setUsers, setSignedIn }) => {
  const [openDelete, setOpenDelete] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(null);
  const navigate = useNavigate();
  const headerEntries = [
    "Id",
    "Username",
    "First Name",
    "Last Name",
    "Age",
    "Last Modified",
  ];
  function logOut() {
    setSignedIn(false);
    navigate("/sign-in");
    return;
  }
  return (
    <div className="content">
      <div className="options">
        <h1>User Table</h1>
        <div className="rightBtns">
          <div
            className="btn rectBtn"
            onClick={() => navigate("/config-table")}
          >
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
        <table className="t">
          <Header entries={headerEntries} />
          <tbody>
            {users.map((element, index) => {
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
        onClick={() => navigate("/sign-up")}
      >
        <IoIosAddCircleOutline className="icon"></IoIosAddCircleOutline>
        <div>Add new user</div>
      </div>

      <UpdateCard
        openUpdate={openUpdate}
        setOpenUpdate={setOpenUpdate}
        tableData={users}
        setTableData={setUsers}
      />
      <DeleteCard
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        tableData={users}
        setTableData={setUsers}
      />
    </div>
  );
};

export default UserTablePage;
