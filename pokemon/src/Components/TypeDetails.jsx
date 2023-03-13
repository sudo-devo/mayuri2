import React from "react";
import Navbar from "./Navbar";

function TypeDetails() {
  let data = JSON.parse(localStorage.getItem("Types"));
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="detail">
        <p className="d">
          <span>Double Damage From :</span>{" "}
          {data.damage_relations.double_damage_from[0].name}
        </p>
        <p className="d">
          <span>Id :</span> {data.id}
        </p>

        <p className="d">
          <span>Moves :</span>{" "}
          {data.moves.map((ele) => {
            return ele.name + ",";
          })}
        </p>

        <p className="d">
          <span>Language :</span>{" "}
          {data.names.map((ele) => {
            return ele.language.name + ",";
          })}
        </p>
      </div>
    </>
  );
}

export default TypeDetails;
