import React from "react";

import "./result.css";
import { useNavigate } from "react-router-dom";

function Result() {
  const res = JSON.parse(localStorage.getItem("res"));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <button onClick={handleClick}>DashBoard</button>
      <div className="result">
        <p>Name : {res[0].name}</p>
        <p>Corect answer : {res[0].count}</p>
        <p>Incorrect answer : {res[0].total_que - res[0].count}</p>
        <p>Percentage: {(res[0].count / res[0].total_que) * 100}</p>
      </div>
    </>
  );
}

export default Result;
