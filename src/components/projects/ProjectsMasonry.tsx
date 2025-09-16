import { Link } from "react-router-dom";
import projects from "../../assets/data/projects";
import Masonry from "react-masonry-css";

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
          <div key={project.id} className="relative mx-[0.8dvw] my-[1.5dvh]">
            <img
              src={project.img}
              alt={project.title}
              className="rounded-[10px] w-[40vw] h-[40vh] object-cover
                       md:w-[90vw] lg:w-[45vw]
                       sm:w-full"
            />
            <Link
              to={`/project/${project.id}`}
              className="absolute inset-0 opacity-0 hover:opacity-75
           transition-opacity duration-500 bg-[var(--color-midnight)]
           rounded-[10px] p-4 flex flex-col justify-between"
            >
              <div className="flex flex-row justify-between">
                <div className="text-[var(--color-negev)] text-left text-sm">
                  {project.date}
                </div>
                <p className="text-[var(--color-negev)] text-sm [writing-mode:vertical-rl] transform rotate-180 text-right">
                  {project.stackTxt}
                </p>
              </div>

              <article
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             text-[2rem] text-[var(--color-negev)] hover:text-[var(--color-thina)]"
              >
                <p className="font-['Melodrama'] text-center">
                  {project.title}
                </p>
              </article>

              <div className="flex flex-row justify-between items-end">
                <span className="flex flex-row text-[var(--color-negev)] text-2xl">
                  {project.stack}
                </span>
                <div className="text-[var(--color-negev)] text-right text-sm">
                  {project.meta}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </main>
  );
};

export default ProjectsMasonry;
