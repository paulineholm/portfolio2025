import styled from "styled-components";
import ErrorImg from "../assets/img/error.jpeg";
const ErrorStyle = styled.main`
  display: flex;
  padding: 5vh 10vw;
  img {
    width: 30vw;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid var(--shimmering-blush);
  }
  p {
    width: 50vw;
    padding: 30vh 2vw;
    text-align: center;
    line-height: 2.3;
    a {
      color: var(--cherry-blossom-pink);
    }
  }
`;
const Error = () => {
  return (
    <ErrorStyle>
      <img src={ErrorImg} alt="Error, wrong path" />
      <p>
        Uuups, it is a wrong path!
        <br />
        Come back{" "}
        <a href="/">
          <b>home</b>
        </a>
      </p>
    </ErrorStyle>
  );
};

export default Error;
