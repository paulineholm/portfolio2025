import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import projects from "../assets/data/projects";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((project) => String(project.id) === id);

  return project ? (
    <main className="w-screen py-16">
      <article className="text-center tracking-[2px]">
        <h1 className="leading-8">{project.title}</h1>
        <h2>{project.head}</h2>
      </article>

      <section className="w-[60vw] mx-auto my-12 md:mx-[20vw]">
        <img
          src={project.headimg}
          alt={project.title}
          className="mx-auto my-2 mb-12 rounded-[15px]"
        />

        <article>
          <p className="font-['Lora_Medium'] pb-6">{project.date}</p>
          <p className="leading-[1.7] pb-20">{project.desc}</p>
          <div className="text-[1.2rem] leading-[2.2]">
            Made with:{" "}
            <span className="inline-flex items-center">{project.stack}</span>
          </div>
          <br />
          <div className="mt-10">
            {project.link ? (
              <a
                href={project.link}
                className="text-[1.9rem] text-[--teal] mx-2 hover:text-[--shimmering-blush]"
              >
                <SiNetlify />
              </a>
            ) : (
              <span>project not deployed, as it works with local API</span>
            )}
            <a
              href={project.github}
              className="text-[1.9rem] text-[--teal] mx-2 hover:text-[--shimmering-blush]"
            >
              <FaGithub />
            </a>
          </div>
        </article>
      </section>

      <div className="flex mx-[10vw] my-28 lg:flex-row md:flex-col sm:flex-col">
        {project.mockups.map((img) => (
          <img
            key={img}
            src={img}
            alt={project.title}
            className="w-[30vw] h-[50vh] rounded-[15px] mx-2 my-1
                     md:w-[65vw] md:h-[45vh] md:mx-auto
                     sm:w-[90vw] sm:h-[45vh] sm:mx-4"
          />
        ))}
      </div>
    </main>
  ) : (
    "No project found"
  );
};

export default Project;
