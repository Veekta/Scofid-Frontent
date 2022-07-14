import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <Top data-aos="fade-up">
            <Line style={{ marginRight: "10px" }}></Line>Get your project done
            <Line style={{ marginLeft: "10px" }}></Line>
          </Top>
          <Text data-aos="fade-up">
            We Specialise in Residential and Commercial Plumbing Products
          </Text>
        </TextDiv>
      </Wrapper>
    </Container>
  );
};

export default Project;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: #dd3333;
`;
const Text = styled.div`
  color: white;
  font-size: 42px;
  font-family: var(--mont);
  font-weight: bold;
  line-height: 60px;
  display: flex;
  width: 80%;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 30px;
    width: 100%;
    line-height: 40px;
  }
`;
const Top = styled.div`
  color: var(--blue);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  font-family: var(--mont);
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 500px;
  width: 100%;
  background-image: url("/gallery/projectimg.jpg");
  background-size: cover;
  background-position: center;
  margin-top: 50px;
`;
