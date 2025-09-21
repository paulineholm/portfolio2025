import { useParams } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";
import projects from "../assets/data/projects";
import { useRef, useEffect } from "react";
import { addAnimation } from "../utils/helpers";
import PageHead from "../components/common/PageHead";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((project) => String(project.id) === id);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation(bgRef.current, "animate-slideInRight", 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        ref={bgRef}
        className="absolute my-[2.5dvh] top-0 left-0 w-full h-full bg-[var(--color-thina)] -z-10 opacity-0 lg:ml-[2.5dvh]"
      />
      {project ? (
        <main className="w-screen py-16">
          <article className="text-center leading-relaxed">
            <PageHead headline={project.title} />
            <h2 className="max-md:px-1 max-md:pt-1.5 max-md:text-sm">
              {project.head}
            </h2>
          </article>

          <section className="w-[80%] max-w-[800px] mx-auto my-[5dvh]">
            <img
              src={project.headimg}
              alt={project.title}
              className="w-full max-w-[500px] h-auto mx-auto block my-2 mb-10 rounded-[15px]"
            />

            <article>
              <p className="pb-[1dvw] text-[1.9dvh] font-semibold">
                | {project.date} |
              </p>
              <p className="leading-normal pb-[4dvh]">{project.desc}</p>
              <div className="text-[1.5dvh]">
                Made with:{" "}
                <span className="inline-flex items-center text-2xl">
                  {project.stack}
                </span>
                <br />
                <span className="inline-flex items-center text-sm">
                  {project.stackTxt}
                </span>
              </div>
              <br />
              <div className="flex flex-row justify-start my-[1dvh]">
                {!project.stackTxt.includes("Figma") && (
                  <a
                    href={project.github}
                    className="text-[3dvh] text-[var(--color-midnight)] mx-1 hover:text-[var(--color-freshLime)]"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.link ? (
                  <a
                    href={project.link}
                    className="text-[3dvh] text-[var(--color-midnight)] mx-1 hover:text-[var(--color-freshLime)]"
                  >
                    <FaLink />
                  </a>
                ) : (
                  <span className="max-md:text-xs">
                    project not deployed, as it works with local API
                  </span>
                )}
              </div>
            </article>
          </section>

          <div className="flex flex-wrap justify-center items-center mx-[4vw] my-[2.5dvh] gap-3">
            {project.mockups.map((img) => (
              <img
                key={img}
                src={img}
                alt={project.title}
                className="rounded-[15px] w-[calc(33.33% - 12px)] object-cover h-[40vh]
               md:w-[calc(100% - 12px)] md:h-[45vh]
               sm:w-[calc(100% - 12px)] sm:h-[45vh]"
              />
            ))}
          </div>
        </main>
      ) : (
        "No project found"
      )}
    </div>
  );
};

export default Project;
