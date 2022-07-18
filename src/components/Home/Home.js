import React from "react";
import styled from "styled-components";
import Hero from "../Pages/Hero";
import Cardlayer from "../Pages/Layer1";
import { Work1, Work2 } from "../Pages/Work";
import Project from "../Pages/Project";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Cardlayer />
      <Work1
        view="View Our Products"
        products="Our Latest Products"
        text="OUR PRODUCTS"
      />
      <Work2
        text="OUR PROJECTS"
        products="Our Latest Projetcs"
        view="View Our Projects"
      />
      <Project />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
