import FunFacts from "../components/about/FunFacts";
import Intro from "../components/about/Intro";
import TimeLine from "../components/about/TimeLine";
import Divider from "../components/common/Divider";
import TechStack from "../components/home/TechStack";
import VideoFrame from "../components/about/VideoFrame";
const About = () => {
  return (
    <>
      <Intro />
      <TimeLine />
      <Divider />
      <TechStack />
      <Divider />
      <FunFacts />
      <Divider />
      <VideoFrame />
    </>
  );
};

export default About;
