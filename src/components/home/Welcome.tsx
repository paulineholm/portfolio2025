import styled from "styled-components";
import Pauline from "../../assets/img/paulineholm485x485.png";
import PholmTransp from "../../assets/img/pholmtransp.png";
import Button from "../common/Button";
import { motion } from "framer-motion";
const WelcomeStyle = styled.section`
  display: flex;
  width: 100vw;
  padding: 8vh 4vw;
  .welcomeLeft {
    width: 53vw;
    padding: 1vh 5vw 5vh 5vw;
    img {
      border: 5px solid var(--teal);
      border-radius: 50%;
      box-shadow: -10px -10px var(--cherry-blossom-pink),
        10px 10px var(--shimmering-blush);
    }
  }
  .welcomeRight {
    width: 50vw;
    padding: 15vh 1vw;
    .btnflex {
      display: flex;
      padding-top: 5vh;
    }
  }
  @media only screen and (max-width: 768px) {
    //mobile
    display: inline-block;
    .welcomeLeft {
      width: 95vw;
    }
    .welcomeRight {
      width: 95vw;
      padding: 1vh 2vw;
      article {
        text-align: center;
        h1,
        h2 {
          padding-bottom: 1.5vh;
          font-size: 1rem;
        }
      }
      .btnflex {
        display: flex;
        justify-content: center;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    //tablet
    .welcomeRight {
      padding: 1vh 3vw;
      article {
        h1,
        h2,
        h3 {
          padding-bottom: 0.5rem;
        }
        h2 {
          font-size: 1.25rem;
        }
        h3 {
          font-size: 1rem;
        }
      }
    }
  }
  @media only screen and (min-width: 900px) and (max-width: 1100px) {
    //tablet horizontal
    .welcomeRight {
      padding: 6vh 2vw;
    }
  }
`;
const Welcome = () => {
  return (
    <WelcomeStyle>
      <motion.div
        className="welcomeLeft"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.9, type: "ease" }}
      >
        <div>
          <img src={Pauline} alt="Pauline Holm profile" />
        </div>
      </motion.div>
      <div className="welcomeRight">
        <article>
          <h1>Pauline Holm</h1>
          <h2>I am freshly baked Frontend Web Developer</h2>
          <h3>and it is really nice to see you on my website!</h3>
        </article>
        <img src={PholmTransp} alt="logo PH" />
        <div className="btnflex">
          <Button
            text="resume"
            path="https://drive.google.com/file/d/16T2_1vQLReuqni9_ghEalk2pfmaTrI0e/view?usp=sharing"
          />
          <Button text="projects" path="/projects" cherry />
        </div>
      </div>
    </WelcomeStyle>
  );
};

export default Welcome;
