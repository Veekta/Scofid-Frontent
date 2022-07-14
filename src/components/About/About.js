import React, { useEffect } from "react";
import ShortHero from "../ShortHero/Hero";
import AllText from "../TextHold/Text";
import styled from "styled-components";
import Button from "../Button/Button";

import { MdOutlineLocationOn, MdKeyboardArrowRight } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsCheckSquare } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Container>
      <Wrapper>
        <ShortHero
          pageTitle="About"
          d1="Home"
          d1to="/"
          d2="About"
          d2to="/about"
          animate2="fade-up"
          animate3="fade-up"
        />

        <Main>
          <Left data-aos="fade-up">
            <ImageDiv></ImageDiv>
          </Left>

          <Right data-aos="fade-up">
            <TextHold>
              <TopText data-aos="fade-up">
                <Line></Line>
                <H3>ABOUT US</H3>
              </TopText>
              <Headline data-aos="fade-up">Plumbing Is What We Do</Headline>
            </TextHold>
            <Form data-aos="fade-up">
              <Text>
                We are an award winning spanlumbing company with over 20 years
                experience in the business. We provide a wide range of services
                for both residential and commercial clients.
              </Text>
            </Form>
            <Hold2>
              <Hold1>
                <BoxText>
                  <BsCheckSquare color="var(--blue)" />
                  <Text2 animate="fade-up">Qualified Team</Text2>
                </BoxText>
                <BoxText>
                  <BsCheckSquare color="var(--blue)" />
                  <Text2 animate="fade-up">Affordable Prices</Text2>
                </BoxText>
                <BoxText>
                  <BsCheckSquare color="var(--blue)" />
                  <Text2 animate="fade-up">Quick Service</Text2>
                </BoxText>
              </Hold1>
              <Hold1>
                <BoxText animate="fade-up">
                  <BsCheckSquare color="var(--blue)" />
                  <Text2 animate="fade-up">Qualified Team</Text2>
                </BoxText>
                <BoxText>
                  <BsCheckSquare color="var(--blue)" />
                  <Text2 animate="fade-up">Qualified Team</Text2>
                </BoxText>
                <BoxText>
                  <BsCheckSquare color="var(--blue)" />
                  <Text2 animate="fade-up">Qualified Team</Text2>
                </BoxText>
              </Hold1>
            </Hold2>
            <Form data-aos="fade-up" style={{ marginBottom: "15px" }}>
              <Text>
                No job is too big or too small, we’ve got you covered. In
                addition to our services, you can check out our shop for a wide
                range of plumbing supplies and equipment. When it comes to
                plumbing we are your one stop shop.
              </Text>
            </Form>
            <Form data-aos="fade-up" styled={{ marginBottom: "40px" }}>
              <Text styled={{ marginBottom: "" }}>
                No job is too big or too small, we’ve got you covered. In
                addition to our services, you can check out our shop for a wide
                range of plumbing supplies and equipment. When it comes to
                plumbing we are your one stop shop.
              </Text>
            </Form>
          </Right>
        </Main>
        <Works>
          <Holder>
            <IconHold>
              <img src="/assets/heatsystem.png" />
              <Num>700</Num>
              <Rate>Heating Systems Repaired</Rate>
            </IconHold>{" "}
            <IconHold>
              <img src="/assets/toilets.png" />
              <Num>2500</Num>
              <Rate>Toilets Installed</Rate>
            </IconHold>{" "}
            <IconHold>
              <img src="/assets/pipe.png" />
              <Num>1800</Num>
              <Rate>Burst Mains Repaired</Rate>
            </IconHold>{" "}
            <IconHold>
              <img src="/assets/tap.png" />
              <Num>3000</Num>
              <Rate>Leaky Faucets Fixed</Rate>
            </IconHold>{" "}
          </Holder>
        </Works>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Rate = styled.div`
  font-size: 18px;
  font-family: var(--mont);
  font-weight: 500;
`;
const Num = styled.div`
  font-weight: 600;
  font-size: 30px;
  font-family: var(--mont);
  margin: 10px 0;
`;
const IconHold = styled.div`
  color: white;
  display: flex;
  width: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img: {
    height: 50px;
    width: 50px;
    object-fit: contain;
  }
  @media (max-width: 1000px) {
    margin: 20px 0;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }
`;
const Works = styled.div`
  margin: 100px 0;
  height: 400px;
  width: 100%;
  background-image: url("/assets/aboutlayer.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    height: 100%;
  }
`;
const Hold2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;
const Hold1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 15px 0;
  text-align: left;
`;
const Container = styled.div`
  width: 100%;
  background-color: white;
  /* margin: 50px 0; */
`;

const Text2 = styled.div`
  margin-left: 15px;
`;
const BoxText = styled.div`
  display: flex;
  align-items: center;
  width: 170px;
  /* justify-content: space-between; */
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  background-color: white;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const ImageDiv = styled.div`
  width: 90%;
  height: 100%;
  background-image: url("/assets/scimage.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1000px) {
    /* width: 100%; */
  }
`;

const Left = styled.div`
  width: 50%;
  height: 500px;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  img {
    width: 90%;
    height: 500px;
  }
`;

const TextHold = styled.div`
  display: flex;
  //   align-items: center;
  flex-direction: column;
  width: 100%;
  //   width: 768px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const TopText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const Line = styled.div`
  background-color: var(--red);
  width: 40px;
  height: 3px;
`;

const H3 = styled.div`
  color: var(--blue);
  font-size: 16px;
  text-transform: uppercase;
  margin: 0 10px 10px;
  font-weight: 600;
`;

const Headline = styled.div`
  font-size: 35px;
  font-weight: 700;
  font-family: var(--mont);
  color: var(--darkblue);

  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 32px;
  }
  @media screen and (max-width: 425px) {
    font-size: 28px;
  }
`;

const Short = styled.div`
  color: var(--tiny);
  font-size: 16px;
  font-family: nunito;
  font-weight: ${({ bl }) => (bl ? "600" : "400")};
`;

const Navs = styled.div`
  font-size: ${(bi) => (bi ? "15px" : "14px")};
`;
const Nav = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid var(--cc);
  display: flex;
  align-items: center;

  justify-content: ${({ sp }) => (sp ? "space-between" : "flex-start")};
`;

const ContactText = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 600;
    font-family: var(--mont);
    color: var(--darkblue);

    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }
`;
// const ContactText = styled.div``
const Text = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-family: var(--nun);
  color: var(--tiny);
  line-height: 25px;
  width: 600px;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const LocationIcon = styled(MdOutlineLocationOn)`
  color: var(--blue);
  font-size: 45px;
  margin-right: 20px;
  transition: all 350ms;
  :hover {
    color: var(--red);
  }
`;
const PhoneIcon = styled(BiPhoneCall)`
  color: var(--blue);
  font-size: 45px;
  margin-right: 20px;

  transition: all 350ms;
  :hover {
    color: var(--red);
  }
`;
const EmailIcon = styled(AiOutlineMail)`
  color: var(--blue);
  margin-right: 20px;
  font-size: 45px;
  transition: all 350ms;
  :hover {
    color: var(--red);
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  border-radius: 15px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    padding: 30px;
  }
`;

const Form = styled.div`
  width: 100%;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Double = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    flex: 0.45;
    border: none;
    outline: 0;
    background-color: var(--grey);
    border-radius: 5px;
    height: 40px;
    padding: 20px 10px;
    margin-bottom: 20px;

    ::placeholder {
      font-family: var(--nun);
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  textarea {
    width: 100%;
    padding: 20px 10px;

    border: none;
    outline: 0;
    background-color: var(--grey);
    border-radius: 5px;
    height: 200px;
    padding: 0 10px;
    margin-bottom: 20px;
    ::placeholder {
      font-family: var(--nun);
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;

    input {
      width: 100%;
    }

    textarea {
      width: 100%;
    }
  }
`;
const Send = styled.div`
  background-color: var(--blue);
  color: white;
  width: 80px;
  padding: 15px 30px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  margin: 10px 0 50px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 350ms;
  display: flex;
  align-items: center;

  justify-content: center;

  :hover {
    background-color: rgba(34, 150, 249, 0.5);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    padding: 15px 30px;
    font-size: 18px;
    font-weight: 600;
  }

  @media screen and (max-width: 425px) {
    font-size: 18px;
    font-weight: 700;
    padding: 10px 25px;
  }
`;
