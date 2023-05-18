import { RxCrossCircled, RxCross2 } from "react-icons/rx";
import React, { useState } from "react";
import PromptCard from "./PromptCard";

const ChangePwdPopUp = ({
  users,
  setUsers,
  openChangePwd,
  setOpenChangePwd,
}) => {
  const [userInd, setUserInd] = useState(-1);
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [usn, setUsn] = useState("");
  // returns index found, -1 if not found
  function checkUserName() {
    for (let ind in users) {
      if (usn == users[ind].username) {
        setUserInd(ind);
        return;
      }
    }

    alert("username not found!");
    setUserInd(-1);
  }

  function changeNewPassword() {
    if (newPwd != confirmPwd) {
      alert("Password must match!");
      return;
    }
    if (!newPwd || !confirmPwd) {
      alert("invalid password");
      return;
    }
    let temp = [...users];
    temp[userInd].password = newPwd;
    setUsers(temp);

    alert("You're all set! Please log in with new password");
    setOpenChangePwd(false);
    setUserInd(-1);
    setNewPwd("");
    setConfirmPwd("");
    setUsn("");
  }
  return (
    <>
      <PromptCard
        id={"change-pwd-card"}
        width={40}
        height={userInd == -1 ? 40 : 50}
        padding={"10px"}
        promptCardData={openChangePwd}
      >
        <div className="cardContent">
          <div className="topRow">
            <h2>Reset Password</h2>
            <RxCrossCircled
              className="closeBtn"
              onClick={() => {
                setOpenChangePwd(false);
                setOpenChangePwd(false);
                setUserInd(-1);
                setNewPwd("");
                setConfirmPwd("");
                setUsn("");
              }}
            ></RxCrossCircled>
          </div>
          <div>
            <hr />
          </div>

          <div className="mainWindow">
            {userInd == -1 ? (
              <div>
                <p>Please enter your username</p>
                <input
                  className="inputField"
                  type="text"
                  onChange={(e) => {
                    setUsn(e.target.value);
                  }}
                  placeholder="Username"
                  value={usn}
                />
                <button className="btn" onClick={() => checkUserName()}>
                  Next
                </button>
              </div>
            ) : (
              <div>
                <p>Username Found! Please enter new password</p>
                <input
                  type="password"
                  onChange={(e) => {
                    setNewPwd(e.target.value);
                  }}
                  placeholder="New Password"
                  value={newPwd}
                  className="inputField"
                />

                <input
                  type="password"
                  onChange={(e) => {
                    setConfirmPwd(e.target.value);
                  }}
                  placeholder="Re-enter New Password"
                  value={confirmPwd}
                  className="inputField"
                />
                <button className="btn" onClick={() => changeNewPassword()}>
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
      </PromptCard>
    </>
  );
};

export default ChangePwdPopUp;
