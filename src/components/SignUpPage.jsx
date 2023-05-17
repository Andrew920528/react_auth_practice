import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../models/User";

const SignUpPage = ({ users, setUsers, currID, setCurrID }) => {
  const [id, setId] = useState(-1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  }
  function signUp() {
    console.log(password);
    if (password != password2) {
      alert("password doesn't match!");
      return;
    }
    if (!firstName) {
      alert("first name is required");
      return;
    }
    if (!lastName) {
      alert("last name is required");
      return;
    }
    if (!age) {
      alert("age is required");
      return;
    }

    if (!isNumeric(age)) {
      alert("num must be number");
      return;
    }

    if (!password) {
      alert("password is required");
      return;
    }

    if (!password2) {
      alert("please re-enter password");
      return;
    }
    for (let user of users) {
      if (user.username == username) {
        alert("User name already exist!");
        return;
      }
    }
    let newUser = new User(
      currID,
      username,
      password,
      firstName,
      lastName,
      age,
      -99
    );
    setCurrID(currID + 1);
    console.log(newUser.id);
    let temp = [...users];
    temp.push(newUser);
    setUsers(temp);

    alert("Account created! Please log in");
    navigate("/sign-in");
  }

  return (
    <div className="signUpPage">
      <h1>Nexuni</h1>
      <div className="cardWrap">
        <h2 className="title">Create Account</h2>
        <div className="basicInfo">
          <input
            className="inputField"
            type="text"
            placeholder="First Name"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            value={firstName}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Last Name"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            value={lastName}
          />

          <input
            className="inputField age"
            type="text"
            placeholder="Age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
            value={age}
          />
        </div>
        <div className="logInSection">
          <input
            className="inputField"
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />

          <input
            className="inputField"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          <input
            className="inputField"
            type="password"
            placeholder="Re-enter Password"
            onChange={(event) => {
              setPassword2(event.target.value);
            }}
            value={password2}
          />

          <button
            className="logInBtn"
            onClick={() => {
              signUp();
            }}
          >
            Sign-up
          </button>
        </div>
        <div className="divider">
          <hr />
        </div>
        <div className="bot">
          <p className="question" href="">
            Already have an account?
          </p>

          <button
            className="createAccountBtn"
            onClick={() => navigate("/sign-in")}
          >
            Log-in with existing account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
