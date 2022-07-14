import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  // useEffect(() => {
  //   AOS.init([2000]);
  //   AOS.refresh();
  // }, []);
  const [bugga, setBugga] = useState(false);
  const BuggaChange = () => {
    setBugga(!bugga);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" onClick="window.refresh()">
            <LogoDiv>
              <img src="/assets/scofid-logo.png" />
            </LogoDiv>
          </Link>
          <Navigator>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              <Nav>
                Home <Line>|</Line>
              </Nav>
            </Link>

            <Link
              to="/services"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <Nav>
                Services <Line>|</Line>
              </Nav>
            </Link>

            <Link
              to="/product"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Nav>
                Products <Line>|</Line>
              </Nav>
            </Link>

            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Nav>
                Projects <Line>|</Line>
              </Nav>
            </Link>

            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Nav>
                About <Line>|</Line>
              </Nav>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Call>Request A Call</Call>
            </Link>
          </Navigator>
          <Bugga>
            {bugga ? (
              <ImCancelCircle size="30" onClick={BuggaChange} />
            ) : (
              <BiMenuAltRight size="30" onClick={BuggaChange} />
            )}
          </Bugga>
        </Wrapper>
      </Container>
      {bugga ? <SideNav setBugga={setBugga} bugga={bugga} /> : null}
    </>
  );
};
export default Header;

const Line = styled.div`
  color: rgba(0, 0, 0, 0.15);
`;
const Bugga = styled.div`
  z-index: 1;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Call = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`;
const Nav = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  width: 75px;
  justify-content: space-between;
`;
const Navigator = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  button {
    border: none;
    background-color: var(--blue);
    color: white;
    height: 40px;
    width: 150px;
    border-radius: 3px;
    font-size: 13px;
  }
`;
const LogoDiv = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;
  img {
    height: 60px;
    width: 170px;
    object-fit: cover;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const Container = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: orange; */
`;
