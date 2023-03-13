import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/action";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toLogin, setToLogin] = useState(false);
  const dispatch = useDispatch();

  const registerUser = () => {
    if (userName && email && password) {
      dispatch(register({ userName, email, password }));
      setToLogin(true);
    }
  };

  if (toLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <FormControl width="30%" m={"auto"}>
      <FormLabel mt={"20px"}>User Name</FormLabel>
      <Input type="text" onChange={(e) => setUserName(e.target.value)} />

      <FormLabel mt={"20px"}>Email address</FormLabel>
      <Input type="email" onChange={(e) => setEmail(e.target.value)} />
      <FormHelperText>We'll never share your email.</FormHelperText>

      <FormLabel mt={"20px"}>Password</FormLabel>
      <Input type="passwrod" onChange={(e) => setPassword(e.target.value)} />

      <Button mt={"20px"} onClick={registerUser}>
        Register
      </Button>
    </FormControl>
  );
}

export default Register;
