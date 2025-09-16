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
        className="absolute top-[25dvh] ml-17.5 mb-15 text-[var(--color-freshLime)] text-[2.5dvw] drop-shadow font-serif opacity-0"
      >
        software engineer
      </p>

      <div
        ref={fullName}
        className="w-full flex justify-left ml-10 left-0 -mt-15 opacity-0"
      >
        <h1 className="uppercase text-[17dvw] tracking-wide drop-shadow">
          Pauline Holm
        </h1>
      </div>

      <div className="absolute left-[57%] top-[100dvh] -translate-x-1/2 -translate-y-[70%] z-20 pointer-events-none">
        <img
          ref={img}
          src={HeroImg}
          alt="Pauline Holm"
          className="w-[38dvw] h-auto opacity-0 transition-opacity duration-1500"
        />
      </div>

      <div
        ref={fullDesc}
        className="absolute top-[35dvw] right-15 text-[1.5dvw] text-right"
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
          className="mt-25 font-serif text-[1.5dvw] text-[var(--color-thina)] hover:text-black transition-colors"
        >
          &lt;resume /&gt;
        </a>
      </div>
    </section>
  );
};
