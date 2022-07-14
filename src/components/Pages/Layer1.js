import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../Pages/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Layer1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Container>
      <Wrapper data-aos="fade-up">
        <Card
          aos="fade-up"
          title="Geberal Plumbing Maintenance"
          desc="Leaky faucet? Clogged toilet We got you covered with our range of plumbing maintenance services."
          Icon="/gallery/bluehome.png"
        />
        <Card
          aos="fade-up"
          title="24/7 Emergency Plumbing Service"
          desc="No matter the time or day are on call serve you. It is a paradisematic country, in which roasted parts"
          Icon="/gallery/van.png"
        />
        <Card
          aos="fade-up"
          title="Plumbing Supplies and Equipment"
          desc="Need a plumber or a new faucet? We sell a wide range of plumbing supplies for all needs"
          Icon="/assets/tool.png"
        />
      </Wrapper>
    </Container>
  );
};

export default Layer1;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 35px 0;
  @media (max-width: 1566px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;
  /* background-color: orange; */
`;
