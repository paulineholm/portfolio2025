import FunFacts from "../components/about/FunFacts";
import Intro from "../components/about/Intro";
import Personality from "../components/about/Personality";
/* import Story from "../components/about/Story"; */
import TimeLine from "../components/about/TimeLine";
import TechStack from "../components/home/TechStack";
const About = () => {
  return (
    <>
      <Intro />
      <TimeLine />
      <TechStack />
      <FunFacts />
      <Personality />
      {/* <Story /> */}
    </>
  );
};

export default About;
