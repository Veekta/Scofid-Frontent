import React from "react";
import styled from "styled-components";
const Background = ({ title, headline, description }) => {
  return (
    <Container>
      <TextHold>
        <TopText>
          <Line></Line>
          <h3>Our services</h3>
          <Line></Line>
        </TopText>
        <Headline>Quality Service is Our Guarantee</Headline>
        <p>
          Get a wide range of plumbing services catered to both residential and
          commercial needs.
        </p>
      </TextHold>
    </Container>
  );
};

export default Background;

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: 40vh;
  background-image: url("/assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 80px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 425px) {
    padding-left: 30px;
  }
`;

const TextHold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
  p {
    color: var(--tiny);
    font-size: 16px;
    font-family: nunito;
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
    color: var(--blue);
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 10px;
  }
`;

const Line = styled.div`
  background-color: var(--red);
  width: 30px;
  height: 2px;
`;

const Headline = styled.div`
  font-size: 42px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: var(--darkblue);
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 425px) {
    font-size: 28px;
  }
`;
