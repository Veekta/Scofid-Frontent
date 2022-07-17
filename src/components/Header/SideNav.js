import React, { useEffect } from "react";
import styled from "styled-components";
import { IoMdTime } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const SideNav = () => {
  useEffect(() => {
    AOS.init([2000]);
    AOS.refresh();
  }, []);
  return (
    <Container>
      <Wrapper>
        <LogoDiv>
          <Link to="/" onClick="window.refresh()">
            <img src="/assets/scofid-logo.png" />
          </Link>
        </LogoDiv>
        <Navigations>
          <Nav to="/" onClick="window.refresh()">
            Home
          </Nav>
          <Nav to="/services" onClick="window.refresh()">
            Service
          </Nav>
          <Nav to="/projects" onClick="window.refresh()">
            Project
          </Nav>
          <Nav to="/product" onClick="window.refresh()">
            Product
          </Nav>
          <Nav to="/contact" onClick="window.refresh()">
            Contact
          </Nav>
          <Nav to="/about" onClick="window.refresh()">
            About
          </Nav>
        </Navigations>
        <TimeHold>
          <Time>
            <Icon />{" "}
            <Text>
              <Detail>Monday 9:00-15:00</Detail>
              <SecondDetail>Sunday CLOSED</SecondDetail>
            </Text>
          </Time>
          <Time>
            <MdCall size="30" color="var(--blue)" />{" "}
            <Text>
              <Detail style={{ color: "var(--blue)" }}>
                <a
                  href="tel:+234 810 918 2710"
                  style={{ textDecoration: "none" }}
                >
                  <Detail2>+234 810 918 2710</Detail2>
                </a>
              </Detail>
              <SecondDetail style={{ color: "var(--blue)" }}>
                <a
                  href="mailto:scofid1st@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <Detail2 style={{ color: "var(--blue)" }}>
                    scofid1st@gmail.com
                  </Detail2>
                </a>
              </SecondDetail>
            </Text>
          </Time>
        </TimeHold>
        <Btn>
          <a href="tel:+234 810 918 2710">
            <Btn2>REQUEST A CALL</Btn2>
          </a>
        </Btn>
      </Wrapper>
    </Container>
  );
};

export default SideNav;

const TimeHold = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
`;
const SecondDetail = styled.div`
  font-size: 15px;
  font-family: var(--nun);
  color: #b0b0b0;
`;
const Detail = styled.div`
  font-size: 16px;
`;
const Detail2 = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: var(--mont);
  color: #001733;
  outline: none;
`;

const Text = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;
const Icon = styled(IoMdTime)`
  color: var(--blue);
  font-size: 30px;
`;
const Time = styled.div`
  display: flex;
  /* margin-bottom: 10px; */
`;
const Btn = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: center;
  align-items: flex-end;
`;
const Btn2 = styled.button`
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 5px;
  background-color: var(--blue);
  color: white;
  font-size: 16px;
  font-family: var(--mont);
  font-weight: 600;
`;
const Nav = styled(Link)`
  border-top: 0.4px solid rgba(0, 0, 0, 0.06);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.06);
  font-size: 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  color: #444444;
  font-weight: 500;
  height: 40px;
  text-decoration: none;
`;
const Navigations = styled.div`
  width: 100%;
  /* margin: 10px 0; */
  height: 45%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const LogoDiv = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    height: 50px;
    width: 150px;
    object-fit: cover;
  }
  margin-top: 15px;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  background-color: white;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;
const Container = styled.div`
  height: 100vh;
  width: 70%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 100;
  background-color: white;
  @media (min-width: 768px) {
    display: none;
  }
`;
