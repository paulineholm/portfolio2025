import styled from "styled-components";
import Cafe from "../assets/img/cafe.jpeg";
const ContactStyles = styled.main`
  width: 100vw;
  padding: 5vh 4vw;
  text-align: left;
  display: flex;
  img {
    width: 40vw;
    border: 2px solid var(--cherry-blossom-pink);
    border-radius: 5px;
    margin-left: 2vw;
  }
  div {
    padding: 25vh 7.5vw;
    width: 50vw;
    h1 {
      line-height: 2;
    }
    p:nth-child(2) {
      line-height: 1.55;
    }
  }
  .links {
    font-weight: 700;
    color: var(--shimmering-blush);
    letter-spacing: 1.7px;
    a {
      color: var(--shimmering-blush);
      :hover {
        color: var(--usafa-blue);
      }
    }
  }
  @media only screen and (max-width: 820px) {
    //mobile&tablet
    img {
      display: none;
    }
    div {
      padding: 25vh 4vw;
      width: 100vw;
    }
    .links {
      font-weight: 500;
      letter-spacing: 1.7px;
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactStyles>
      <img src={Cafe} alt="Cafe, Krystalgade" />
      <div>
        <h1>say hi!</h1>
        <p>
          I am always open for new challenges.
          <br />
          Reach out and let's have a coffee ☕
        </p>
        <br />
        <p className="links">
          <a href="mailto:frk.paulineholm@gmail.com">
            frk.paulineholm@gmail.com
          </a>{" "}
          / <a href="https://www.linkedin.com/in/paulineholm/">LinkedIn</a> /{" "}
          <a href="https://www.instagram.com/frk.holminka/">Instagram</a>
        </p>
      </div>
    </ContactStyles>
  );
};

export default Contact;
