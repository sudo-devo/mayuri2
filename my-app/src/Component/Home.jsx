import React, { useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const arr = [];
  const handleClick = () => {
    const payload = {
      name,
      category,
      difficulty,
      number,
    };

    arr.push(payload);

    localStorage.setItem("querry", JSON.stringify(arr));
    navigate("/quiz");
  };

  const dash = () => {
    navigate("/dashboard")
  };

  return (
    <>
      <button onClick={dash}>DashBoard</button>
      <div className="form">
        <h1>Set Up Your Quiz</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your name..."
          onChange={(e) => setName(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </select>

        <select name="" id="" onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Select Level</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter question number..."
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleClick}>Start Qiuz</button>
      </div>
    </>
  );
}
