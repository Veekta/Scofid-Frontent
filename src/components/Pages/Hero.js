import React, { useEffect } from "react";
import styled from "styled-components";
import { RiCheckboxBlankFill } from "react-icons/ri";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Darker>
        <Wrapper>
          <TexDiv>
            <Top data-aos="fade-up">
              <Line></Line>
              plumbing is what we do
            </Top>
            <BigText data-aos="fade-up">Most Affordable Plumbing Rates</BigText>
            <Desc data-aos="fade-up">
              Our team of plumbers are skilled and certified, we offer a range
              of quality plumbing products and services.
            </Desc>
            <Link to="/about">
              <Btn data-aos="fade-up">Learn More</Btn>
            </Link>
          </TexDiv>
        </Wrapper>
      </Darker>
    </Container>
  );
};

export default Hero;
const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: #dd3333;
  margin-right: 10px;
`;
const Wrapper = styled.div`
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 18px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
const Btn = styled.button`
  border: none;
  background-color: #2296f9;
  color: white;
  width: 180px;
  padding: 15px 40px;
  border-radius: 5px;
  font-size: 16px;
  font-family: var(--mont);
`;
const Desc = styled.div`
  color: whitesmoke;
  font-size: 22px;
  font-weight: 500;
  width: 600px;
  font-family: var(--nun);
  line-height: 25px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 15px;
    width: 72%;
  }
`;
const BigText = styled.div`
  font-size: 75px;
  font-weight: bold;
  width: 700px;
  color: whitesmoke;
  font-family: var(--mont);
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 60px;
    width: 80%;
  }
  @media (max-width: 518px) {
    font-size: 45px;
    width: 80%;
  }
`;
const Icon = styled(RiCheckboxBlankFill)`
  color: red;
`;
const Top = styled.div`
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  display: flex;
  font-size: 14px;
  font-family: var(--mont);
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Darker = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  @media (max-width: 526px) {
    padding: 30px 0;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 85vh;
  background-image: url("/gallery/heroimg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
`;
