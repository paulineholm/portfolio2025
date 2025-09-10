import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SoMe = () => {
  return (
    <div className="flex justify-center gap-4">
      <a
        href="https://www.instagram.com/frk.holminka/"
        className="hover:text-accent"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/paulineholm/"
        className="hover:text-accent"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/paulineholm" className="hover:text-accent">
        <FaGithub />
      </a>
    </div>
  );
};

export default SoMe;
