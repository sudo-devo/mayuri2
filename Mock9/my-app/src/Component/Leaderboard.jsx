import React from "react";
import "./dash.css";

function Leaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  leaderboard.sort((a, b) => b.count - a.count);
  return (
    <div className="main">
      {leaderboard &&
        leaderboard.map((ele, index) => (
          <div className="dash">
            <p>Rank : {index + 1}</p>
            <p>Name : {ele.name}</p>
            <p>Total Score : {ele.count}</p>
          </div>
        ))}
    </div>
  );
}

export default Leaderboard;
