import React from "react";
import { Navbar } from "../components/Navbar";
import { Cardbar } from "../components/Cardbar"
import { Container } from "../components/Container";

export const Home = () => {
  return (

  <Container height="100%" >
    <Navbar/>
    <Cardbar/>
  </Container>
  
  );
};