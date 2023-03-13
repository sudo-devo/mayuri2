import React from "react";
import "./Favorites.css";
import Navbar from "./Navbar";

function Favorites() {
  const like = JSON.parse(localStorage.getItem("Likes"));
  console.log("dd", like);
  return (
    <div>
      <Navbar />
      {like &&
        like.map((ele) => (
          <div className="fav">
            <p>{ele.name}</p>
            <p>Id : {ele.id}</p>
          </div>
        ))}
    </div>
  );
}

export default Favorites;
