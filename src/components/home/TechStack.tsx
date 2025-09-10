import { FaReact, FaNpm, FaNode, FaFigma } from "react-icons/fa";
import { SiGithubactions, SiGithubcopilot, SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  AiOutlineKubernetes,
  AiOutlineDotNet,
  AiOutlineDocker,
} from "react-icons/ai";

const TechStack = () => {
  return (
    <section className="w-screen p-[4.5vh_4vw] text-center tracking-wide">
      <div className="text-[6.5dvh] flex flex-wrap justify-center gap-6 pb-5">
        <FaReact className="inline" />
        <RiNextjsFill className="inline" />
        <SiVite className="inline" />
        <BiLogoCss3 className="inline" />
        <BiLogoTailwindCss className="inline" />
        <BiLogoHtml5 className="inline" />
        <BiLogoTypescript className="inline" />
        <BiLogoJavascript className="inline" />
        <FaNpm className="inline" />
        <FaNode className="inline" />
        <SiGithubactions className="inline" />
        <SiGithubcopilot className="inline" />
        <AiOutlineKubernetes className="inline" />
        <AiOutlineDotNet className="inline" />
        <AiOutlineDocker className="inline" />
        <FaFigma className="inline" />
      </div>
      <div className="text-[1.75dvh] mt-2">
        <p>
          In human language: React, Next.js, Vite, CSS, Tailwind, HTML,
          TypeScript, JavaScript, npm, Node.js, GitHub Actions, GitHub Copilot,
          Kubernetes, .NET, Docker, Figma
        </p>
      </div>
    </section>
  );
};

export default TechStack;
