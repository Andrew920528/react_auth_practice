import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogInPage = ({ users, setSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
  return (
    <div className="logInPage">
      <h1 className="title">Hello</h1>
      <div className="cardWrap">
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
            type="text"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <button
            className="logInBtn"
            onClick={() => {
              console.log("username: " + username);
              console.log("password: " + password);
              logIn();
            }}
          >
            {" "}
            Log In
          </button>
          <div>
            <a className="forgotPwd" href="">
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
    </div>
  );
};

export default LogInPage;
