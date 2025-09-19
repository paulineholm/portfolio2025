import { useEffect, useRef } from "react";
import SectionHead from "./SectionHead";
import Project from "../common/Project";
import projects from "../../assets/data/projects";

interface ProjectType {
  id: string;
  img: string;
  title: string;
  head: string;
  date: string;
  stackTxt: string;
  stack: React.ReactNode;
  meta: string;
}

const EngineeringHighlights = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const position = entry.target.getAttribute("data-position");
            entry.target.classList.add(
              position === "left" ? "animate-slideLeft" : "animate-slideRight"
            );
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    // Get all project elements
    const projectElements = document.querySelectorAll(".project-item");
    projectElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section className="pb-10">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 max-w-6xl">
        <SectionHead text="✨ engineering highlights ✨" />
        <div className="flex flex-col gap-5 w-full">
          {projects
            .slice(0, 6)
            .reduce((rows: any[], project, index) => {
              if (index % 2 === 0) {
                rows.push([project, projects[index + 1]]);
              }
              return rows;
            }, [])
            .map((pair, rowIndex) => (
              <div key={rowIndex} className="flex gap-5 w-full">
                {pair.map((project: ProjectType, index: number) => (
                  <div
                    key={project.id}
                    className={`project-item opacity-0 group relative rounded-xl overflow-hidden ${
                      rowIndex % 2 === 0
                        ? index === 0
                          ? "w-4/10"
                          : "w-6/10"
                        : index === 0
                        ? "w-6/10"
                        : "w-4/10"
                    }`}
                    data-position={index === 0 ? "left" : "right"}
                  >
                    <figure className="rounded-xl overflow-hidden w-full h-full aspect-[16/9]">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <Project
                      id={project.id}
                      title={project.title}
                      date={project.date}
                      stackTxt={project.stackTxt}
                      stack={project.stack}
                      meta={project.meta}
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringHighlights;
