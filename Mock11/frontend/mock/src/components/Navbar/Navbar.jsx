import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/register"}>
        <li>Signup</li>
      </Link>
      <Link to={"/login"}>
        <li>Signin</li>
      </Link>
      <Link to={"/"}>
        <li>Profile Details</li>
      </Link>
      <Link>
        <li>Edit Profile</li>
      </Link>
    </div>
  );
}

export default Navbar;
