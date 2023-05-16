import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LogInPage from "./components/LogInPage";
import User from "./models/User";
function App() {
  const [users, setUsers] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const user1 = new User(0, "andrew001", "andrewPwd", "Andrew", "Hsu", 19, -99);
  if (!signedIn) {
    return (
      <div className="content">
        <LogInPage users={users}></LogInPage>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <div className="content">
              <LogInPage users={users}></LogInPage>
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <div className="content">
              <LogInPage users={users}></LogInPage>
            </div>
          }
        />
        <Route
          path="/user-table"
          element={
            <div className="content">
              <LogInPage users={users}></LogInPage>
            </div>
          }
        />
        <Route
          index
          element={
            <div className="content">
              <LogInPage users={users}></LogInPage>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
