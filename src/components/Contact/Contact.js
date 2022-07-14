import React, { useEffect } from "react";
import ShortHero from "../ShortHero/Hero";
import AllText from "../TextHold/Text";
import styled from "styled-components";
import Button from "../Button/Button";
import { MdOutlineLocationOn, MdKeyboardArrowRight } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
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
          pageTitle="Contact"
          d1="Home"
          d1to="/"
          d2="Contact"
          d2to="/contact"
          animate="fade-up"
        />

        <Main>
          <Left data-aos="fade-up">
            <TextHold>
              <TopText data-aos="fade-up">
                <Line></Line>
                <H3>Quick Support</H3>
              </TopText>
              <Headline data-aos="fade-up">Contact Us</Headline>

              <Short>
                If you have any questions or comments about our services contact
                us using the form and we be sure to get back to you.
              </Short>
            </TextHold>

            <Navs data-aos="fade-up">
              <Nav>
                <LocationIcon />

                <ContactText>
                  <h2>Location</h2>
                  <Text bi>
                    {" "}
                    31, OWOKONIRAN, UNITY PLAZA, BADAGRY EXPRESS WAY, COKER,
                    LAGOS, LAGOS STATE
                  </Text>
                </ContactText>
              </Nav>

              <Nav>
                <a href="tel:+234 810 918 2710">
                  <PhoneIcon />
                </a>
                <a
                  href="tel:+234 810 918 2710"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ContactText>
                    <h2>Call us</h2>
                    <Text bi>+234 810 918 2710</Text>
                  </ContactText>
                </a>
              </Nav>
              <Nav>
                <a
                  href="mailto:scofid1st@gmail.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <EmailIcon />
                </a>
                <a
                  href="mailto:scofid1st@gmail.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ContactText>
                    <h2>Email us</h2>
                    <Text bi>scofid1st@gmail.com</Text>
                  </ContactText>
                </a>
              </Nav>
            </Navs>
          </Left>

          <Right data-aos="fade-up">
            <TextHold>
              <TopText data-aos="fade-up">
                <Line></Line>
                <H3>SEND US A MESSAGE</H3>
              </TopText>
              <Headline data-aos="fade-up">Get in Touch</Headline>
            </TextHold>
            <Form data-aos="fade-up">
              <Double>
                <input type="text" placeholder="First Name*" />
                <input type="text" placeholder="Last Name*" />
              </Double>
              <Double>
                <input type="email" placeholder="email*" />
                <input type="number" placeholder="Phone Number*" />
              </Double>
              <Double>
                <textarea placeholder="Message" />
              </Double>

              <Send type="submit">Send</Send>
            </Form>
          </Right>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 80px 0;
  background-color: white;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;

    width: 90%;
  }
`;

const Left = styled.div`
  width: 30%;
  margin-left: 30px;
  height: 100%;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const TextHold = styled.div`
  display: flex;
  //   align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
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
  transition: all 350ms;
  font-size: 15px;
  color: var(--tiny);

  :hover {
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
  font-size: 30px;
  margin-right: 20px;

  transition: all 350ms;
  :hover {
    color: var(--red);
  }
`;
const EmailIcon = styled(AiOutlineMail)`
  color: var(--blue);
  margin-right: 20px;
  font-size: 30px;
  transition: all 350ms;
  :hover {
    color: var(--red);
  }
`;

const Right = styled.div`
  width: 60%;
  padding: 50px 50px 30px;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    padding: 30px;
  }
`;

const Form = styled.form`
  width: 100%;
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
