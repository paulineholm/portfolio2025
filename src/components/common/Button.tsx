import styled from "styled-components";
import { motion } from "framer-motion";
const BtnStyle = styled.button`
  cursor: grab;
  padding: 1.5vh 2.5vw;
  margin-right: 2vw;
  border: 2px solid
    ${(props) =>
      props.cherry
        ? "var(--cherry-blossom-pink)"
        : props.teal
        ? "var(--teal)"
        : props.blue
        ? "var(--usafa-blue)"
        : "var(--shimmering-blush)"};
  border-radius: 15px;
  background: var(--baby-powder);
  :hover {
    background: ${(props) =>
      props.cherry
        ? "var(--shimmering-blush)"
        : props.teal
        ? "var(--usafa-blue)"
        : props.blue
        ? "var(--teal)"
        : "var(--cherry-blossom-pink)"};
  }
  a {
    color: black;
  }
  @media only screen and (max-width: 768px) {
    width: 40vw;
    text-align: center;
  }
`;
const Button = ({
  text = "text",
  path = "path",
  cherry = false,
  teal = false,
  blue = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, type: "ease" }}
    >
      <a href={path}>
        <BtnStyle cherry={cherry} teal={teal} blue={blue}>
          {text}
        </BtnStyle>
      </a>
    </motion.div>
  );
};

export default Button;
