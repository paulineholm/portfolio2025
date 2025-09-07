import styled from "styled-components";
import RecentProjects from "../components/home/RecentProjects";
import ShortAbout from "../components/home/ShortAbout";
import Stack from "../components/home/Stack";
import Testimonials from "../components/home/Testimonials";
import Welcome from "../components/home/Welcome";
const HomeStyles = styled.main``;
const Home = () => {
  return (
    <HomeStyles>
      <Welcome />
      <ShortAbout />
      <Stack />
      <RecentProjects />
      <Testimonials />
    </HomeStyles>
  );
};

export default Home;
