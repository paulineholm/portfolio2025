const VideoFrame = () => {
  return (
    <section className="flex flex-col items-center my-[5dvh] max-md:my-[2.5dvh]">
      <h2 className="text-sm mb-5 text-[var(--color-thina)] lg:text-2xl">
        little bit about my Danish journey
      </h2>
      <iframe
        className="w-[320px] h-[180px] md:w-[750px] md:h-[420px]"
        src="https://www.youtube.com/embed/sflpTgju3S4?si=zkWGDxkUOypW7qF-"
        title="Pauline Holm expat interview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </section>
  );
};

export default VideoFrame;
