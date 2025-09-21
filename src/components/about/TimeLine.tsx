import { useEffect, useRef } from "react";
import { addAnimation } from "../../utils/helpers";

const TimeLine = () => {
  const timelineRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation(timelineRef.current, "animate-fadeIn", 500);
  }, []);

  return (
    <section className="w-screen items-center flex flex-col justify-center my-[7dvh] max-md:pl-5">
      <ul
        ref={timelineRef}
        className="timeline timeline-snap-icon max-md:timeline-vertical timeline-horizontal opacity-0 scale-100"
      >
        <li>
          <div className="timeline-start">
            High-school graduation 🎓
            <br />
            <span className="text-secondary">| 2016 |</span>
          </div>
          <hr className="bg-secondary" />
        </li>
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-end">
            <span className="text-secondary">| 2016 |</span>
            <br />
            Moved to Denmark 🇩🇰
          </div>
          <hr className="bg-secondary" />
        </li>
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-start">
            PBA: Innovation and Entrepreneurship 💼
            <br />
            <span className="text-secondary">| 2020 |</span>
          </div>
          <hr className="bg-secondary" />
        </li>
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-end">
            <span className="text-secondary">| 2022 |</span>
            <br />
            Educated Web developer👩‍💻
          </div>
          <hr className="bg-secondary" />
        </li>
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-start">
            Student Frontend-Dev at DFDS
            <br />
            <span className="text-secondary">| 2023 |</span>
          </div>
          <hr className="bg-secondary" />
        </li>
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-end">
            <span className="text-secondary">| 2024 |</span>
            <br />
            Cand. IT. 👩‍🎓
          </div>
          <hr className="bg-secondary" />
        </li>
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-start">
            Software Engineer at TV2
            <br />
            <span className="text-secondary">| 2024 |</span>
          </div>
          <hr className="bg-secondary" />
        </li>
      </ul>

      <p className="mt-[5dvh] font-bold text-sm">
        Curious? see my{" "}
        <a
          href="https://www.linkedin.com/in/paulineholm/"
          className="text-[#0072b1] hover:text-[var(--color-freshLime)]"
        >
          LinkedIn
        </a>{" "}
        for more details
      </p>
    </section>
  );
};

export default TimeLine;
