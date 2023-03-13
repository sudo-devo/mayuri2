import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Register/reg.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [logIn, setLogIn] = useState(false);
  const naviagte = useNavigate();

  const arr = [];

  const handleClick = () => {
    const payload = {
      email,
      password,
    };

    fetch("https://fancy-parka-yak.cyclic.app/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const obj = {
          email,
          password,
          token: res.token,
        };

        arr.push(obj);
        localStorage.setItem("token", JSON.stringify(arr));
        naviagte("/homme");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register">
      <h1>Log In</h1>

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
        Do not have an account ? <span>Sign In</span>
      </p>
    </div>
  );
};

export default Register;
