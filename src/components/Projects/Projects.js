import React from "react";
import ShortHero from "../ShortHero/Hero";
import Text from "../TextHold/Text";
import styled from "styled-components";
import ProjectsData from "./Projects.json";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <ShortHero
          pageTitle="Projects"
          d1="Home"
          d1to="/"
          d2="Projects"
          d2to="/projects"
        />

        <Main>
          <Text
            one="Our work"
            two="Check Out Our Projects"
            three="Whether your project is large or small, residential or commercial we can deliver a quality project in a timely manner. But nothing the copy said could convince her and so it didn’t take long until."
          />

          <Box>All Projects</Box>

          <Cards>
            {ProjectsData?.map((props) => {
              return (
                <Card key={props.id} data-aos="fade-up">
                  <Image>
                    <img src={props.img} alt="plumber" />
                  </Image>
                  <Title>{props.title}</Title>
                </Card>
              );
            })}
          </Cards>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button text="Contact us now" />
          </Link>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Projects;

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

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-color: var(--grey);
`;

const Box = styled.div`
  background-color: var(--blue);
  color: white;
  padding: 10px 25px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  margin: 10px 0 50px;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    padding: 10px 25px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Cards = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Card = styled.div`
  width: 320px;
  border-radius: 10px;
  margin: 10px 15px;
  //   background-color: white;
  display: flex;
  //   align-items: center;
  justify-content: center;
  flex-direction: column;
  //   text-align: center;
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
  height: 300px;
  margin-bottom: 10px;
  transition: all 350ms;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  font-size: 18px;
  color: var(--darkblue);
  font-weight: 700;
  margin: 10px 0 15px;
`;
