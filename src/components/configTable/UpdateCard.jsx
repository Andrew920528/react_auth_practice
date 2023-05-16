import React, { useState, useEffect } from "react";
import PromptCard from "../PromptCard";

const UpdateCard = ({ openUpdate, setOpenUpdate, tableData, setTableData }) => {
  const [id, setId] = useState("");
  const [buildingDesc, setBuildingDesc] = useState("");
  const [floor, setFloor] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomDesc, setRoomDesc] = useState("");
  function submit() {
    let newTableData = [...tableData];
    newTableData[newTableData.indexOf(openUpdate)].name = name;
    newTableData[newTableData.indexOf(openUpdate)].id = id;
    newTableData[newTableData.indexOf(openUpdate)].age = age;
    setTableData(newTableData);
    alert("Successfully updated!");
    setOpenUpdate(null);
  }
  useEffect(() => {
    if (openUpdate) {
      setName(openUpdate.name);
      setId(openUpdate.id);
      setAge(openUpdate.age);
    } else {
      setName("");
      setId("");
      setAge("");
    }
  }, [openUpdate]);
  return (
    <>
      <PromptCard
        id={"update-card"}
        width={60}
        height={80}
        padding={"10px"}
        promptCardData={openUpdate}
      >
        <div className="promp-head">
          <div className="prompt-title"> Update Data</div>
          <div className="prompt-btn">
            <button onClick={() => setOpenUpdate(null)}> Close </button>
          </div>
        </div>

        <div className="prompt-content">
          <div className="prompt-input">
            <label htmlFor=""> Name </label>
            <input
              type="text"
              ref={inputName}
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>

          <div className="prompt-input">
            <label htmlFor=""> Id </label>
            <input
              type="text"
              ref={inputId}
              onChange={(event) => setId(event.target.value)}
              value={id}
            />
          </div>

          <div className="prompt-input">
            <label htmlFor=""> Age </label>
            <input
              type="text"
              ref={inputAge}
              onChange={(event) => setAge(event.target.value)}
              value={age}
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
