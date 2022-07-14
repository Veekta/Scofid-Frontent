import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
const Text = ({ one, two, three }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <TextHold data-aos="fade-up">
      <TopText data-aos="fade-up">
        <Line></Line>
        <H3 cl>{one}</H3>
        <Line></Line>
      </TopText>
      <Headline cl>{two}</Headline>
      <Short tn>{three}</Short>
    </TextHold>
  );
};

export default Text;

const TextHold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
  width: 768px;
  p {
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const TopText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    color: ${({ cl }) => (cl ? "var(--blue)" : "white")};
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 10px;
  }
`;

const H3 = styled.div`
  color: ${({ cl }) => (cl ? "var(--blue)" : "white")};
  font-size: 16px;
  text-transform: uppercase;
  margin: 0 10px 10px;
  font-weight: 600;
`;
const Line = styled.div`
  background-color: var(--red);
  width: 30px;
  height: 2px;
`;

const Headline = styled.div`
  font-size: 42px;
  font-weight: 700;
  font-family: var(--mont);
  color: ${({ cl }) => (cl ? "var(--darkblue)" : "white")};
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 425px) {
    font-size: 28px;
  }
`;

const Short = styled.div`
  color: ${({ tn }) => (tn ? "var(--tiny)" : "white")};
  font-size: 16px;
  font-family: nunito;
  font-weight: ${({ bl }) => (bl ? "600" : "400")};
`;
