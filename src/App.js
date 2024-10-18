import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Componets/Auth/Login";
import Signup from "./Componets/Auth/Signup";
import UserDashboard from "./Componets/Dashboard/UserDashboard";
import AdminDashboard from "./Componets/Dashboard/AdminDashboard";
import Header from "./Componets/Header";
import AddHabit from "./Componets/Forms/AddHabit";
import EditHabit from "./Componets/Forms/EditHabit";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
    if (loggedInUser) {
      setIsLoggedIn(true);
      setCurrentRole(loggedInUser.role);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
    if (loggedInUser) {
      setCurrentRole(loggedInUser.role);
    }
  };

  const handleLogout = () => {
    const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    const updatedUsers = storedUsers.map((user) => ({
      ...user,
      isLoggedIn: false,
    }));
    localStorage.setItem("userData", JSON.stringify(updatedUsers));

    setIsLoggedIn(false);
    setCurrentRole("");
  };

  return (
    <Router>
      {!isLoggedIn ? null : <Header handleLogout={handleLogout} currentRole={currentRole}/>}
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addhabit" element={<AddHabit />} />
        <Route path="/edithabit" element={<EditHabit />} />
        <Route
          path="/admindashboard"
          element={
            isLoggedIn && currentRole === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/userdashboard"
          element={
            isLoggedIn && currentRole === "user" ? (
              <UserDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/"
          element={
            <Navigate
              to={
                isLoggedIn
                  ? currentRole === "admin"
                    ? "/admindashboard"
                    : "/userdashboard"
                  : "/login"
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
