const VideoFrame = () => {
  return (
    <section className="flex flex-col items-center my-[7dvh]">
      <h2 className="text-2xl mb-5 text-[var(--color-thina)]">
        Little bit more about my Danish journey
      </h2>
      <iframe
        width="750"
        height="420"
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
