import styled from "styled-components";
import { Link } from "react-router-dom";
import projects from "../../assets/data/projects";
import Masonry from "react-masonry-css";
const ProjectMasonryStyle = styled.main`
  .my-masonry-grid {
    padding: 4vh 4vw;
    display: flex;
    width: 100vw;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
  }
  .overlayContainer {
    position: relative;
    margin: 2.7vh 0.7vw;
    img {
      border-radius: 10px;
      width: 40vw;
      height: 40vh;
    }
  }
  .overlay {
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #fbaec0e6;
    border-radius: 10px;
  }
  .overlayContainer:hover .overlay {
    opacity: 1;
  }
  .overlayText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    :hover {
      color: var(--teal);
    }
    p {
      font-weight: 700;
      letter-spacing: 2px;
      font-size: 1.2rem;
      font-family: "Roboto Light";
    }
    svg {
      font-size: 3rem;
      padding: 5px;
    }
  }
  @media only screen and (max-width: 768px) {
    //mobile
    .overlayContainer {
      margin: 4.5vh 2vw;
      img {
        border-radius: 10px;
        width: 100vw;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    //tablet
    .overlayContainer {
      margin: 1vh 1vw;
      img {
        border-radius: 10px;
        width: 90vw;
      }
    }
    .my-masonry-grid {
      padding: 2vh 2vw;
      display: flex;
    }
  }
  @media only screen and (min-width: 900px) and (max-width: 1100px) {
    //tablet horizontally
    .overlayContainer {
      margin: 1vh 1vw;
      img {
        border-radius: 10px;
        width: 45vw;
      }
    }
    .my-masonry-grid {
      padding: 2vh 2vw;
      display: flex;
    }
  }
`;
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  900: 2,
  500: 1,
};
const ProjectsMasonry = () => {
  return (
    <ProjectMasonryStyle>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((project) => (
          <div key={project.id} className="overlayContainer">
            <img src={project.img} alt={project.name} />
            <Link to={`/project/${project.id}`} className="overlay">
              <article className="overlayText">
                <p>{project.name}</p>
                <br />
                <span>{project.stack}</span>
              </article>
            </Link>
          </div>
        ))}
      </Masonry>
    </ProjectMasonryStyle>
  );
};

export default ProjectsMasonry;
