import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavStyles = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  position: sticky;
  top: 0;
  padding: 4vh 4vw;
  background: var(--baby-powder);
  z-index: 2;
  /*   -webkit-box-shadow: 1px -9px 18px 3px rgba(193, 193, 193, 0.64);
  box-shadow: 1px -9px 18px 3px rgba(193, 193, 193, 0.64); */
  -webkit-box-shadow: 1px -13px 18px 3px rgba(219, 133, 146, 0.64);
  box-shadow: 1px -13px 18px 3px rgba(219, 133, 146, 0.64);
  .navLeft {
    width: 40vw;
    color: var(--shimmering-blush);
  }
  .navRight {
    width: 60vw;
    text-align: end;
    a {
      color: var(--cherry-blossom-pink);
      letter-spacing: 0.07rem;
      padding: 0rem 2.5rem;
      text-transform: uppercase;
    }
    .active {
      color: var(--teal);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
    .navRight {
      display: none;
    }
  }
`;
const NavMenu = () => {
  return (
    <NavStyles>
      <div className="navLeft">👩🏻‍💻 Pauline Holm</div>
      <ul className="navRight">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </NavStyles>
  );
};

export default NavMenu;
