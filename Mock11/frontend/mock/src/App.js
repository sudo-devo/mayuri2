import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homme" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
