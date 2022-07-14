import React, { useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = ({
  pageTitle,
  d1,
  d1to,
  d2to,
  d2,
  animate,
  animate2,
  animate3,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <HeroHold>
      <PageTitle data-aos="fade-up">{pageTitle}</PageTitle>
      <Direction>
        <Link to={d1to} style={{ color: "white", textDecoration: "none" }}>
          <span>{d1}</span>
        </Link>

        <IoIosArrowRoundForward fontSize="20px" style={{ margin: "0 5px" }} />
        <Link to={d2to} style={{ color: "white", textDecoration: "none" }}>
          <span>{d2}</span>
        </Link>
      </Direction>
    </HeroHold>
  );
};

export default Hero;

const HeroHold = styled.div`
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

const PageTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 425px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const Direction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  //   justify-content: center;
`;
