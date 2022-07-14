import React, { useEffect } from "react";
import styled from "styled-components";
import { MdOutlineLocationOn, MdKeyboardArrowRight } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { AOS } from "aos";

// import { MdKeyboardArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Hold>
            <Title>About US</Title>
            <Content>
              We are an award winning plumbing company with over 20 years
              experience in the business. We provide a wide range of services
              for both residential and commercial clients.
            </Content>

            <Socials></Socials>
          </Hold>

          <Hold>
            <Title>Contact us</Title>
            <Navs bi>
              <Nav>
                <LocationIcon />
                <Text bi>
                  31, OWOKONIRAN, UNITY PLAZA, BADAGRY EXPRESS WAY, COKER,
                  LAGOS, LAGOS NIGERIA.
                </Text>
              </Nav>
              <Nav>
                <PhoneIcon />
                <a
                  href="tel:+234 810 918 2710"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Text bi>+234 810 918 2710</Text>
                </a>
              </Nav>
              <Nav>
                <EmailIcon />
                <a
                  href="mailto:scofid1st@gmail.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Text bi>scofid1st@gmail.com</Text>
                </a>
              </Nav>
            </Navs>
          </Hold>

          <Hold>
            <Title>Quick Links</Title>
            <Navs>
              <Nav sp>
                <Link
                  to="/about"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick="window.refresh()"
                >
                  <Text style={{ fontSize: "14px" }}>About</Text>
                </Link>

                {/* <Arrow /> */}
              </Nav>
              <Nav sp>
                <Link
                  to="/contact"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick="window.refresh()"
                >
                  <Text style={{ fontSize: "14px" }}>Contact</Text>
                </Link>

                {/* <Arrow /> */}
              </Nav>
              <Nav sp>
                <Link
                  to="/services"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick="window.refresh()"
                >
                  <Text style={{ fontSize: "14px" }}>services</Text>
                </Link>

                {/* <Arrow /> */}
              </Nav>
              <Nav sp>
                <Link
                  to="/product"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick="window.refresh()"
                >
                  <Text style={{ fontSize: "14px" }}>Products</Text>
                </Link>

                {/* <Arrow /> */}
              </Nav>
              <Nav sp>
                <Link
                  to="/projects"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick="window.refresh()"
                >
                  <Text style={{ fontSize: "14px" }}>Projects</Text>
                </Link>

                {/* <Arrow /> */}
              </Nav>
            </Navs>
          </Hold>
        </Top>
        <Bottom>
          <Copy>Copyright © 2022. All Rights Reserved.</Copy>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: var(--darkblue);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Top = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //   flex-direction: column;
  border-top: 0.5px solid #7d7d7d;
  margin-top: 30px;
  padding: 30px 0;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Copy = styled.div`
  width: 90%;
  color: #7d7d7d;
  font-size: 15px;
  font-weight: 500;
  font-family: var(--nun);
  //   margin-bottom: 20px;
`;

const Hold = styled.div`
  width: 350px;
  line-height: 1.8;
  color: var(--cc);
  margin: 0 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--mont);
  margin: 10px 0;
  text-transform: uppercase;
  margin-bottom: 50px;
  position: relative;

  ::before {
    content: "";
    width: 70px;
    height: 3.5px;
    background-color: var(--blue);
    position: absolute;
    bottom: -20px;
  }
`;
const Content = styled.div`
  color: var(--cc);
  font-size: 15px;
  font-family: var(--nun);
  margin-bottom: 20px;
`;
const Socials = styled.div``;

const Navs = styled.div`
  font-size: ${(bi) => (bi ? "15px" : "14px")};
`;
const Nav = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid var(--tiny);
  display: flex;
  align-items: center;
  justify-content: ${({ sp }) => (sp ? "space-between" : "flex-start")};
`;
const Text = styled.div`
  cursor: pointer;
  transition: all 350ms;
  font-size: ${(bi) => (bi ? "15px" : "14px")};

  :hover {
    color: var(--blue);
  }
`;

const LocationIcon = styled(MdOutlineLocationOn)`
  color: var(--red);
  font-size: 55px;
  margin-right: 20px;
  transition: all 350ms;
  :hover {
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const PhoneIcon = styled(BiPhoneCall)`
  color: var(--red);
  font-size: 25px;
  margin-right: 20px;

  transition: all 350ms;
  :hover {
    color: white;
  }
`;
const EmailIcon = styled(AiOutlineMail)`
  color: var(--red);
  margin-right: 20px;
  font-size: 25px;
  transition: all 350ms;
  :hover {
    font-size: 25px;
    color: white;
  }
`;

const Arrow = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  color: white;
`;
// const About = styled.div``
// const About = styled.div``
// const About = styled.div``
