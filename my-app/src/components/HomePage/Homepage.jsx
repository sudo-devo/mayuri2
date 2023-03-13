import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const nav = useNavigate();
  return (
    <div>
      <Button onClick={() => nav("/login")}>Login</Button>
      <Button onClick={() => nav("/register")}>Register</Button>
    </div>
  );
}

export default Homepage;
