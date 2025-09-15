import FunFacts from "../components/about/FunFacts";
import Intro from "../components/about/Intro";
import Personality from "../components/about/Personality";
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
    </>
  );
};

export default About;
