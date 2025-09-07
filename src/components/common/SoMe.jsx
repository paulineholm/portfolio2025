import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const SoMeStyle = styled.div`
  a {
    color: var(--baby-powder);
    padding: 0 0.5rem;
    :hover {
      color: var(--usafa-blue);
    }
  }
`;
const SoMe = () => {
  return (
    <SoMeStyle>
      <a href="https://www.instagram.com/frk.holminka/">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/paulineholm/">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/paulineholm">
        <FaGithub />
      </a>
    </SoMeStyle>
  );
};

export default SoMe;
