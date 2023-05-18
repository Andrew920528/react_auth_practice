import React, { useState, useEffect } from "react";
import PromptCard from "../PromptCard";
import { RxCrossCircled } from "react-icons/rx";
import { deleteBuilding } from "../../services/HttpService";
import Building from "../../models/Building";
const DeleteCard = ({ openDelete, setOpenDelete, tableData, setTableData }) => {
  function deleteEntry(ind) {
    let newTableData = [...tableData];

    if (tableData[0].floor) {
      deleteBuilding(tableData[ind]._id);
    }
    newTableData.splice(ind, 1);
    setTableData(newTableData);
    alert("Successfully deleted!");
  }

  return (
    <>
      <PromptCard
        id={"delete-card"}
        width={40}
        height={30}
        padding={"10px"}
        promptCardData={
          openDelete != null && openDelete >= 0 && openDelete < tableData.length
        }
      >
        <div className="cardContent delete">
          <div className="topRow">
            <h2>Delete Date?</h2>
            <RxCrossCircled
              className="closeBtn"
              onClick={() => {
                setOpenDelete(null);
              }}
            ></RxCrossCircled>
          </div>
          <div>
            <hr />
          </div>
          <p>Once deleted, the data could not be retrieved!</p>
          <button
            onClick={() => {
              deleteEntry(openDelete);
              setOpenDelete(null);
            }}
          >
            Confirm
          </button>
        </div>
      </PromptCard>
    </>
  );
};

export default DeleteCard;
