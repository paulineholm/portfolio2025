import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const baseStyles =
    "uppercase tracking-[0.09rem] px-5 hover:text-[var(--color-freshLime)] transition-colors duration-300 ease-in-out";

  const getLinkClassStyle = ({ isActive }: { isActive: boolean }) =>
    `${baseStyles} ${
      isActive ? "text-[var(--color-midnight)]" : "text-[var(--color-negev)]"
    }`;

  return (
    <nav
      className="
        absolute top-0 left-0 w-full min-h-[12vh] flex items-center z-20
        bg-transparent justify-end
      "
    >
      <ul className="w-[60vw] text-end hidden md:block">
        <NavLink to="/" end className={getLinkClassStyle}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClassStyle}>
          About
        </NavLink>
        <NavLink to="/projects" className={getLinkClassStyle}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={getLinkClassStyle}>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavMenu;
