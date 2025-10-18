import { Link } from "react-router-dom";
import SoMe from "./SoMe";

const Footer = () => {
  return (
    <footer className="w-screen bottom-0 text-primary bg-neutral text-center py-[4vh] px-[4vw] leading-relaxed">
      <SoMe />
      <Link to="/contact" className="hover:text-accent">
        get in touch
      </Link>
      <p>2025 © Handcrafted with ♡ by Pauline Holm 🌸</p>
    </footer>
  );
};

export default Footer;
