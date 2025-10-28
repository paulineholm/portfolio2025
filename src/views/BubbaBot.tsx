import { useEffect, useRef } from "react";
import { addAnimation } from "../utils/helpers";
import BubbaChat from "../components/bubbabot/BubbaChat";

const BubbaBot = () => {
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
      <main className="w-screen py-16">
        <div className="text-center mb-8">
          <h1 className="text-center pt-[5dvh]">BubbaBot 🤖</h1>
          <h2 className="max-md:px-1 max-md:pt-1.5 max-md:text-sm">
            Bubba is RAG-lite chatbot responding out of provided personal
            context
          </h2>
        </div>

        <section className="w-[80%] max-w-[1200px] mx-auto my-[5dvh]">
          <BubbaChat />
        </section>
      </main>
    </div>
  );
};

export default BubbaBot;
