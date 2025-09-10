import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav
      className="
        absolute top-0 left-0 w-full h-[12vh] flex items-center z-20
        bg-transparent justify-end
      "
    >
      <ul className="w-[60vw] text-end hidden md:block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `uppercase tracking-[0.07rem] px-5 text-[var(--color-negev)] ${
              isActive ? "text-[var(--color-freshLime)]" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `uppercase tracking-[0.07rem] px-5 text-[var(--color-negev)] ${
              isActive ? "text-[var(--color-freshLime)]" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `uppercase tracking-[0.07rem] px-5 text-[var(--color-negev)] ${
              isActive ? "text-[var(--color-freshLime)]" : ""
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `uppercase tracking-[0.07rem] px-5 text-[var(--color-negev)] ${
              isActive ? "text-[var(--color-freshLime)]" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavMenu;
