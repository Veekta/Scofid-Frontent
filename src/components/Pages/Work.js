import React, { useEffect } from "react";
import styled from "styled-components";
import { Card3 } from "../Pages/Card";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Work1 = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Top1>
          <Left>
            {" "}
            <Holder data-aos="fade-up">
              <Line></Line>
              {props.text}
            </Holder>
            <BigText data-aos="fade-up">{props.products}</BigText>
          </Left>
          <Link to="/product" style={{ textDecoration: "none" }}>
            {" "}
            <Right data-aos="fade-up">{props.view}</Right>
          </Link>
        </Top1>
        <CardHold data-aos="fade-up">
          <Card3
            Image="/assets/sp1.jpg"
            data-aos="fade-up"
            Title="Angle Valve"
          />
          <Card3
            Image="/assets/sp2.jpeg"
            data-aos="fade-up"
            Title="Floor Drains"
          />
          <Card3
            Image="/assets/sp3.jpeg"
            data-aos="fade-up"
            Title="Sanitary Ware"
          />
          <Card3
            Image="/assets/sp5.jpeg"
            data-aos="fade-up"
            Title="Water Filter"
          />
        </CardHold>
      </Wrapper>
    </Container>
  );
};
export const Work2 = (props) => {
  return (
    <Container>
      <Wrapper>
        <Top2>
          <Left>
            {" "}
            <Holder data-aos="fade-up">
              <Line></Line>
              {props.text}
            </Holder>
            <BigText data-aos="fade-up">{props.products}</BigText>
          </Left>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            {" "}
            <Right data-aos="fade-up">{props.view}</Right>
          </Link>
        </Top2>
        <CardHold data-aos="fade-up">
          <Card3
            Image="/assets/scofid1.jpeg"
            data-aos="fade-up"
            Title="Osmosis Installation"
          />
          <Card3
            Image="/assets/line.jpg"
            data-aos="fade-up"
            Title="Mainline Plumnbing"
          />
          <Card3
            Image="/assets/scofid3.jpeg"
            data-aos="fade-up"
            Title="Water Purification"
          />
          <Card3
            Image="/assets/ss1.jpeg"
            data-aos="fade-up"
            Title="Home Drainage System"
          />
        </CardHold>
      </Wrapper>
    </Container>
  );
};

const CardHold = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1646px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const BigText = styled.div`
  font-weight: bold;
  font-size: 42px;
  color: #001733;
  font-family: var(--mont);
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  color: var(--blue);
  text-transform: uppercase;
  font-family: var(--mont);
  @media (max-width: 768px) {
    justify-content: center;
  }
  /* font-size: ; */
`;
const Right = styled.button`
  width: 180px;
  height: 45px;
  color: white;
  background-color: var(--blue);
  border: 0;
  /* text-transform: uppercase; */
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;
const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: #dd3333;
  margin-right: 10px;
`;
const Left = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Top2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  margin-top: 50px;
  gap: 15px;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const Top1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  gap: 15px;
  margin-top: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  margin-bottom: 50px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: yellow; */
`;
