import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import PHolmGrad from "../../assets/img/pholmgrad.png";
import SoMe from "../common/SoMe";
import { addAnimation } from "../../utils/helpers";

const Intro = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sequence the animations
    addAnimation(bgRef.current, "animate-slideInRight", 0);
    addAnimation(imgRef.current, "animate-fadeIn", 500);
    addAnimation(contentRef.current, "animate-fadeIn", 1000);
  }, []);

  return (
    <section className="relative flex w-screen h-screen overflow-hidden">
      <img
        ref={imgRef}
        src={PHolmGrad}
        alt="Pauline Holm"
        className="h-screen w-auto object-cover opacity-0 transition-opacity duration-1500"
      />
      <div
        ref={bgRef}
        className="absolute mt-[2.5dvh] ml-5 top-0 right-0 h-screen bg-[var(--color-thina)] opacity-0 w-[95%] z-10 lg:w-8/12"
      />
      <div
        ref={contentRef}
        className="absolute opacity-0 z-15 w-full lg:w-8/12 right-0"
      >
        <article className="leading-loose m-[5dvh] lg:m-[15dvh] max-md:text-sm">
          <h1 className="uppercase font-medium max-md:text-2xl">
            Cand. IT. Pauline Holm
          </h1>
          <h2 className="font-light max-md:text-sm">
            Software Engineer & Tech Enthusiast
          </h2>
          <p className="pt-6 leading-relaxed">
            Frontend-focused energetic tech professional driven by learning and
            growth. Dedicated to delivering seamless, efficient, and
            user-friendly digital experiences.
            <br />
            <br />
            I thrive in fast-paced, innovative environments, where curiosity,
            dedication and drive are key. I love being challenged and given
            responsibility. I gain energy from dev-collaboration and
            interactions rooted in tech- and product- development. As a
            colleague I am smiling, supportive, reliable, and always ready to
            help.
            <br />
            <br />
            My career started in the restaurant industry, where, through many
            years, I learned resilience, adaptability and leadership - rising
            from dishwasher to managing the high-paced <i>"show"</i>. For the
            past five years, I've transitioned that same drive and work ethic to
            tech, building my career as a software engineer, and I absolutely
            love it!
            <br />
            <br />
            Currently looking for new opportunities to rock the tech world! 👩🏻‍💻
          </p>
          <h3 className="pt-7 pb-1.5 max-md:text-xs">
            <i>scroll to get to know me better</i>
          </h3>
          <Link
            to="/projects"
            className="text-[var(--color-negev)] hover:text-[var(--color-freshLime)]"
          >
            or see my projects
          </Link>
          <br />
          <br />
          <div className="flex justify-start">
            <SoMe />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Intro;
