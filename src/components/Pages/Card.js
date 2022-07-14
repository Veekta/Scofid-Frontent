import React from "react";
import styled from "styled-components";
import { GiFamilyHouse } from "react-icons/gi";

export const Card = (props) => {
  return (
    <Container data-aos={props.aos}>
      <Wrapper>
        <Icon>
          <img src={props.Icon} />
        </Icon>
        <p>{props.title}</p>
        <Info>{props.desc}</Info>
      </Wrapper>
    </Container>
  );
};
export const Card3 = (props) => {
  return (
    <Holder2>
      <ImageHold>
        <img src={props.Image} />
      </ImageHold>
      <Name>{props.Title}</Name>
    </Holder2>
  );
};
export const Card4 = () => {
  return <Products></Products>;
};
const Holder2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    margin: 20px 0;
  }
`;
const Name = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: 500;
`;
const Products = styled.div``;

const ImageHold = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  margin: 0 15px;
  img {
    width: 100%;
    border-radius: 5px;
    height: 285px;
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: center;
  }
`;
const Info = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 18px;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 16px;
    font-weight: 500;
    font-family: var(--mont);
    color: #001733;
    text-align: center;
  }
`;
const Container = styled.div`
  height: 250px;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 10px 15px;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;
