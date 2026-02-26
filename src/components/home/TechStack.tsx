import { FaReact, FaNpm, FaNode, FaFigma } from "react-icons/fa";
import {
  SiGithubactions,
  SiJfrog,
  SiVite,
  SiContentful,
  SiVercel,
  SiNetlify,
  SiCypress,
  SiClaude,
  SiJira,
  SiNotion,
  SiConfluence,
  SiHuggingface,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import {
  AiOutlineKubernetes,
  AiOutlineDotNet,
  AiOutlineDocker,
} from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";

const TechStack = () => {
  return (
    <section className="w-screen text-center tracking-wide my-[7dvh] px-[4vw]">
      <div className="text-[6.5dvh] flex flex-wrap justify-center gap-6 pb-5">
        <FaReact />
        <RiNextjsFill />
        <SiVite />
        <BiLogoTailwindCss />
        <BiLogoTypescript />
        <FaNpm />
        <FaNode />
        <SiGithubactions />
        <SiJfrog />
        <AiOutlineKubernetes />
        <AiOutlineDotNet />
        <CgCPlusPlus />
        <AiOutlineDocker />
        <SiContentful />
        <SiVercel />
        <SiNetlify />
        <SiCypress />
        <SiClaude />
        <SiHuggingface />
        <SiJira />
        <SiConfluence />
        <SiNotion />
        <FaFigma />
      </div>
      <div className="text-[1.75dvh] mt-2">
        <p>
          Tech & tools in human language: React, Next.js, Vite, Tailwind,
          TypeScript, npm, Node.js, GitHub Actions, JFrog, Kubernetes, .NET,
          C++,Docker, Contentful, Vercel, Netlify, Cypress, Claude, HuggingFace,
          Jira, Confluence, Notion, Figma + Tuta & Cursor
        </p>
      </div>
    </section>
  );
};

export default TechStack;
