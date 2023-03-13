import React from "react";
import "./Details.css";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from "./Navbar";

function Details() {
  let data = JSON.parse(localStorage.getItem("Pokemon"));
  console.log(data);

  let like = JSON.parse(localStorage.getItem("Likes")) || [];

  const setzClick = (ele) => {
    like.push(ele);
    localStorage.setItem("Likes", JSON.stringify(like));
  };

  return (
    <>
      <Navbar />
      <div className="like">
        <p className="likes">Squirtle</p>
        <AiOutlineHeart onClick={() => setzClick(data)} />
      </div>
      <div className="image">
        <img
          src={data.sprites.front_default}
          alt=""
          height={"40px"}
          width="100px"
        />
      </div>

      <div className="detail">
        <p className="d">
          <span>Id :</span> {data.id}
        </p>
        <p className="d">
          <span>Base Experince :</span> {data.base_experience}
        </p>
        <p className="d">
          <span>Type : </span>
          {data.types[0].type.name}
        </p>
        <p className="d">
          <span>Weight :</span> {data.weight}
        </p>
        <p className="d">
          <span>Height :</span> {data.height}
        </p>
        <p className="d">
          <span>Moves :</span>{" "}
          {data.moves.map((ele) => {
            return ele.move.name;
          })}
        </p>
      </div>
    </>
  );
}

export default Details;
