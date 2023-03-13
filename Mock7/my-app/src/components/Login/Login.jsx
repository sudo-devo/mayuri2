import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useState("");
  const naviagte = useNavigate();

  useEffect(() => {
    fetch("https://mock-api-xfgb.onrender.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const loginUser = () => {
    const userDetailsEmail = dataUser.filter((ele) => ele.email === email);
    const userPassword = dataUser.filter((ele) => ele.password == password);

    if (userPassword.length === 1 && userDetailsEmail.length === 1) {
      alert("Login Succefully");
      naviagte("/stocks");
    } else if (email === "admin@stockbroker.com" && password === "admin123") {
      alert("Admin Login Succefully");
      naviagte("/admindash");
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <FormControl width="30%" m={"auto"}>
      <FormLabel mt={"20px"}>Email address</FormLabel>
      <Input type="email" onChange={(e) => setEmail(e.target.value)} />
      <FormHelperText>We'll never share your email.</FormHelperText>

      <FormLabel mt={"20px"}>Password</FormLabel>
      <Input type="passwrod" onChange={(e) => setPassword(e.target.value)} />

      <Button mt={"20px"} onClick={loginUser}>
        Register
      </Button>
    </FormControl>
  );
}

export default Login;
