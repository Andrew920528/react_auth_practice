import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./style/loginCard.scss";
import "./style/signUpPage.scss";
import LogInPage from "./components/LogInPage";
import User from "./models/User";
import UserTablePage from "./components/UserTablePage";
import SignUpPage from "./components/SignUpPage";
import ConfigTablePage from "./components/ConfigTablePage";
function App() {
  const testUser = new User(0, "a", "a", "Bro", "Him", 30, -99);
  const user1 = new User(1, "andrew001", "andrewPwd", "Andrew", "Hsu", 19, -99);
  const [currID, setCurrID] = useState(1);
  const [users, setUsers] = useState([testUser]);
  const [signedIn, setSignedIn] = useState(false);

  if (!signedIn) {
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
              ></SignUpPage>
            }
          />
          <Route
            path="*"
            element={
              <LogInPage users={users} setSignedIn={setSignedIn}></LogInPage>
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
          path="/config-table"
          element={<ConfigTablePage></ConfigTablePage>}
        />
        <Route path="/user-table" element={<UserTablePage></UserTablePage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
