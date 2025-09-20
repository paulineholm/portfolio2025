import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  date: string;
  stackTxt: string;
  stack: React.ReactNode;
  meta: string;
}

const ProjectCard = ({
  id,
  title,
  date,
  stackTxt,
  stack,
  meta,
}: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${id}`}
      className="absolute inset-0 opacity-0 hover:opacity-75
                 transition-opacity duration-500 bg-[var(--color-midnight)]
                 rounded-[10px] p-4 flex flex-col justify-between"
    >
      <div className="flex flex-row justify-between">
        <div className="text-[var(--color-negev)] text-left text-sm">
          {date}
        </div>
        <p className="text-[var(--color-negev)] text-sm [writing-mode:vertical-rl] transform rotate-180 text-right">
          {stackTxt}
        </p>
      </div>

      <article
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        text-[2rem] text-[var(--color-negev)] hover:text-[var(--color-thina)]"
      >
        <p className="font-['Melodrama'] text-center">{title}</p>
      </article>

      <div className="flex flex-row justify-between items-end">
        <span className="flex flex-row text-[var(--color-negev)] text-2xl">
          {stack}
        </span>
        <div className="text-[var(--color-negev)] text-right text-sm">
          {meta}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
