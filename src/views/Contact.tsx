import { useRef, useEffect } from "react";
import { addAnimation } from "../utils/helpers";
import Cafe from "../assets/img/cafe.jpeg";

const Contact = () => {
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
      <main className="w-screen p-[5vh_4vw] text-left flex">
        <img
          src={Cafe}
          alt="Cafe, Krystalgade"
          className="w-[37.5dvw] border-2 border-[var(--color-freshLime)] rounded-md ml-[2vw] md:block hidden"
        />
        <article className="w-[62.5dvh] flex flex-col justify-center ml-[5dvh] max-md:h-[75vh] max-md:ml-[2.5dvh]">
          <h1 className="leading-relaxed">don't be a stranger!</h1>
          <p className="leading-normal max-md:pt-5">
            I am always open for new challenges, people and knowledge
            <br />
            Reach out and let's have a coffee ☕
          </p>
          <br />
          <p className="my-[2.5dvh] md:font-medium tracking-[1px] text-[var(--color-midnight)]">
            <a
              href="mailto:pholm@tuta.io"
              className="hover:text-[var(--color-freshLime)]"
            >
              pholm@tuta.io
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/paulineholm/"
              className="hover:text-[var(--color-freshLime)]"
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              href="https://drive.google.com/file/d/1tcbNPqgeSQJujUDcFZ_doFRCjWxIzut_/view"
              className="hover:text-[var(--color-freshLime)]"
            >
              &lt;resume /&gt;
            </a>
          </p>
        </article>
      </main>
    </div>
  );
};

export default Contact;
