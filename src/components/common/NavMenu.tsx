import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav
      className="
        w-screen h-[10vh] flex sticky top-0 px-[4vw] py-[4vh] z-20
        shadow-[1px_-13px_18px_3px_rgba(219,133,146,0.64)]
      "
    >
      <div className="w-[40vw] text-[var(--shimmering-blush)]">
        👩🏻‍💻 Pauline Holm
      </div>
      <ul className="w-[60vw] text-end hidden md:block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `uppercase tracking-[0.07rem] px-10 text-[var(--cherry-blossom-pink)] ${
              isActive ? "text-[var(--teal)]" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `uppercase tracking-[0.07rem] px-10 text-[var(--cherry-blossom-pink)] ${
              isActive ? "text-[var(--teal)]" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `uppercase tracking-[0.07rem] px-10 text-[var(--cherry-blossom-pink)] ${
              isActive ? "text-[var(--teal)]" : ""
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `uppercase tracking-[0.07rem] px-10 text-[var(--cherry-blossom-pink)] ${
              isActive ? "text-[var(--teal)]" : ""
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
