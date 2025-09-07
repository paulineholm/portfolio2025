import styled from "styled-components";
import projects from "../assets/data/projects";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
const ProjectStyles = styled.main`
  width: 100vw;
  padding: 4vh 0vw;
  article:first-child {
    text-align: center;
    letter-spacing: 2px;
    h1 {
      line-height: 2;
    }
  }
  section {
    width: 60vw;
    margin: 3vh 20vw;
    img {
      margin: 0.5vh auto 3vh;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 15px;
    }
    article {
      p:first-child {
        font-family: "Lora Medium";
        padding-bottom: 1.5vh;
      }
      p {
        line-height: 1.7;
        padding-bottom: 5vh;
      }
      .stack {
        font-size: 1.2rem;
        line-height: 2.2;
        svg {
          margin-right: 5px;
          font-size: 1.5rem;
        }
      }
      a {
        font-size: 1.9rem;
        color: var(--teal);
        margin: 2.5vh 0.5vw;
        :hover {
          color: var(--shimmering-blush);
        }
      }
    }
  }
  .mockups {
    display: flex;
    margin: 7vh 10vw;
    img {
      width: 30vw;
      height: 50vh;
      border-radius: 15px;
      margin: 1vh 0.5vw;
    }
  }
  @media only screen and (max-width: 1000px) {
    //mobile&tablet
    article:first-child {
      text-align: center;
      letter-spacing: 2px;
      h1 {
        line-height: 2;
        font-size: 1.75rem;
      }
      padding-left: 3vw;
      padding-right: 3vw;
    }
    section {
      width: 90vw;
      margin: 3vh 5vw;
    }
    .mockups {
      display: block;
      margin: 5vh 5vw;
      img {
        width: 90vw;
        height: 45vh;
        border-radius: 15px;
        margin: 1.5vh 1vw;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    //tablet adjustments
    .mockups {
      margin: 5vh 17.5vw;
      img {
        width: 65vw;
        height: 45vh;
        border-radius: 15px;
        margin: 1.5vh 0.5vw;
      }
    }
  }
  @media only screen and (min-width: 900px) and (max-width: 1100px) {
    //tablet horizontally
    .mockups {
      margin: 5vh 1vw;
      img {
        width: 60vw;
        height: 40vh;
      }
    }
  }
`;
const Project = () => {
  const { id } = useParams();
  const project = projects.find((project) => String(project.id) === id);
  return project ? (
    <ProjectStyles>
      <article>
        <h1>{project.name}</h1>
        <h2>{project.head}</h2>
      </article>
      <section>
        <img src={project.headimg} alt={project.name} />
        <article>
          <p>{project.date}</p>
          <p>{project.desc}</p>
          <div className="stack">Made with: {project.stack}</div>
          <br />
          {project.link ? (
            <a href={project.link}>
              <SiNetlify />
            </a>
          ) : (
            "project not deployed, as it works with local API"
          )}
          <a href={project.github}>
            <FaGithub />
          </a>
        </article>
      </section>
      <div className="mockups">
        {project.mockups.map((img) => (
          <img src={img} alt={project.name} />
        ))}
      </div>
    </ProjectStyles>
  ) : (
    "No project found"
  );
};

export default Project;
