import styled from "styled-components";
const SectionHeadStyle = styled.h2`
  color: ${(props) =>
    props.cherry
      ? "var(--cherry-blossom-pink)"
      : props.blue
      ? "var(--usafa-blue)"
      : props.teal
      ? "var(--teal)"
      : "var(--shimmering-blush)"};
  text-align: center;
  padding: 1.5rem;
`;
const SectionHead = ({
  text = "section head",
  cherry = false,
  teal = false,
  blue = false,
}) => {
  return (
    <SectionHeadStyle cherry={cherry} teal={teal} blue={blue}>
      {text}
    </SectionHeadStyle>
  );
};

export default SectionHead;
