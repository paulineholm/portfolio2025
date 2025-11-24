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
        className="absolute my-[2.5dvh] ml-[2.5dvh] top-0 left-0 w-full h-full bg-thina -z-10 opacity-0"
      />
      <main className="w-screen p-[5vh_4vw] text-left flex">
        <img
          src={Cafe}
          alt="Cafe, Krystalgade"
          className="w-[37.5dvw] border-2 border-freshLime rounded-md ml-[2vw] md:block hidden"
        />
        <article className="w-[62.5dvh] flex flex-col justify-center ml-[5dvh] max-md:h-[75vh] max-md:ml-[2.5dvh]">
          <h1 className="leading-relaxed">don't be a stranger!</h1>
          <p className="leading-normal max-md:pt-5">
            I am always open for new challenges, people and knowledge
            <br />
            <a
              href="https://calendly.com/pholm-tuta/30min"
              className="text-negev hover:text-freshLime"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reach out and let's have a coffee ☕
            </a>
          </p>
          <br />
          <p className="my-[2.5dvh] md:font-medium tracking-[1px] text-midnight">
            <a href="mailto:pholm@tuta.io" className="hover:text-freshLime">
              pholm@tuta.io
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/paulineholm/"
              className="hover:text-freshLime"
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              href="https://paulineholm.netlify.app/cv_pholm_itgirl2025.pdf"
              className="hover:text-freshLime"
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
