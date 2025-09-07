import styled from "styled-components";
import { Link } from "react-router-dom";
import SoMe from "./SoMe";
const FooterStyles = styled.footer`
  width: 100vw;
  height: 20vh;
  bottom: 0;
  color: var(--baby-powder);
  background: var(--teal);
  text-align: center;
  padding: 4vh 4vw;
  line-height: 1.6;

  .contactLink {
    color: var(--shimmering-blush);
    font-family: "Lora Medium";
    :hover {
      color: var(--cherry-blossom-pink);
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <SoMe />
      <Link to="/contact" className="contactLink">
        get in touch
      </Link>
      <p>2022 © Handcrafted with love by Pauline Holm 🌸</p>
    </FooterStyles>
  );
};

export default Footer;
