import React from "react";
import styled from "styled-components";
const Card = ({ img, title, desc }) => {
  return (
    <CardHold data-aos="fade-up">
      <Image>
        <img src={img} alt="plumber" />
      </Image>
      <Title>{title}</Title>
      <Line></Line>
      <Description>{desc}</Description>
    </CardHold>
  );
};

export default Card;

const CardHold = styled.div`
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
  margin: 10px 0;
`;

const Line = styled.div`
  background-color: var(--red);
  width: 30px;
  height: 2px;
`;

const Description = styled.div`
  color: var(--tiny);
  font-size: 16px;
  margin: 10px 0;
  // width: 80%;
  line-height: 1.6em;
  font-family: var(--nun);
`;
