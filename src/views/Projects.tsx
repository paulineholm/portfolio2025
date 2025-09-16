import { useEffect, useRef } from "react";
import { addAnimation } from "../utils/helpers";
import PageHead from "../components/common/PageHead";
import ProjectsMasonry from "../components/projects/ProjectsMasonry";
const Projects = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation(bgRef.current, "animate-slideInRight", 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        ref={bgRef}
        className="absolute my-[2.5dvh] ml-[2.5dvh] top-0 left-0 w-full h-full bg-[var(--color-thina)] -z-10 opacity-0"
      />
      <PageHead headline="all projects" />
      <ProjectsMasonry />
    </div>
  );
};

export default Projects;
