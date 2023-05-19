import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./style/loginCard.scss";
import "./style/signUpPage.scss";
import "./style/promptCard.scss";
import "./style/tablePage.scss";
import "./style/sensor.scss";
import LogInPage from "./components/LogInPage";
import User from "./models/User";
import UserTablePage from "./components/UserTablePage";
import SignUpPage from "./components/SignUpPage";
import ConfigTablePage from "./components/ConfigTablePage";
import EventSourceTest from "./components/EventSourceTest";
function App() {
  const testUser = new User(0, "a", "a", "Bro", "Him", 30, new Date());
  const user1 = new User(
    1,
    "andrew001",
    "andrewPwd",
    "Andrew",
    "Hsu",
    19,
    new Date()
  );
  const [currID, setCurrID] = useState(1);
  const [users, setUsers] = useState([testUser, user1]);
  const [signedIn, setSignedIn] = useState(false);

  if (!signedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="event-source-test" element={<EventSourceTest />} />
          <Route
            path="sign-up"
            element={
              <SignUpPage
                users={users}
                setUsers={setUsers}
                currID={currID}
                setCurrID={setCurrID}
              ></SignUpPage>
            }
          />
          <Route
            path="*"
            element={
              <LogInPage
                users={users}
                setSignedIn={setSignedIn}
                setUsers={setUsers}
                signedIn={signedIn}
              ></LogInPage>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="sign-up"
          element={
            <SignUpPage
              users={users}
              setUsers={setUsers}
              currID={currID}
              setCurrID={setCurrID}
              signedIn={signedIn}
            ></SignUpPage>
          }
        />
        <Route
          path="/config-table"
          element={
            <ConfigTablePage setSignedIn={setSignedIn}></ConfigTablePage>
          }
        />
        <Route
          path="/user-table"
          element={
            <UserTablePage
              users={users}
              setSignedIn={setSignedIn}
              setUsers={setUsers}
            ></UserTablePage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
