import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import background from "./Background";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./Services.json";
import Text from "../TextHold/Text";
import ShortHero from "../ShortHero/Hero";
import Button from "../Button/Button";
// import Card from "./Card";
function Service() {
  const [Data, setData] = useState();
  // setData(Services);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    // console.log(Data);
  }, []);
  return (
    <Container>
      <Wrapper>
        <ShortHero
          pageTitle="Services"
          d1="Home"
          d1to="/"
          d2="Services"
          d2to="/services"
        />

        <Main>
          <Text
            one="Our services"
            two="Quality Service is Our Guarantee"
            three=" Get a wide range of plumbing services catered to both residential
        and commercial needs."
          />

          <Cards>
            {Services?.map((props) => {
              return (
                <Card key={props.id} data-aos="fade-up">
                  <Image>
                    <img src={props.img} alt="plumber" />
                  </Image>
                  <Title>{props.title}</Title>
                  <Line></Line>
                  <Description>{props.desc}</Description>
                </Card>
              );
            })}
          </Cards>

          <Claim data-aos="fade-up">
            <TopText>
              <Line></Line>
              <H3>WE OFFER THE BEST SOLUTIONS</H3>
              <Line></Line>
            </TopText>
            <Headline>For Both Residential & Commercial</Headline>
            <Short bl>24/7 Customer Support</Short>
          </Claim>

          <Button text="Contact Us Now" />
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Service;

const Container = styled.div`
  width: 100%;
  background-color: var(--grey);
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// const Hero = styled.div`
//   width: 100%;
//   height: 100%;
//   height: 40vh;
//   background-image: url("/assets/bg.jpg");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   color: white;
//   padding-left: 80px;
//   box-sizing: border-box;

//   @media screen and (max-width: 768px) {
//     padding-left: 50px;
//   }

//   @media screen and (max-width: 425px) {
//     padding-left: 30px;
//   }
// `;

// const PageTitle = styled.div`
//   font-size: 50px;
//   font-weight: 700;
//   margin-bottom: 30px;

//   @media screen and (max-width: 768px) {
//     font-size: 35px;
//     margin-bottom: 20px;
//   }

//   @media screen and (max-width: 425px) {
//     font-size: 30px;
//     margin-bottom: 10px;
//   }
// `;

// const Direction = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   font-weight: 500;
//   //   justify-content: center;
// `;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-color: var(--grey);
`;

const TextHold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
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

const Cards = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 320px;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 15px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 320px) {
    width: 90%;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 215px;
  margin-bottom: 30px;
  transition: all 350ms;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  font-size: 20px;
  color: var(--darkblue);
  font-weight: 700;
  margin: 10px 0 15px;
`;
const Description = styled.div`
  color: var(--tiny);
  font-size: 16px;
  margin: 15px 0;
  // width: 80%;
  line-height: 1.6em;
  font-family: var(--nun);
`;
// const Title = styled.div``;

const Claim = styled.div`
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
  text-align: center;
  align-items: center;
  margin: 50px 0;
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 425px) {
  }
`;
