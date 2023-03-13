import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <li>Pokemon Page</li>
      </Link>
      <Link to={"/type"}>
        <li>Types Page</li>
      </Link>
      <Link to={"/favorites"}>
        <li>Favorites Page</li>
      </Link>
    </div>
  );
}

export default Navbar;
