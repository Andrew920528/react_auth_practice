import React, { useState } from "react";
import PromptCard from "../PromptCard";
import Building from "../../models/Building";
import { RxCrossCircled } from "react-icons/rx";
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
        width={40}
        height={60}
        padding={"10px"}
        promptCardData={openInsert}
      >
        <div className="cardContent">
          <div className="topRow">
            <h2>Insert Building</h2>
            <RxCrossCircled
              className="closeBtn"
              onClick={() => {
                setId("");
                setBuildingDesc("");
                setFloor("");
                setRoomId("");
                setRoomDesc("");
                setOpenInsert(null);
              }}
            ></RxCrossCircled>
          </div>
          <div>
            <hr />
          </div>
          <div className="mainWindow updateWindow">
            <div className="prompt-content building-prompt-content">
              <div className="prompt-input">
                <input
                  type="text"
                  onChange={(event) => setId(event.target.value)}
                  value={id}
                  placeholder="Building Id"
                />
              </div>
              <div className="prompt-input">
                <input
                  type="text"
                  onChange={(event) => setBuildingDesc(event.target.value)}
                  value={buildingDesc}
                  placeholder="Building Description"
                />
              </div>
              <div className="prompt-input">
                <input
                  type="text"
                  onChange={(event) => setFloor(event.target.value)}
                  value={floor}
                  placeholder="Floor"
                />
              </div>
              <div className="prompt-input">
                <input
                  type="text"
                  onChange={(event) => setRoomId(event.target.value)}
                  value={roomId}
                  placeholder="Room Id"
                />
              </div>
              <div className="prompt-input">
                <input
                  type="text"
                  onChange={(event) => setRoomDesc(event.target.value)}
                  value={roomDesc}
                  placeholder="Room Description"
                />
              </div>
            </div>

            <div className="submit building-submit">
              <button className="btn" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </PromptCard>
    </>
  );
};

export default InsertCard;
