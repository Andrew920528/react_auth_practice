import React, { useState, useEffect } from "react";
import PromptCard from "../PromptCard";

const UpdateCard = ({ openUpdate, setOpenUpdate, tableData, setTableData }) => {
  const [id, setId] = useState("");
  const [buildingDesc, setBuildingDesc] = useState("");
  const [roomId, setRoomId] = useState("");
  const [floor, setFloor] = useState("");
  const [roomDesc, setRoomDesc] = useState("");
  function submit() {
    let newTableData = [...tableData];
    newTableData[openUpdate].id = id;
    newTableData[openUpdate].buildingDesc = buildingDesc;
    newTableData[openUpdate].roomId = roomId;
    newTableData[openUpdate].floor = floor;
    newTableData[openUpdate].roomDesc = roomDesc;

    setTableData(newTableData);
    alert("Successfully updated!");
    setOpenUpdate(null);
  }
  useEffect(() => {
    if (openUpdate != null && openUpdate > 0 && openUpdate < tableData.length) {
      setId(tableData[openUpdate].id);
      setBuildingDesc(tableData[openUpdate].buildingDesc);
      setRoomId(tableData[openUpdate].roomId);
      setFloor(tableData[openUpdate].floor);
      setRoomDesc(tableData[openUpdate].roomDesc);
    } else {
      setId("");
      setBuildingDesc("");
      setRoomId("");
      setFloor("");
      setRoomDesc("");
    }
  }, [openUpdate]);
  return (
    <>
      <PromptCard
        id={"update-card"}
        width={60}
        height={80}
        padding={"10px"}
        promptCardData={
          openUpdate != null && openUpdate >= 0 && openUpdate < tableData.length
        }
      >
        <div className="promp-head">
          <div className="prompt-title"> Update Data</div>
          <div className="prompt-btn">
            <button onClick={() => setOpenUpdate(null)}> Close </button>
          </div>
        </div>

        <div className="prompt-content">
          <div className="prompt-input">
            <label htmlFor=""> Building Id </label>
            <input
              type="text"
              onChange={(event) => setId(event.target.value)}
              value={id}
            />
          </div>
          <div className="prompt-input">
            <label htmlFor=""> Building Description </label>
            <input
              type="text"
              onChange={(event) => setBuildingDesc(event.target.value)}
              value={buildingDesc}
            />
          </div>
          <div className="prompt-input">
            <label htmlFor=""> Floor </label>
            <input
              type="text"
              onChange={(event) => setFloor(event.target.value)}
              value={floor}
            />
          </div>
          <div className="prompt-input">
            <label htmlFor=""> Room Id </label>
            <input
              type="text"
              onChange={(event) => setRoomId(event.target.value)}
              value={roomId}
            />
          </div>
          <div className="prompt-input">
            <label htmlFor=""> Room Description </label>
            <input
              type="text"
              onChange={(event) => setRoomDesc(event.target.value)}
              value={roomDesc}
            />
          </div>
        </div>
        <div className="submit">
          <button onClick={submit}> Submit </button>
        </div>
      </PromptCard>
    </>
  );
};

export default UpdateCard;
