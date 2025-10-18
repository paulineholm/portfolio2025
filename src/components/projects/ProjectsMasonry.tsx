import projects from "../../assets/data/projects";
import Masonry from "react-masonry-css";
import ProjectCard from "../common/ProjectCard";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  900: 2,
  500: 1,
};

const ProjectsMasonry = () => {
  return (
    <main>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="p-[4vh_4vw] flex w-screen"
        columnClassName="!flex flex-col"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative mx-[0.8dvw] my-[1.5dvh] max-md:pl-5"
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-[10px] w-[40vw] h-[40vh] object-cover
                       max-md:w-full lg:w-[45vw]"
            />
            <ProjectCard
              id={project.id.toString()}
              title={project.title}
              date={project.date}
              stackTxt={project.stackTxt}
              stack={project.stack}
              meta={project.meta}
            />
          </div>
        ))}
      </Masonry>
    </main>
  );
};

export default ProjectsMasonry;
