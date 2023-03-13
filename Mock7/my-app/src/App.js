import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import AdminDash from "./components/AdminDashBoard/AdminDash";
import UserDash from "./components/UserDash/UserDash";
import Chart from "./components/Chart/Chart";
import Homepage from "./components/HomePage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDash />} />
        <Route path="/stocks" element={<UserDash />} />
        <Route path="/portfolio" element={<Chart />} />
      </Routes>
    </>
  );
}

export default App;
