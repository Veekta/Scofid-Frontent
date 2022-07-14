import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
const Button = ({ text }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <ButtonHold data-aos="fade-up">{text}</ButtonHold>;
    </div>
  );
};

export default Button;

const ButtonHold = styled.div`
  background-color: var(--blue);
  color: white;
  padding: 10px 25px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  margin: 10px 0 50px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    background-color: rgba(34, 150, 249, 0.5);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    padding: 10px 25px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 15px;
  }
`;
