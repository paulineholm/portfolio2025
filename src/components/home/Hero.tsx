import { useEffect, useRef } from "react";
import { addAnimation } from "../../utils/helpers";
import HeroImg from "../../assets/img/pholmtransp.png";

export const Hero = () => {
  const topBar = useRef<HTMLDivElement>(null);
  const subTitle = useRef<HTMLDivElement>(null);
  const fullName = useRef<HTMLDivElement>(null);
  const fullDesc = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Sequence the animations
    addAnimation(topBar.current, "animate-slideInRight", 0);
    addAnimation(fullName.current, "animate-dropIn", 1750);
    addAnimation(img.current, "animate-fadeIn", 2500);
    addAnimation(subTitle.current, "animate-fadeIn", 2750);
    addAnimation(fullDesc.current, "animate-fadeIn", 3250);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <div
        ref={topBar}
        className="absolute top-0 left-0 w-full h-[45dvh] bg-[var(--color-thina)] m-[2.5dvh] opacity-0"
      />
      <p
        ref={subTitle}
        className="absolute max-md:top-[15dvw] ml-10 text-[var(--color-freshLime)] text-[1.75dvh] drop-shadow font-serif opacity-0 lg:ml-17.5 lg:mb-15 lg:top-[12.5dvw] lg:text-[3.5dvh]"
      >
        software engineer
      </p>

      <div
        ref={fullName}
        className="w-full flex justify-left ml-10 left-0 -mt-15 opacity-0 max-md:top[]"
      >
        <h1 className="uppercase text-[17dvw] tracking-wide drop-shadow">
          Pauline Holm
        </h1>
      </div>

      <div className="absolute right-[-40%] top-[50%] -translate-y-1/2 z-20 pointer-events-none lg:right-auto lg:left-[38%] lg:top-[100dvh] lg:-translate-y-[70%]">
        <img
          ref={img}
          src={HeroImg}
          alt="Pauline Holm"
          className="w-[100dvw] h-auto opacity-0 transition-opacity duration-1500 lg:w-[38dvw]"
        />
      </div>

      <div
        ref={fullDesc}
        className="absolute bottom-[40dvw] sm:bottom-[15dvw] md:bottom-[10dvw] left-0 right-0 pl-10 pr-30 text-[3dvw] opacity-0 text-left lg:text-right lg:text-[1.5dvw] lg:px-0 lg:right-15 lg:left-auto lg:bottom-[7.5dvw]"
      >
        <p>
          Frontend-focused energetic tech professional
          <br />
          with a passion for learning and growth.
          <br />
          Dedicated to delivering seamless, efficient,
          <br />
          and user-friendly digital experiences
        </p>
        <a
          href="https://drive.google.com/file/d/1ZPTT8bUznylqtvIqSltd1-q346UOtbxD/view?usp=share_link"
          className="mt-25 font-serif text-[4dvw] text-[var(--color-thina)] hover:text-black transition-colors lg:text-[1.5dvw]"
        >
          &lt;resume /&gt;
        </a>
      </div>
    </section>
  );
};
