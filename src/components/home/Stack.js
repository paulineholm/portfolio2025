import styled from "styled-components";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNpm,
  FaNode,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
const StackStyle = styled.section`
  text-align: center;
  font-size: 3.5rem;
  width: 100vw;
  padding: 4.5vh 4vw;
  svg {
    margin: 0 1.5rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    //tablet
    font-size: 2.5rem;
    padding: 3vh 4vw;
  }
`;
const Stack = () => {
  return (
    <StackStyle>
      <FaReact />
      <FaCss3Alt />
      <FaHtml5 />
      <FaJsSquare />
      <FaNpm />
      <FaNode />
      <FaFigma />
      <FaWordpress />
      <SiAdobephotoshop />
    </StackStyle>
  );
};

export default Stack;
