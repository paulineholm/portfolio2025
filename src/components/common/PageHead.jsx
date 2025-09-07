import styled from "styled-components";
const PageHeadStyle = styled.h1`
  text-align: center;
  margin-top: 5vh;
`;
const PageHead = ({ headline }) => {
  return <PageHeadStyle>{headline}</PageHeadStyle>;
};

export default PageHead;
