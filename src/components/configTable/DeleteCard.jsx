import React, { useState, useEffect } from "react";
import PromptCard from "../PromptCard";

const DeleteCard = ({ openDelete, setOpenDelete, tableData, setTableData }) => {
  function deleteEntry(ind) {
    let newTableData = [...tableData];

    newTableData.splice(ind, 1);
    setTableData(newTableData);
    alert("Successfully deleted!");
  }

  return (
    <>
      <PromptCard
        id={"delete-card"}
        width={60}
        height={80}
        padding={"10px"}
        promptCardData={
          openDelete != null && openDelete >= 0 && openDelete < tableData.length
        }
      >
        <div className="delete-options">
          <div className="prompt-title"> Delete Data? </div>
          <div className="prompt-btn">
            <button onClick={() => setOpenDelete(null)}> Cancel </button>
          </div>

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
