import { useEffect, useRef } from "react";
import SectionHead from "./SectionHead";
import { Link } from "react-router-dom";
import projects from "../../assets/data/projects";

interface ProjectType {
  id: string;
  img: string;
  title: string;
  head: string;
}

const EngineeringHighlights = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the position data from the data attribute
            const position = entry.target.getAttribute("data-position");
            // Add the appropriate animation class
            entry.target.classList.add(
              position === "left" ? "animate-slideLeft" : "animate-slideRight"
            );
            // Unobserve after animation is triggered
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "50px", // Start animation slightly before element comes into view
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
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-xl">
                      <h2 className="text-lg font-bold text-white">
                        {project.title}
                      </h2>
                      <p className="text-gray-200 mt-2 text-sm line-clamp-2">
                        {project.head}
                      </p>
                      <div className="mt-3">
                        <Link
                          to={`/project/${project.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
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
