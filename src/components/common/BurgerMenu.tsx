import { slide as Menu } from "react-burger-menu";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenu = () => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "36px",
      right: "24px",
      top: "24px",
    },
    bmCrossButton: {
      right: "24px",
      top: "24px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0",
    },
    bmMenu: {
      background: "#FDFFF7",
      padding: "2rem",
    },
    bmItemList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <nav className="fixed top-0 w-screen h-[10vh] bg-baby-powder z-[1000] shadow-[0_-8px_20px_rgba(219,133,146,0.45)]">
      <Menu
        styles={styles}
        customBurgerIcon={
          <IoMenuSharp
            size={28}
            className="text-cherry-blossom-pink hover:scale-110 transition-transform duration-200"
          />
        }
        customCrossIcon={
          <AiOutlineClose
            size={28}
            className="text-cherry-blossom-pink hover:scale-110 transition-transform duration-200"
          />
        }
        right
        width={"100vw"}
      >
        <a
          id="home"
          className="block text-cherry-blossom-pink text-2xl uppercase tracking-wider py-7 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
          href="/"
        >
          Home
        </a>
        <a
          id="about"
          className="block text-cherry-blossom-pink text-2xl uppercase tracking-wider py-7 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
          href="/about"
        >
          About
        </a>
        <a
          id="projects"
          className="block text-cherry-blossom-pink text-2xl uppercase tracking-wider py-7 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
          href="/projects"
        >
          Projects
        </a>
        <a
          id="contact"
          className="block text-cherry-blossom-pink text-2xl uppercase tracking-wider py-7 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
          href="/contact"
        >
          Contact
        </a>
      </Menu>
    </nav>
  );
};

export default BurgerMenu;
