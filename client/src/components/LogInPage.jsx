import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChangePwdPopUp from "./ChangePwdPopUp";

const LogInPage = ({ users, setUsers, setSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openChangePwd, setOpenChangePwd] = useState(false);
  const navigate = useNavigate();

  function logIn() {
    // invalid username or password
    if (username.trim() == "" || password.trim() == "") {
      alert("invalid username or password");
      return;
    }

    // check username and password matches

    for (let user of users) {
      if (user.password == password && user.username == username) {
        // log in successful!
        alert("Log in successful!");
        setSignedIn(true);
        navigate("/config-table");
        return;
      }
    }

    alert("username or password not found");
  }
  function changePassword() {
    console.log("forgot password");
    for (let user of users) {
      for (let element in user) {
        console.log(element + ": " + user[element]);
      }
    }
    setOpenChangePwd(true);
  }

  return (
    <div className="logInPage">
      <h1>Welcom Back</h1>
      <div className="cardWrap">
        <h2 className="title">Welcome Back</h2>
        <div className="logInSection">
          <input
            className="inputField"
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />

          <input
            className="inputField"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <button
            className="logInBtn"
            onClick={() => {
              logIn();
            }}
          >
            Log In
          </button>
          <div>
            <a
              className="forgotPwd"
              href=""
              onClick={(e) => {
                e.preventDefault();
                changePassword();
              }}
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div className="divider">
          <hr />
        </div>

        <button
          className="createAccountBtn"
          onClick={() => navigate("/sign-up")}
        >
          Create New Account
        </button>
      </div>

      <ChangePwdPopUp
        users={users}
        setUsers={setUsers}
        openChangePwd={openChangePwd}
        setOpenChangePwd={setOpenChangePwd}
      ></ChangePwdPopUp>
    </div>
  );
};

export default LogInPage;
