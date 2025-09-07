import styled from "styled-components";
import { Link } from "react-router-dom";
import PHCafe from "../../assets/img/paulineholmcafe.png";
import SoMe from "../common/SoMe";
import { motion } from "framer-motion";
const IntroStyle = styled.section`
  display: flex;
  width: 100vw;
  height: 90vh;
  article {
    padding: 5vh 7.5vw;
    line-height: 1.5ß;
    h1 {
      font-family: "Lora Regular";
      text-transform: uppercase;
      font-weight: 500;
    }
    h2 {
      font-family: "Lora Italic";
      font-weight: 100;
    }
    h3 {
      padding-top: 1.75rem;
      padding-bottom: 0.4rem;
    }
    p {
      padding-top: 1.5rem;
      line-height: 2.15;
      letter-spacing: 0.25px;
    }
    a {
      color: var(--shimmering-blush);
      :hover {
        color: var(--cherry-blossom-pink);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    //mobile
    height: 150vh;
    article {
      padding: 8vh 8vw;
    }
    img {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    //tablet
    height: 67.5vh;
    article {
      padding: 8vh 8vw;
    }
    img {
      display: none;
    }
  }
  @media only screen and (min-width: 900px) and (max-width: 1100px) {
    //tablet horizontal
    height: 77.5vh;
    img {
      display: none;
    }
  }
`;
const Intro = () => {
  return (
    <IntroStyle>
      <motion.img
        src={PHCafe}
        alt="Pauline Holm"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "ease" }}
      />
      <div>
        <article>
          <h1>Pauline Holm</h1>
          <h2>from a Polish island to Copenhagen, Denmark</h2>
          <p>
            Outgoing, energetic and very ambitious young professional with an
            international background.
            <br />
            I am a T-shaped individual - specialised in web development (React),
            but I can also many other different things. I am very adaptive to
            the new environments, and always open for meeting new people. As a
            person I am very helpful, smiling and supportive. Besides, I thrive
            being challenged and love learning new things and systems.
            <br />
            <br />
            I have a years-long background in the restaurant industry - all from
            dishwashing, making drinks to running the floor. Soon to be studying
            my masters in IT, learning and organisational change! I also have a
            supplementary vocational education in Web development in my pocket -
            corona decision, and i love it so much now 👩🏻‍💻❤️!
            <br />
            <br />
            Daily working as a waiter and freelance translator, always looking
            for new opportunities!
          </p>
          <h3>Scroll down to get to know me better</h3>
          <Link to="/projects">or see my works</Link>
          <br />
          <br />
          <SoMe pinky />
        </article>
      </div>
    </IntroStyle>
  );
};

export default Intro;
