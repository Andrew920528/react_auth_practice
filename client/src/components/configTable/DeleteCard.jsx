import React, { useState, useEffect } from "react";
import PromptCard from "../PromptCard";
import { RxCrossCircled } from "react-icons/rx";
import { deleteBuilding } from "../../services/HttpService";
import Building from "../../models/Building";
import { useDispatch, useSelector } from "react-redux";
import {
  configListSelector,
  deleteConfigList,
} from "../../features/slices/configListSlice";
const DeleteCard = ({ openDelete, setOpenDelete, tableData, setTableData }) => {
  const dispatch = useDispatch();
  const configList = useSelector(configListSelector);

  function deleteEntry(ind) {
    console.log("submit delete: " + ind);

    if (configList[0].floor) {
      deleteBuilding(configList[ind]._id);
    }

    dispatch(deleteConfigList({ index: ind }));
    // for user table
    let newTableData = [...tableData];
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
        promptCardData={openDelete != null && openDelete >= 0}
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
