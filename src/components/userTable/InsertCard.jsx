import React, { useState } from "react";
import PromptCard from "../PromptCard";
import Building from "../../models/Building";

const InsertCard = ({ openInsert, setOpenInsert, tableData, setTableData }) => {
  const [id, setId] = useState("");
  const [buildingDesc, setBuildingDesc] = useState("");
  const [floor, setFloor] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomDesc, setRoomDesc] = useState("");

  function submit() {
    let newTableData = [...tableData];
    let newB = new Building(id, buildingDesc, floor, roomId, roomDesc);
    newTableData.push(newB);
    setTableData(newTableData);
    alert("Successfully inserted");

    setId("");
    setBuildingDesc("");
    setFloor("");
    setRoomId("");
    setRoomDesc("");

    setOpenInsert(null);
  }
  return (
    <>
      <PromptCard
        id={"insert-card"}
        width={60}
        height={80}
        padding={"10px"}
        promptCardData={openInsert}
      >
        <div className="promp-head">
          <div className="prompt-title"> Insert Data</div>
          <div className="prompt-btn">
            <button
              onClick={() => {
                setId("");
                setBuildingDesc("");
                setFloor("");
                setRoomId("");
                setRoomDesc("");
                setOpenInsert(null);
              }}
            >
              Close
            </button>
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

export default InsertCard;
