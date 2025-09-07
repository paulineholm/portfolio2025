import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
const BurgerStyles = styled.nav`
  width: 100vw;
  height: 10vh;
  top: 0;
  background: var(--baby-powder);
  z-index: 1;
  /*   -webkit-box-shadow: 1px -9px 18px 3px rgba(193, 193, 193, 0.64);
  box-shadow: 1px -9px 18px 3px rgba(193, 193, 193, 0.64); */
  -webkit-box-shadow: 1px -13px 18px 3px rgba(219, 133, 146, 0.64);
  box-shadow: 1px -13px 18px 3px rgba(219, 133, 146, 0.64);
  .bm-burger-button {
    color: var(--cherry-blossom-pink);
    position: fixed;
    width: 2.5rem;
    right: 1.5rem;
    top: 1.5rem;
    background: var(--baby-powder);
    border-radius: 7.5px;
  }
  .bm-cross-button {
    color: var(--cherry-blossom-pink);
    position: fixed;
    width: 5rem;
  }
  .bm-item-list {
    text-align: center;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    background: #fdfff7e6;
    height: 45vh;
    padding-top: 25vh;
    padding-bottom: 25vw;
  }
  .bm-item {
    color: var(--cherry-blossom-pink);
    padding-top: 1.75rem;
    font-size: 2rem;
  }
  .menu-item {
    :hover {
      color: var(--shimmering-blush);
    }
  }
`;
const BurgerMenu = () => {
  return (
    <BurgerStyles>
      <Menu
        customBurgerIcon={<IoMenuSharp />}
        customCrossIcon={<AiOutlineClose />}
        right
        width={"100vw"}
      >
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="about" className="menu-item" href="/projects">
          Projects
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </BurgerStyles>
  );
};

export default BurgerMenu;
