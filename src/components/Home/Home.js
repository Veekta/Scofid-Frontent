import React from "react";
import Hero from "../Pages/Hero";
import Cardlayer from "../Pages/Layer1";
import { Work1, Work2 } from "../Pages/Work";
import Project from "../Pages/Project";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
