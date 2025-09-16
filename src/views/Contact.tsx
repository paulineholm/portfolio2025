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
        <article className="w-[62.5dvh] md:ml-[5dvw] flex flex-col justify-center">
          <h1 className="leading-relaxed">say hi!</h1>
          <p className="leading-normal">
            I am always open for new challenges.
            <br />
            Reach out and let's have a coffee ☕
          </p>
          <br />
          <p className="my-[2.5dvh] md:font-medium tracking-[1.7px] text-[var(--color-midnight)]">
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
              href="https://drive.google.com/file/d/1ZPTT8bUznylqtvIqSltd1-q346UOtbxD/view?usp=share_link"
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
