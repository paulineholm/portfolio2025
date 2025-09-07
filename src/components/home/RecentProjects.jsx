import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionHead from "./SectionHead";
import { Link } from "react-router-dom";
import projects from "../../assets/data/projects";
const RecentProjectStyle = styled.section`
  width: 100vw;
  padding: 4vh 4vw;
  background: var(--shimmering-blush);
  .swiper-slide {
    margin-bottom: 5vh;
    margin-top: 2.5vh;
  }
  .swiper-pagination {
    --swiper-theme-color: var(--teal);
    --swiper-pagination-bullet-inactive-color: white;
    --swiper-pagination-bullet-inactive-opacity: 1;
    bottom: 0;
  }
  .overlayContainer {
    position: relative;
    img {
      border-radius: 10px;
      width: 22vw;
      margin-left: 5vw;
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
    width: 22vw;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #fdfff7e6;
    border-radius: 10px;
    margin-left: 5vw;
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
    color: var(--cherry-blossom-pink);
    :hover {
      color: var(--shimmering-blush);
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
    .overlay {
      width: 85vw;
      margin-left: 4vw;
    }
    .overlayContainer {
      img {
        width: 85vw;
        margin-left: 4vw;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    //tablet
    padding: 2vh 2vw;
    .overlayContainer {
      img {
        width: 40vw;
        margin-left: 3vw;
      }
    }
    .overlay {
      width: 40vw;
      margin-left: 3vw;
    }
  }
  @media only screen and (min-width: 900px) and (max-width: 1100px) {
    //tablet horizontal
    padding: 2vh 2vw;
    .overlayContainer {
      img {
        width: 25vw;
        margin-left: 2vw;
      }
    }
    .overlay {
      width: 25vw;
      margin-left: 2vw;
    }
  }
`;
const RecentProjects = () => {
  return (
    <RecentProjectStyle>
      <SectionHead cherry={true} text="my recent works" />
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {projects.slice(0, 4).map((project) => (
          <SwiperSlide>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </RecentProjectStyle>
  );
};

export default RecentProjects;
