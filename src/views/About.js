import styled from "styled-components";
import FunFacts from "../components/about/FunFacts";
import Intro from "../components/about/Intro";
import Personality from "../components/about/Personality";
/* import Story from "../components/about/Story"; */
import TimeLine from "../components/about/TimeLine";
import Stack from "../components/home/Stack";
const AboutStyles = styled.main``;
const About = () => {
  return (
    <AboutStyles>
      <Intro />
      <TimeLine />
      <Stack />
      <FunFacts />
      <Personality />
      {/* <Story /> */}
    </AboutStyles>
  );
};

export default About;
