import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reg.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [logIn, setLogIn] = useState(false);
  const naviagte = useNavigate();

  const handleClick = () => {
    const payload = {
      email,
      password,
    };

    fetch("https://fancy-parka-yak.cyclic.app/user/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => setLogIn(true))
      .catch((err) => console.log("err", err));

    if (logIn) {
      naviagte("/login");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>

      <div className="top">
        <MdEmail />
        <input
          type="email"
          className=""
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <RiLockPasswordFill />
        <input
          type="password"
          className=""
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>

      <button onClick={handleClick}>Submit</button>

      <p>Or continue with these social profiles</p>

      <div className="profile-div">
        <BsGoogle size={"30px"} color={"silver"} />
        <BsFacebook size={"30px"} color={"silver"} />
        <BsTwitter size={"30px"} color={"silver"} />
        <BsGithub size={"30px"} color={"silver"} />
      </div>

      <p>
        Already have an account ? <span>Login</span>
      </p>
    </div>
  );
};

export default Register;
