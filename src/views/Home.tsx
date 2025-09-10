import EngineeringHighlights from "../components/home/EngineeringHighlights";
import TechStack from "../components/home/TechStack";
import Testimonials from "../components/home/Testimonials";
import { Hero } from "../components/home/Hero";
import Divider from "../components/common/Divider";
const Home = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <Divider size="sm" color="thina" />
      <EngineeringHighlights />
      <Divider size="sm" color="thina" />
      <Testimonials />
    </>
  );
};

export default Home;
