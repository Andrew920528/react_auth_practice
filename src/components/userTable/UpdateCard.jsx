import React, { useState, useEffect } from "react";
import PromptCard from "../PromptCard";
import { RxCrossCircled } from "react-icons/rx";
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
    newTableData[openUpdate].lastModified = new Date();
    setTableData(newTableData);
    alert("Successfully updated!");
    setOpenUpdate(null);
  }
  useEffect(() => {
    if (
      openUpdate != null &&
      openUpdate >= 0 &&
      openUpdate < tableData.length
    ) {
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
        width={50}
        height={55}
        padding={"10px"}
        promptCardData={
          openUpdate != null && openUpdate >= 0 && openUpdate < tableData.length
        }
      >
        <div className="cardContent">
          <div className="topRow">
            <h2>Update Info</h2>
            <RxCrossCircled
              className="closeBtn"
              onClick={() => {
                setOpenUpdate(null);
              }}
            ></RxCrossCircled>
          </div>
          <div>
            <hr />
          </div>

          <div className="mainWindow updateWindow">
            <div className="prompt-input">
              <label htmlFor=""> Username </label>
              <input
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                placeholder="Username"
              />
            </div>
            <div className="basicInfo">
              <div className="prompt-input">
                <label htmlFor=""> First Name </label>
                <input
                  type="text"
                  onChange={(event) => setFirstName(event.target.value)}
                  value={firstName}
                  placeholder="First Name"
                />
              </div>
              <div className="prompt-input">
                <label htmlFor=""> Last Name </label>
                <input
                  type="text"
                  onChange={(event) => setLastName(event.target.value)}
                  value={lastName}
                  placeholder="Last Name"
                />
              </div>
              <div className="prompt-input age">
                <label htmlFor=""> Age </label>
                <input
                  type="text"
                  onChange={(event) => setAge(event.target.value)}
                  value={age}
                  placeholder="age"
                />
              </div>
            </div>

            <div className="submit">
              <button className="btn" onClick={submit}>
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      </PromptCard>
    </>
  );
};

export default UpdateCard;
