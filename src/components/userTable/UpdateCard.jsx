import React, { useState, useEffect } from "react";
import PromptCard from "../PromptCard";

const UpdateCard = ({ openUpdate, setOpenUpdate, tableData, setTableData }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  function submit() {
    let newTableData = [...tableData];

    newTableData[openUpdate].username = username;
    newTableData[openUpdate].firstName = firstName;
    newTableData[openUpdate].lastName = lastName;
    newTableData[openUpdate].age = age;

    setTableData(newTableData);
    alert("Successfully updated!");
    setOpenUpdate(null);
  }
  useEffect(() => {
    if (openUpdate != null && openUpdate > 0 && openUpdate < tableData.length) {
      setUsername(tableData[openUpdate].username);
      setFirstName(tableData[openUpdate].firstName);
      setLastName(tableData[openUpdate].lastName);
      setAge(tableData[openUpdate].age);
    } else {
      setUsername("");
      setFirstName("");
      setLastName("");
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
          <div className="prompt-input"></div>
          <div className="prompt-input">
            <label htmlFor=""> Username </label>
            <input
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>
          <div className="prompt-input">
            <label htmlFor=""> First Name </label>
            <input
              type="text"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </div>
          <div className="prompt-input">
            <label htmlFor=""> Last Name </label>
            <input
              type="text"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </div>
          <div className="prompt-input">
            <label htmlFor=""> Age </label>
            <input
              type="text"
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
